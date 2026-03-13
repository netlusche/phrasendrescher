/**
 * Fußballerphrasen-Generator
 * Logik für die zufällige Auswahl und Anzeige von Phrasen.
 */

// Array mit über 140 Fußballer-Phrasen (generisch)
const phrases = [
    {
        id: "phrase_1",
        text: "Am Ende des Tages zählt nur das Ergebnis.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Reporterfloskel",
        tone: "wolkig",
        era: "zeitlos"
    },
    {
        id: "phrase_2",
        text: "Der Ball ist rund und das Spiel dauert 90 Minuten.",
        author: "Sepp Herberger",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "legendär",
        era: "1950er"
    },
    {
        id: "phrase_3",
        text: "Das nächste Spiel ist immer das schwerste.",
        author: "Sepp Herberger",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "legendär",
        era: "1950er"
    },
    {
        id: "phrase_4",
        text: "Wir müssen von Spiel zu Spiel schauen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_5",
        text: "Nach dem Spiel ist vor dem Spiel.",
        author: "Sepp Herberger",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "legendär",
        era: "1950er"
    },
    {
        id: "phrase_6",
        text: "Wir haben heute die PS nicht auf die Straße bekommen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_7",
        text: "Die Null muss stehen.",
        author: "Huub Stevens",
        attributionStatus: "belegt",
        category: "Trainerphrase",
        tone: "ernst",
        era: "1990er"
    },
    {
        id: "phrase_8",
        text: "Wir müssen auch mal die dreckigen Punkte holen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_9",
        text: "Der Gegner hat uns das Leben schwer gemacht.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_10",
        text: "Wir müssen als Kollektiv auftreten.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_11",
        text: "Wir gewinnen zusammen und wir verlieren zusammen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_12",
        text: "Der Trainer hat uns gut eingestellt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_13",
        text: "Wir müssen die Chancen einfach machen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_14",
        text: "Im Fußball ist alles möglich.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_15",
        text: "Der Pokal hat seine eigenen Gesetze.",
        author: "Fußballer-Weisheit",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_16",
        text: "Wir schauen nur auf uns.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_17",
        text: "Wir nehmen, was kommt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_18",
        text: "Jedes Spiel fängt bei 0:0 an.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_19",
        text: "Wir müssen Gras fressen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_20",
        text: "Das ist Jammern auf hohem Niveau.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_21",
        text: "Die Tabelle lügt nicht.",
        author: "Fußballer-Weisheit",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_22",
        text: "Ein Spiel dauert 90 Minuten, manchmal auch länger.",
        author: "Sepp Herberger",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "legendär",
        era: "1950er"
    },
    {
        id: "phrase_23",
        text: "Entscheidend ist auf’m Platz.",
        author: "Adi Preißler",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_24",
        text: "Wir müssen den Bock umstoßen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Abstiegskampf",
        tone: "trotzig",
        era: "zeitlos"
    },
    {
        id: "phrase_25",
        text: "Das Runde muss ins Eckige.",
        author: "Sepp Herberger",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "legendär",
        era: "1950er"
    },
    {
        id: "phrase_26",
        text: "Wir haben Moral bewiesen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_27",
        text: "Fußball ist ein Ergebnissport.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Reporterfloskel",
        tone: "wolkig",
        era: "zeitlos"
    },
    {
        id: "phrase_28",
        text: "Wir haben uns selbst geschlagen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_29",
        text: "Wir müssen die Köpfe jetzt wieder hochbekommen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_30",
        text: "Mund abputzen, weitermachen.",
        author: "Fußballer-Weisheit",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_31",
        text: "Das war ein Spiel auf Augenhöhe.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_32",
        text: "Wir müssen geduldig bleiben.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_33",
        text: "Breite Brust zeigen.",
        author: "Fußballer-Weisheit",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_34",
        text: "Wir müssen die Zweikämpfe annehmen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_35",
        text: "Das war heute Arbeitsverweigerung.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Abstiegskampf",
        tone: "trotzig",
        era: "zeitlos"
    },
    {
        id: "phrase_36",
        text: "Kleine Fehler werden auf diesem Niveau sofort bestraft.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_37",
        text: "Wir haben zu einfache Gegentore bekommen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_38",
        text: "Vorne fehlt die Durchschlagskraft.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_39",
        text: "Hinten sicher stehen, schnell umschalten.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_40",
        text: "Wir müssen die Räume eng machen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_41",
        text: "Wir haben den Kampf nicht angenommen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_42",
        text: "Wir müssen wieder in die Spur finden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Abstiegskampf",
        tone: "trotzig",
        era: "zeitlos"
    },
    {
        id: "phrase_43",
        text: "Wir lassen uns nicht verrückt machen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_44",
        text: "Wir haben gut gegen den Ball gearbeitet.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_45",
        text: "Ballbesitz schießt keine Tore.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Trainerphrase",
        tone: "analytisch klingend, aber völlig leer",
        era: "2010er"
    },
    {
        id: "phrase_46",
        text: "Statistik ist wie ein Bikini: Sie zeigt vieles, aber nicht alles.",
        author: "Lars Reja",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_47",
        text: "Wir müssen die Kirche im Dorf lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_48",
        text: "Das war ein Sechs-Punkte-Spiel.",
        author: "Fußballer-Weisheit",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_49",
        text: "Wir müssen das Glück erzwingen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_50",
        text: "Erstes Ziel: 40 Punkte.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_51",
        text: "Abgerechnet wird am Schluss.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_52",
        text: "Wer die Tore vorne nicht macht, kriegt sie hinten rein.",
        author: "Fußballer-Weisheit",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_53",
        text: "Das ist bitter für die Jungs.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_54",
        text: "Wir haben heute Lehrgeld bezahlt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_55",
        text: "Wir müssen die individuellen Fehler abstellen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_56",
        text: "Wir haben uns den Schneid abkaufen lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_57",
        text: "Das war ein gebrauchter Tag.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_58",
        text: "Standards entscheiden Spiele.",
        author: "Fußballer-Weisheit",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_59",
        text: "Wir müssen über den Kampf ins Spiel finden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_60",
        text: "Wir haben die erste Halbzeit komplett verschlafen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_61",
        text: "In der Kabine ist es jetzt laut geworden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_62",
        text: "Der letzte Pass hat gefehlt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_63",
        text: "Wir müssen effizienter werden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_64",
        text: "Wir haben uns das Leben selbst schwer gemacht.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_65",
        text: "Dafür trainieren wir die ganze Woche.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_66",
        text: "Das war Antwort auf dem Platz.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_67",
        text: "Wir müssen die Euphorie bremsen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_68",
        text: "Die Saison ist ein Marathon, kein Sprint.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_69",
        text: "Wir haben Charakter gezeigt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_70",
        text: "Das Quäntchen Glück hat gefehlt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_71",
        text: "Der Schiedsrichter hat sicher nicht seinen besten Tag gehabt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Reporterfloskel",
        tone: "wolkig",
        era: "zeitlos"
    },
    {
        id: "phrase_72",
        text: "Wir suchen keine Ausreden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Reporterfloskel",
        tone: "wolkig",
        era: "zeitlos"
    },
    {
        id: "phrase_73",
        text: "Wir müssen demütig bleiben.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_74",
        text: "Das war ein Arbeitssieg.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_75",
        text: "Wir haben alles reingeworfen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_76",
        text: "Die Fans waren heute der 12. Mann.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_77",
        text: "Respekt an den Gegner.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_78",
        text: "Wir haben den Faden verloren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_79",
        text: "Wir müssen jetzt die Ärmel hochkrempeln.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_80",
        text: "Es gibt keine Kleinen mehr.",
        author: "Rudi Völler",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_81",
        text: "Jeder muss sich in den Dienst der Mannschaft stellen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_82",
        text: "Das Trikot muss schwitzen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_83",
        text: "Wir haben uns für den Aufwand nicht belohnt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_84",
        text: "Das war heute einfach zu wenig.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_85",
        text: "Wir müssen die einfachen Dinge richtig machen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_86",
        text: "Wir haben die Ordnung verloren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_87",
        text: "Das war Slapstick in der Abwehr.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_88",
        text: "Ein Unentschieden wäre gerecht gewesen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_89",
        text: "So ist Fußball.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_90",
        text: "Wir müssen die Konter besser ausspielen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_91",
        text: "Wir haben den Zugriff nicht bekommen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_92",
        text: "Wir waren immer einen Schritt zu spät.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_93",
        text: "Wir haben uns neutralisiert.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_94",
        text: "Das war ein glücklicher Punkt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_95",
        text: "Wir müssen jetzt eine Serie starten.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_96",
        text: "Wir haben die richtige Reaktion gezeigt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_97",
        text: "Wir müssen hungrig bleiben.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_98",
        text: "Wir dürfen uns nicht ausruhen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_99",
        text: "Gegen so einen Gegner darfst du dir keine Fehler erlauben.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_100",
        text: "Wir müssen disziplinierter spielen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_101",
        text: "Wir waren nicht wach genug.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_102",
        text: "Das war heute Werbung für den Fußball.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_103",
        text: "Wir haben das Heft aus der Hand gegeben.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_104",
        text: "Wir müssen kaltschnäuziger werden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_105",
        text: "Die Beine waren schwer.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_106",
        text: "Wir haben den Kampf angenommen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_107",
        text: "Das sind Big Points.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_108",
        text: "Wir müssen die Ruhe bewahren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_109",
        text: "Wir haben uns einschüchtern lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_110",
        text: "Wir müssen die Basics abrufen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_111",
        text: "Das war ein Schritt in die richtige Richtung.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_112",
        text: "Wir müssen die Automatismen verinnerlichen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_113",
        text: "Wir haben uns heute selbst im Weg gestanden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_114",
        text: "Wir müssen als Einheit auftreten.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_115",
        text: "Das war ein kampfbetontes Spiel.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_116",
        text: "Wir haben die Räume nicht zugelaufen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_117",
        text: "Das war heute Magerkost.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_118",
        text: "Wir müssen wieder geil aufs Gewinnen sein.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_119",
        text: "Wir haben den Start verpennt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_120",
        text: "Wir müssen die Kugel laufen lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_121",
        text: "Wir haben uns zu sicher gefühlt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_122",
        text: "Das war ein Weckruf.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_123",
        text: "Wir müssen die Fehler analysieren und abstellen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_124",
        text: "Wir haben uns gegenseitig gepusht.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_125",
        text: "Der Wille versetzt Berge.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_126",
        text: "Wir haben nicht unser wahres Gesicht gezeigt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_127",
        text: "Wir müssen mehr investieren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_128",
        text: "Das war ein taktisch geprägtes Spiel.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_129",
        text: "Wir haben die Lücken nicht gefunden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_130",
        text: "Wir müssen jetzt zusammenstehen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_131",
        text: "Wir haben uns den Punkt erkämpft.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_132",
        text: "Das war ein Sieg des Willens.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_133",
        text: "Wir müssen die Leistung konservieren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_134",
        text: "Wir haben uns belohnt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_135",
        text: "Wir müssen die Gier zeigen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_136",
        text: "Das war heute zu statisch.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_137",
        text: "Wir haben keine Lösungen gefunden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_138",
        text: "Wir müssen den Gegner unter Druck setzen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_139",
        text: "Wir haben uns in die Partie reingebissen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_140",
        text: "Wir müssen die Flanken verhindern.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_141",
        text: "Wir haben im Zentrum die Ordnung verloren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_142",
        text: "Wir müssen über die Außen kommen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_143",
        text: "Das war ein offener Schlagabtausch.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_144",
        text: "Wir haben das Tempo verschleppt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_145",
        text: "Wir müssen zielstrebiger agieren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_146",
        text: "Wir haben dem Gegner den Ball überlassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_147",
        text: "Der Platz war schwer bespielbar.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_148",
        text: "Das war ein Spiel auf ein Tor.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_149",
        text: "Wir haben die Zweikämpfe verweigert.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_150",
        text: "Wir müssen die Köpfe frei bekommen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_151",
        text: "Wir haben uns zu sehr hinten reindrängen lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_152",
        text: "Das war heute ein gebrauchter Abend.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_153",
        text: "Wir haben die Bälle zu leicht hergeschenkt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_154",
        text: "Wir müssen die richtige Balance finden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_155",
        text: "Der Ausgleich lag in der Luft.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_156",
        text: "Wir haben uns das 1:0 selbst eingeschenkt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_157",
        text: "Wir haben heute nicht stattgefunden.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_158",
        text: "Wir müssen jetzt eine Reaktion zeigen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_159",
        text: "Das war ein Sieg der Moral.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_160",
        text: "Wir haben uns gut aus der Affäre gezogen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_161",
        text: "Wir müssen die Situation annehmen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_162",
        text: "Wir müssen den Schalter umlegen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_163",
        text: "Wir haben vorne die Dinger nicht gemacht.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_164",
        text: "Das war ein typisches 0:0-Spiel.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_165",
        text: "Wir haben den Sieg verschenkt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_166",
        text: "Wir müssen die Konzentration hochhalten.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_167",
        text: "Wir haben uns von der Hektik anstecken lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_168",
        text: "Das war ein Spiegelbild der Saison.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_169",
        text: "Wir müssen die Fehler minimieren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_170",
        text: "Wir müssen die Tugenden auf den Platz bringen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_171",
        text: "Das war ein richtiger Abnutzungskampf.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_172",
        text: "Wir haben den Gegner stark geredet.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_173",
        text: "Wir müssen die Chancen eiskalt nutzen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_174",
        text: "Wir müssen die Ärmel hochkrempeln.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_175",
        text: "Wir müssen eng am Mann stehen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_176",
        text: "Wir haben zu viele Räume angeboten.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_177",
        text: "Wir müssen die Bälle festmachen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_178",
        text: "Wir haben das Spiel aus der Hand gegeben.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_179",
        text: "Wir müssen die Breite des Platzes nutzen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_180",
        text: "Wir haben uns zu sehr auf den Schiri konzentriert.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_181",
        text: "Wir haben uns heute gut verkauft.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_182",
        text: "Wir müssen jetzt die Wunden lecken.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_183",
        text: "Wir haben heute alles vermissen lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_184",
        text: "Wir müssen die Gier entwickeln.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_185",
        text: "Wir haben uns den Punkt redlich verdient.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_186",
        text: "Wir müssen die Defensive stabilisieren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_187",
        text: "Wir haben den Gegner eingeladen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_188",
        text: "Wir müssen die Pässe in die Tiefe spielen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_189",
        text: "Wir haben heute nicht unser Spiel durchgezogen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_190",
        text: "Wir müssen die Emotionen kontrollieren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_191",
        text: "Wir haben uns zu sehr in Einzelaktionen verstrickt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_192",
        text: "Wir müssen die Kompaktheit wahren.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_193",
        text: "Wir müssen den Ball laufen lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_194",
        text: "Wir haben heute nicht das abgerufen, was wir können.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_195",
        text: "Wir müssen die Chancen besser herausspielen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_196",
        text: "Wir haben uns zu leicht auskontern lassen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_197",
        text: "Wir müssen die Zweikampfhärte an den Tag legen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_198",
        text: "Wir haben heute einen Sahnetag erwischt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_199",
        text: "Wir müssen die einfachen Fehler abstellen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_200",
        text: "Wir haben uns heute selbst geschlagen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_201",
        text: "Wir müssen die Lücken schließen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_202",
        text: "Wir haben den Gegner unterschätzt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_203",
        text: "Wir müssen die Körpersprache verbessern.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_204",
        text: "Wir haben heute Charakter gezeigt.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_205",
        text: "Wir müssen die Mentalität auf den Platz bringen.",
        author: "Unbekannt",
        attributionStatus: "unbekannt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_206",
        text: "Mailand oder Madrid - Hauptsache Italien!",
        author: "Andreas Möller",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "legendär",
        era: "1990er"
    },
    {
        id: "phrase_207",
        text: "Vom Feeling her habe ich ein gutes Gefühl.",
        author: "Andreas Möller",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_208",
        text: "Zuerst hatten wir kein Glück, und dann kam auch noch Pech dazu.",
        author: "Jürgen Wegmann",
        attributionStatus: "belegt",
        category: "Reporterfloskel",
        tone: "wolkig",
        era: "zeitlos"
    },
    {
        id: "phrase_209",
        text: "Haste Scheiße am Fuß, haste Scheiße am Fuß!",
        author: "Andreas Brehme",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_210",
        text: "Wäre, wäre, Fahrradkette.",
        author: "Lothar Matthäus",
        attributionStatus: "belegt",
        category: "Expertenrunde",
        tone: "unfreiwillig komisch",
        era: "2010er"
    },
    {
        id: "phrase_211",
        text: "Wir dürfen jetzt nicht den Sand in den Kopf stecken.",
        author: "Lothar Matthäus",
        attributionStatus: "belegt",
        category: "Trainerphrase",
        tone: "unfreiwillig komisch",
        era: "1990er"
    },
    {
        id: "phrase_212",
        text: "Das Chancenplus war ausgeglichen.",
        author: "Lothar Matthäus",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_213",
        text: "Ein Drittel? Nee, ich will mindestens ein Viertel.",
        author: "Horst Szymaniak",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_214",
        text: "Ich habe fertig!",
        author: "Giovanni Trapattoni",
        attributionStatus: "belegt",
        category: "Trainerphrase",
        tone: "legendär",
        era: "1990er"
    },
    {
        id: "phrase_215",
        text: "Was erlauben Strunz?",
        author: "Giovanni Trapattoni",
        attributionStatus: "belegt",
        category: "Trainerphrase",
        tone: "legendär",
        era: "1990er"
    },
    {
        id: "phrase_216",
        text: "Schwach wie eine Flasche leer!",
        author: "Giovanni Trapattoni",
        attributionStatus: "belegt",
        category: "Trainerphrase",
        tone: "legendär",
        era: "1990er"
    },
    {
        id: "phrase_217",
        text: "Die Breite an der Spitze ist dichter geworden.",
        author: "Berti Vogts",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_218",
        text: "Ich glaube, dass der Tabellenerste jederzeit den Spitzenreiter schlagen kann.",
        author: "Berti Vogts",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_219",
        text: "Das wird alles von den Medien hochsterilisiert.",
        author: "Bruno Labbadia",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_220",
        text: "Da krieg’ ich so den Kamm!",
        author: "Berti Vogts",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_221",
        text: "Mal verliert man und mal gewinnen die anderen.",
        author: "Otto Rehhagel",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_222",
        text: "Ich hoffe, wir haben nicht umsonst verloren.",
        author: "Rune Bratseth",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_223",
        text: "Die Sanitäter haben mir sofort eine Invasion gelegt.",
        author: "Fritz Walter",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_224",
        text: "Wir spielen am besten, wenn der Gegner nicht da ist.",
        author: "Otto Rehhagel",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_225",
        text: "Abseits ist, wenn der Schiedsrichter pfeift.",
        author: "Franz Beckenbauer",
        attributionStatus: "belegt",
        category: "Reporterfloskel",
        tone: "wolkig",
        era: "zeitlos"
    },
    {
        id: "phrase_226",
        text: "Die Schweden sind keine Holländer, das hat man ganz genau gesehen.",
        author: "Franz Beckenbauer",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_227",
        text: "Fußball ist wie Schach, nur ohne Würfel.",
        author: "Lukas Podolski",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_228",
        text: "So ist Fußball. Manchmal gewinnt der Bessere.",
        author: "Lukas Podolski",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_229",
        text: "Jeder kann sagen, was ich will.",
        author: "Otto Rehhagel",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_230",
        text: "Das ist Schnee von morgen.",
        author: "Jens Jeremies",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_231",
        text: "Ihr fünf spielt jetzt vier gegen drei.",
        author: "Fritz Langner",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_232",
        text: "Wir wollten in Bremen kein Gegentor kassieren. Das hat auch bis zum Gegentor ganz gut geklappt.",
        author: "Thomas Häßler",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_233",
        text: "Ich bin körperlich und physisch topfit.",
        author: "Thomas Häßler",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_234",
        text: "In der ersten Halbzeit haben wir ganz gut gespielt, in der zweiten fehlte uns die Kontinuität.",
        author: "Thomas Häßler",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_235",
        text: "Ich grüße meine Mama, meinen Papa und ganz besonders meine Eltern.",
        author: "Mario Basler",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_236",
        text: "Das habe ich ihm dann auch verbal gesagt.",
        author: "Mario Basler",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_237",
        text: "Ich habe viel von meinem Geld für Alkohol, Weiber und schnelle Autos ausgegeben. Den Rest habe ich einfach verprasst.",
        author: "George Best",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_238",
        text: "Wenn wir hier nicht gewinnen, dann treten wir ihnen wenigstens den Rasen kaputt.",
        author: "Rolf Rüssmann",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_239",
        text: "Gewinnen ist nicht wichtig, es ist das Einzige, was zählt.",
        author: "Vince Lombardi",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_240",
        text: "Die Situation ist aussichtslos, aber nicht kritisch.",
        author: "Stefan Effenberg",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_241",
        text: "Ich habe ihn nur ganz leicht retuschiert.",
        author: "Olaf Thon",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_242",
        text: "Wir müssen jetzt die Köpfe hochkrempeln. Und die Ärmel auch.",
        author: "Lukas Podolski",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_243",
        text: "Zwei Chancen, ein Tor – das nenne ich hundertprozentige Chancenauswertung.",
        author: "Roland Wohlfarth",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    },
    {
        id: "phrase_244",
        text: "Ich glaube nicht, dass wir das Spiel verloren hätten, wenn es 1:1 ausgegangen wäre.",
        author: "Uli Hoeneß",
        attributionStatus: "belegt",
        category: "Klassiker",
        tone: "maximal abgedroschen",
        era: "zeitlos"
    }
];



// State & Modes
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
    return `
        <div class="metadata-badges">
            ${phrase.category ? `<span class="badge category">${phrase.category}</span>` : ''}
            ${phrase.tone ? `<span class="badge tone">${phrase.tone}</span>` : ''}
            ${phrase.era ? `<span class="badge era">${phrase.era}</span>` : ''}
            ${phrase.attributionStatus === 'unbekannt' ? `<span class="badge status status-unknown" title="Oft zugeschrieben, aber schwer belegbar">Unbekannt / Folklore</span>` : ''}
        </div>
    `;
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
            : `${appState.matchMinute.toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
        
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

        const prefixHtml = context.prefix ? `<div class="phrase-prefix">${context.prefix}</div>` : '';
        
        phraseText.innerHTML = `
            ${prefixHtml}
            "${phrase.text}"
            <div class="phrase-footer">
                <span class="author">${phrase.author}</span>
                ${renderBadges(phrase)}
            </div>
        `;
        
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
    const textToCopy = `"${phrase.text}" - ${phrase.author}`;

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
