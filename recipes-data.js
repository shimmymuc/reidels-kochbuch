// Reibels Skizzenbücher - Familienkochbuch
// TEIL 1: Weihnachtsgebäck (25 Rezepte)

const recipeDatabase = {
    "kategorien": {
        "weihnachtsgebaeck": {
            "name": "Weihnachtsgebäck",
            "beschreibung": "Feines Gebäck nicht nur zur Weihnachtszeit", 
            "rezepte": {
                "buttergebaeck": {
                    "id": "buttergebaeck",
                    "name": "Butter Gebäck",
                    "kategorie": "weihnachtsgebaeck",
                    "unterkategorie": "plaetzchen",
                    "bild": "images/rezepte/buttergebaeck.jpg",
                    "quelle": "Henni Reidel",
                    "quantitative_angaben": {
                        "portionen": "ca. 50 Stück",
                        "backtemperatur": "175",
                        "backtemperatur_einheit": "°C", 
                        "backzeit": "10",
                        "backzeit_einheit": "Minuten",
                        "vorbereitungszeit": "30 Minuten + 1h Kühlzeit"
                    },
                    "beschreibung": "Christbaum Feingebäck - ein Familienrezept mit Geschichte",
                    "geschichte": "Im Rezeptbuch meiner Mutter heißt dieses Gebäck 'Vanille Gebäck' im Elternhaus meiner Frau 'Christbaum Feingebäck'.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Mehl", "menge": 500, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 3, "einheit": "g", "typ": "backmittel" },
                        { "name": "Zucker", "menge": 150, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 2, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Butter", "menge": 250, "einheit": "g", "typ": "fett", "zustand": "kalt, in Stückchen" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Aus allen Zutaten rasch einen Teig kneten",
                        "Eine Stunde kalt stellen", 
                        "Ofen auf 175°C vorheizen",
                        "Teig zwischen zwei Folien ausrollen und Plätzchen ausstechen",
                        "Etwa 10 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Man kann die Plätzchen mit Eigelb bestreichen und mit gebackenen Mandeln oder Zuckerspielen verzieren",
                        "Wir bevorzugen die naturbelassene Variante; ein wenig dunkler gebacken"
                    ],
                    "tags": ["einfach", "klassiker", "weihnachten", "familienrezept"]
                },

                "elisenlebkuchen": {
                    "id": "elisenlebkuchen", 
                    "name": "Elisen Lebkuchen",
                    "kategorie": "weihnachtsgebaeck",
                    "unterkategorie": "lebkuchen",
                    "bild": "images/rezepte/elisenlebkuchen.jpg",
                    "quelle": "Dr. Oetker",
                    "quantitative_angaben": {
                        "portionen": "25-30 Stück", 
                        "backtemperatur": "130-150",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "25-30",
                        "backzeit_einheit": "Minuten",
                        "backoblaten": "7 cm Ø"
                    },
                    "zutaten": [
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Grieszucker", "menge": 200, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Nelken", "menge": 1, "einheit": "Msp", "typ": "gewuerz", "zustand": "gemahlen" },
                        { "name": "Zitronat", "menge": 75, "einheit": "g", "typ": "trockenfrucht" },
                        { "name": "Mandeln", "menge": 125, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Backpulver", "menge": 1, "einheit": "Msp", "typ": "backmittel" },
                        { "name": "Haselnüsse", "menge": 75, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" }
                    ],
                    "zubereitung": [
                        "Aus Eiern und Zucker Schaum Masse schlagen",
                        "Alle anderen Zutaten zugeben und untermischen",
                        "Von den Haselnüssen nur soviel unterrühren, dass der Teig noch streichfähig ist", 
                        "Ofen auf 130-150°C vorheizen",
                        "Lebkuchen Masse auf Backoblaten (7 cm Ø) aufstreichen",
                        "Kleinen Rand lassen, da Teig verläuft",
                        "25-30 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Nach Belieben mit Schoko- oder Zucker-Guß überziehen",
                        "Fertige Lebkuchen in Blechdosen aufbewahren"
                    ],
                    "tags": ["lebkuchen", "oblaten", "weihnachten", "nussig"]
                },
                "erdnussplaetzchen": {
                    "id": "erdnussplaetzchen", 
                    "name": "Erdnuss Plätzchen",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/erdnussplaetzchen.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "10", 
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Erdnuss Butter", "menge": 250, "einheit": "g", "typ": "fett" },
                        { "name": "Puderzucker", "menge": 150, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Salz", "menge": 1, "einheit": "Prise", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Alle Zutaten verkneten",
                        "Aus dem Teig haselnuss große Kugeln rollen", 
                        "Auf ein Blech setzen und mit einer Gabel leicht flachdrücken",
                        "Ofen auf 180°C vorheizen",
                        "Etwa 10 Minuten backen und auskühlen lassen"
                    ],
                    "anmerkungen": [
                        "Für Erdnuss Freunde. Intensiver Erdnuss Geschmack",
                        "Vor dem Backen nicht anfassen, da sie noch sehr 'mürbe' sind"
                    ],
                    "tags": ["erdnuss", "einfach", "schnell"]
                },

                "erdnuss-sesam-plaetzchen": {
                    "id": "erdnuss-sesam-plaetzchen",
                    "name": "Erdnuss-Sesam Plätzchen", 
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/erdnuss-sesam-plaetzchen.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "150",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "15-20",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Sesam", "menge": 70, "einheit": "g", "typ": "samen", "zustand": "geröstet" },
                        { "name": "Butter", "menge": 160, "einheit": "g", "typ": "fett" },
                        { "name": "Zucker", "menge": 120, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Mehl", "menge": 150, "einheit": "g", "typ": "mehl" },
                        { "name": "Vanilleschote", "menge": 1, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Salz", "menge": 1, "einheit": "Prise", "typ": "gewuerz" },
                        { "name": "Backpulver", "menge": 1, "einheit": "TL", "typ": "backmittel" },
                        { "name": "Zimt", "menge": 0.5, "einheit": "TL", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Butter und Zucker schaumig rühren",
                        "Sesam, Vanillemark und Eier hinzufügen",
                        "Ofen auf 150°C vorheizen", 
                        "Restliche Zutaten hinzufügen und verrühren",
                        "Kleine Häufchen auf ein Backblech setzen",
                        "15-20 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Jeweils zwei Plätzchen mit Erdnussbutter-Füllung zusammensetzen",
                        "Kein typisches Weihnachtsgebäck - kann ganzjährig verwendet werden"
                    ],
                    "tags": ["erdnuss", "sesam", "crossover"]
                },

                "gewuerz-schnitten": {
                    "id": "gewuerz-schnitten",
                    "name": "Gewürz Schnitten", 
                    "kategorie": "weihnachtsgebaeck",
                    "unterkategorie": "lebkuchen",
                    "bild": "images/rezepte/gewuerz-schnitten.jpg",
                    "beschreibung": "Lebkuchen Würfel - handwerkliche einfache Alternative",
                    "quantitative_angaben": {
                        "backtemperatur": "160",
                        "backtemperatur_einheit": "°C", 
                        "backzeit": "20",
                        "backzeit_einheit": "Minuten",
                        "backblech_groesse": "25x25 cm"
                    },
                    "zutaten": [
                        { "name": "Eier", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 250, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Lebkuchengewürz", "menge": 0.5, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Zitronat", "menge": 30, "einheit": "g", "typ": "trockenfrucht" },
                        { "name": "Orangeat", "menge": 30, "einheit": "g", "typ": "trockenfrucht" },
                        { "name": "Nüsse & Mandeln", "menge": 200, "einheit": "g", "typ": "nuesse" },
                        { "name": "Mehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 0.5, "einheit": "TL", "typ": "backmittel" }
                    ],
                    "zubereitung": [
                        "Eier und Zucker dick aufschlagen", 
                        "Gewürzmischung, Nüsse/Mandeln und Zitronat/Orangeat einarbeiten",
                        "Ofen auf 160°C vorheizen",
                        "Backpulver und Mehl unterarbeiten",
                        "Masse 2 cm dick auf Backblech aufstreichen",
                        "20 Minuten backen",
                        "Noch warm mit Zuckerguß einstreichen",
                        "In Würfel schneiden"
                    ],
                    "tags": ["lebkuchen", "wuerfel", "einfach", "schnell"]
                },

                "haselnuss-lebkuchen": {
                    "id": "haselnuss-lebkuchen",
                    "name": "Haselnuss Lebkuchen",
                    "kategorie": "weihnachtsgebaeck",
                    "unterkategorie": "lebkuchen", 
                    "bild": "images/rezepte/haselnuss-lebkuchen.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "160-175",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "15",
                        "backzeit_einheit": "Minuten", 
                        "backoblaten": "7 cm Ø"
                    },
                    "zutaten": [
                        { "name": "Eier", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Grieszucker", "menge": 300, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Zimt", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Nelken", "menge": 0.5, "einheit": "TL", "typ": "gewuerz", "zustand": "gemahlen" },
                        { "name": "Zitronat", "menge": 50, "einheit": "g", "typ": "trockenfrucht", "zustand": "fein gehackt" },
                        { "name": "Orangeat", "menge": 50, "einheit": "g", "typ": "trockenfrucht", "zustand": "fein gehackt" },
                        { "name": "Haselnüsse", "menge": 300, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Arak", "menge": 1, "einheit": "EL", "typ": "alkohol" },
                        { "name": "Mehl", "menge": 100, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 1, "einheit": "TL", "typ": "backmittel" }
                    ],
                    "zubereitung": [
                        "Aus Eiern und Zucker Schaum Masse schlagen",
                        "Alle anderen Zutaten -außer Mehl - zugeben und untermischen",
                        "Mehl und Backpulver einarbeiten (Menge richtet sich nach Größe der Eier)", 
                        "Ofen auf 160-175°C vorheizen",
                        "Lebkuchen Masse auf Backoblaten aufstreichen",
                        "15 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Nach Belieben mit Guß überziehen",
                        "Wir schmecken die Lebkuchen am besten 'Natur'",
                        "Fertige Lebkuchen in Blechdosen aufbewahren"
                    ],
                    "tags": ["haselnuss", "lebkuchen", "oblaten", "nussig"]
                },

                "ischler-krapfen": {
                    "id": "ischler-krapfen", 
                    "name": "Ischler Krapfen",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/ischler-krapfen.jpg",
                    "geschichte": "Sehr köstliche Plätzchen, die allerdings einige Arbeit machen!",
                    "quantitative_angaben": {
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "8-10", 
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 200, "einheit": "g", "typ": "mehl" },
                        { "name": "Butter", "menge": 200, "einheit": "g", "typ": "fett" },
                        { "name": "Puderzucker", "menge": 120, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Haselnüsse", "menge": 2, "einheit": "Hand voll", "typ": "nuesse", "zustand": "gemahlen" }
                    ],
                    "zubereitung": [
                        "Zutaten rasch zu einem Teig verkneten",
                        "Rollen von 2-3 cm Ø formen", 
                        "Kalt stellen",
                        "Ofen auf 180°C vorheizen",
                        "Vom Teig ca. 3mm starke Scheiben abschneiden",
                        "8-10 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Jeweils zwei Plätzchen mit Haselnuss-Krokant-Füllung zusammensetzen",
                        "Nach Belieben mit Schokoladenguß überziehen und mit Pistazie garnieren"
                    ],
                    "tags": ["aufwendig", "fein", "nussig", "gefuellt"]
                },

                "kulleraugen": {
                    "id": "kulleraugen",
                    "name": "Kulleraugen",
                    "kategorie": "weihnachtsgebaeck", 
                    "bild": "images/rezepte/kulleraugen.jpg",
                    "beschreibung": "Auch bekannt als Husaren Krapferl oder Einzer Kolatschen",
                    "quantitative_angaben": {
                        "backtemperatur": "170",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "7", 
                        "backzeit_einheit": "Minuten",
                        "portionen": "ca. 50 Stück"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 180, "einheit": "g", "typ": "mehl" },
                        { "name": "Zucker", "menge": 80, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eigelb", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Butter", "menge": 150, "einheit": "g", "typ": "fett" },
                        { "name": "Johannisbeer Gelee", "menge": 1, "einheit": "n.B.", "typ": "frucht" }
                    ],
                    "zubereitung": [
                        "Aus allen Zutaten rasch einen Teig kneten",
                        "Eine Stunde kalt stellen", 
                        "Ofen auf 170°C vorheizen",
                        "Kleine Kugeln aus dem Teig formen",
                        "Halbseitig in Eiweiß eintauchen und mit gehackten Mandeln bestreuen",
                        "Mit dem Löffelstiel eine Mulde eindrücken",
                        "Mulde mit Gelee füllen",
                        "7 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Diese Variante ergibt besonders mürbe Plätzchen",
                        "Rezept aus der Zeitschrift 'Liebes Land' Dezember 2015"
                    ],
                    "tags": ["gefuellt", "gelee", "muerbe", "mandeln"]
                },

                "malteser": {
                    "id": "malteser",
                    "name": "Malteser", 
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/malteser.jpg",
                    "quelle": "Anneliese Seidl",
                    "quantitative_angaben": {
                        "backtemperatur": "170",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "8-10",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Zucker", "menge": 100, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Butter", "menge": 120, "einheit": "g", "typ": "fett" },
                        { "name": "Haselnüsse", "menge": 120, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Mehl", "menge": 200, "einheit": "g", "typ": "mehl" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Aus allen Zutaten rasch einen Teig kneten",
                        "Eine Stunde kalt stellen",
                        "Ofen auf 170°C vorheizen", 
                        "Teig zwischen zwei Folien ausrollen und Plätzchen ausstechen",
                        "8-10 Minuten backen",
                        "Jeweils zwei Plätzchen mit Nougat Masse zusammensetzen",
                        "Mit Schokoguß bestreichen"
                    ],
                    "tags": ["haselnuss", "nougat", "gefuellt"]
                },

                "mandelherzen": {
                    "id": "mandelherzen",
                    "name": "Mandel Herzen",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/mandelherzen.jpg", 
                    "quantitative_angaben": {
                        "backtemperatur": "130",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "15",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Eiweiß", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 250, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Zimt", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Nelken", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Zitronat", "menge": 2, "einheit": "EL", "typ": "trockenfrucht" },
                        { "name": "Mandeln", "menge": 250, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" }
                    ],
                    "zubereitung": [
                        "Eiweiß und Zucker schaumig rühren",
                        "Mit den restlichen Zutaten zu einem Teig verarbeiten", 
                        "Kalt stellen",
                        "Ofen auf 130°C vorheizen",
                        "Teig 4 mm dick ausrollen und Herzen ausstechen",
                        "Nochmal kalt stellen",
                        "15 Minuten backen",
                        "Mit Kuvertüre bestreichen und mit Mandeln verzieren"
                    ],
                    "anmerkungen": [
                        "Der Teig ist nicht ganz einfach zu verarbeiten",
                        "Arbeiten mit reichlich Mehl und/oder Plastikfolie beim Ausrollen ist hilfreich"
                    ],
                    "tags": ["mandel", "herzen", "kuvertuere", "aufwendig"]
                },
                "nougat-haeppchen": {
                    "id": "nougat-haeppchen",
                    "name": "Nougat Häppchen", 
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/nougat-haeppchen.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "12-15",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 280, "einheit": "g", "typ": "mehl" },
                        { "name": "Puderzucker", "menge": 80, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Butter", "menge": 180, "einheit": "g", "typ": "fett", "zustand": "kalt in Stückchen" },
                        { "name": "Eidotter", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Aus allen Zutaten rasch einen Teig kneten", 
                        "Rollen mit ca. 2cm Ø formen",
                        "Eine Stunde kalt stellen",
                        "Ofen auf 180°C vorheizen",
                        "Vom Teig dünne Scheiben abschneiden",
                        "12-15 Minuten backen",
                        "Jeweils zwei Plätzchen mit Nougat Masse zusammensetzen"
                    ],
                    "anmerkungen": [
                        "Man kann auch auf den Guß verzichten oder die Plätzchen nur zur Hälfte tunken",
                        "Das ändert nichts an sehr guter Geschmack des Gebäcks"
                    ],
                    "tags": ["nougat", "gefuellt", "muerbe"]
                },

                "nougat-stangen": {
                    "id": "nougat-stangen",
                    "name": "Nougat Stangen",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/nougat-stangen.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "180", 
                        "backtemperatur_einheit": "°C",
                        "backzeit": "7-10",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Butter", "menge": 225, "einheit": "g", "typ": "fett" },
                        { "name": "Puderzucker", "menge": 100, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Eigelb", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zimt", "menge": 2, "einheit": "Msp", "typ": "gewuerz" },
                        { "name": "Mehl", "menge": 200, "einheit": "g", "typ": "mehl" },
                        { "name": "Kakao", "menge": 40, "einheit": "g", "typ": "kakao" },
                        { "name": "Backpulver", "menge": 3, "einheit": "g", "typ": "backmittel" },
                        { "name": "Haselnüsse", "menge": 125, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" }
                    ],
                    "zubereitung": [
                        "Butter und Puderzucker geschmeidig rühren",
                        "Restliche Zutaten nach und nach einarbeiten",
                        "Zuletzt Haselnüsse",
                        "Ofen auf 180°C vorheizen", 
                        "Teig in Spritzbeutel füllen und Stangen von ca. 4cm Länge spritzen",
                        "7-10 Minuten backen",
                        "Jeweils zwei Stangen mit Nougat Masse zusammensetzen",
                        "Zur Hälfte in Schokolade tauchen"
                    ],
                    "anmerkungen": [
                        "Diese Stangen schmecken vorsätzlich!",
                        "Die Arbeit mit dem Spritzbeutel ist etwas anstrengend"
                    ],
                    "tags": ["stangen", "spritzgebaeck", "schokolade", "nougat"]
                },

                "nuernberger-lebkuchen": {
                    "id": "nuernberger-lebkuchen",
                    "name": "Nürnberger Lebkuchen",
                    "kategorie": "weihnachtsgebaeck",
                    "unterkategorie": "lebkuchen",
                    "bild": "images/rezepte/nuernberger-lebkuchen.jpg", 
                    "quantitative_angaben": {
                        "backtemperatur": "150-160",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "30",
                        "backzeit_einheit": "Minuten",
                        "backoblaten": "7 cm Ø",
                        "portionen": "30 Stück"
                    },
                    "zutaten": [
                        { "name": "Eier", "menge": 6, "einheit": "Stück", "typ": "eier" },
                        { "name": "Grieszucker", "menge": 400, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Haselnüsse", "menge": 400, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Mandeln", "menge": 400, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Zitronat", "menge": 100, "einheit": "g", "typ": "trockenfrucht" },
                        { "name": "Orangeat", "menge": 100, "einheit": "g", "typ": "trockenfrucht" },
                        { "name": "Lebkuchengewürz", "menge": 3, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Zimt", "menge": 1, "einheit": "TL", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Aus Eiern und Zucker Schaum Masse schlagen",
                        "Alle anderen Zutaten zugeben und untermischen",
                        "Masse abgedeckt 5 Stunden ruhen lassen", 
                        "Ofen auf 150-160°C vorheizen",
                        "Lebkuchen Masse auf Backoblaten aufstreichen",
                        "30 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Nach Belieben mit Schoko- oder Zucker-Guss überziehen",
                        "Fertige Lebkuchen in Blechdosen aufbewahren"
                    ],
                    "tags": ["nuernberg", "lebkuchen", "oblaten", "klassiker"]
                },

                "nuss-marzipan-taler": {
                    "id": "nuss-marzipan-taler",
                    "name": "Nuss-Marzipan Taler", 
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/nuss-marzipan-taler.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "8-10",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 150, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 1, "einheit": "TL", "typ": "backmittel" },
                        { "name": "Zucker", "menge": 75, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Wasser", "menge": 2, "einheit": "EL", "typ": "fluessigkeit" },
                        { "name": "Butter", "menge": 125, "einheit": "g", "typ": "fett", "zustand": "kalt in Stückchen" },
                        { "name": "Haselnüsse", "menge": 150, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" }
                    ],
                    "zubereitung": [
                        "Alle Zutaten zügig zu einen Teig verarbeiten",
                        "Teig kühl stellen", 
                        "Ofen auf 180°C vorheizen",
                        "Teig ausrollen und runde Plätzchen (4cm Ø) ausstechen",
                        "8-10 Minuten backen",
                        "Mit Marzipan und Johannisbeer Gelee fertig stellen"
                    ],
                    "anmerkungen": [
                        "Sehr feine Plätzchen, die allerdings ein wenig mehr Arbeit und Geduld erforschen",
                        "Wer Geduld hat kann Marzipanringe auffließen, dann sieht man die Marmelade"
                    ],
                    "tags": ["marzipan", "nuss", "gefuellt", "marmelade"]
                },

                "nutella-macarons": {
                    "id": "nutella-macarons",
                    "name": "Nutella Macarons",
                    "kategorie": "weihnachtsgebaeck", 
                    "bild": "images/rezepte/nutella-macarons.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "175",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "14",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mandeln", "menge": 120, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Puderzucker", "menge": 200, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Kakao", "menge": 30, "einheit": "g", "typ": "kakao" },
                        { "name": "Eiweiß", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 30, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Zitronensaft", "menge": 1, "einheit": "etwas", "typ": "saeure" }
                    ],
                    "zubereitung": [
                        "Eiweiß mit Zitronensaft steif schlagen, dabei Zucker einrieseln lassen",
                        "Mandeln, Puderzucker und Kakao über die Masse sieben",
                        "Zu einem glatten Teig verarbeiten - nicht stark rühren",
                        "Ofen auf 175°C vorheizen", 
                        "Mit Spritzbeutel kleine Tupfer auf Backblech machen",
                        "30-60 Minuten antrocknen lassen",
                        "14 Minuten backen",
                        "Mit Nutella-Ganache füllen"
                    ],
                    "anmerkungen": [
                        "Arbeitsintensives Rezept, das am Schluss aber ein herrlich luftiges Gebäck ergibt"
                    ],
                    "tags": ["macarons", "nutella", "franzoesisch", "luftig"]
                },

                "schokonitrfel": {
                    "id": "schokonitrfel",
                    "name": "Schokonitrfel", 
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/schokonitrfel.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "160",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "30",
                        "backzeit_einheit": "Minuten",
                        "backblech_groesse": "25x25 cm"
                    },
                    "zutaten": [
                        { "name": "Butter", "menge": 200, "einheit": "g", "typ": "fett", "zustand": "weich" },
                        { "name": "Puderzucker", "menge": 250, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eier", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Mandeln", "menge": 125, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Mehl", "menge": 200, "einheit": "g", "typ": "mehl" },
                        { "name": "Kakao", "menge": 50, "einheit": "g", "typ": "kakao" },
                        { "name": "Kardamon", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Piment", "menge": 1, "einheit": "ZL", "typ": "gewuerz" },
                        { "name": "Ingwer", "menge": 1, "einheit": "TL", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Butter und Puderzucker schaumig rühren",
                        "Kakao und Mehl darüber sieben",
                        "Zu einem glatten Teig verrühren", 
                        "Ofen auf 160°C vorheizen",
                        "Masse 2 cm dick auf Backblech aufstreichen",
                        "30 Minuten backen",
                        "In Würfel schneiden und in Kuchenglasur tauchen"
                    ],
                    "anmerkungen": [
                        "Man kann auch die warme Teigplatte komplett mit Glasur übergießen und dann schneiden",
                        "Das macht weniger Arbeit, aber die Würfel sind dann weniger 'schokoladig'"
                    ],
                    "tags": ["schokolade", "wuerfel", "gewuerz", "glasur"]
                },

                "schoko-marzipan-plaetzchen": {
                    "id": "schoko-marzipan-plaetzchen",
                    "name": "Schoko-Marzipan Plätzchen",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/schoko-marzipan-plaetzchen.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "170",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "8-9",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 180, "einheit": "g", "typ": "mehl" },
                        { "name": "Speisestärke", "menge": 50, "einheit": "g", "typ": "staerke" },
                        { "name": "Zucker", "menge": 60, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Butter", "menge": 130, "einheit": "g", "typ": "fett" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Alle Zutaten zügig zu einen Teig verarbeiten",
                        "Teig kühl stellen",
                        "Ofen auf 170°C vorheizen",
                        "Teig ausrollen und runde Plätzchen (4cm Ø) ausstechen",
                        "8-9 Minuten backen",
                        "Mit Marzipan und Marillen Gelee fertig stellen",
                        "Mit Schokoladenguss überziehen"
                    ],
                    "anmerkungen": [
                        "Original heißen sie: Hausfreunde",
                        "Auf die noch flüssige Glasur werden Walnusshälften aufgeklebt",
                        "Wir finden, dass diese den feinen Geschmack 'überdecken' und lassen sie weg"
                    ],
                    "tags": ["marzipan", "schokolade", "hausfreunde", "gefuellt"]
                },

                "spitzbuben": {
                    "id": "spitzbuben",
                    "name": "Spitzbuben",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/spitzbuben.jpg",
                    "quelle": "Dr. Oetker",
                    "quantitative_angaben": {
                        "backtemperatur": "175",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "10",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 375, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 3, "einheit": "g", "typ": "backmittel" },
                        { "name": "Zucker", "menge": 200, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Butter", "menge": 250, "einheit": "g", "typ": "fett", "zustand": "kalt in Stückchen" },
                        { "name": "Mandeln", "menge": 125, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Johannisbeer Gelee", "menge": 125, "einheit": "g", "typ": "frucht" }
                    ],
                    "zubereitung": [
                        "Aus allen Zutaten rasch einen Teig kneten",
                        "Eine Stunde kalt stellen",
                        "Ofen auf 175°C vorheizen",
                        "Teig zwischen zwei Folien ausrollen und Plätzchen ausstechen",
                        "10 Minuten backen",
                        "Jeweils zwei Plätzchen mit Johannisbeer Gelee zusammensetzen"
                    ],
                    "anmerkungen": [
                        "Man kann diese Plätzchen vor dem Servieren noch mit Puderzucker bestreuen",
                        "Natürlich kann auch jede andere Marmelade verwendet werden"
                    ],
                    "tags": ["gefuellt", "marmelade", "klassiker"]
                },
                "terrassen": {
                    "id": "terrassen",
                    "name": "Terrassen",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/terrassen.jpg",
                    "quelle": "Dr. Oetker",
                    "quantitative_angaben": {
                        "backtemperatur": "175",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "8-10",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 300, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 6, "einheit": "g", "typ": "backmittel" },
                        { "name": "Zucker", "menge": 100, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Butter", "menge": 150, "einheit": "g", "typ": "fett", "zustand": "kalt in Stückchen" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Frucht Gelee", "menge": 1, "einheit": "n.B.", "typ": "frucht" }
                    ],
                    "zubereitung": [
                        "Aus allen Zutaten rasch einen Teig kneten",
                        "Eine Stunde kalt stellen",
                        "Ofen auf 175°C vorheizen",
                        "Teig zwischen zwei Folien ausrollen und runde Plätzchen in drei Größen ausstechen",
                        "8-10 Minuten backen",
                        "Jeweils drei Plätzchen mit Gelee aufeinander kleben",
                        "Mit Puderzucker bestreuen"
                    ],
                    "anmerkungen": [
                        "Terrassen machen ein wenig Arbeit, werden aber sehr gerne gegessen",
                        "Die einzelnen 'Etagen' sollten dünn ausgerollt sein",
                        "Man kann natürlich jede Form ausstechen"
                    ],
                    "tags": ["etagen", "torte", "gelee", "aufwendig"]
                },

                "vanille-kipferl": {
                    "id": "vanille-kipferl",
                    "name": "Vanille Kipferl",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/vanille-kipferl.jpg",
                    "quelle": "Dr. Oetker",
                    "quantitative_angaben": {
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "10",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Zucker", "menge": 125, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Eigelb", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Butter", "menge": 200, "einheit": "g", "typ": "fett", "zustand": "kalt in kleinen Stückchen" },
                        { "name": "Mandeln", "menge": 125, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" }
                    ],
                    "zubereitung": [
                        "Alle Zutaten zügig zu einen Teig verarbeiten",
                        "Teig kurz kühl stellen",
                        "Ofen auf 180°C vorheizen",
                        "Teig zu daumendicken Rollen formen",
                        "Ca. 5 cm ausrollen und an den Enden spitz zulaufen lassen",
                        "Hörnchen formen",
                        "10 Minuten backen",
                        "Noch warm in Vanillezucker-Mandel-Mischung wälzen"
                    ],
                    "anmerkungen": [
                        "Hier lohnt sich eine doppelte Menge",
                        "Vanille Kipferl gehören zu den besonders gerne gegessenen Plätzchen"
                    ],
                    "tags": ["vanille", "kipferl", "mandel", "klassiker"]
                },

                "wespen-nester": {
                    "id": "wespen-nester",
                    "name": "Wespen Nester",
                    "kategorie": "weihnachtsgebaeck",
                    "unterkategorie": "eiweissgebaeck",
                    "bild": "images/rezepte/wespen-nester.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "130-150",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "25",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Eiweiß", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 250, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Schokolade", "menge": 125, "einheit": "g", "typ": "schokolade", "zustand": "gerieben" },
                        { "name": "Mandeln", "menge": 250, "einheit": "g", "typ": "nuesse", "zustand": "gehackt" }
                    ],
                    "zubereitung": [
                        "Eiweiß steif schlagen, dabei Zucker und Vanillezucker einrieseln lassen",
                        "Schokolade und Mandeln vorsichtig einarbeiten - nicht schlagen",
                        "Ofen auf 130-150°C vorheizen",
                        "Mit zwei Teelöffeln kleine Häufchen auf Backblech setzen",
                        "25 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Lockeres Eiweißgebäck mit 'Biss' durch die Mandel Stückchen"
                    ],
                    "tags": ["eiweiss", "mandel", "schokolade", "luftig"]
                },

                "yaponais": {
                    "id": "yaponais",
                    "name": "Yaponais",
                    "kategorie": "weihnachtsgebaeck", 
                    "unterkategorie": "eiweissgebaeck",
                    "bild": "images/rezepte/yaponais.jpg",
                    "quantitative_angaben": {
                        "backtemperatur": "150-175",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "8-10",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Eiweiß", "menge": 7, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 240, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 2, "einheit": "EL", "typ": "gewuerz" },
                        { "name": "Haselnüsse", "menge": 230, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Mehl", "menge": 50, "einheit": "g", "typ": "mehl" }
                    ],
                    "zubereitung": [
                        "Eiweiß steif schlagen, dabei Zucker und Vanillezucker einrieseln lassen",
                        "Nüsse und Mehl vorsichtig einarbeiten - nicht schlagen",
                        "Ofen auf 150-175°C vorheizen",
                        "Mit zwei Teelöffeln kleine Häufchen auf Backblech setzen",
                        "8-10 Minuten backen",
                        "Jeweils zwei Plätzchen mit Buttercreme füllen"
                    ],
                    "anmerkungen": [
                        "Sehr feines Gebäck mit herber Füllung"
                    ],
                    "tags": ["eiweiss", "haselnuss", "buttercreme", "fein"]
                },

                "zimt-plaetzchen": {
                    "id": "zimt-plaetzchen",
                    "name": "Zimt Plätzchen",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/zimt-plaetzchen.jpg",
                    "quelle": "Hans Reidel",
                    "quantitative_angaben": {
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C", 
                        "backzeit": "7",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 300, "einheit": "g", "typ": "mehl" },
                        { "name": "Puderzucker", "menge": 75, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Haselnüsse", "menge": 100, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Butter", "menge": 200, "einheit": "g", "typ": "fett", "zustand": "kalt in Würfeln" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Zimt", "menge": 3, "einheit": "TL", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Aus allen Zutaten rasch einen Teig kneten",
                        "Eine Stunde kalt stellen",
                        "Ofen auf 180°C vorheizen",
                        "Teig zwischen zwei Folien ausrollen und runde Plätzchen (4cm Ø) ausstechen",
                        "7 Minuten backen",
                        "Jeweils zwei Plätzchen mit Frucht Gelee zusammensetzen"
                    ],
                    "anmerkungen": [
                        "Uns schmecken die Plätzchen am besten mit Johannisbeer Gelee",
                        "Man kann das Gebäck auch mit einem Guß versehen - das lenkt aber vom fein-würzigen Geschmack ab"
                    ],
                    "tags": ["zimt", "haselnuss", "wuerzig", "marmelade"]
                },

                "zimt-sterne": {
                    "id": "zimt-sterne",
                    "name": "Zimt Sterne",
                    "kategorie": "weihnachtsgebaeck",
                    "bild": "images/rezepte/zimt-sterne.jpg",
                    "quelle": "Bäckermeister Felixe Rommel",
                    "quantitative_angaben": {
                        "backtemperatur": "150",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "15-20",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mandeln", "menge": 250, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Puderzucker", "menge": 325, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eiweiß", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Zimt", "menge": 10, "einheit": "g", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Eiweiß mit Salz anschlagen",
                        "Zucker zufügen und dick cremig aufschlagen",
                        "Etwa 1/3 der Masse für den Guss beiseite stellen",
                        "Zum Rest Mandeln zufügen und einarbeiten",
                        "Teig über Nacht oder 6 Stunden kalt stellen",
                        "Teig auf mit Mandelmehl bestreuter Arbeitsplatte 1 cm dick ausrollen",
                        "Ofen auf 150°C vorheizen",
                        "Sterne ausstechen - Ausstecher nach jedem Stern in Wasser tauchen",
                        "Sterne mit Eiweißmasse bestreichen",
                        "15-20 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Dieses Rezept funktioniert problemlos",
                        "Die Zimtsterne sind sehr schmackhaft",
                        "Der übliche Ärger mit klebrigen Teig bleibt erspart",
                        "Hilfreich: Teig zwischen zwei Backpapieren ausrollen"
                    ],
                    "tags": ["zimtsterne", "klassiker", "weihnachten", "mandel"]
                },
                "orangen-stangen": {
                    "id": "orangen-stangen",
                    "name": "Orangen Stangen",
                    "kategorie": "weihnachtsgebaeck", 
                    "bild": "images/rezepte/orangen-stangen.jpg",
                    "zutaten": [
                        { "name": "Mehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Butter", "menge": 150, "einheit": "g", "typ": "fett" },
                        { "name": "Zucker", "menge": 100, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eigelb", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Orangenschale", "menge": 1, "einheit": "EL", "typ": "gewuerz", "zustand": "gerieben" },
                        { "name": "Zimt", "menge": 1, "einheit": "TL", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Alle Zutaten zu einem Teig verkneten",
                        "Kalt stellen",
                        "Zu Stangen formen", 
                        "Bei 180°C 10-12 Minuten backen",
                        "Noch warm mit Orangen-Zucker bestreuen"
                    ],
                    "tags": ["orangen", "stangen", "zitrus", "einfach"]
                }
            }
        },
        
        "kuchen_torten": {
            "name": "Kuchen & Torten", 
            "beschreibung": "Süße Versuchungen für jeden Anlass",
            "rezepte": {
                "sachertorte": {
                    "id": "sachertorte",
                    "name": "Sacher Torte",
                    "kategorie": "kuchen_torten",
                    "bild": "images/rezepte/sachertorte.jpg",
                    "quelle": "Dr. Oetker",
                    "quantitative_angaben": {
                        "backform_groesse": "26 cm Ø",
                        "backtemperatur": "180", 
                        "backtemperatur_einheit": "°C",
                        "backzeit": "40",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Wiener Schokoladen-Klassiker - die berühmteste Torte Österreichs",
                    "zutaten": [
                        { "name": "Zartbitterschokolade", "menge": 150, "einheit": "g", "typ": "schokolade" },
                        { "name": "Butter", "menge": 160, "einheit": "g", "typ": "fett" },
                        { "name": "Eier", "menge": 6, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 160, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Beutel", "typ": "gewuerz" },
                        { "name": "Semmelbrösel", "menge": 100, "einheit": "g", "typ": "mehl" },
                        { "name": "Aprikosenmarmelade", "menge": 125, "einheit": "g", "typ": "frucht" },
                        { "name": "Zartbitterschokolade", "menge": 300, "einheit": "g", "typ": "schokolade" },
                        { "name": "Zucker", "menge": 90, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Wasser", "menge": 125, "einheit": "ml", "typ": "fluessigkeit" }
                    ],
                    "zubereitung": [
                        "Ofen auf 180°C vorheizen",
                        "Eier trennen, Eiweiß steif schlagen", 
                        "Butter geschmeidig rühren und Zucker nach und nach einarbeiten",
                        "Eigelbe nach und nach unterrühren",
                        "Geschmolzene Schokolade und Semmelbrösel langsam einarbeiten",
                        "Eischnee vorsichtig unterheben",
                        "Teig in Backform füllen und 40 Minuten backen",
                        "Kuchen halbieren und mit Marmelade füllen", 
                        "Torte mit restlicher Marmelade aprikotieren",
                        "Zucker und Wasser kochen bis Zucker gelöst ist",
                        "Schokolade nach und nach zufügen zu glatter Masse aufrühren",
                        "Torte mit Glasur überziehen"
                    ],
                    "anmerkungen": [
                        "Für kleinere Mengen Glasur: 200g Schokolade + 60g Zucker + 80ml Wasser",
                        "Oder 150g Schokolade + 45g Zucker + 63ml Wasser", 
                        "Oder 100g Schokolade + 30g Zucker + 41ml Wasser"
                    ],
                    "tags": ["schokolade", "oesterreich", "klassiker", "festlich"]
                },

                                "sauerkirsch-kuchen": {
                    "id": "sauerkirsch-kuchen", 
                    "name": "Sauerkirsch Kuchen",
                    "kategorie": "kuchen_torten",
                    "unterkategorie": "obstkuchen",
                    "bild": "images/rezepte/sauerkirsch-kuchen.jpg",
                    "quantitative_angaben": {
                        "backform_groesse": "26 cm Ø",
                        "backtemperatur": "175",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "40-45", 
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Saftiger Schokoladen-Kirsch-Kuchen - einer unserer Top 3!",
                    "zutaten": [
                        { "name": "Butter", "menge": 200, "einheit": "g", "typ": "fett" },
                        { "name": "Zucker", "menge": 170, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eier", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Bitterschokolade", "menge": 100, "einheit": "g", "typ": "schokolade", "zustand": "gerieben" },
                        { "name": "Haselnüsse", "menge": 125, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Mehl", "menge": 150, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 1, "einheit": "TL", "typ": "backmittel" },
                        { "name": "Zimt", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Sauerkirschen", "menge": 700, "einheit": "g", "typ": "frucht", "zustand": "Glas, abgetropft" }
                    ],
                    "zubereitung": [
                        "Ofen auf 175°C vorheizen",
                        "Eier trennen, Eiweiß steif schlagen",
                        "Butter geschmeidig rühren und Zucker nach und nach einarbeiten", 
                        "Eigelbe nach und nach unterrühren",
                        "Schokolade, Nüsse und Gewürze zugeben",
                        "Eischnee vorsichtig unterheben",
                        "Teig in Backform füllen",
                        "Gut abgetropfte Kirschen darauf gleichmäßig verteilen",
                        "40-45 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Dieser saftige Kuchen gehört zu den 'Top 3' bei uns im Hause",
                        "Man kann den Kuchen maximal lange im Ofen lassen für trockenere Konsistenz",
                        "Ich lasse ihn immer sehr knapp im Ofen, damit er ein wenig 'knatschig' bleibt"
                    ],
                    "tags": ["kirschen", "schokolade", "nussig", "saftig", "familienliebling"]
                },

                "schokoladen-nuss-kuchen": {
                    "id": "schokoladen-nuss-kuchen",
                    "name": "Schokoladen-Nuss-Kuchen", 
                    "kategorie": "kuchen_torten", 
                    "bild": "images/rezepte/schokoladen-nuss-kuchen.jpg",
                    "beschreibung": "Kein Mehl - nur Eiweiß! Ideal für Gäste mit Mehlunverträglichkeit",
                    "quantitative_angaben": {
                        "backform_groesse": "Springform",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C", 
                        "backzeit": "45",
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Eiweiß", "menge": 6, "einheit": "Stück", "typ": "eier" },
                        { "name": "Haselnüsse", "menge": 180, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Schokolade", "menge": 120, "einheit": "g", "typ": "schokolade", "zustand": "gerieben" },
                        { "name": "Zucker", "menge": 120, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 0.5, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Rum oder Amaretto", "menge": 1, "einheit": "EL", "typ": "alkohol" },
                        { "name": "Backpulver", "menge": 1.5, "einheit": "TL", "typ": "backmittel" }
                    ],
                    "zubereitung": [
                        "Eiweiß mit Zucker und Vanillezucker zu sehr festem Schnee schlagen",
                        "Backpulver und Alkohol hinzufügen",
                        "Nüsse und Schokolade unterheben", 
                        "Ofen auf 180°C vorheizen",
                        "Masse in Springform füllen",
                        "45 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Das Rezept ist recht nützlich, wenn Sie Gäste erwarten, die kein Mehl vertragen",
                        "Unsonder ist es schlichtweg eine gute Verwertungsmöglichkeit für übrig gebliebenes Eiweiß",
                        "Für kleinere Mengen: 4 Eiweiß + 120g Nüsse + 80g Schokolade + 80g Zucker"
                    ],
                    "tags": ["mehlfrei", "nussig", "schokolade", "eiweiss"]
                },

                "mandelkuchen": {
                    "id": "mandelkuchen",
                    "name": "Mandelkuchen", 
                    "kategorie": "kuchen_torten",
                    "bild": "images/rezepte/mandelkuchen.jpg",
                    "beschreibung": "Unglaublich lockerer, duftiger Kuchen - eigentlich ein Mandelbiskuit",
                    "quantitative_angaben": {
                        "backform_groesse": "18 cm Springform", 
                        "backtemperatur": "160",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "50",
                        "backzeit_einheit": "Minuten",
                        "portionen": "2 Personen"
                    },
                    "zutaten": [
                        { "name": "Mandeln", "menge": 250, "einheit": "g", "typ": "nuesse", "zustand": "fein gemahlen" },
                        { "name": "Eier", "menge": 8, "einheit": "Stück", "typ": "eier" },
                        { "name": "Puderzucker", "menge": 250, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Zimt", "menge": 1, "einheit": "Msp", "typ": "gewuerz" },
                        { "name": "Vanilleschote", "menge": 1, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Orange", "menge": 1, "einheit": "Stück", "typ": "frucht", "zustand": "Bio, nur Abrieb" },
                        { "name": "Butter", "menge": 50, "einheit": "g", "typ": "fett" }
                    ],
                    "zubereitung": [
                        "Ofen auf 160°C Umluft vorheizen",
                        "Eigelb mit gesiebten Puderzucker schaumig schlagen",
                        "Zimt, Vanillemark und Orangenabrieb untermischen", 
                        "Mandeln abwechselnd mit zerlassener Butter unter den Teig heben",
                        "Eiweiß sehr steif schlagen und vorsichtig unter den Teig heben",
                        "Teig in gebutterte, mit Semmelbröseln ausgestreute Backform geben",
                        "50 Minuten backen",
                        "Nach dem Auskühlen mit Puderzucker bestreuen"
                    ],
                    "anmerkungen": [
                        "Genau genommen kann man ihn als 'Mandelbiskuit' bezeichnen",
                        "Geht auch lauwarm als Dessert mit Vanilleeis und Orangenfilets",
                        "Man kann diesen Mandelbiskuit auch als Basis für eine Torte nehmen",
                        "Ich habe ihn mit Französischer Mandel Creme gefüllt - köstlich!"
                    ],
                    "tags": ["mandel", "biskuit", "luftig", "fein", "dessert"]
                },

                "franzoesischer-napfkuchen": {
                    "id": "franzoesischer-napfkuchen",
                    "name": "Französischer Napfkuchen", 
                    "kategorie": "kuchen_torten",
                    "unterkategorie": "gugelhupf",
                    "bild": "images/rezepte/franzoesischer-napfkuchen.jpg",
                    "quantitative_angaben": {
                        "backform_groesse": "22 cm Ø Gugelhupf",
                        "backtemperatur": "175-200",
                        "backtemperatur_einheit": "°C", 
                        "backzeit": "60",
                        "backzeit_einheit": "Minuten"
                    },
                    "geschichte": "Ola mein Granatult hatte an einem Ostertag Geburtstag, wollte ich ihm einen Kuchen backen. Ich hatte noch 6 Eier im Haus und habe unter diesem Aspekt ein passendes Rezept gesucht. Et voilà!",
                    "zutaten": [
                        { "name": "Butter", "menge": 250, "einheit": "g", "typ": "fett" },
                        { "name": "Zucker", "menge": 250, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Eier", "menge": 6, "einheit": "Stück", "typ": "eier" },
                        { "name": "Mehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 6, "einheit": "g", "typ": "backmittel" },
                        { "name": "Schokolade", "menge": 250, "einheit": "g", "typ": "schokolade", "zustand": "gerieben" },
                        { "name": "Mandeln", "menge": 100, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" }
                    ],
                    "zubereitung": [
                        "Butter schaumig schlagen",
                        "Zucker, Vanillezucker und Eier nach und nach zugeben",
                        "Mehl und Backpulver darüber sieben und weiterrühren", 
                        "Schokolade und Mandeln unterrühren",
                        "Ofen auf 175-200°C vorheizen",
                        "Gugelhupf-Form ausfetten und Teig einfüllen",
                        "Etwa eine Stunde backen und abkühlen lassen",
                        "Nach Belieben mit Puderzucker bestreuen oder mit Glasur überziehen"
                    ],
                    "tags": ["gugelhupf", "schokolade", "frankreich", "eier"]
                },

                "schokoladen-muffins": {
                    "id": "schokoladen-muffins",
                    "name": "Schokoladen Muffins", 
                    "kategorie": "kuchen_torten",
                    "unterkategorie": "kleingebaeck",
                    "bild": "images/rezepte/schokoladen-muffins.jpg",
                    "beschreibung": "Auch geeignet als Tortenboden für Cassis-Profi-Torte",
                    "quantitative_angaben": {
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "25", 
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Butter", "menge": 125, "einheit": "g", "typ": "fett", "zustand": "weich" },
                        { "name": "Zucker", "menge": 150, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zartbitterschokolade", "menge": 200, "einheit": "g", "typ": "schokolade", "zustand": "gerieben" },
                        { "name": "Mehl", "menge": 200, "einheit": "g", "typ": "mehl" },
                        { "name": "Backkakao", "menge": 4, "einheit": "EL", "typ": "kakao" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Backpulver", "menge": 1, "einheit": "TL", "typ": "backmittel" },
                        { "name": "Milch", "menge": 175, "einheit": "ml", "typ": "milch" }
                    ],
                    "zubereitung": [
                        "Butter mit Zucker und Vanillezucker verrühren",
                        "Eier unterrühren",
                        "Zartbitterschokolade reiben", 
                        "Ofen auf 180°C (Umluft: 160°C) vorheizen",
                        "Mehl mit Kakaopulver, Salz und Backpulver vermischen",
                        "Mehlmischung mit der Milch zur Butter-Zuckermischung geben und gut verrühren",
                        "Schokolade unterheben",
                        "Muffinblech mit Förmchen auslegen und Teig verteilen",
                        "25 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Beim ersten Versuch 72%ige Schokolade verwendet - Muffins werden sehr herrlich",
                        "Für Kinder oder 'Zartbesaitete' empfehle ich 60% Schokolade",
                        "Dieser Teig lässt sich gut als Tortenboden verwenden"
                    ],
                    "tags": ["muffins", "schokolade", "kleingebaeck", "tortenboden"]
                },

                "einzer-torte": {
                    "id": "einzer-torte",
                    "name": "Einzer Torte", 
                    "kategorie": "kuchen_torten",
                    "bild": "images/rezepte/einzer-torte.jpg",
                    "quantitative_angaben": {
                        "backform_groesse": "26 cm Springform",
                        "backtemperatur": "175-200",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "25-30", 
                        "backzeit_einheit": "Minuten"
                    },
                    "zutaten": [
                        { "name": "Mehl", "menge": 200, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 3, "einheit": "g", "typ": "backmittel" },
                        { "name": "Zucker", "menge": 125, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanillezucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Nelken", "menge": 1, "einheit": "Msp", "typ": "gewuerz", "zustand": "gemahlen" },
                        { "name": "Zimt", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Eiweiß", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eigelb", "menge": 0.5, "einheit": "Stück", "typ": "eier" },
                        { "name": "Butter", "menge": 125, "einheit": "g", "typ": "fett", "zustand": "kalt" },
                        { "name": "Mandeln", "menge": 125, "einheit": "g", "typ": "nuesse", "zustand": "gemahlen" },
                        { "name": "Konfitüre", "menge": 100, "einheit": "g", "typ": "frucht" }
                    ],
                    "zubereitung": [
                        "Mehl und Backpulver mischen. Vertiefung in Mitte machen",
                        "Zucker, Vanillezucker, Gewürze, Eiweiß und Eigelb zu dickem Brei mischen",
                        "Butter in Stücke scheiden und zu Brei geben", 
                        "Gemahlene Mandeln darüberstreuen und zu Teig verkneten",
                        "Kalt stellen",
                        "Hälfte des Teigs auf Springform-Boden ausrollen",
                        "Ofen auf 175-200°C vorheizen",
                        "Andere Hälfte ausrollen und 16-20 gleich breite Streifen schneiden",
                        "Boden mit Konfitüre bestreichen",
                        "Teigstreifen gitterförmig darüber legen",
                        "Mit Eigelb-Milch-Mischung bestreichen",
                        "25-30 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Ich mache diese 'Torte' gerne als Blechkuchen und schneide sie in mundgerechte Stückchen",
                        "Lässt sich gut längere Zeit in Blechdosen aufbewahren"
                    ],
                    "tags": ["gitter", "konfituere", "blechkuchen", "streusel"]
                }, 
                    "biskuit-boeden": {
                    "id": "biskuit-boeden",
                    "name": "Biskuit Böden",
                    "kategorie": "kuchen-torten",
                    "unterkategorie": "biskuit",
                    "bild": "images/rezepte/biskuit-boeden.jpg",
                    "quelle": "Familienrezept",
                    "quantitative_angaben": {
                        "portionen": "1 Boden 26cm",
                        "backtemperatur": "175-200",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "40-50",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Grundrezept für Biskuitböden in verschiedenen Größen",
                    "geschichte": "Basierrezept für viele Torten und Desserts",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Feiner Zucker", "menge": 150, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Mehl 405", "menge": 100, "einheit": "g", "typ": "mehl" },
                        { "name": "Stärkemehl", "menge": 50, "einheit": "g", "typ": "mehl" },
                        { "name": "Eiweiß", "menge": 6, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eigelb", "menge": 6, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Gut gekühltes Eiweiß sehr steif schlagen",
                        "Zucker nach und nach einarbeiten",
                        "Verquirfte Eigelbe und gesiebte Mehl-Stärke Mischung über den Eischnee sieben",
                        "Vorsichtig unterheben",
                        "Teig sofort in gebutterte Form füllen",
                        "Im vorgeheizten Ofen bei 175-200°C 40-50 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Und hier eine Tabelle für kleinere Teigmengen:",
                        "<table class='recipe-table'><thead><tr><th>Eiweiß</th><th>Eigelb</th><th>Zucker</th><th>Mehl</th><th>Stärkemehl</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>25g</td><td>16g</td><td>8g</td></tr><tr><td>2</td><td>2</td><td>50g</td><td>32g</td><td>16g</td></tr><tr><td>3</td><td>3</td><td>75g</td><td>48g</td><td>24g</td></tr><tr><td>4</td><td>4</td><td>100g</td><td>64g</td><td>32g</td></tr><tr><td>5</td><td>5</td><td>125g</td><td>80g</td><td>40g</td></tr></tbody></table>"
                    ],
                    "tags": ["biskuit", "grundrezept", "tortenboden", "einfach"]
                },
                                "kirsch-plotzer": {
                    "id": "kirsch-plotzer",
                    "name": "Kirsch Plotzer",
                    "kategorie": "kuchen-torten",
                    "unterkategorie": "blechkuchen",
                    "bild": "images/rezepte/kirsch-plotzer.jpg",
                    "quelle": "Professionelles Bäckerei Rezept",
                    "quantitative_angaben": {
                        "portionen": "1 Springform 28cm",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "ca. 30",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Professioneller Kirschkuchen mit Haselnüssen",
                    "geschichte": "Dieses Rezept ist von einem Profi-Bäcker und verwendet deshalb die etwas ungewöhnliche Mengenangabe von Gramm für Eiweiß und Eigelb.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Butter", "menge": 100, "einheit": "g", "typ": "fett" },
                        { "name": "Eigelb", "menge": 120, "einheit": "g", "typ": "eier" },
                        { "name": "Zimt", "menge": 2, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Kardamon", "menge": 1, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Eiweiß", "menge": 180, "einheit": "ml", "typ": "eier" },
                        { "name": "Zucker", "menge": 170, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Mehl", "menge": 10, "einheit": "g", "typ": "mehl" },
                        { "name": "Haselnüsse", "menge": 200, "einheit": "g", "typ": "nuesse" },
                        { "name": "Sauerkirschen", "menge": 1100, "einheit": "g", "typ": "obst" }
                    ],
                    "zubereitung": [
                        "Eiweiß und Zucker zu steifem Schnee aufschlagen",
                        "Nun die leicht erwärmte Butter in eine Kessel aufschlagen und nach und nach Eigelb, Gewürze und Haselnüsse einarbeiten",
                        "Eiweiß unterheben",
                        "Kirschen unterheben",
                        "Ofen auf 180 Grad vorheizen",
                        "Teig in eine Springform (28cm) einfüllen. Kurz 'aufstoßen'",
                        "Den Kirschenplotzer nach dem Auskühlen mit Puderzucker bestäuben"
                    ],
                    "anmerkungen": [
                        "Mit den oben angegebenen 'üblichen' Mengenangaben kommt man gut hin.",
                        "Entspricht etwa 6-7 Eigelb und 7 Eiweiß"
                    ],
                    "tags": ["kirschen", "haselnuesse", "blechkuchen", "professionell"]
                },

                "philadelphia-torte": {
                    "id": "philadelphia-torte",
                    "name": "Philadelphia Torte",
                    "kategorie": "kuchen-torten", 
                    "unterkategorie": "kaesekuchen",
                    "bild": "images/rezepte/philadelphia-torte.jpg",
                    "quelle": "Englischer Käsekuchen",
                    "quantitative_angaben": {
                        "portionen": "1 Springform 24cm",
                        "backtemperatur": "140",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "50",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Leichter Käsekuchen nach englischer Art",
                    "geschichte": "Ein herrlicher Käsekuchen, der nicht so schwer und üppig ist wie die meisten seiner 'Artgenossen'.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Zwieback", "menge": 12, "einheit": "Stück", "typ": "boden" },
                        { "name": "Butter", "menge": 50, "einheit": "g", "typ": "fett" },
                        { "name": "Zucker", "menge": 60, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eier", "menge": 6, "einheit": "Stück", "typ": "eier" },
                        { "name": "Doppelrahm Frischkäse", "menge": 600, "einheit": "g", "typ": "kaese" },
                        { "name": "Zucker", "menge": 150, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Saure Sahne", "menge": 100, "einheit": "g", "typ": "milchprodukt" },
                        { "name": "Zitrone (Saft und Abrieb)", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Backpulver", "menge": 1, "einheit": "TL", "typ": "backmittel" },
                        { "name": "Speisestärke", "menge": 4, "einheit": "EL", "typ": "mehl" }
                    ],
                    "zubereitung": [
                        "Backofen auf 140° vorheizen",
                        "Für den Boden die Zwieback zerbröseln und mit Zucker und Butter zu einer Bröselmasse verkneten. Mit dieser den Boden einer Backform (24cm Ø) auskleiden",
                        "Eier in Gelb und Weiß trennen",
                        "Mit dem Eigelb und allen anderen Zutaten eine Creme rühren",
                        "Sehr steifen Eischnee unterziehen und die Masse auf den Boden geben",
                        "Etwa 50 Minuten backen"
                    ],
                    "anmerkungen": [],
                    "tags": ["kaesekuchen", "englisch", "leicht", "frischkaese"]
                },

                "portugiesischer-mandelkuchen": {
                    "id": "portugiesischer-mandelkuchen", 
                    "name": "Portugiesischer Mandelkuchen",
                    "kategorie": "kuchen-torten",
                    "unterkategorie": "mandelkuchen",
                    "bild": "images/rezepte/portugiesischer-mandelkuchen.jpg",
                    "quelle": "Faucinho Do Céu",
                    "quantitative_angaben": {
                        "portionen": "1 Kuchenform",
                        "backtemperatur": "200", 
                        "backtemperatur_einheit": "°C",
                        "backzeit": "35",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Himmlischer Mandelkuchen - 'Speck vom Himmel'",
                    "geschichte": "Übersetzt heißt dieser Kuchen 'Speck von Himmel'. Das sagt eigentlich alles. Der Kuchen ist wahrhaft himmlisch und üppig ohne Ende.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Eigelb", "menge": 12, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eiweiß", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 500, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Wasser", "menge": 2, "einheit": "dl", "typ": "fluessigkeit" },
                        { "name": "Mandeln, gemahlen", "menge": 250, "einheit": "g", "typ": "nuesse" },
                        { "name": "Mehl", "menge": 15, "einheit": "g", "typ": "mehl" },
                        { "name": "Butter", "menge": 50, "einheit": "g", "typ": "fett" }
                    ],
                    "zubereitung": [
                        "Ofen auf 200° vorheizen",
                        "Die Eigelb und das Eiweiß schaumig schlagen", 
                        "Die weiche Butter mit dem Mehl verkneten und beiseite stellen",
                        "Den Zucker in einem Töpfchen mit 2 dl Wasser auflösen, sodass ein klarer Sirup entsteht",
                        "Hierzu erst die Eimasse, dann die Mandeln einrühren",
                        "Auf kleiner Flamme verrühren und die Mehl-Butter einrühren, bis die Creme langsam eindickt",
                        "In eine Kuchenform füllen und glatt streichen",
                        "35 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Nach dem vollständigen Auskühlen mit Puderzucker bestreuen",
                        "Viel kann der Normalbürger davon nicht essen - sehr üppig!",
                        "Portugiesische Süßspeisen bestehen aus viel Zucker und noch mehr Eiern; oder umgekehrt."
                    ],
                    "tags": ["portugiesisch", "mandeln", "ueppig", "traditionell"]
                },
                                "portugiesische-mandeltarte": {
                    "id": "portugiesische-mandeltarte",
                    "name": "Portugiesische Mandeltarte", 
                    "kategorie": "kuchen-torten",
                    "unterkategorie": "tarte",
                    "bild": "images/rezepte/portugiesische-mandeltarte.jpg",
                    "quelle": "Tarte de Amêndoa",
                    "quantitative_angaben": {
                        "portionen": "1 Tarteform 28cm",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C", 
                        "backzeit_boden": "15",
                        "backzeit_gesamt": "15",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Salzig-knackige Mandeltarte",
                    "geschichte": "Ein unheimlich salzig-knackige Tarte. Sie sollte rasch verzehren werden.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Zucker", "menge": 150, "einheit": "g", "typ": "suessungsmittel", "teil": "boden" },
                        { "name": "Mehl", "menge": 180, "einheit": "g", "typ": "mehl", "teil": "boden" },
                        { "name": "Butter, flüssig", "menge": 90, "einheit": "g", "typ": "fett", "teil": "boden" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier", "teil": "boden" },
                        { "name": "Milch", "menge": 2, "einheit": "EL", "typ": "milchprodukt", "teil": "boden" },
                        { "name": "Salz", "menge": 1, "einheit": "Prise", "typ": "gewuerz", "teil": "boden" },
                        { "name": "Butter, weich", "menge": 100, "einheit": "g", "typ": "fett", "teil": "belag" },
                        { "name": "Zucker", "menge": 100, "einheit": "g", "typ": "suessungsmittel", "teil": "belag" },
                        { "name": "Mandelblättchen", "menge": 150, "einheit": "g", "typ": "nuesse", "teil": "belag" },
                        { "name": "Milch", "menge": 6, "einheit": "EL", "typ": "milchprodukt", "teil": "belag" }
                    ],
                    "zubereitung": [
                        "Ofen auf 180° vorheizen",
                        "Boden aus den angegebenen Zutaten mehrere Minuten rühren. In Kuchenform (28cm Ø) füllen und 15 Minuten goldgelb backen. Auskühlen lassen",
                        "Für den Belag alle Zutaten in einem Topf schmelzen und kurz aufkochen",
                        "Auf den Boden gießen",
                        "Bei 200° Oberhitze etwa 15 Minuten karamellisieren"
                    ],
                    "anmerkungen": [],
                    "tags": ["portugiesisch", "mandeln", "tarte", "karamell"]
                },

                "schoko-gewuerz-schnitten": {
                    "id": "schoko-gewuerz-schnitten",
                    "name": "Schoko-Gewürz Schnitten", 
                    "kategorie": "kuchen-torten",
                    "unterkategorie": "blechkuchen",
                    "bild": "images/rezepte/schoko-gewuerz-schnitten.jpg",
                    "quelle": "Schneller lockerer Blechkuchen",
                    "quantitative_angaben": {
                        "portionen": "1 Backblech",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "20", 
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Schneller Gewürz-Blechkuchen mit Schokolade",
                    "geschichte": "Das Rezept ist für ein handelsübliches Backblech ausgelegt.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Eier", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Feiner Zucker", "menge": 300, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Butter", "menge": 250, "einheit": "g", "typ": "fett" },
                        { "name": "Vanille Zucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Backpulver", "menge": 1, "einheit": "Päckchen", "typ": "backmittel" },
                        { "name": "Lebkuchengewürz", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Schokoladenpudding", "menge": 1, "einheit": "Beutel", "typ": "pulver" },
                        { "name": "Mehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Milch", "menge": 125, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Rum", "menge": 2, "einheit": "EL", "typ": "alkohol" }
                    ],
                    "zubereitung": [
                        "Butter und Zucker aufschlagen",
                        "Eier hinzufügen - Weiterrühren", 
                        "Restliche Zutaten klumpenfrei einarbeiten",
                        "Ofen auf 180 Grad vorheizen",
                        "Die Masse 2 cm dick auf ein Backblech aufstreichen",
                        "Etwa 20 Minuten backen",
                        "Teigplatte heraus nehmen und noch warm mit Aprikosenkonfitüre einstreichen",
                        "Nach dem Erkalten mit herben Schokoladenguss überziehen",
                        "Nach dem Erkalten in Würfel, Schnitten oder Rechtecke schneiden"
                    ],
                    "anmerkungen": [
                        "Ich nehme immer die halbe Menge und einen Backrahmen auf 21x25 cm eingestellt.",
                        "Die 'kleine' Portion reicht locker für ein 'Teedündchen' mit 6 Personen.",
                        "Wer mag, kann Schlagrahm dazu reichen."
                    ],
                    "tags": ["blechkuchen", "gewuerze", "schokolade", "schnell"]
                },

                "zitronen-tarte": {
                    "id": "zitronen-tarte",
                    "name": "Zitronen Tarte",
                    "kategorie": "kuchen-torten",
                    "unterkategorie": "tarte", 
                    "bild": "images/rezepte/zitronen-tarte.jpg",
                    "quelle": "Fruchtig - Frisch",
                    "quantitative_angaben": {
                        "portionen": "1 Tarteform 20cm",
                        "backtemperatur": "190",
                        "backtemperatur_einheit": "°C",
                        "backzeit_boden": "25-30", 
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Erfrischende Zitronentarte - Sommer pur",
                    "geschichte": "Diese Tarte ist Sommer pur. Vorsicht! Kleine Stücke schneiden - sehr sättigend!",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Eigelb", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eier", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 180, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Zitronen Saft", "menge": 180, "einheit": "ml", "typ": "obst" },
                        { "name": "Zitronenabrieb", "menge": 2, "einheit": "EL", "typ": "gewuerz" },
                        { "name": "Butter", "menge": 185, "einheit": "g", "typ": "fett" },
                        { "name": "Mürbeteig", "menge": 1, "einheit": "Grundrezept", "typ": "teig" }
                    ],
                    "zubereitung": [
                        "Tarteform mit dem Teig auslegen. Ränder 1 cm Hoch. Teig samt Form in den Tiefkühler stellen",
                        "Backofen auf 190° vorheizen",
                        "Füllung zubereiten: In einem Topf alle Zutaten mischen und auf dem Herd auf kleiner Hitze erwärmen",
                        "Vorsichtig mit dem Schneebesen aufschlagen bis die Masse dick wird",
                        "Masse auskühlen und mittlerweile Boden ca. 25-30 Minuten Backen", 
                        "Masse auf den Boden geben und für 2-3 Stunden in den Kühlschrank stellen"
                    ],
                    "anmerkungen": [
                        "Wir nehmen eine Tarte Form mit 20 cm Ø und ein Drittel der Füllung. Das reicht locker für vier Personen.",
                        "Wenn Sie keine Erfahrung mit dem Aufschlagen von warmen Einassen haben, verwenden Sie ein Wasserbad, damit Sie nicht körnig 'Rührei' im Topf haben."
                    ],
                    "tags": ["zitrone", "tarte", "erfrischend", "sommer", "sauer"]
                }
            }
        }, "desserts": {
        "name": "Desserts & Nachspeisen", 
        "beschreibung": "Süße Abschlüsse und leichte Nachspeisen",
        "rezepte": {
            "bayerische-creme": {
                "id": "bayerische-creme",
                "name": "Bayerische Creme",
                "kategorie": "desserts",
                "unterkategorie": "cremes",
                "bild": "images/rezepte/bayerische-creme.jpg",
                "quelle": "Alfons Schuhbeck",
                "quantitative_angaben": {
                    "portionen": "4-6 Personen",
                    "kuehlzeit": "2-12",
                    "kuehlzeit_einheit": "Stunden"
                },
                "beschreibung": "Leichte Variante der klassischen Bayerischen Creme",
                "geschichte": "Diese Creme ist leichter und einfacher zu machen als die klassische Bayrische Creme.",
                "schwierigkeitsgrad": "einfach",
                "zutaten": [
                    { "name": "Gelatine", "menge": 2, "einheit": "Blatt", "typ": "bindemittel" },
                    { "name": "Vanille Schoten", "menge": 2, "einheit": "Stück", "typ": "gewuerz" },
                    { "name": "Eigelb", "menge": 3, "einheit": "Stück", "typ": "eier" },
                    { "name": "Zucker", "menge": 70, "einheit": "g", "typ": "suessungsmittel" },
                    { "name": "Kirschwasser", "menge": 1, "einheit": "EL", "typ": "alkohol", "optional": true },
                    { "name": "Schlagrahm", "menge": 300, "einheit": "ml", "typ": "milchprodukt" }
                ],
                "zubereitung": [
                    "Gelatine in kaltem Wasser einweichen",
                    "Vanille Schoten der Länge nach halbieren und Mark auskratzen",
                    "Eigelb, Zucker und Mark zu einer dicken hellen Masse aufschlagen",
                    "Ausgedrückte Gelatine in einem kleinen Topf mit Kirschwasser bei kleiner Hitze auflösen",
                    "Rahm steif schlagen",
                    "Etwas Schlagrahm mit Gelatine mischen und unter die Eicreme rühren",
                    "Restliche Schlagsahne unter die Masse heben. Nicht feste rühren!",
                    "In Portionsförmchen oder eine Schüssel füllen",
                    "Mindestens 2 Stunden kalt stellen. Besser über Nacht"
                ],
                "anmerkungen": [
                    "Zur Abwechslung können Sie statt Vanille auch Rum, Weinbrand oder einen aromatischen Likör verwenden.",
                    "Oder Sie schichten die Creme mit Obst und gerösteten Nüssen in eine Schüssel.",
                    "Zitat von A. Schuhbeck: 'Diese Creme ist leichter und einfacher zu machen als die klassische Bayrische Creme.'"
                ],
                "tags": ["creme", "vanille", "schuhbeck", "klassiker", "leicht"]
            }
        }
    }
};

// Hilfsfunktionen
const RecipeManager = {
    searchRecipes: function(searchTerm) {
        const results = [];
        searchTerm = searchTerm.toLowerCase();
        
        for (const categoryKey in recipeDatabase.kategorien) {
            const category = recipeDatabase.kategorien[categoryKey];
            for (const recipeKey in category.rezepte) {
                const recipe = category.rezepte[recipeKey];
                
                if (recipe.name.toLowerCase().includes(searchTerm) ||
                    (recipe.beschreibung && recipe.beschreibung.toLowerCase().includes(searchTerm)) ||
                    this.searchInIngredients(recipe.zutaten, searchTerm)) {
                    results.push({
                        ...recipe,
                        kategorieName: category.name
                    });
                }
            }
        }
        return results;
    },
    
    searchInIngredients: function(ingredients, searchTerm) {
        return ingredients.some(ingredient => 
            ingredient.name.toLowerCase().includes(searchTerm)
        );
    },
    
    getRecipeById: function(recipeId) {
        for (const categoryKey in recipeDatabase.kategorien) {
            const category = recipeDatabase.kategorien[categoryKey];
            if (category.rezepte[recipeId]) {
                return {
                    ...category.rezepte[recipeId],
                    kategorieName: category.name
                };
            }
        }
        return null;
    },
    
    getRecipesByCategory: function(categoryKey) {
        const category = recipeDatabase.kategorien[categoryKey];
        if (!category) return [];
        
        return Object.values(category.rezepte).map(recipe => ({
            ...recipe,
            kategorieName: category.name
        }));
    },
    
    getAllCategories: function() {
        const categories = [];
        for (const categoryKey in recipeDatabase.kategorien) {
            const category = recipeDatabase.kategorien[categoryKey];
            categories.push({
                key: categoryKey,
                name: category.name,
                beschreibung: category.beschreibung,
                rezeptAnzahl: Object.keys(category.rezepte).length
            });
        }
        return categories;
    }
};
