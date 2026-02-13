/**
 * Fußballerphrasen-Generator
 * Logik für die zufällige Auswahl und Anzeige von Phrasen.
 */

// Array mit über 140 Fußballer-Phrasen (generisch)
const phrases = [
    "Am Ende des Tages zählt nur das Ergebnis.",
    "Der Ball ist rund und das Spiel dauert 90 Minuten.",
    "Das nächste Spiel ist immer das schwerste.",
    "Wir müssen von Spiel zu Spiel schauen.",
    "Nach dem Spiel ist vor dem Spiel.",
    "Wir haben heute die PS nicht auf die Straße bekommen.",
    "Die Null muss stehen.",
    "Wir müssen auch mal die dreckigen Punkte holen.",
    "Der Gegner hat uns das Leben schwer gemacht.",
    "Wir müssen als Kollektiv auftreten.",
    "Wir gewinnen zusammen und wir verlieren zusammen.",
    "Der Trainer hat uns gut eingestellt.",
    "Wir müssen die Chancen einfach machen.",
    "Im Fußball ist alles möglich.",
    "Der Pokal hat seine eigenen Gesetze.",
    "Wir schauen nur auf uns.",
    "Wir nehmen, was kommt.",
    "Jedes Spiel fängt bei 0:0 an.",
    "Wir müssen Gras fressen.",
    "Das ist Jammern auf hohem Niveau.",
    "Die Tabelle lügt nicht.",
    "Ein Spiel dauert 90 Minuten, manchmal auch länger.",
    "Entscheidend ist auf’m Platz.",
    "Wir müssen den Bock umstoßen.",
    "Das Runde muss ins Eckige.",
    "Wir haben Moral bewiesen.",
    "Fußball ist ein Ergebnissport.",
    "Wir haben uns selbst geschlagen.",
    "Wir müssen die Köpfe jetzt wieder hochbekommen.",
    "Mund abputzen, weitermachen.",
    "Das war ein Spiel auf Augenhöhe.",
    "Wir müssen geduldig bleiben.",
    "Breite Brust zeigen.",
    "Wir müssen die Zweikämpfe annehmen.",
    "Das war heute Arbeitsverweigerung.",
    "Kleine Fehler werden auf diesem Niveau sofort bestraft.",
    "Wir haben zu einfache Gegentore bekommen.",
    "Vorne fehlt die Durchschlagskraft.",
    "Hinten sicher stehen, schnell umschalten.",
    "Wir müssen die Räume eng machen.",
    "Wir haben den Kampf nicht angenommen.",
    "Wir müssen wieder in die Spur finden.",
    "Wir lassen uns nicht verrückt machen.",
    "Wir haben gut gegen den Ball gearbeitet.",
    "Ballbesitz schießt keine Tore.",
    "Statistik ist wie ein Bikini: Sie zeigt vieles, aber nicht alles.",
    "Wir müssen die Kirche im Dorf lassen.",
    "Das war ein Sechs-Punkte-Spiel.",
    "Wir müssen das Glück erzwingen.",
    "Erstes Ziel: 40 Punkte.",
    "Abgerechnet wird am Schluss.",
    "Wer die Tore vorne nicht macht, kriegt sie hinten rein.",
    "Das ist bitter für die Jungs.",
    "Wir haben heute Lehrgeld bezahlt.",
    "Wir müssen die individuellen Fehler abstellen.",
    "Wir haben uns den Schneid abkaufen lassen.",
    "Das war ein gebrauchter Tag.",
    "Standards entscheiden Spiele.",
    "Wir müssen über den Kampf ins Spiel finden.",
    "Wir haben die erste Halbzeit komplett verschlafen.",
    "In der Kabine ist es jetzt laut geworden.",
    "Der letzte Pass hat gefehlt.",
    "Wir müssen effizienter werden.",
    "Wir haben uns das Leben selbst schwer gemacht.",
    "Dafür trainieren wir die ganze Woche.",
    "Das war Antwort auf dem Platz.",
    "Wir müssen die Euphorie bremsen.",
    "Die Saison ist ein Marathon, kein Sprint.",
    "Wir haben Charakter gezeigt.",
    "Das Quäntchen Glück hat gefehlt.",
    "Der Schiedsrichter hat sicher nicht seinen besten Tag gehabt.",
    "Wir suchen keine Ausreden.",
    "Wir müssen demütig bleiben.",
    "Das war ein Arbeitssieg.",
    "Wir haben alles reingeworfen.",
    "Die Fans waren heute der 12. Mann.",
    "Respekt an den Gegner.",
    "Wir haben den Faden verloren.",
    "Wir müssen jetzt die Ärmel hochkrempeln.",
    "Es gibt keine Kleinen mehr.",
    "Jeder muss sich in den Dienst der Mannschaft stellen.",
    "Das Trikot muss schwitzen.",
    "Wir haben uns für den Aufwand nicht belohnt.",
    "Das war heute einfach zu wenig.",
    "Wir müssen die einfachen Dinge richtig machen.",
    "Wir haben die Ordnung verloren.",
    "Das war Slapstick in der Abwehr.",
    "Ein Unentschieden wäre gerecht gewesen.",
    "So ist Fußball.",
    "Wir müssen die Konter besser ausspielen.",
    "Wir haben den Zugriff nicht bekommen.",
    "Wir waren immer einen Schritt zu spät.",
    "Wir haben uns neutralisiert.",
    "Das war ein glücklicher Punkt.",
    "Wir müssen jetzt eine Serie starten.",
    "Wir haben die richtige Reaktion gezeigt.",
    "Wir müssen hungrig bleiben.",
    "Wir dürfen uns nicht ausruhen.",
    "Gegen so einen Gegner darfst du dir keine Fehler erlauben.",
    "Wir müssen disziplinierter spielen.",
    "Wir waren nicht wach genug.",
    "Das war heute Werbung für den Fußball.",
    "Wir haben das Heft aus der Hand gegeben.",
    "Wir müssen kaltschnäuziger werden.",
    "Die Beine waren schwer.",
    "Wir haben den Kampf angenommen.",
    "Das sind Big Points.",
    "Wir müssen die Ruhe bewahren.",
    "Wir haben uns einschüchtern lassen.",
    "Wir müssen die Basics abrufen.",
    "Das war ein Schritt in die richtige Richtung.",
    "Wir müssen die Automatismen verinnerlichen.",
    "Wir haben uns heute selbst im Weg gestanden.",
    "Wir müssen als Einheit auftreten.",
    "Das war ein kampfbetontes Spiel.",
    "Wir haben die Räume nicht zugelaufen.",,
    "Das war heute Magerkost.",
    "Wir müssen wieder geil aufs Gewinnen sein.",
    "Wir haben den Start verpennt.",
    "Wir müssen die Kugel laufen lassen.",
    "Wir haben uns zu sicher gefühlt.",
    "Das war ein Weckruf.",
    "Wir müssen die Fehler analysieren und abstellen.",
    "Wir haben uns gegenseitig gepusht.",
    "Der Wille versetzt Berge.",
    "Wir haben nicht unser wahres Gesicht gezeigt.",
    "Wir müssen mehr investieren.",
    "Das war ein taktisch geprägtes Spiel.",
    "Wir haben die Lücken nicht gefunden.",
    "Wir müssen jetzt zusammenstehen.",
    "Wir haben uns den Punkt erkämpft.",
    "Das war ein Sieg des Willens.",
    "Wir müssen die Leistung konservieren.",
    "Wir haben uns belohnt.",
    "Wir müssen die Gier zeigen.",
    "Das war heute zu statisch.",
    "Wir haben keine Lösungen gefunden.",
    "Wir müssen den Gegner unter Druck setzen.",
    "Wir haben uns in die Partie reingebissen.",
    "Wir müssen die Flanken verhindern.",
    "Wir haben im Zentrum die Ordnung verloren.",
    "Wir müssen über die Außen kommen.",
    "Das war ein offener Schlagabtausch.",
    "Wir haben das Tempo verschleppt.",
    "Wir müssen zielstrebiger agieren.",
    "Wir haben dem Gegner den Ball überlassen.",
    "Der Platz war schwer bespielbar.",
    "Das war ein Spiel auf ein Tor.",
    "Wir haben die Zweikämpfe verweigert.",
    "Wir müssen die Köpfe frei bekommen.",
    "Wir haben uns zu sehr hinten reindrängen lassen.",
    "Das war heute ein gebrauchter Abend.",
    "Wir haben die Bälle zu leicht hergeschenkt.",
    "Wir müssen die richtige Balance finden.",
    "Der Ausgleich lag in der Luft.",
    "Wir haben uns das 1:0 selbst eingeschenkt.",
    "Wir haben heute nicht stattgefunden.",
    "Wir müssen jetzt eine Reaktion zeigen.",
    "Das war ein Sieg der Moral.",
    "Wir haben uns gut aus der Affäre gezogen.",
    "Wir müssen die Situation annehmen.",
    "Wir müssen den Schalter umlegen.",
    "Wir haben vorne die Dinger nicht gemacht.",
    "Das war ein typisches 0:0-Spiel.",
    "Wir haben den Sieg verschenkt.",
    "Wir müssen die Konzentration hochhalten.",
    "Wir haben uns von der Hektik anstecken lassen.",
    "Das war ein Spiegelbild der Saison.",
    "Wir müssen die Fehler minimieren.",

    "Wir müssen die Tugenden auf den Platz bringen.",
    "Das war ein richtiger Abnutzungskampf.",
    "Wir haben den Gegner stark geredet.",
    "Wir müssen die Chancen eiskalt nutzen.",

    "Wir müssen die Ärmel hochkrempeln.",
    "Wir müssen eng am Mann stehen.",
    "Wir haben zu viele Räume angeboten.",
    "Wir müssen die Bälle festmachen.",
    "Wir haben das Spiel aus der Hand gegeben.",
    "Wir müssen die Breite des Platzes nutzen.",
    "Wir haben uns zu sehr auf den Schiri konzentriert.",

    "Wir haben uns heute gut verkauft.",
    "Wir müssen jetzt die Wunden lecken.",
    "Wir haben heute alles vermissen lassen.",
    "Wir müssen die Gier entwickeln.",
    "Wir haben uns den Punkt redlich verdient.",
    "Wir müssen die Defensive stabilisieren.",
    "Wir haben den Gegner eingeladen.",
    "Wir müssen die Pässe in die Tiefe spielen.",
    "Wir haben heute nicht unser Spiel durchgezogen.",
    "Wir müssen die Emotionen kontrollieren.",
    "Wir haben uns zu sehr in Einzelaktionen verstrickt.",
    "Wir müssen die Kompaktheit wahren.",

    "Wir müssen den Ball laufen lassen.",
    "Wir haben heute nicht das abgerufen, was wir können.",
    "Wir müssen die Chancen besser herausspielen.",
    "Wir haben uns zu leicht auskontern lassen.",
    "Wir müssen die Zweikampfhärte an den Tag legen.",
    "Wir haben heute einen Sahnetag erwischt.",
    "Wir müssen die einfachen Fehler abstellen.",
    "Wir haben uns heute selbst geschlagen.",
    "Wir müssen die Lücken schließen.",
    "Wir haben den Gegner unterschätzt.",
    "Wir müssen die Körpersprache verbessern.",
    "Wir haben heute Charakter gezeigt.",
    "Wir müssen die Mentalität auf den Platz bringen.",
    "Mailand oder Madrid - Hauptsache Italien!",
    "Vom Feeling her habe ich ein gutes Gefühl.",
    "Zuerst hatten wir kein Glück, und dann kam auch noch Pech dazu.",
    "Haste Scheiße am Fuß, haste Scheiße am Fuß!",
    "Wäre, wäre, Fahrradkette.",
    "Wir dürfen jetzt nicht den Sand in den Kopf stecken.",
    "Das Chancenplus war ausgeglichen.",
    "Ein Drittel? Nee, ich will mindestens ein Viertel.",
    "Ich habe fertig!",
    "Was erlauben Strunz?",
    "Schwach wie eine Flasche leer!",
    "Die Breite an der Spitze ist dichter geworden.",
    "Ich glaube, dass der Tabellenerste jederzeit den Spitzenreiter schlagen kann.",
    "Das wird alles von den Medien hochsterilisiert.",
    "Da krieg’ ich so den Kamm!",
    "Mal verliert man und mal gewinnen die anderen.",
    "Ich hoffe, wir haben nicht umsonst verloren.",
    "Die Sanitäter haben mir sofort eine Invasion gelegt.",
    "Wir spielen am besten, wenn der Gegner nicht da ist.",
    "Abseits ist, wenn der Schiedsrichter pfeift.",
    "Die Schweden sind keine Holländer, das hat man ganz genau gesehen.",
    "Fußball ist wie Schach, nur ohne Würfel.",
    "So ist Fußball. Manchmal gewinnt der Bessere.",
    "Jeder kann sagen, was ich will.",
    "Das ist Schnee von morgen.",
    "Ihr fünf spielt jetzt vier gegen drei.",
    "Wir wollten in Bremen kein Gegentor kassieren. Das hat auch bis zum Gegentor ganz gut geklappt.",
    "Ich bin körperlich und physisch topfit.",
    "In der ersten Halbzeit haben wir ganz gut gespielt, in der zweiten fehlte uns die Kontinuität.",
    "Ich grüße meine Mama, meinen Papa und ganz besonders meine Eltern.",
    "Das habe ich ihm dann auch verbal gesagt.",
    "Ich habe viel von meinem Geld für Alkohol, Weiber und schnelle Autos ausgegeben. Den Rest habe ich einfach verprasst.",
    "Wenn wir hier nicht gewinnen, dann treten wir ihnen wenigstens den Rasen kaputt.",
    "Gewinnen ist nicht wichtig, es ist das Einzige, was zählt.",
    "Die Situation ist aussichtslos, aber nicht kritisch.",
    "Ich habe ihn nur ganz leicht retuschiert.",
    "Wir müssen jetzt die Köpfe hochkrempeln. Und die Ärmel auch.",
    "Zwei Chancen, ein Tor – das nenne ich hundertprozentige Chancenauswertung.",
    "Ich glaube nicht, dass wir das Spiel verloren hätten, wenn es 1:1 ausgegangen wäre."
];

// DOM Elemente
const phraseText = document.getElementById('phrase-text');
const newPhraseBtn = document.getElementById('new-phrase-btn');
const copyBtn = document.getElementById('copy-btn');
const toast = document.getElementById('toast');

// State
let lastPhraseIndex = -1;

/**
 * Holt eine zufällige Phrase, die nicht der letzten entspricht.
 */
function getRandomPhrase() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * phrases.length);
    } while (newIndex === lastPhraseIndex && phrases.length > 1);

    lastPhraseIndex = newIndex;
    return phrases[newIndex];
}

/**
 * Zeigt eine neue Phrase mit Animation an.
 */
function showNewPhrase() {
    // Fade Out
    phraseText.classList.add('fade-out');

    // Nach kurzer Wartezeit Phrase ändern und Fade In
    setTimeout(() => {
        phraseText.textContent = getRandomPhrase();
        phraseText.classList.remove('fade-out');
    }, 200); // 200ms entspricht CSS transition time
}

/**
 * Kopiert die aktuelle Phrase in die Zwischenablage.
 */
async function copyToClipboard() {
    const textToCopy = phraseText.textContent;

    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(textToCopy);
            showToast("Kopiert!");
        } else {
            // Fallback für ältere Browser
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
        showToast("Kopieren nicht möglich");
    }
}

/**
 * Zeigt eine kurze Toast-Nachricht an.
 */
function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');

    // Reset timer wenn Toast schon sichtbar wäre? Einfach Timeout setzen
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 1500);
}

// Event Listeners
newPhraseBtn.addEventListener('click', showNewPhrase);
copyBtn.addEventListener('click', copyToClipboard);

// Initiale Phrase beim Laden
document.addEventListener('DOMContentLoaded', () => {
    phraseText.textContent = getRandomPhrase();
});
