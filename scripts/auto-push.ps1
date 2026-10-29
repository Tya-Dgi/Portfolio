# Save website edits, wait for ten quiet seconds, then commit and push them.
# Stop with Ctrl+C in the VS Code task terminal. Errors stop the watcher.
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)
$env:GIT_TERMINAL_PROMPT = '0'

function Invoke-Git {
    param([string[]]$GitArguments)
    $result = & git @GitArguments
    if ($LASTEXITCODE -ne 0) { throw "Git failed: git $($GitArguments -join ' ')" }
    return $result
}

if ((Invoke-Git @('branch', '--show-current')) -ne 'main') {
    throw 'Auto-push only runs on main.'
}
if ((Invoke-Git @('remote', 'get-url', 'origin')) -ne 'https://github.com/Tya-Dgi/Portfolio.git') {
    throw 'Unexpected origin. Review it before publishing.'
}

# Only public website assets and these documents qualify, never arbitrary files.
$patterns = @('*.html', 'css/*.css', 'js/*.js', 'images/*.png', 'images/*.jpg',
    'images/*.jpeg', 'images/*.webp', 'images/*.svg', 'README.md', 'TESTING.md', 'AGENTS.md')
$lastSnapshot = ''
$changedAt = Get-Date
Write-Host 'Auto-push is watching website saves. Press Ctrl+C to stop.'
while ($true) {
    $paths = @(Invoke-Git (@('ls-files', '--cached', '--others', '--exclude-standard', '--') + $patterns) | Sort-Object -Unique)
    $snapshot = ($paths | ForEach-Object {
        if (Test-Path -LiteralPath $_ -PathType Leaf) {
            "$_ $((Get-FileHash -LiteralPath $_ -Algorithm SHA256).Hash)"
        } else { "$_ deleted" }
    }) -join "`n"
    if ($snapshot -ne $lastSnapshot) {
        $lastSnapshot = $snapshot
        $changedAt = Get-Date
    }
    if (((Get-Date) - $changedAt).TotalSeconds -ge 10) {
        $changes = Invoke-Git (@('status', '--porcelain', '--') + $patterns)
        if ($changes) {
            # Recheck the branch so switching branches cannot publish accidentally.
            if ((Invoke-Git @('branch', '--show-current')) -ne 'main') { throw 'Branch changed; stopping.' }
            Invoke-Git (@('add', '-A', '--') + $paths)
            Invoke-Git (@('commit', '--only', '-m', 'Update saved portfolio files', '--') + $paths)
            Invoke-Git @('push', 'origin', 'main')
            Write-Host "Published saved edits at $(Get-Date -Format 'HH:mm:ss')."
        }
    }
    Start-Sleep -Seconds 2
}
