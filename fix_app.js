const fs = require('fs');

const appJsContent = fs.readFileSync('app.js', 'utf8');

const badgeLogic = `
function renderBadges(phrase) {
    return \`
        <div class="metadata-badges">
            \${phrase.category ? \`<span class="badge category">\${phrase.category}</span>\` : ''}
            \${phrase.tone ? \`<span class="badge tone">\${phrase.tone}</span>\` : ''}
            \${phrase.era ? \`<span class="badge era">\${phrase.era}</span>\` : ''}
            \${phrase.attributionStatus === 'unbekannt' ? \`<span class="badge status status-unknown">Unbekannt / Folklore</span>\` : ''}
        </div>
    \`;
}
`;

let updatedAppJs = appJsContent.replace('function getRandomPhrase()', badgeLogic + '\nfunction getRandomPhrase()');

fs.writeFileSync('app.js', updatedAppJs);
console.log("Fixed badge logic syntax.");
