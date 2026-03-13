/**
 * Fußballerphrasen-Generator
 * Logik für die zufällige Auswahl und Anzeige von Phrasen.
 */

// Array mit über 140 Fußballer-Phrasen (generisch)
const phrases = [
    { text: "Am Ende des Tages zählt nur das Ergebnis.", author: "Unbekannt" },
    { text: "Der Ball ist rund und das Spiel dauert 90 Minuten.", author: "Sepp Herberger" },
    { text: "Das nächste Spiel ist immer das schwerste.", author: "Sepp Herberger" },
    { text: "Wir müssen von Spiel zu Spiel schauen.", author: "Unbekannt" },
    { text: "Nach dem Spiel ist vor dem Spiel.", author: "Sepp Herberger" },
    { text: "Wir haben heute die PS nicht auf die Straße bekommen.", author: "Unbekannt" },
    { text: "Die Null muss stehen.", author: "Huub Stevens" },
    { text: "Wir müssen auch mal die dreckigen Punkte holen.", author: "Unbekannt" },
    { text: "Der Gegner hat uns das Leben schwer gemacht.", author: "Unbekannt" },
    { text: "Wir müssen als Kollektiv auftreten.", author: "Unbekannt" },
    { text: "Wir gewinnen zusammen und wir verlieren zusammen.", author: "Unbekannt" },
    { text: "Der Trainer hat uns gut eingestellt.", author: "Unbekannt" },
    { text: "Wir müssen die Chancen einfach machen.", author: "Unbekannt" },
    { text: "Im Fußball ist alles möglich.", author: "Unbekannt" },
    { text: "Der Pokal hat seine eigenen Gesetze.", author: "Fußballer-Weisheit" },
    { text: "Wir schauen nur auf uns.", author: "Unbekannt" },
    { text: "Wir nehmen, was kommt.", author: "Unbekannt" },
    { text: "Jedes Spiel fängt bei 0:0 an.", author: "Unbekannt" },
    { text: "Wir müssen Gras fressen.", author: "Unbekannt" },
    { text: "Das ist Jammern auf hohem Niveau.", author: "Unbekannt" },
    { text: "Die Tabelle lügt nicht.", author: "Fußballer-Weisheit" },
    { text: "Ein Spiel dauert 90 Minuten, manchmal auch länger.", author: "Sepp Herberger" },
    { text: "Entscheidend ist auf’m Platz.", author: "Adi Preißler" },
    { text: "Wir müssen den Bock umstoßen.", author: "Unbekannt" },
    { text: "Das Runde muss ins Eckige.", author: "Sepp Herberger" },
    { text: "Wir haben Moral bewiesen.", author: "Unbekannt" },
    { text: "Fußball ist ein Ergebnissport.", author: "Unbekannt" },
    { text: "Wir haben uns selbst geschlagen.", author: "Unbekannt" },
    { text: "Wir müssen die Köpfe jetzt wieder hochbekommen.", author: "Unbekannt" },
    { text: "Mund abputzen, weitermachen.", author: "Fußballer-Weisheit" },
    { text: "Das war ein Spiel auf Augenhöhe.", author: "Unbekannt" },
    { text: "Wir müssen geduldig bleiben.", author: "Unbekannt" },
    { text: "Breite Brust zeigen.", author: "Fußballer-Weisheit" },
    { text: "Wir müssen die Zweikämpfe annehmen.", author: "Unbekannt" },
    { text: "Das war heute Arbeitsverweigerung.", author: "Unbekannt" },
    { text: "Kleine Fehler werden auf diesem Niveau sofort bestraft.", author: "Unbekannt" },
    { text: "Wir haben zu einfache Gegentore bekommen.", author: "Unbekannt" },
    { text: "Vorne fehlt die Durchschlagskraft.", author: "Unbekannt" },
    { text: "Hinten sicher stehen, schnell umschalten.", author: "Unbekannt" },
    { text: "Wir müssen die Räume eng machen.", author: "Unbekannt" },
    { text: "Wir haben den Kampf nicht angenommen.", author: "Unbekannt" },
    { text: "Wir müssen wieder in die Spur finden.", author: "Unbekannt" },
    { text: "Wir lassen uns nicht verrückt machen.", author: "Unbekannt" },
    { text: "Wir haben gut gegen den Ball gearbeitet.", author: "Unbekannt" },
    { text: "Ballbesitz schießt keine Tore.", author: "Unbekannt" },
    { text: "Statistik ist wie ein Bikini: Sie zeigt vieles, aber nicht alles.", author: "Lars Reja" },
    { text: "Wir müssen die Kirche im Dorf lassen.", author: "Unbekannt" },
    { text: "Das war ein Sechs-Punkte-Spiel.", author: "Fußballer-Weisheit" },
    { text: "Wir müssen das Glück erzwingen.", author: "Unbekannt" },
    { text: "Erstes Ziel: 40 Punkte.", author: "Unbekannt" },
    { text: "Abgerechnet wird am Schluss.", author: "Unbekannt" },
    { text: "Wer die Tore vorne nicht macht, kriegt sie hinten rein.", author: "Fußballer-Weisheit" },
    { text: "Das ist bitter für die Jungs.", author: "Unbekannt" },
    { text: "Wir haben heute Lehrgeld bezahlt.", author: "Unbekannt" },
    { text: "Wir müssen die individuellen Fehler abstellen.", author: "Unbekannt" },
    { text: "Wir haben uns den Schneid abkaufen lassen.", author: "Unbekannt" },
    { text: "Das war ein gebrauchter Tag.", author: "Unbekannt" },
    { text: "Standards entscheiden Spiele.", author: "Fußballer-Weisheit" },
    { text: "Wir müssen über den Kampf ins Spiel finden.", author: "Unbekannt" },
    { text: "Wir haben die erste Halbzeit komplett verschlafen.", author: "Unbekannt" },
    { text: "In der Kabine ist es jetzt laut geworden.", author: "Unbekannt" },
    { text: "Der letzte Pass hat gefehlt.", author: "Unbekannt" },
    { text: "Wir müssen effizienter werden.", author: "Unbekannt" },
    { text: "Wir haben uns das Leben selbst schwer gemacht.", author: "Unbekannt" },
    { text: "Dafür trainieren wir die ganze Woche.", author: "Unbekannt" },
    { text: "Das war Antwort auf dem Platz.", author: "Unbekannt" },
    { text: "Wir müssen die Euphorie bremsen.", author: "Unbekannt" },
    { text: "Die Saison ist ein Marathon, kein Sprint.", author: "Unbekannt" },
    { text: "Wir haben Charakter gezeigt.", author: "Unbekannt" },
    { text: "Das Quäntchen Glück hat gefehlt.", author: "Unbekannt" },
    { text: "Der Schiedsrichter hat sicher nicht seinen besten Tag gehabt.", author: "Unbekannt" },
    { text: "Wir suchen keine Ausreden.", author: "Unbekannt" },
    { text: "Wir müssen demütig bleiben.", author: "Unbekannt" },
    { text: "Das war ein Arbeitssieg.", author: "Unbekannt" },
    { text: "Wir haben alles reingeworfen.", author: "Unbekannt" },
    { text: "Die Fans waren heute der 12. Mann.", author: "Unbekannt" },
    { text: "Respekt an den Gegner.", author: "Unbekannt" },
    { text: "Wir haben den Faden verloren.", author: "Unbekannt" },
    { text: "Wir müssen jetzt die Ärmel hochkrempeln.", author: "Unbekannt" },
    { text: "Es gibt keine Kleinen mehr.", author: "Rudi Völler" },
    { text: "Jeder muss sich in den Dienst der Mannschaft stellen.", author: "Unbekannt" },
    { text: "Das Trikot muss schwitzen.", author: "Unbekannt" },
    { text: "Wir haben uns für den Aufwand nicht belohnt.", author: "Unbekannt" },
    { text: "Das war heute einfach zu wenig.", author: "Unbekannt" },
    { text: "Wir müssen die einfachen Dinge richtig machen.", author: "Unbekannt" },
    { text: "Wir haben die Ordnung verloren.", author: "Unbekannt" },
    { text: "Das war Slapstick in der Abwehr.", author: "Unbekannt" },
    { text: "Ein Unentschieden wäre gerecht gewesen.", author: "Unbekannt" },
    { text: "So ist Fußball.", author: "Unbekannt" },
    { text: "Wir müssen die Konter besser ausspielen.", author: "Unbekannt" },
    { text: "Wir haben den Zugriff nicht bekommen.", author: "Unbekannt" },
    { text: "Wir waren immer einen Schritt zu spät.", author: "Unbekannt" },
    { text: "Wir haben uns neutralisiert.", author: "Unbekannt" },
    { text: "Das war ein glücklicher Punkt.", author: "Unbekannt" },
    { text: "Wir müssen jetzt eine Serie starten.", author: "Unbekannt" },
    { text: "Wir haben die richtige Reaktion gezeigt.", author: "Unbekannt" },
    { text: "Wir müssen hungrig bleiben.", author: "Unbekannt" },
    { text: "Wir dürfen uns nicht ausruhen.", author: "Unbekannt" },
    { text: "Gegen so einen Gegner darfst du dir keine Fehler erlauben.", author: "Unbekannt" },
    { text: "Wir müssen disziplinierter spielen.", author: "Unbekannt" },
    { text: "Wir waren nicht wach genug.", author: "Unbekannt" },
    { text: "Das war heute Werbung für den Fußball.", author: "Unbekannt" },
    { text: "Wir haben das Heft aus der Hand gegeben.", author: "Unbekannt" },
    { text: "Wir müssen kaltschnäuziger werden.", author: "Unbekannt" },
    { text: "Die Beine waren schwer.", author: "Unbekannt" },
    { text: "Wir haben den Kampf angenommen.", author: "Unbekannt" },
    { text: "Das sind Big Points.", author: "Unbekannt" },
    { text: "Wir müssen die Ruhe bewahren.", author: "Unbekannt" },
    { text: "Wir haben uns einschüchtern lassen.", author: "Unbekannt" },
    { text: "Wir müssen die Basics abrufen.", author: "Unbekannt" },
    { text: "Das war ein Schritt in die richtige Richtung.", author: "Unbekannt" },
    { text: "Wir müssen die Automatismen verinnerlichen.", author: "Unbekannt" },
    { text: "Wir haben uns heute selbst im Weg gestanden.", author: "Unbekannt" },
    { text: "Wir müssen als Einheit auftreten.", author: "Unbekannt" },
    { text: "Das war ein kampfbetontes Spiel.", author: "Unbekannt" },
    { text: "Wir haben die Räume nicht zugelaufen.", author: "Unbekannt" },
    { text: "Das war heute Magerkost.", author: "Unbekannt" },
    { text: "Wir müssen wieder geil aufs Gewinnen sein.", author: "Unbekannt" },
    { text: "Wir haben den Start verpennt.", author: "Unbekannt" },
    { text: "Wir müssen die Kugel laufen lassen.", author: "Unbekannt" },
    { text: "Wir haben uns zu sicher gefühlt.", author: "Unbekannt" },
    { text: "Das war ein Weckruf.", author: "Unbekannt" },
    { text: "Wir müssen die Fehler analysieren und abstellen.", author: "Unbekannt" },
    { text: "Wir haben uns gegenseitig gepusht.", author: "Unbekannt" },
    { text: "Der Wille versetzt Berge.", author: "Unbekannt" },
    { text: "Wir haben nicht unser wahres Gesicht gezeigt.", author: "Unbekannt" },
    { text: "Wir müssen mehr investieren.", author: "Unbekannt" },
    { text: "Das war ein taktisch geprägtes Spiel.", author: "Unbekannt" },
    { text: "Wir haben die Lücken nicht gefunden.", author: "Unbekannt" },
    { text: "Wir müssen jetzt zusammenstehen.", author: "Unbekannt" },
    { text: "Wir haben uns den Punkt erkämpft.", author: "Unbekannt" },
    { text: "Das war ein Sieg des Willens.", author: "Unbekannt" },
    { text: "Wir müssen die Leistung konservieren.", author: "Unbekannt" },
    { text: "Wir haben uns belohnt.", author: "Unbekannt" },
    { text: "Wir müssen die Gier zeigen.", author: "Unbekannt" },
    { text: "Das war heute zu statisch.", author: "Unbekannt" },
    { text: "Wir haben keine Lösungen gefunden.", author: "Unbekannt" },
    { text: "Wir müssen den Gegner unter Druck setzen.", author: "Unbekannt" },
    { text: "Wir haben uns in die Partie reingebissen.", author: "Unbekannt" },
    { text: "Wir müssen die Flanken verhindern.", author: "Unbekannt" },
    { text: "Wir haben im Zentrum die Ordnung verloren.", author: "Unbekannt" },
    { text: "Wir müssen über die Außen kommen.", author: "Unbekannt" },
    { text: "Das war ein offener Schlagabtausch.", author: "Unbekannt" },
    { text: "Wir haben das Tempo verschleppt.", author: "Unbekannt" },
    { text: "Wir müssen zielstrebiger agieren.", author: "Unbekannt" },
    { text: "Wir haben dem Gegner den Ball überlassen.", author: "Unbekannt" },
    { text: "Der Platz war schwer bespielbar.", author: "Unbekannt" },
    { text: "Das war ein Spiel auf ein Tor.", author: "Unbekannt" },
    { text: "Wir haben die Zweikämpfe verweigert.", author: "Unbekannt" },
    { text: "Wir müssen die Köpfe frei bekommen.", author: "Unbekannt" },
    { text: "Wir haben uns zu sehr hinten reindrängen lassen.", author: "Unbekannt" },
    { text: "Das war heute ein gebrauchter Abend.", author: "Unbekannt" },
    { text: "Wir haben die Bälle zu leicht hergeschenkt.", author: "Unbekannt" },
    { text: "Wir müssen die richtige Balance finden.", author: "Unbekannt" },
    { text: "Der Ausgleich lag in der Luft.", author: "Unbekannt" },
    { text: "Wir haben uns das 1:0 selbst eingeschenkt.", author: "Unbekannt" },
    { text: "Wir haben heute nicht stattgefunden.", author: "Unbekannt" },
    { text: "Wir müssen jetzt eine Reaktion zeigen.", author: "Unbekannt" },
    { text: "Das war ein Sieg der Moral.", author: "Unbekannt" },
    { text: "Wir haben uns gut aus der Affäre gezogen.", author: "Unbekannt" },
    { text: "Wir müssen die Situation annehmen.", author: "Unbekannt" },
    { text: "Wir müssen den Schalter umlegen.", author: "Unbekannt" },
    { text: "Wir haben vorne die Dinger nicht gemacht.", author: "Unbekannt" },
    { text: "Das war ein typisches 0:0-Spiel.", author: "Unbekannt" },
    { text: "Wir haben den Sieg verschenkt.", author: "Unbekannt" },
    { text: "Wir müssen die Konzentration hochhalten.", author: "Unbekannt" },
    { text: "Wir haben uns von der Hektik anstecken lassen.", author: "Unbekannt" },
    { text: "Das war ein Spiegelbild der Saison.", author: "Unbekannt" },
    { text: "Wir müssen die Fehler minimieren.", author: "Unbekannt" },
    { text: "Wir müssen die Tugenden auf den Platz bringen.", author: "Unbekannt" },
    { text: "Das war ein richtiger Abnutzungskampf.", author: "Unbekannt" },
    { text: "Wir haben den Gegner stark geredet.", author: "Unbekannt" },
    { text: "Wir müssen die Chancen eiskalt nutzen.", author: "Unbekannt" },
    { text: "Wir müssen die Ärmel hochkrempeln.", author: "Unbekannt" },
    { text: "Wir müssen eng am Mann stehen.", author: "Unbekannt" },
    { text: "Wir haben zu viele Räume angeboten.", author: "Unbekannt" },
    { text: "Wir müssen die Bälle festmachen.", author: "Unbekannt" },
    { text: "Wir haben das Spiel aus der Hand gegeben.", author: "Unbekannt" },
    { text: "Wir müssen die Breite des Platzes nutzen.", author: "Unbekannt" },
    { text: "Wir haben uns zu sehr auf den Schiri konzentriert.", author: "Unbekannt" },
    { text: "Wir haben uns heute gut verkauft.", author: "Unbekannt" },
    { text: "Wir müssen jetzt die Wunden lecken.", author: "Unbekannt" },
    { text: "Wir haben heute alles vermissen lassen.", author: "Unbekannt" },
    { text: "Wir müssen die Gier entwickeln.", author: "Unbekannt" },
    { text: "Wir haben uns den Punkt redlich verdient.", author: "Unbekannt" },
    { text: "Wir müssen die Defensive stabilisieren.", author: "Unbekannt" },
    { text: "Wir haben den Gegner eingeladen.", author: "Unbekannt" },
    { text: "Wir müssen die Pässe in die Tiefe spielen.", author: "Unbekannt" },
    { text: "Wir haben heute nicht unser Spiel durchgezogen.", author: "Unbekannt" },
    { text: "Wir müssen die Emotionen kontrollieren.", author: "Unbekannt" },
    { text: "Wir haben uns zu sehr in Einzelaktionen verstrickt.", author: "Unbekannt" },
    { text: "Wir müssen die Kompaktheit wahren.", author: "Unbekannt" },
    { text: "Wir müssen den Ball laufen lassen.", author: "Unbekannt" },
    { text: "Wir haben heute nicht das abgerufen, was wir können.", author: "Unbekannt" },
    { text: "Wir müssen die Chancen besser herausspielen.", author: "Unbekannt" },
    { text: "Wir haben uns zu leicht auskontern lassen.", author: "Unbekannt" },
    { text: "Wir müssen die Zweikampfhärte an den Tag legen.", author: "Unbekannt" },
    { text: "Wir haben heute einen Sahnetag erwischt.", author: "Unbekannt" },
    { text: "Wir müssen die einfachen Fehler abstellen.", author: "Unbekannt" },
    { text: "Wir haben uns heute selbst geschlagen.", author: "Unbekannt" },
    { text: "Wir müssen die Lücken schließen.", author: "Unbekannt" },
    { text: "Wir haben den Gegner unterschätzt.", author: "Unbekannt" },
    { text: "Wir müssen die Körpersprache verbessern.", author: "Unbekannt" },
    { text: "Wir haben heute Charakter gezeigt.", author: "Unbekannt" },
    { text: "Wir müssen die Mentalität auf den Platz bringen.", author: "Unbekannt" },
    { text: "Mailand oder Madrid - Hauptsache Italien!", author: "Andreas Möller" },
    { text: "Vom Feeling her habe ich ein gutes Gefühl.", author: "Andreas Möller" },
    { text: "Zuerst hatten wir kein Glück, und dann kam auch noch Pech dazu.", author: "Jürgen Wegmann" },
    { text: "Haste Scheiße am Fuß, haste Scheiße am Fuß!", author: "Andreas Brehme" },
    { text: "Wäre, wäre, Fahrradkette.", author: "Lothar Matthäus" },
    { text: "Wir dürfen jetzt nicht den Sand in den Kopf stecken.", author: "Lothar Matthäus" },
    { text: "Das Chancenplus war ausgeglichen.", author: "Lothar Matthäus" },
    { text: "Ein Drittel? Nee, ich will mindestens ein Viertel.", author: "Horst Szymaniak" },
    { text: "Ich habe fertig!", author: "Giovanni Trapattoni" },
    { text: "Was erlauben Strunz?", author: "Giovanni Trapattoni" },
    { text: "Schwach wie eine Flasche leer!", author: "Giovanni Trapattoni" },
    { text: "Die Breite an der Spitze ist dichter geworden.", author: "Berti Vogts" },
    { text: "Ich glaube, dass der Tabellenerste jederzeit den Spitzenreiter schlagen kann.", author: "Berti Vogts" },
    { text: "Das wird alles von den Medien hochsterilisiert.", author: "Bruno Labbadia" },
    { text: "Da krieg’ ich so den Kamm!", author: "Berti Vogts" },
    { text: "Mal verliert man und mal gewinnen die anderen.", author: "Otto Rehhagel" },
    { text: "Ich hoffe, wir haben nicht umsonst verloren.", author: "Rune Bratseth" },
    { text: "Die Sanitäter haben mir sofort eine Invasion gelegt.", author: "Fritz Walter" },
    { text: "Wir spielen am besten, wenn der Gegner nicht da ist.", author: "Otto Rehhagel" },
    { text: "Abseits ist, wenn der Schiedsrichter pfeift.", author: "Franz Beckenbauer" },
    { text: "Die Schweden sind keine Holländer, das hat man ganz genau gesehen.", author: "Franz Beckenbauer" },
    { text: "Fußball ist wie Schach, nur ohne Würfel.", author: "Lukas Podolski" },
    { text: "So ist Fußball. Manchmal gewinnt der Bessere.", author: "Lukas Podolski" },
    { text: "Jeder kann sagen, was ich will.", author: "Otto Rehhagel" },
    { text: "Das ist Schnee von morgen.", author: "Jens Jeremies" },
    { text: "Ihr fünf spielt jetzt vier gegen drei.", author: "Fritz Langner" },
    { text: "Wir wollten in Bremen kein Gegentor kassieren. Das hat auch bis zum Gegentor ganz gut geklappt.", author: "Thomas Häßler" },
    { text: "Ich bin körperlich und physisch topfit.", author: "Thomas Häßler" },
    { text: "In der ersten Halbzeit haben wir ganz gut gespielt, in der zweiten fehlte uns die Kontinuität.", author: "Thomas Häßler" },
    { text: "Ich grüße meine Mama, meinen Papa und ganz besonders meine Eltern.", author: "Mario Basler" },
    { text: "Das habe ich ihm dann auch verbal gesagt.", author: "Mario Basler" },
    { text: "Ich habe viel von meinem Geld für Alkohol, Weiber und schnelle Autos ausgegeben. Den Rest habe ich einfach verprasst.", author: "George Best" },
    { text: "Wenn wir hier nicht gewinnen, dann treten wir ihnen wenigstens den Rasen kaputt.", author: "Rolf Rüssmann" },
    { text: "Gewinnen ist nicht wichtig, es ist das Einzige, was zählt.", author: "Vince Lombardi" },
    { text: "Die Situation ist aussichtslos, aber nicht kritisch.", author: "Stefan Effenberg" },
    { text: "Ich habe ihn nur ganz leicht retuschiert.", author: "Olaf Thon" },
    { text: "Wir müssen jetzt die Köpfe hochkrempeln. Und die Ärmel auch.", author: "Lukas Podolski" },
    { text: "Zwei Chancen, ein Tor – das nenne ich hundertprozentige Chancenauswertung.", author: "Roland Wohlfarth" },
    { text: "Ich glaube nicht, dass wir das Spiel verloren hätten, wenn es 1:1 ausgegangen wäre.", author: "Uli Hoeneß" },
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
        const phrase = getRandomPhrase();
        phraseText.innerHTML = `${phrase.text}<br><span class="author">(${phrase.author})</span>`;
        phraseText.classList.remove('fade-out');
    }, 200); // 200ms entspricht CSS transition time
}

/**
 * Kopiert die aktuelle Phrase in die Zwischenablage.
 */
async function copyToClipboard() {
    const phrase = phrases[lastPhraseIndex];
    const textToCopy = `${phrase.text} (${phrase.author})`;

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
    const phrase = getRandomPhrase();
        phraseText.innerHTML = `${phrase.text}<br><span class="author">(${phrase.author})</span>`;
});
