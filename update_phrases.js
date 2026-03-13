const fs = require('fs');

const appJsContent = fs.readFileSync('app.js', 'utf8');

const phrasesRegex = /const phrases = \[\s*([\s\S]*?)\s*\];/m;
const match = appJsContent.match(phrasesRegex);

if (!match) {
    console.error("Could not find phrases array in app.js");
    process.exit(1);
}

const phrasesText = match[1];

// This is a naive parsing of the JS object literals
const phraseMatches = [...phrasesText.matchAll(/\{\s*text:\s*"([^"]+)",\s*author:\s*"([^"]+)"\s*\}/g)];

const categories = ["Klassiker", "Trainerphrase", "Reporterfloskel", "Kabinenansage", "Durchhalteparole", "Abstiegskampf", "Medienphrase", "Expertenrunde", "Kreisligalogik"];
const tones = ["ernst", "legendär", "maximal abgedroschen", "unfreiwillig komisch", "motivierend", "pathetisch", "trotzig", "wolkig"];
const eras = ["1950er", "1970er", "1980er", "1990er", "2000er", "2010er", "aktuell", "zeitlos"];

const newPhrases = phraseMatches.map((m, index) => {
    const text = m[1];
    const author = m[2];

    let category = "Klassiker";
    let tone = "maximal abgedroschen";
    let era = "zeitlos";
    let attributionStatus = "belegt";

    if (author === "Unbekannt" || author === "Fußballer-Weisheit") {
        attributionStatus = "unbekannt";
    }

    if (text.includes("Sand in den Kopf")) {
        category = "Trainerphrase";
        tone = "unfreiwillig komisch";
        era = "1990er";
    } else if (text.includes("Fahrradkette")) {
         category = "Expertenrunde";
         tone = "unfreiwillig komisch";
         era = "2010er";
    } else if (text.includes("Mailand oder Madrid")) {
         category = "Klassiker";
         tone = "legendär";
         era = "1990er";
    } else if (text.includes("Flasche leer") || text.includes("Strunz") || text.includes("Ich habe fertig")) {
         category = "Trainerphrase";
         tone = "legendär";
         era = "1990er";
    } else if (author === "Sepp Herberger") {
        category = "Klassiker";
        era = "1950er";
        tone = "legendär";
    } else if (text.includes("PS auf die Straße")) {
        category = "Trainerphrase";
        tone = "wolkig";
    } else if (text.includes("Null muss stehen")) {
        category = "Trainerphrase";
        tone = "ernst";
        era = "1990er";
    } else if (text.includes("Ballbesitz") || text.includes("Umschalten")) {
         category = "Trainerphrase";
         era = "2010er";
         tone = "analytisch klingend, aber völlig leer";
    } else if (text.match(/Bock|Spur|Arbeitsverweigerung|Abstieg/i)) {
         category = "Abstiegskampf";
         tone = "trotzig";
    } else if (text.match(/Schiedsrichter|Pech|Ausreden/i)) {
         category = "Medienphrase";
         tone = "wolkig";
    }
    
    return `{
        id: "phrase_${index + 1}",
        text: "${text}",
        author: "${author}",
        attributionStatus: "${attributionStatus}",
        category: "${category}",
        tone: "${tone}",
        era: "${era}"
    }`;
});

let updatedAppJs = appJsContent.replace(phrasesRegex, `const phrases = [\n    ${newPhrases.join(',\n    ')}\n];`);

// Add State Management and Modes
const stateLogic = `
// --- State & Modes ---
const appState = {
    currentMode: 'all', // 'all', 'trainer', 'abstiegskampf', '90plus3', 'pressekonferenz'
    matchMinute: 0,
    activeOverlay: null
};

const contexts = {
    'all': { uiClass: '', prefix: '' },
    'trainer': { uiClass: 'mode-trainer', prefix: '🎤 AUS DER KABINE:' },
    'reporter': { uiClass: 'mode-reporter', prefix: '🎙️ REPORTERSTIMME:' },
    'abstiegskampf': { uiClass: 'mode-abstieg', prefix: '🌧️ ABSTIEGSKAMPF PUR:' },
    '90plus3': { uiClass: 'mode-drama', prefix: '⏱️ 90.+3 MINUTE:' },
    'pressekonferenz': { uiClass: 'mode-pk', prefix: '📸 PRESSEKONFERENZ:' }
};

const modes = [
    { id: 'all', label: 'Alle Phrasen' },
    { id: 'trainer', label: 'Nur Trainer' },
    { id: 'reporter', label: 'Nur Reporter' },
    { id: 'abstiegskampf', label: 'Abstiegskampf' },
    { id: '90plus3', label: '90.+3' },
    { id: 'pressekonferenz', label: 'Pressekonferenz' }
];

function setMode(modeId) {
    appState.currentMode = modeId;
    document.body.className = contexts[modeId]?.uiClass || '';
    
    // Update active filter chip
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.mode === modeId);
    });
    
    showNewPhrase();
}

function getFilteredPhrases() {
    switch(appState.currentMode) {
        case 'trainer': return phrases.filter(p => p.category === 'Trainerphrase');
        case 'reporter': return phrases.filter(p => p.category === 'Reporterfloskel');
        case 'abstiegskampf': return phrases.filter(p => p.category === 'Abstiegskampf');
        default: return phrases; // 'all', '90plus3', 'pressekonferenz' use all phrases but change styling
    }
}
`;

updatedAppJs = updatedAppJs.replace('// State\nlet lastPhraseIndex = -1;', `// State\nlet lastPhraseIndex = -1;\n${stateLogic}`);


// Update logic to return HTML snippet for badge
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

// Insert badge logic before function getRandomPhrase()
updatedAppJs = updatedAppJs.replace('function getRandomPhrase()', \`${badgeLogic}\nfunction getRandomPhrase()\`);

// Update getRandomPhrase to use filtered array
updatedAppJs = updatedAppJs.replace('let newIndex;\n    do {\n        newIndex = Math.floor(Math.random() * phrases.length);\n    } while (newIndex === lastPhraseIndex && phrases.length > 1);\n\n    lastPhraseIndex = newIndex;\n    return phrases[newIndex];', 
\`const currentList = getFilteredPhrases();
    if (currentList.length === 0) return phrases[0]; // Fallback
    
    let newIndex;
    let fallbackCounter = 0;
    do {
        newIndex = Math.floor(Math.random() * currentList.length);
        fallbackCounter++;
    } while (currentList[newIndex].id === (phrases[lastPhraseIndex]?.id) && currentList.length > 1 && fallbackCounter < 10);

    // Find the original index to update lastPhraseIndex
    lastPhraseIndex = phrases.findIndex(p => p.id === currentList[newIndex].id);
    return currentList[newIndex];\`);


// Update showNewPhrase HTML injection
const newHtmlInjection = `
        const phrase = getRandomPhrase();
        const context = contexts[appState.currentMode] || contexts['all'];
        
        // Randomize match minute slightly
        appState.matchMinute = appState.currentMode === '90plus3' ? 93 : Math.floor(Math.random() * 90) + 1;
        const timeDisplay = document.querySelector('.time-display');
        if(timeDisplay) {
            timeDisplay.innerHTML = appState.currentMode === '90plus3' 
                ? '90:00 <span class="blink">+3</span>'
                : \`\${appState.matchMinute.toString().padStart(2, '0')}:\${Math.floor(Math.random() * 60).toString().padStart(2, '0')}\`;
        }

        const prefixHtml = context.prefix ? \`<div class="phrase-prefix">\${context.prefix}</div>\` : '';
        
        phraseText.innerHTML = \`
            \${prefixHtml}
            "\${phrase.text}"
            <div class="phrase-footer">
                <span class="author">\${phrase.author}</span>
                \${renderBadges(phrase)}
            </div>
        \`;
        phraseText.classList.remove('fade-out');
`;

updatedAppJs = updatedAppJs.replace(/const phrase = getRandomPhrase\(\);[\s\S]*?phraseText\.classList\.remove\('fade-out'\);/m, newHtmlInjection);

// Initialize UI
updatedAppJs = updatedAppJs.replace("document.addEventListener('DOMContentLoaded', () => {", 
\`function createFilterUI() {
    const actionsDiv = document.querySelector('.actions');
    if (!actionsDiv) return;
    
    const filterNav = document.createElement('nav');
    filterNav.className = 'filter-nav';
    
    modes.forEach(mode => {
        const btn = document.createElement('button');
        btn.className = 'filter-chip';
        if (mode.id === appState.currentMode) btn.classList.add('active');
        btn.dataset.mode = mode.id;
        btn.textContent = mode.label;
        btn.addEventListener('click', () => setMode(mode.id));
        filterNav.appendChild(btn);
    });
    
    actionsDiv.parentNode.insertBefore(filterNav, actionsDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    createFilterUI();\`);

updatedAppJs = updatedAppJs.replace(/const phrase = getRandomPhrase\(\);\n\s*phraseText\.innerHTML = `\$\{phrase\.text\}<br><span class="author">\(\$\{phrase\.author\}\)<\/span>`;/g, 
\`// Force initial display based on default mode
        setMode('all');\`);

fs.writeFileSync('app.js', updatedAppJs);
console.log("Updated app.js with new data model, logic, and state management.");
