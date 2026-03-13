const fs = require('fs');

const appJsContent = fs.readFileSync('app.js', 'utf8');

// The earlier script failed to completely apply state logic and contexts due to regex mismatch.
// We will replace everything from // State down to the end of file.

const stateRegex = /\/\/ State[\s\S]*/m;

const newLogic = `// State & Modes
const appState = {
    currentMode: 'all',
    matchMinute: 0,
    activeOverlay: null,
    lastPhraseIndex: -1
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

const overlays = [
    "VAR CHECK",
    "GELBE KARTE",
    "AUSWECHSLUNG",
    "ABSEITS",
    "FREISTOSS",
    "NACHSPIELZEIT"
];

// DOM Elemente
const phraseText = document.getElementById('phrase-text');
const newPhraseBtn = document.getElementById('new-phrase-btn');
const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');
const timeDisplay = document.querySelector('.time-display');
const matchEventOverlay = document.getElementById('match-event');
const actionsDiv = document.querySelector('.actions');

/**
 * Filter Management
 */
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
        default: return phrases; // 'all', '90plus3', 'pressekonferenz' use all phrases but context styling is applied
    }
}

/**
 * Helper Functions for UI Rendering
 */
function renderBadges(phrase) {
    return \`
        <div class="metadata-badges">
            \${phrase.category ? \`<span class="badge category">\${phrase.category}</span>\` : ''}
            \${phrase.tone ? \`<span class="badge tone">\${phrase.tone}</span>\` : ''}
            \${phrase.era ? \`<span class="badge era">\${phrase.era}</span>\` : ''}
            \${phrase.attributionStatus === 'unbekannt' ? \`<span class="badge status status-unknown" title="Oft zugeschrieben, aber schwer belegbar">Unbekannt / Folklore</span>\` : ''}
        </div>
    \`;
}

/**
 * Holt eine zufällige Phrase basierend auf dem aktuellen Filter.
 */
function getRandomPhrase() {
    const currentList = getFilteredPhrases();
    if (currentList.length === 0) return phrases[0]; // Fallback
    
    let newIndex;
    let fallbackCounter = 0;
    do {
        newIndex = Math.floor(Math.random() * currentList.length);
        fallbackCounter++;
    } while (currentList[newIndex].id === (phrases[appState.lastPhraseIndex]?.id) && currentList.length > 1 && fallbackCounter < 10);

    // Find the original index to update lastPhraseIndex
    appState.lastPhraseIndex = phrases.findIndex(p => p.id === currentList[newIndex].id);
    return currentList[newIndex];
}

/**
 * Update Match Context (Clock, Overlays)
 */
function updateMatchContext() {
    // 1. Update Clock
    appState.matchMinute = appState.currentMode === '90plus3' ? 93 : Math.floor(Math.random() * 90) + 1;
    if(timeDisplay) {
        timeDisplay.innerHTML = appState.currentMode === '90plus3' 
            ? '90:00 <span class="blink" style="color:var(--accent-yellow)">+3</span>'
            : \`\${appState.matchMinute.toString().padStart(2, '0')}:\${Math.floor(Math.random() * 60).toString().padStart(2, '0')}\`;
        
        // Pulse animation for time
        timeDisplay.style.animation = 'none';
        timeDisplay.offsetHeight; /* trigger reflow */
        timeDisplay.style.animation = null; 
    }

    // 2. Random Event Overlays (15% chance, but not in 90+3 mode as it detracts from the drama)
    if (matchEventOverlay && appState.currentMode !== '90plus3' && Math.random() < 0.15) {
        const eventText = overlays[Math.floor(Math.random() * overlays.length)];
        matchEventOverlay.textContent = eventText;
        matchEventOverlay.classList.remove('hidden');
        timeDisplay.classList.add('hidden'); // Hide clock to show overlay
        
        // Hide overlay after 3 seconds
        setTimeout(() => {
            matchEventOverlay.classList.add('hidden');
            timeDisplay.classList.remove('hidden');
        }, 3000);
    } else if (matchEventOverlay) {
        matchEventOverlay.classList.add('hidden');
        timeDisplay.classList.remove('hidden');
    }
}

/**
 * Zeigt eine neue Phrase mit Animation und Kontext-Update an.
 */
function showNewPhrase() {
    // Fade Out Current Phrase
    phraseText.classList.add('fade-out');

    // Nach kurzer Wartezeit Phrase ändern und Fade In
    setTimeout(() => {
        const phrase = getRandomPhrase();
        const context = contexts[appState.currentMode] || contexts['all'];
        
        updateMatchContext();

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
        
        // Pulse Button to indicate action complete
        newPhraseBtn.style.transform = 'scale(1.05)';
        setTimeout(() => newPhraseBtn.style.transform = 'scale(1)', 150);

    }, 300); // 300ms transition time
}

/**
 * Kopiert die aktuelle Phrase in die Zwischenablage.
 */
async function copyToClipboard() {
    const phrase = phrases[appState.lastPhraseIndex];
    if (!phrase) return;
    
    // Clean text for copying
    const textToCopy = \`"\${phrase.text}" - \${phrase.author}\`;

    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(textToCopy);
            showToast("Kopiert!");
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            showToast("Kopiert!");
        }
    } catch (err) {
        console.error('Fehler beim Kopieren: ', err);
        showToast("Kopieren fehlgeschlagen");
    }
}

/**
 * Zeigt eine kurze Toast-Nachricht an.
 */
function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 2000);
}

/**
 * Init UI
 */
function createFilterUI() {
    if (!actionsDiv) return;
    
    const filterNav = document.createElement('nav');
    filterNav.className = 'filter-nav';
    filterNav.setAttribute('aria-label', 'Themen-Auswahl');
    
    modes.forEach(mode => {
        const btn = document.createElement('button');
        btn.className = 'filter-chip';
        if (mode.id === appState.currentMode) btn.classList.add('active');
        btn.dataset.mode = mode.id;
        btn.textContent = mode.label;
        btn.addEventListener('click', () => setMode(mode.id));
        filterNav.appendChild(btn);
    });
    
    // Insert filter before cards
    const mainContainerDiv = document.querySelector('.broadcast-panel');
    if (mainContainerDiv) {
        mainContainerDiv.insertBefore(filterNav, mainContainerDiv.firstChild);
    }
}

// Event Listeners
newPhraseBtn.addEventListener('click', showNewPhrase);
copyBtn.addEventListener('click', copyToClipboard);

// Init
document.addEventListener('DOMContentLoaded', () => {
    createFilterUI();
    setMode('all'); // Initialize first view
});
`;

updatedAppJs = appJsContent.replace(stateRegex, newLogic);
fs.writeFileSync('app.js', updatedAppJs);
console.log("Applied full state, logic, and animation logic to app.js");
