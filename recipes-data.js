// Reibels Skizzenbücher - Familienkochbuch
// TEIL 1: Weihnachtsgebäck (25 Rezepte)

const recipeDatabase = {
    "kategorien": {
   
        "salate-vorspeisen": {
            "name": "Salate & Vorspeisen", 
            "beschreibung": "Leichte Vorspeisen und frische Salate",
            "rezepte": {
                // Hier werden später Rezepte wie Vitello Tonato, Yam Nua etc. hin verschoben
            }
        },
      
      "hauptgerichte": {
            "name": "Hauptgerichte",
            "beschreibung": "Deftige und feine Gerichte für den Hauptgang",
            "rezepte": {
            
                "allongigas-in-tomatensosse": {
                    "id": "allongigas-in-tomatensosse",
                    "name": "Allonbigas in Tomaten Soße",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "fleisch",
                    "bild": "images/rezepte/allongigas-in-tomatensosse.jpg",
                    "quelle": "Flans Reidel",
                    "quantitative_angaben": {
                        "portionen": "4-5 Personen als Hauptspeise",
                        "vorbereitungszeit": "30 Minuten"
                    },
                    "beschreibung": "Fleischbällchen in Tomatensoße als Vorspeise oder Hauptgericht",
                    "geschichte": "Als Vorspeise oder Snack reicht das mit Brot locker für 8-10 Personen.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Gemischtes Hackfleisch (Rind/Schwein)", "menge": 500, "einheit": "g", "typ": "fleisch", "teil": "baellchen" },
                        { "name": "Semmel", "menge": 1, "einheit": "Stück", "typ": "brot", "teil": "baellchen" },
                        { "name": "Zwiebel, sehr fein geschnitten", "menge": 1, "einheit": "Stück", "typ": "gemuese", "teil": "baellchen" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier", "teil": "baellchen" },
                        { "name": "Gewürze (Salz, Pfeffer, Kreuzkümmel, Ingwer, Senf, Knoblauchpulver)", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz", "teil": "baellchen" },
                        { "name": "Zwiebel, mittlere Größe", "menge": 1, "einheit": "Stück", "typ": "gemuese", "teil": "sosse" },
                        { "name": "Paprika rot und gelb", "menge": 2, "einheit": "Stück", "typ": "gemuese", "teil": "sosse" },
                        { "name": "Grob gewürfelte Tomaten (Dose)", "menge": 200, "einheit": "g", "typ": "gemuese", "teil": "sosse" },
                        { "name": "Tomatenmark", "menge": 1, "einheit": "EL", "typ": "gemuese", "teil": "sosse" },
                        { "name": "Rotwein", "menge": 125, "einheit": "ml", "typ": "wein", "teil": "sosse" },
                        { "name": "Brühe", "menge": 0, "einheit": "nach Bedarf", "typ": "fluessigkeit", "teil": "sosse" },
                        { "name": "Gewürze (Salz, Pfeffer, Zucker, Kreuzkümmel, Knoblauch Pulver, Chillie Paste, Petersilie)", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz", "teil": "sosse" }
                    ],
                    "zubereitung": [
                        "Für die Bällchen: die eingeweichte Semmel mit den Eiern mischen. Zwiebeln in Olivenöl weich dünsten. Alles mit dem Hackfleisch mischen und kräftig würzen",
                        "Bällchen formen, in Mehl wälzen und in Öl schwimmend ausbacken. Auf Küchenkrepp abtropfen lassen",
                        "Für die Soße: Zwiebel und Paprika in Olivenöl andünsten; mit Tomatenmark mischen. Durchbraten, die Tomatenstücke zufügen und mit Wein ablöschen",
                        "Mit Brühe zur gewünschten Konsistenz auffüllen und einkochen",
                        "Am Ende die Bällchen hinzufügen; nicht mehr kochen lassen. Mit reichlich Petersilie und Koriander mischen",
                        "Zum Aufwärmen: Behutsam bei mittlerer Hitze"
                    ],
                    "anmerkungen": [
                        "Einen besonderen Geschmack kann man erzielen, wenn man beim Aufwärmen einen Schluck Sherry mit zufügt",
                        "Diese Kräuter weglassen, wenn man das Gericht erst am nächsten Tag verwenden will"
                    ],
                    "tags": ["fleischbaellchen", "tomatensosse", "spanisch", "deftig", "vorspeise"]
                },

                "apfel-chutney": {
                    "id": "apfel-chutney",
                    "name": "Apfel Chutney",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "beilagen",
                    "bild": "images/rezepte/apfel-chutney.jpg",
                    "quelle": "Mit Chilli und Ingwer",
                    "quantitative_angaben": {
                        "portionen": "ca. 4 Gläser",
                        "kochzeit": "60",
                        "kochzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Würziges Apfel-Chutney mit Chili und Ingwer",
                    "geschichte": "Ein herrhaftes Chutney, das zu vielen Dingen wie etwa gekochten und gebratenen Fleisch passt.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Äpfel, geschält und gewürfelt", "menge": 1000, "einheit": "g", "typ": "obst" },
                        { "name": "Zwiebeln, fein gehackt", "menge": 200, "einheit": "g", "typ": "gemuese" },
                        { "name": "Brauner Zucker", "menge": 200, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Ingwer, sehr fein gehackt", "menge": 25, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Chilli Schoten", "menge": 2, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Salz", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Gewürze (Zimtstange, Nelke, Pimentkörner, Sternanis, Kardamom)", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Weißer Essig", "menge": 400, "einheit": "ml", "typ": "saeure" },
                        { "name": "Zitronen Saft", "menge": 3, "einheit": "TL", "typ": "saeure" },
                        { "name": "Gelier Zucker 2:1", "menge": 100, "einheit": "g", "typ": "bindemittel" }
                    ],
                    "zubereitung": [
                        "Essig und braunen Zucker zum Kochen bringen",
                        "Alle anderen Zutaten und Gewürze (außer Gelier Zucker) zufügen",
                        "Alles in ca. 60 Minuten einkochen. Nicht verkochen!",
                        "Das Chutney sollte eine leicht stückelige Konsistenz haben",
                        "Am Ende der Kochzeit den Gelier Zucker zufügen, kurz aufkochen lassen und noch weitere 5 Minuten weiter köcheln",
                        "In sterile Gläser abfüllen"
                    ],
                    "anmerkungen": [
                        "Die Schärfe des Chutneys lässt sich durch die Wahl der Chillis steuern"
                    ],
                    "tags": ["chutney", "apfel", "wuerzig", "eingemacht", "beilage"]
                },

                "bauern-zwiebelwurst": {
                    "id": "bauern-zwiebelwurst",
                    "name": "Bauern Zwiebelwurst",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "wurst",
                    "bild": "images/rezepte/bauern-zwiebelwurst.jpg",
                    "quelle": "Dauerware",
                    "quantitative_angaben": {
                        "portionen": "mehrere Gläser",
                        "kochzeit": "70",
                        "kochzeit_einheit": "Minuten",
                        "temperatur": "100",
                        "temperatur_einheit": "°C"
                    },
                    "beschreibung": "Herzhafte Zwiebelwurst als Brotaufstrich",
                    "geschichte": "Ein herzhafter - kräftig, schmeckender Brotaufstrich. Gut aufzubewahren.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Nicht zu fetter Schweinebauch", "menge": 1600, "einheit": "g", "typ": "fleisch" },
                        { "name": "Schweineschulter", "menge": 500, "einheit": "g", "typ": "fleisch" },
                        { "name": "Zwiebeln", "menge": 400, "einheit": "g", "typ": "gemuese" },
                        { "name": "Knoblauchzehen", "menge": 2, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Butter", "menge": 40, "einheit": "g", "typ": "fett" },
                        { "name": "Salz", "menge": 50, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Weisser Pfeffer", "menge": 10, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Koriander, gemahlen", "menge": 2, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Majoran", "menge": 0, "einheit": "nach Belieben", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Schweinebauch - und Schulter ca. 30 Minuten leicht an kochen. Danach in große Stücke schneiden",
                        "Zwiebeln und Knoblauch fein würfeln und in Butter oder Schmalz andünsten",
                        "Fleisch und Zwiebel-Knoblauch Gemisch mit Salz und den Gewürzen vermischen und durch die 2 mm Scheibe des Fleischwolfs drehen",
                        "Anschließend gut durchmischen und nochmals herzhaft abschmecken",
                        "Die Masse in sterile heiß ausgespülte Gläser füllen (Abstand zum Rand lassen) und die Oberfläche glatt streichen",
                        "Gläser verschließen und bei 100° C 70 Minuten einkochen. In lauwarmen Wasser abkühlen lassen"
                    ],
                    "anmerkungen": [
                        "Quell zum Eindosen bei gleichen Garzeiten geeignet"
                    ],
                    "tags": ["zwiebelwurst", "brotaufstrich", "eingemacht", "deftig", "dauerware"]
                },

                "boef-a-la-mode": {
                    "id": "boef-a-la-mode",
                    "name": "Boef à la Mode",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "rind",
                    "bild": "images/rezepte/boef-a-la-mode.jpg",
                    "quelle": "Zubereitung meiner Großmutter",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen",
                        "marinierzeit": "3-5",
                        "marinierzeit_einheit": "Tage",
                        "kochzeit": "65-80",
                        "kochzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Traditioneller Sauerbraten nach Großmutter Art",
                    "geschichte": "Das Boef à la Mode, wie es meine Großmutter Maria zubereitet hat, ist fast ausgestorben. Der entscheidende Unterschied ist jedoch, dass Boef à la Mode gekocht und nicht gebraten wird.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Flache Rinderschulter", "menge": 500, "einheit": "g", "typ": "fleisch" },
                        { "name": "Suppengemüse", "menge": 1, "einheit": "Bund", "typ": "gemuese" },
                        { "name": "Gewürze (Lorbeerblatt, Nelken, Pimentkörner, Wacholderbeeren)", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" },
                        { "name": "Essig", "menge": 0, "einheit": "halb/halb mit Wasser", "typ": "saeure" },
                        { "name": "Wasser", "menge": 0, "einheit": "halb/halb mit Essig", "typ": "fluessigkeit" },
                        { "name": "Butter", "menge": 0, "einheit": "nach Bedarf", "typ": "fett" },
                        { "name": "Mehl", "menge": 0, "einheit": "nach Bedarf", "typ": "mehl" }
                    ],
                    "zubereitung": [
                        "Das Fleisch wird zunächst 3-5 Tage eingelegt und zwar in halb/halb Essig und Wasser, so dass es vollständig bedeckt ist. Als Aromaten kommen hinzu: Nelken, Wacholderbeeren, Lorbeerblätter und Pimentkörner",
                        "Das Fleisch wird in dieser Brühe unter Zugabe von Suppengemüsen (Sellerie, Gelbe Rübe und Poree) bisfest gekocht. Etwa 65-80 Minuten",
                        "Aus Butter, Zucker und Mehl wird eine dunkle Roux (Einbrenne) gekocht, die mit der Brühe aufgefüllt wird",
                        "Die Soße sollte eine dickliche Konsistenz haben. Wobei es Ihnen freigestellt ist, wie dunkel und wie dick die Soße wird",
                        "Die Soße mit Salz, Pfeffer und Essig nochmal nachschmecken. Sie sollte fein säuerlich mit einer süßlichen Note sein",
                        "Das Fleisch in dieser Soße erwärmen und servieren"
                    ],
                    "anmerkungen": [
                        "Bei meiner Oma hat es als Beilage nur Semmelknödel gegeben und ich finde, dass das reicht",
                        "Natürlich können Sie auch Gemüse als zusätzliche Beilage servieren"
                    ],
                    "tags": ["sauerbraten", "rind", "tradition", "grossmutter", "deftig"]
                },
                                "bosaiola": {
                    "id": "bosaiola",
                    "name": "Bosaiola",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "nudelgerichte",
                    "bild": "images/rezepte/bosaiola.jpg",
                    "quelle": "Nudelsauce nach „Holzhauerart“",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen",
                        "kochzeit": "120",
                        "kochzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Reichhaltige Nudelsauce mit Pilzen und Wurst",
                    "geschichte": "Dieses Rezept stammt aus dem berühmten Restaurant „Frua“ in Modena und wird dort zu Tagliatelle gereicht.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Getrocknete Steinpilze", "menge": 30, "einheit": "g", "typ": "pilze" },
                        { "name": "Gelbe Rübe", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Sellerie", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Zwiebel", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Petersilie", "menge": 1, "einheit": "Bund", "typ": "kraeuter" },
                        { "name": "Lorbeer Blatt", "menge": 1, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Butter", "menge": 50, "einheit": "g", "typ": "fett" },
                        { "name": "Luganega (grobe Schweinsbratwurst)", "menge": 500, "einheit": "g", "typ": "wurst" },
                        { "name": "Weißwein", "menge": 200, "einheit": "ml", "typ": "wein" },
                        { "name": "Geschälte Tomaten (Dose)", "menge": 500, "einheit": "g", "typ": "gemuese" },
                        { "name": "Schlag Rahm", "menge": 200, "einheit": "ml", "typ": "milchprodukt" }
                    ],
                    "zubereitung": [
                        "Die Pilze in lauwarmen Wasser einweichen",
                        "Gelbe Rübe, Sellerie, Zwiebel und Petersilie ganz klein schneiden",
                        "Butter in Kasserolle schmelzen die obigen Zutaten und das Lorbeer Blatt zugeben und unter ständigen Rühren 15 Minuten dünsten",
                        "Ausgedrückte Pilze und ausgedrückte Wurst mit zugeben und einige Zeit mitdünsten",
                        "Mit Weißwein ablöschen, die Tomaten zu fügen, würzen und unter gelegentlichen wenden 2 Stunden langsam schmoren",
                        "Am Ende den Rahm zugießen und sofort mit den Nudeln servieren",
                        "Nach Belieben mit reichlich Parmesan bestreuen"
                    ],
                    "anmerkungen": [
                        "Das besondere an der Wurst, kann man mit etwas Pfeffer und Fenchel „nachahmen“, wenn man normale Bratwurst verwendet",
                        "Die gebrochenen Pilze tragen viel zu dem außergewöhnlichen Aroma dieser reichhaltigen Soße bei",
                        "Die lange Garzeit ist der „Clou“ an dieser Rezeptur – wie bei fast allen italienischen Gerichten"
                    ],
                    "tags": ["nudelsauce", "italienisch", "pilze", "wurst", "reichhaltig"]
                },

                "coq-au-riesling": {
                    "id": "coq-au-riesling",
                    "name": "Coq au Riesling",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "gefluegel",
                    "bild": "images/rezepte/coq-au-riesling.jpg",
                    "quelle": "Elsässer Traditions Rezept",
                    "quantitative_angaben": {
                        "portionen": "4 Personen",
                        "kochzeit": "30-40",
                        "kochzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Hähnchen in Riesling-Sahne-Sauce",
                    "geschichte": "Man kann hier sagen: Lange Zutatenliste - leichte Zubereitung.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Hähnchen ca. 3 Pfd.", "menge": 1, "einheit": "Stück", "typ": "gefluegel" },
                        { "name": "Butter", "menge": 100, "einheit": "g", "typ": "fett" },
                        { "name": "Schalotten", "menge": 4, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Champignons", "menge": 150, "einheit": "g", "typ": "pilze" },
                        { "name": "Riesling", "menge": 250, "einheit": "ml", "typ": "wein" },
                        { "name": "Fleischbrühe", "menge": 250, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Suppengemüse", "menge": 1, "einheit": "Portion", "typ": "gemuese" },
                        { "name": "Zwiebel", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Lorbeerblatt", "menge": 1, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Nelken", "menge": 4, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Mehl", "menge": 1, "einheit": "EL", "typ": "mehl" },
                        { "name": "Schlagrahm", "menge": 100, "einheit": "g", "typ": "milchprodukt" },
                        { "name": "Zitrone (Saft einer halben)", "menge": 1, "einheit": "Stück", "typ": "obst" }
                    ],
                    "zubereitung": [
                        "Hähnchen waschen, in vier Teile zerlegen und salzen und Pfeffern",
                        "In einem Teil der Butter Rundrum goldbraun anbraten. Herausnehmen",
                        "Gehackte Schalotten, und feingeschnittene Champignons in der restlichen Butter anbraten. Die Hähnchenteile wieder zugeben",
                        "Mit dem Riesling ablöschen und nach und nach die Brühe zugießen",
                        "Die Würzgemüse zugeben und die Zwiebel mit Nelken und Lorbeerblatt gespickt",
                        "30-40 Minuten köcheln lassen. Die Fleischstücke danach nochmal herausheben",
                        "Die Sauce mit (50g) Butter und Mehl binden und mit Salz, Pfeffer und Zitronensaft würzen",
                        "Hähnchen wieder zufügen und heiß servieren"
                    ],
                    "anmerkungen": [
                        "Im Elsass werden hierzu gerne Nudeln oder Spätzle gereicht",
                        "Ebenso Salate"
                    ],
                    "tags": ["haehnchen", "elsass", "riesling", "sahnesosse", "tradition"]
                },

                "credischer-schweinsbraten": {
                    "id": "credischer-schweinsbraten",
                    "name": "Credischer Schweinsbraten",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "schwein",
                    "bild": "images/rezepte/credischer-schweinsbraten.jpg",
                    "quelle": "mit Äpfel-Walnuss Füllung",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "backtemperatur": "190",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "70",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Gefüllter Schweinebraten mit Apfel-Walnuss-Füllung",
                    "geschichte": "Der „etwas andere“ Schweinebraten. Gut für große Gesellschaften geeignet.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Butter", "menge": 80, "einheit": "g", "typ": "fett" },
                        { "name": "Äpfel, kleingeschnitten", "menge": 2, "einheit": "Stück", "typ": "obst" },
                        { "name": "Zwiebel, kleingehackt", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Bleichsellerie, kleingeschnitten", "menge": 2, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Knoblauchzehen, fein gehackt", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Weißbrot Brösel", "menge": 175, "einheit": "g", "typ": "brot" },
                        { "name": "Walnüsse, grob gehackt", "menge": 100, "einheit": "g", "typ": "nuesse" },
                        { "name": "Sultaninen", "menge": 75, "einheit": "g", "typ": "trockenfruechte" },
                        { "name": "Schweinehals", "menge": 1500, "einheit": "g", "typ": "fleisch" },
                        { "name": "Gewürze (Salz, Pfeffer, Nelken gem., Senfpulver)", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Den Schweinehals mit drei Butterfly Schnitten der Länge nach großflächig aufschneiden und plattieren. Oder schon vom Metzger so vorbereiten lassen",
                        "In der Hälfte der Butter Äpfel, Zwiebel, Sellerie und Knoblauch weich dünsten, aber noch bißfest",
                        "Die gegarten Gemüse und Äpfel in einer Schüssel mit den Brotbröseln, Nüssen, Sultaninen und den Gewürzen vermengen. Diese muss etwas feucht sein: Bei Bedarf mit etwas Milch verdünnen",
                        "Den Ofen auf 190 ° vorheizen",
                        "Die Fleisch Fläche mit dieser Masse gleichmäßig bestreichen. Ränder freilassen",
                        "Aufrollen und mit Küchengarn zum Rollbraten binden. Rundherum gleichmäßig anbraten",
                        "ca. 70 Minuten braten lassen. Als Faustregel kann man Sagen: Pro Pfund 20-25 Minuten"
                    ],
                    "anmerkungen": [
                        "Wer ein Bratethermometer benutzt sollte bis 75° Kerntemperatur braten",
                        "Lässt sich gut vorbereiten",
                        "Ich bereite dazu eine Zwetschgen Soße (siehe Schweinefilet an Pflaumensoße)"
                    ],
                    "tags": ["schweinebraten", "gefuellt", "apfel", "walnuesse", "festlich"]
                },

                "deutsches-cornet-beef": {
                    "id": "deutsches-cornet-beef",
                    "name": "Deutsches Cornet Beef",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "rind",
                    "bild": "images/rezepte/deutsches-cornet-beef.jpg",
                    "quelle": "Rezept Ernst Heckel",
                    "quantitative_angaben": {
                        "portionen": "mehrere Dosen",
                        "poekelzeit": "5-6",
                        "poekelzeit_einheit": "Tage",
                        "kochzeit": "40-45",
                        "kochzeit_einheit": "Minuten",
                        "sterilisierzeit": "70",
                        "sterilisierzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Selbstgemachtes Corned Beef nach Metzger-Art",
                    "geschichte": "Diese Konserve hält gut bis zu einem Jahr, verliert aber nach 6 Monaten deutlich spürbar an Geschmack.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Rinderhals (oder Schulter)", "menge": 2000, "einheit": "g", "typ": "fleisch" },
                        { "name": "Pökelsalz", "menge": 35, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Sellerie", "menge": 0.5, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Selleriegrün", "menge": 0, "einheit": "nach Belieben", "typ": "kraeuter" },
                        { "name": "Liebstöckl", "menge": 0, "einheit": "nach Geschmack", "typ": "kraeuter" },
                        { "name": "Pfeffer, gemahlen", "menge": 3, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Aspik Pulver", "menge": 100, "einheit": "g", "typ": "bindemittel" }
                    ],
                    "zubereitung": [
                        "Rindfleisch in grosse Würfel schneiden, gut mit Pökelsalz einmassieren und 5-6 Tage trocken pökeln",
                        "Sellerie in grosse Würfel schneiden, Grün und Liebstöckl kleinschneiden",
                        "Alles zusammen in 0,8 l Wasser weichkochen. Das dauert etwas 40-45 Minuten",
                        "Fleisch und Gemüse abgießen und grob kuttern oder wolfen",
                        "0,8 l Kochbrühe mit 100g vorher eingeweichtem Aspikpulver mischen",
                        "Mit der Fleisch/Gemüsemasse mischen und mit dem Pfeffer würzen",
                        "In 0,4 l Dosen (oder Gläser) abfüllen. Verschließen und ca. 70 Minuten im Ofen sterilisieren"
                    ],
                    "anmerkungen": [
                        "Wenn man kein frisches Liebstöckel hat kann man am Ende vorsichtig mit Maggi würzen",
                        "Ich bevorzuge Dosen, weil ich dann das Corned Beef 'barrierefrei' herausbekommen und auf der Aufschnittmaschine schöne Scheibe schneiden kann",
                        "Das geht in einer großen Reihe mit heißen Wasser bei 170° Ofentemperatur"
                    ],
                    "tags": ["corned-beef", "rind", "eingemacht", "poekeln", "dauerware"]
                },

                "credisches-huehner-curry": {
                    "id": "credisches-huehner-curry",
                    "name": "Credisches Hühner Curry",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "gefluegel",
                    "bild": "images/rezepte/credisches-huehner-curry.jpg",
                    "quelle": "Hans Reidel",
                    "quantitative_angaben": {
                        "portionen": "4 Personen",
                        "kochzeit": "15-20",
                        "kochzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Exotisches Hühnercurry mit Kokosmilch",
                    "geschichte": "Ich habe dieses Rezept von Paul Prudhomme für den Küchenalltag etwas vereinfacht, da die Herstellung im Original komplizierter und Zeitaufwendiger ist.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Hühnerbrust", "menge": 500, "einheit": "g", "typ": "gefluegel" },
                        { "name": "Gewürze (Salz, Pfeffer, Kreuzkümmel, Ingwer- und Knoblauch Pulver, getrocknetes Basilikum)", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" },
                        { "name": "Zwiebel, fein gewürfelt", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Apfel, säuerlich, grob gewürfelt", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Banane, geschält und grob geschnitten", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Weißwein", "menge": 125, "einheit": "ml", "typ": "wein" },
                        { "name": "Kokosmilch", "menge": 1, "einheit": "Dose", "typ": "milchprodukt" },
                        { "name": "Butter", "menge": 125, "einheit": "g", "typ": "fett" },
                        { "name": "Gewürze (Salz, Pfeffer, indisches Curry, Tabasco grün, Chili Paste)", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Hühnerbrust in Mundgerechte Stücke schneiden. Mit den Gewürzen gut vermischen und beiseite stellen",
                        "Zwiebel, Äpfel und Banane in der Butter zusammen mit reichlich Currypulver bei sanfter Hitze ca. 15 Minuten schmoren. Häufig umrühren. Anbrenngefahr!",
                        "Hühnerstücke zu fügen. Umrühren",
                        "Mit Wein ablöschen. Etwas reduzieren, dann Kokosmilch zufügen",
                        "Etwas 5-10 Minuten köcheln, bis das Huhn gar, aber nicht zäh ist",
                        "Alles mit Salz, Pfeffer, Tabasco und Chili Paste abschmecken"
                    ],
                    "anmerkungen": [
                        "Man kann diesem Curry mit Maracuja Sirup noch etwas exotische Süße verleihen",
                        "Ich füge dem fertigen Gericht noch reichlich Koriandergrün zu und garniere mit Cashewnüssen",
                        "Wichtig ist es, das Hühnerfleisch nicht 'Tot zu kochen', da es sonst leicht 'gummisartig' wird",
                        "Daher darf das Gericht, wenn man es nochmal aufwärmen will, nicht kochen!"
                    ],
                    "tags": ["huehnercurry", "kokosmilch", "exotisch", "scharf", "asiatisch"]
                },
                                "eisbein-in-aspik": {
                    "id": "eisbein-in-aspik",
                    "name": "Eisbein in Aspik",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "schwein",
                    "bild": "images/rezepte/eisbein-in-aspik.jpg",
                    "quelle": "Dauerkonserve",
                    "quantitative_angaben": {
                        "portionen": "mehrere Gläser",
                        "kochzeit": "105",
                        "kochzeit_einheit": "Minuten",
                        "sterilisierzeit": "60",
                        "sterilisierzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Eingelegtes Eisbein als Dauerware",
                    "geschichte": "Wunderbar zur Brotzeit oder als Hauptgericht mit Bratkartoffeln.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Gepökelte Eisbeine mit Knochen", "menge": 2, "einheit": "Stück", "typ": "fleisch" },
                        { "name": "Suppengemüse", "menge": 1, "einheit": "Portion", "typ": "gemuese" },
                        { "name": "Lorbeerblätter", "menge": 4, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Wacholderbeeren", "menge": 12, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Pfefferkörner", "menge": 12, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Nelken", "menge": 6, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Gelatine, gemahlen", "menge": 100, "einheit": "g", "typ": "bindemittel" },
                        { "name": "Salz und Pfeffer", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Die Haxen in 2 Liter Wasser mit den Gewürzen (außer Salz) kochen",
                        "Nach einer Stunde die kleingeschnittenen Suppengemüse (Gelbe Rüben, Porree, Sellerie) hinzu fügen",
                        "Nach weiteren 45 Minuten sollten die Haxen biss-fest sein, sich aber leicht vom Knochen lösen",
                        "Fleisch in Würfel schneiden, salzen pfeffern und über Nacht kalt stellen",
                        "Gewürfeltes Fleisch in Gläser füllen",
                        "0,8 Liter der Brühe abseihen, erwärmen und die aufgelöste Gelatine darin einrühren. Nochmals abschmecken",
                        "Über das Fleisch in den Gläsern gießen",
                        "Bei 175 ° im Backrohr 1 Stunde sterilisieren"
                    ],
                    "anmerkungen": [],
                    "tags": ["eisbein", "aspik", "dauerware", "deftig", "konserve"]
                },

                "fisch-chips": {
                    "id": "fisch-chips",
                    "name": "Fisch & Chips",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "fisch",
                    "bild": "images/rezepte/fisch-chips.jpg",
                    "quelle": "Englisches Traditionsgericht",
                    "quantitative_angaben": {
                        "portionen": "4 Personen"
                    },
                    "beschreibung": "Klassisches englisches Fischfilet in Ausbackteig",
                    "geschichte": "Serviert wurde man das Gericht zusammen mit Pommes Frites in einer Papierhülle.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Mehl", "menge": 110, "einheit": "g", "typ": "mehl" },
                        { "name": "Speisestärke", "menge": 80, "einheit": "g", "typ": "mehl" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Wasser", "menge": 280, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Zucker", "menge": 1, "einheit": "Prise", "typ": "suessungsmittel" },
                        { "name": "Petersilie, fein geschnitten", "menge": 1, "einheit": "EL", "typ": "kraeuter" },
                        { "name": "Fischfilets (festkochende Sorten)", "menge": 0, "einheit": "nach Bedarf", "typ": "fisch" }
                    ],
                    "zubereitung": [
                        "Ei trennen. Eiweiß steif schlagen",
                        "Mehl und Stärke in eine Schüssel sieben",
                        "Eigelb mit Wasser verquirlen",
                        "Mehlmischung und verquirltes Ei zu einem Teig verrühren. Mit Salz, Pfeffer und Zucker würzen",
                        "Fisch in Portionsstücke schneiden und mit Salz, Pfeffer und Zitrone würzen",
                        "Fisch in Mehl wenden und durch den Ausbackteig ziehen. Abtropfen lassen und in heißem Fett ausbacken"
                    ],
                    "anmerkungen": [],
                    "tags": ["fisch", "chips", "englisch", "frittiert", "klassiker"]
                },

                "gai-sab-noc": {
                    "id": "gai-sab-noc",
                    "name": "Gai Sab Noc",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "gefluegel",
                    "bild": "images/rezepte/gai-sab-noc.jpg",
                    "quelle": "Erdnuss Hühn nach Nitaya",
                    "quantitative_angaben": {
                        "portionen": "4 Personen"
                    },
                    "beschreibung": "Thailändisches Erdnuss-Hühnchen",
                    "geschichte": "Dieses Rezept stammt aus keinem Kochbuch, sondern ist frei einer Rezeptur von Nitaya Maier nachempfunden, die in München 1973 das erste Thailändische Restaurant Deutschlands eröffnet hat.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Rote und gelbe Paprika", "menge": 0.5, "einheit": "je", "typ": "gemuese" },
                        { "name": "Mittelgroße Zwiebel", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Hühnerbrust", "menge": 350, "einheit": "g", "typ": "gefluegel" },
                        { "name": "Kokosmilch", "menge": 1, "einheit": "Dose", "typ": "milchprodukt" },
                        { "name": "Hühnerbrühe", "menge": 250, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Erdnuss Butter", "menge": 0, "einheit": "nach Geschmack", "typ": "nuesse" },
                        { "name": "Zitronengras, Kafir Blätter", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" },
                        { "name": "Austernsoße", "menge": 0, "einheit": "nach Geschmack", "typ": "sosse" },
                        { "name": "Sweet Chili Soße", "menge": 0, "einheit": "nach Geschmack", "typ": "sosse" },
                        { "name": "Rote Curry Paste", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" },
                        { "name": "Fisch Soße", "menge": 0, "einheit": "nach Geschmack", "typ": "sosse" },
                        { "name": "Frisches Korlandergrün", "menge": 0, "einheit": "nach Geschmack", "typ": "kraeuter" }
                    ],
                    "zubereitung": [
                        "Hühnerbrust rasch auf den Punkt in Öl braten mit fein geschnittenen Zitronengras würzen. Beiseite stellen",
                        "Paprika und Zwiebel jeweils separat knackig braten mit fein geschnittenen Kafir Blatt würzen. Beiseite stellen",
                        "Im Bratfett etwa einen TL rote Currypaste anbraten; mit Hühnerbrühe ablöschen, Erdnussbutter nach Geschmack hinzufügen und mit Kokosmilch auffüllen. Kurz aufkochen",
                        "Huhn, Paprika und Zwiebel zufügen und kurz erwärmen",
                        "Ganz zum Schluss nach Geschmack mit Fischsoße, Austernsoße und Sweet Chili Soße abschmecken"
                    ],
                    "anmerkungen": [
                        "In dieser Form gehört das Gericht zu den Lieblingsgerichten unserer Gäste",
                        "Nitaya ist leider mittlerweile im Ruhestand"
                    ],
                    "tags": ["thailaendisch", "erdnuss", "huehnchen", "scharf", "asiatisch"]
                },

                "griechische-fleisch-pastete": {
                    "id": "griechische-fleisch-pastete",
                    "name": "Griechische Fleisch Pastete",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "pastete",
                    "bild": "images/rezepte/griechische-fleisch-pastete.jpg",
                    "quelle": "Arcatapitta",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "backtemperatur": "200",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "40-45",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Griechische Fleischpastete mit Fillo-Teig",
                    "geschichte": "Diese Pastete lässt sich wunderbar im Voraus zubereiten, und kann erst in den Ofen geschoben werden, wenn die Gäste schon da sind.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Gemischtes Hackfleisch", "menge": 1000, "einheit": "g", "typ": "fleisch" },
                        { "name": "Filioteig Blätter", "menge": 1, "einheit": "Paket", "typ": "teig" },
                        { "name": "Zwiebeln", "menge": 300, "einheit": "g", "typ": "gemuese" },
                        { "name": "Olivenöl", "menge": 3, "einheit": "EL", "typ": "fett" },
                        { "name": "Rotwein", "menge": 125, "einheit": "ml", "typ": "wein" },
                        { "name": "Blattspinat", "menge": 1, "einheit": "Paket", "typ": "gemuese" },
                        { "name": "Eier", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Paniermehl", "menge": 1, "einheit": "EL", "typ": "mehl" },
                        { "name": "Käse, gerieben", "menge": 100, "einheit": "g", "typ": "kaese" },
                        { "name": "Feta Käse, in Würfeln", "menge": 100, "einheit": "g", "typ": "kaese" },
                        { "name": "Butter", "menge": 100, "einheit": "g", "typ": "fett" }
                    ],
                    "zubereitung": [
                        "Zwiebeln Kleinwürfeln und in Olivenöl an-schwitzen. Hackfleisch zugeben und mit Salz, Pfeffer, Zimt und Zitronensaft würzen. Mit Rotwein aufgießen. Trockenbraten",
                        "Backofen auf 200 Grad vorheizen",
                        "Aufgetauten Blattspinat, Feta, Paniermehl und die Eier untermischen. Nicht mehr braten!",
                        "Wenn alles ein wenig abgekühlt ist noch den geriebenen Käse untermischen",
                        "In ein tiefes Backblech (oder Reine) eine Lage Fillo Blätter geben. Die Teiglagen über den Blechrand hängen lassen und mit reichlich Butter bestreichen",
                        "Die Fleisch-Spinat Masse aufstreichen und mit den übrigen Teigblättern abdecken. Die unteren Teigränder über die obere Teiglage schlagen. Mit reichlich Butter einpinseln",
                        "In 40-45 Minuten goldbraun backen",
                        "In Portionsstücke schneiden und warm servieren"
                    ],
                    "anmerkungen": [
                        "Das Hackfleisch kann aus Schwein/Rind bestehen, oder Rind/Lamm oder Lamm/Schwein. Alle Varianten mit Schwein sind saftiger",
                        "Im Original wird ein Kefalotiri Käse empfohlen. Da dieser schwer zu bekommen ist, geht problemlos auch jeder Hartkäse",
                        "Salate eignen sich gut als Beilage, aber auch verschiedene Dipsaucen",
                        "Tipp: Wenn man die Stücke bereits vor dem Backen vorschneidet, tut man sich später leichter beim Auftragen"
                    ],
                    "tags": ["griechisch", "pastete", "fillo-teig", "festlich", "gefuellt"]
                },

                "kabeljau-mit-brokkoli-schaum": {
                    "id": "kabeljau-mit-brokkoli-schaum",
                    "name": "Kabeljau mit Brokkoli Schaum",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "fisch",
                    "bild": "images/rezepte/kabeljau-mit-brokkoli-schaum.jpg",
                    "quelle": "und Rote Beete Risotto",
                    "quantitative_angaben": {
                        "portionen": "1 Person als Hauptgericht"
                    },
                    "beschreibung": "Edles Fischgericht mit Brokkoli-Schaum und Rote-Beete-Risotto",
                    "geschichte": "Bei dieser Menge ist das Gericht gut als Zwischengang geeignet.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Kabeljau, Rückenfilets", "menge": 100, "einheit": "g", "typ": "fisch" },
                        { "name": "Brokkoli", "menge": 3, "einheit": "Röschen", "typ": "gemuese" },
                        { "name": "Reis", "menge": 30, "einheit": "g", "typ": "getreide" },
                        { "name": "Zwiebel", "menge": 0.5, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Knoblauch", "menge": 0, "einheit": "nach Geschmack", "typ": "gemuese" },
                        { "name": "Weißwein", "menge": 0, "einheit": "nach Bedarf", "typ": "wein" },
                        { "name": "Fischfond", "menge": 0, "einheit": "nach Bedarf", "typ": "fluessigkeit" },
                        { "name": "Hühnerbrühe", "menge": 0, "einheit": "nach Bedarf", "typ": "fluessigkeit" },
                        { "name": "Butter", "menge": 0, "einheit": "nach Bedarf", "typ": "fett" },
                        { "name": "Parmesan", "menge": 0, "einheit": "nach Bedarf", "typ": "kaese" },
                        { "name": "Bio Orange (Abrieb)", "menge": 0.5, "einheit": "Stück", "typ": "obst" },
                        { "name": "Rote Beete Granulat", "menge": 1, "einheit": "EL", "typ": "gemuese" }
                    ],
                    "zubereitung": [
                        "Für das Risotto: Zwiebeln in Butter anschwitzen, Reis und rote Beete Granulat kurz mitgaren. Mit Weißwein ablöschen und mit wenig Brühe angießen. Risotto wie üblich fertig zubereiten und am Ende geriebenen Parmesan und reichlich Butter unterrühren",
                        "Für den Brokkoli Schaum: Brokkoli etwas 4 Minuten blanchieren und in Eiswasser abschrecken. Gewürfelte Zwiebel in Butter anschwitzen mit wenig Mehl vermengen. Mit wenig Weißwein ablöschen, mit Brühe angießen und vor sich hinköcheln lassen. Kurz vor dem Anrichten diese Reduktion, den blanchierten Brokkoli und reichlich Butter im Mixer aufschlagen",
                        "Für den Fisch: Fisch in einer Mischung aus Butter und Öl auf einer Seite Farbe nehmen lassen, wenden und fertig ziehen lassen. Mit Salz und wenig Pfeffer würzen",
                        "Fertigstellung: Aufgeschlagene Soße auf vorgewärmten Teller geben. Ein oder zwei 'Nocken' Risotto dazugeben; oder ein 'Häufchen' oder im Ring anrichten. Zum Schluß den Fisch auf der Soße anrichten"
                    ],
                    "anmerkungen": [
                        "Die Mengenangaben sind Zirka Angaben für eine Person",
                        "Als Hauptgericht sollte die Fischmenge verdoppelt werden und eventuell eine zweite Beilage gereicht werden, beispielsweise Gelbe Rüben - was auch farblich sehr schön harmoniert"
                    ],
                    "tags": ["kabeljau", "brokkoli", "risotto", "edel", "restaurant"]
                },
                                "kaiser-schmarrn": {
                    "id": "kaiser-schmarrn",
                    "name": "Kaiser Schmarrn",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "mehlspeisen",
                    "bild": "images/rezepte/kaiser-schmarrn.jpg",
                    "quelle": "Aus einer Fernsehsendung",
                    "quantitative_angaben": {
                        "portionen": "2-3 Personen",
                        "backzeit": "15-20",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Luftiger Kaiserschmarrn aus Wien",
                    "geschichte": "Dieses Rezept wurde in einer Kochsendung über Wien vorgestellt. Es stammt aus einem bekannten Hotel.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Eier (getrennt)", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 2, "einheit": "EL", "typ": "suessungsmittel" },
                        { "name": "Vanille Zucker", "menge": 2, "einheit": "EL", "typ": "gewuerz" },
                        { "name": "Mehl", "menge": 100, "einheit": "g", "typ": "mehl" },
                        { "name": "Zitronenabrieb", "menge": 0, "einheit": "nach Belieben", "typ": "gewuerz" },
                        { "name": "Milch", "menge": 0, "einheit": "nach Bedarf", "typ": "milchprodukt" }
                    ],
                    "zubereitung": [
                        "Eier trennen. Eiweiß nicht zu steif schlagen!",
                        "Aus allen Zutaten (außer Eiweiß) einen Teig zubereiten. Milch nur zum Verdünnen verwenden. Der Teig muss dickflüssig sein",
                        "Eiweiß vorsichtig unterziehen",
                        "Teig langsam in einer Pfanne mit reichlich Butter bei geschlossenen Deckel garen",
                        "Kurz wenden. Dann Teig in beliebig große Stücke 'zerreißen'",
                        "Backzeit ca. 15-20 Minuten"
                    ],
                    "anmerkungen": [
                        "Als besonderer 'Trick' wurde verraten, das Eiweiß nicht zu steif zu schlagen, da sonst der Schmarren seine Lockerheit verliert",
                        "Leider weiß ich nicht mehr welches Hotel"
                    ],
                    "tags": ["kaiserschmarrn", "oesterreich", "suess", "einfach", "klassiker"]
                },

                "kaspress-knoedel": {
                    "id": "kaspress-knoedel",
                    "name": "Kaspress Knödel",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "knoedel",
                    "bild": "images/rezepte/kaspress-knoedel.jpg",
                    "quelle": "Bayerische Spezialität",
                    "quantitative_angaben": {
                        "portionen": "4 Personen"
                    },
                    "beschreibung": "Gebratene Käseknödel aus Tirol",
                    "geschichte": "Diese 'Knödel' kann man als Suppeneinlage verwenden oder auch als Hauptspeisen mit Sauerkraut und/oder grünem Salat.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Zwiebel", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Milch", "menge": 250, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Semmeln, gewürfelt", "menge": 150, "einheit": "g", "typ": "brot" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Käse, klein gewürfelt", "menge": 200, "einheit": "g", "typ": "kaese" },
                        { "name": "Petersilie", "menge": 1, "einheit": "Bund", "typ": "kraeuter" }
                    ],
                    "zubereitung": [
                        "Zwiebel klein würfeln, in Butter anschwitzen und mit der Milch aufgießen",
                        "Die kochende Flüssigkeit über die gewürfelten Semmeln geben",
                        "Eier, Käse und die Gewürze zugeben. Vermengen und 20 Minuten durchziehen lassen",
                        "Kleine Knödel formen, flach drücken ('pressen') und im Butterschmalz ausbacken",
                        "Aus der Pfanne nehmen und weiter verwenden"
                    ],
                    "anmerkungen": [
                        "Die verschiedenen regionalen Rezepte weisen auch verschiedene Käsesorten auf",
                        "Oft wird Hartkäse und Graukäse gemischt. Graukäse sind Sauermilchkäse. Z.B. der 'Haver'",
                        "Ich nehme einfach 'was weg muss'"
                    ],
                    "tags": ["kaeseknoedel", "tirol", "gebraten", "deftig", "vegetarisch"]
                },

                "krautwickel-vom-lamm": {
                    "id": "krautwickel-vom-lamm",
                    "name": "Krautwickel vom Lamm",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "lamm",
                    "bild": "images/rezepte/krautwickel-vom-lamm.jpg",
                    "quelle": "von Otto Koch",
                    "quantitative_angaben": {
                        "portionen": "2-3 Personen",
                        "backtemperatur": "150",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "15",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Raffinierte Lammrücken in Wirsing gewickelt",
                    "geschichte": "Dieses Rezept ist sehr raffiniert und schmackhaft, aber leider auch ein typisches Beispiel dafür, dass ein Sternekoch immer wieder Zutaten benötigt, die man normalerweise nicht im Haus hat.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Lammrücken", "menge": 400, "einheit": "g", "typ": "fleisch" },
                        { "name": "Wirsingkopf, blanchiert", "menge": 0.5, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Brauner Lamm Fond", "menge": 100, "einheit": "ml", "typ": "fond" },
                        { "name": "Lammjus", "menge": 250, "einheit": "ml", "typ": "sosse" },
                        { "name": "Schweinhack", "menge": 70, "einheit": "g", "typ": "fleisch" },
                        { "name": "Lammhack", "menge": 50, "einheit": "g", "typ": "fleisch" },
                        { "name": "Kalbshack", "menge": 50, "einheit": "g", "typ": "fleisch" },
                        { "name": "Salz, Pfeffer, frische Kräuter", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Die drei Hackfleischsorten nochmal fein kuttern. Mit Salz und Pfeffer abschmecken",
                        "Die blanchierten Wirsingblätter auf ein Tuch auslegen und mit der Farce bestreichen. Ränder frei lassen",
                        "Den Lammrücken leicht würzen und kurz anbraten. Dann auf die Farce legen",
                        "Ofen auf 150° vorheizen",
                        "Krautwickel rollen und von alle Seiten scharf anbraten",
                        "15 Minuten im Ofen backen, dabei immer mit Lammjus begießen",
                        "Lammfond aufkochen, frische Kräuter nach Geschmack einrühren und mit Butter auf montieren"
                    ],
                    "anmerkungen": [
                        "Man muss sich da ein bisschen zu helfen wissen"
                    ],
                    "tags": ["lamm", "wirsing", "sternekoch", "raffiniert", "festlich"]
                },

                "lasagne-al-forno": {
                    "id": "lasagne-al-forno",
                    "name": "Lasagne al Forno",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "nudelgerichte",
                    "bild": "images/rezepte/lasagne-al-forno.jpg",
                    "quelle": "Marianne",
                    "quantitative_angaben": {
                        "portionen": "6 Personen",
                        "kochzeit_sosse": "120",
                        "kochzeit_sosse_einheit": "Minuten",
                        "backzeit": "45",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Klassische Lasagne aus dem Ofen",
                    "geschichte": "Das Rezept stammt aus meinem Lieblingskochbuch: Aus Italiens Küchen 1982 beim Hallwag Verlag erschienen.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Gemischtes Hackfleisch (Kalb/Schwein)", "menge": 500, "einheit": "g", "typ": "fleisch", "teil": "ragout" },
                        { "name": "Olivenöl", "menge": 100, "einheit": "ml", "typ": "fett", "teil": "ragout" },
                        { "name": "Große Zwiebel", "menge": 1, "einheit": "Stück", "typ": "gemuese", "teil": "ragout" },
                        { "name": "Gelbe Rüben", "menge": 2, "einheit": "Stück", "typ": "gemuese", "teil": "ragout" },
                        { "name": "Kleine Porree Stange", "menge": 1, "einheit": "Stück", "typ": "gemuese", "teil": "ragout" },
                        { "name": "Rotwein", "menge": 200, "einheit": "ml", "typ": "wein", "teil": "ragout" },
                        { "name": "Brühe", "menge": 0, "einheit": "nach Bedarf", "typ": "fluessigkeit", "teil": "ragout" },
                        { "name": "Geschälte Tomaten (Dose)", "menge": 1, "einheit": "Dose", "typ": "gemuese", "teil": "ragout" },
                        { "name": "Tomatenmark", "menge": 2, "einheit": "EL", "typ": "gemuese", "teil": "ragout" },
                        { "name": "Gewürze (Salz, Pfeffer, Zucker, ital. Kräuter)", "menge": 0, "einheit": "nach Belieben", "typ": "gewuerz", "teil": "ragout" },
                        { "name": "Butter", "menge": 150, "einheit": "g", "typ": "fett", "teil": "sosse" },
                        { "name": "Mehl", "menge": 150, "einheit": "g", "typ": "mehl", "teil": "sosse" },
                        { "name": "Milch", "menge": 1500, "einheit": "ml", "typ": "milchprodukt", "teil": "sosse" },
                        { "name": "Fertige Lasagne Nudelblätter", "menge": 0, "einheit": "nach Bedarf", "typ": "nudeln" },
                        { "name": "Butter", "menge": 0, "einheit": "für die Form", "typ": "fett" },
                        { "name": "Geriebener Käse (Emmentaler)", "menge": 150, "einheit": "g", "typ": "kaese" }
                    ],
                    "zubereitung": [
                        "Für das Ragout: Fleisch, Zwiebeln und Gemüse in Olivenöl anrösten",
                        "Tomatenmark kurz mit rösten und mit Wein und Brühe ablöschen. Das Ragout darf weder zu flüssig, noch zu dick sein",
                        "Bei kleiner Hitze etwa 2 Stunden köcheln lassen",
                        "Für die Soße: Aus allen Zutaten eine Béchamel herstellen",
                        "Auflaufform mit Butter ausstreichen. Schichtweise Nudelplatten, Ragout, Béchamel und Käse einschichten. Mit Béchamel und Käse abschließen",
                        "Man kann diese Lasagne gut vorbereiten. Wenn sie halt in den Ofen kommt beträgt die Backzeit etwa 45 Minuten"
                    ],
                    "anmerkungen": [
                        "Ich gebe in das Ragout keine italienischen Kräuter um den reinen Tomaten-Fleisch Geschmack zu erhalten",
                        "Schönes Buch ohne Bilder, nur mit alten Kupferstichen illustriert",
                        "Arbeitsaufwand: 1 Stunde, Kochzeit der Sauce: 2 Stunden wirklich so lange kochen!!, Backzeit: 20 Minuten"
                    ],
                    "tags": ["lasagne", "italienisch", "klassiker", "ueppig", "ofengericht"]
                },

                "schweinesteaks-mit-pflaumensosse": {
                    "id": "schweinesteaks-mit-pflaumensosse",
                    "name": "Schweinesteaks mit Pflaumensoße",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "schwein",
                    "bild": "images/rezepte/schweinesteaks-mit-pflaumensosse.jpg",
                    "quelle": "Combatine di Maiale con salsa di prugne",
                    "quantitative_angaben": {
                        "portionen": "4 Personen"
                    },
                    "beschreibung": "Schweinesteaks in würziger Pflaumensoße",
                    "geschichte": "Bei diesem Rezept ist die Menge der Soße sehr knapp bemessen.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Pflaumen, getrocknet", "menge": 10, "einheit": "g", "typ": "obst" },
                        { "name": "Butter", "menge": 30, "einheit": "g", "typ": "fett" },
                        { "name": "Zwiebel, fein gewürfelt", "menge": 0.5, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Schinken", "menge": 30, "einheit": "g", "typ": "fleisch" },
                        { "name": "Weinessig", "menge": 50, "einheit": "ml", "typ": "saeure" },
                        { "name": "Schweine Steaks", "menge": 4, "einheit": "Stück", "typ": "fleisch" },
                        { "name": "Weißwein", "menge": 50, "einheit": "ml", "typ": "wein" },
                        { "name": "Olivenöl", "menge": 2, "einheit": "EL", "typ": "fett" },
                        { "name": "Lorbeerblatt, Zimtstange", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Pflaumen 30 Minuten lang einweichen",
                        "In einem kleinen Topf Zwiebel und den kleingeschnittenen Schinken in Butter Farbe nehmen lassen. Den Essig dazugießen und um die Hälfte einkochen lassen",
                        "Die entsteinten Pflaumen zufügen und soviel Wasser zugeben, bis die Pflaumen bedeckt sind. Lorbeerblatt und ein Stück Zimt dazugeben. Kochen, bis die Pflaumen weich sind",
                        "Steaks in einer Pfanne in Öl beidseitig anbraten, mit Salz und Pfeffer würzen. Wein angießen und vollständig verkochen lassen. Steaks aus der Pfanne nehmen und warm stellen",
                        "Die Pflaumen mit der Kochflüssigkeit in den Bratansatz passieren. Bei Bedarf nochmals mit Salz und Pfeffer würzen und nochmals sehr heiß werden lassen",
                        "Über die Steaks gießen und sofort zu Tisch geben"
                    ],
                    "anmerkungen": [
                        "Ich gieße deshalb noch bei Schritt 5 Halbefond oder Gemüsebrühe nach. Wenn die Soße zu dünn ist, mit einem Stück kalter Butter abbinden",
                        "Hierzu passen verschiedene Gemüse und kurz angeschwenkte Bratkartoffeln oder Nudeln"
                    ],
                    "tags": ["schweinesteaks", "pflaumensosse", "italienisch", "fruchtig", "wuerzig"]
                },
                                 "tafelspitz-suelze": {
                    "id": "tafelspitz-suelze",
                    "name": "Tafelspitz Sülze",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "rind",
                    "bild": "images/rezepte/tafelspitz-suelze.jpg",
                    "quelle": "Alfons Schuhbeck",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Feine Rindersülze nach Schuhbeck-Art",
                    "geschichte": "Die fertige Sülze aus der Form nehmen und in Scheiben schneiden.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Gekochter Tafelspitz", "menge": 600, "einheit": "g", "typ": "fleisch" },
                        { "name": "Kleine Würfel Sellerie", "menge": 40, "einheit": "g", "typ": "gemuese" },
                        { "name": "Kleine Würfel Gelbe Rübe", "menge": 40, "einheit": "g", "typ": "gemuese" },
                        { "name": "Kleine Würfel Petersilienwurzel", "menge": 40, "einheit": "g", "typ": "gemuese" },
                        { "name": "Essiggurken, klein gewürfelt", "menge": 1, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Gelatine", "menge": 10, "einheit": "Blatt", "typ": "bindemittel" },
                        { "name": "Tafelspitzbrühe, entfettet", "menge": 600, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Essig", "menge": 4, "einheit": "EL", "typ": "saeure" },
                        { "name": "Zucker", "menge": 2, "einheit": "TL", "typ": "suessungsmittel" },
                        { "name": "Salz, Pfeffer", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Tafelspitz entgegen der Faser in 3mm dicke Scheiben schneiden",
                        "Die Gemüsewürfel in kochenden Salzwasser bißfest blanchieren und gut abtropfen. Gurken in kleine Würfel schneiden",
                        "Gelatine in kaltem Wasser einweichen. Tafelspitzbrühe erwärmen - nicht kochen! Ausgedrückte Gelatine darin auflösen",
                        "Mit Essig, Zucker und Gewürzen kräftig abschmecken. Brühe verliert beim erkalten an Geschmack",
                        "Eine Terrinenform von etwas 1,5 l Inhalt mit Klarsichtfolie auskleiden. Boden mit etwas Brühe begießen. Kalt stellen",
                        "Die Tafelspitzscheiben abwechselnd mit den Gemüsewürfeln einlegen. Zwischenkühlen. Brühe angießen - Zwischenkühlen. Vorgang wiederholen bis alles aufgebraucht ist",
                        "Sülze im Kühlschrank mehrere Stunden durchkühlen"
                    ],
                    "anmerkungen": [
                        "Wir nehmen übrigens trotz des Namens keinen Tafelspitz, da uns dieser zu trocken ist. Wir verwenden flache Schulter",
                        "Nach eigener Manier ausrichten, Meerrettich oder Sauce Tartare dazu reichen",
                        "Mit Brotkartoffeln als Hauptgang geeignet - sonst als Vorspeise"
                    ],
                    "tags": ["suelze", "rind", "schuhbeck", "vorspeise", "kalt"]
                },

                "thueringer-bratwuerste": {
                    "id": "thueringer-bratwuerste",
                    "name": "Thüringer Bratwürste",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "wurst",
                    "bild": "images/rezepte/thueringer-bratwuerste.jpg",
                    "quelle": "Ernst Heckel",
                    "quantitative_angaben": {
                        "portionen": "ca. 10 Würste"
                    },
                    "beschreibung": "Authentische Thüringer Bratwürste nach Metzger-Art",
                    "geschichte": "Dieses Rezept unseres langjährigen 'Dorfmetzgers' aus Thüringen zeigt eindrucksvoll, wie wenige Zutaten es für eine gute Wurst braucht.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Schweinefleisch, grob durchwachsen", "menge": 0, "einheit": "nach Bedarf", "typ": "fleisch" },
                        { "name": "Kalbfleisch, fein", "menge": 0, "einheit": "nach Bedarf", "typ": "fleisch" },
                        { "name": "Eier", "menge": 0, "einheit": "nach Bedarf", "typ": "eier" },
                        { "name": "Wasser oder Milch", "menge": 0, "einheit": "nach Bedarf", "typ": "fluessigkeit" },
                        { "name": "Salz", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" },
                        { "name": "Pfeffer", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" },
                        { "name": "Kümmel", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" },
                        { "name": "Glutalin", "menge": 0, "einheit": "optional", "typ": "bindemittel" },
                        { "name": "Zitronensaft", "menge": 0, "einheit": "nach Geschmack", "typ": "saeure" },
                        { "name": "Schafssaitlinge Kaliber 24/26", "menge": 0, "einheit": "nach Bedarf", "typ": "wursthuelle" }
                    ],
                    "zubereitung": [
                        "Das Schweinfleisch zusammen mit stark gekühlter Milch(Wasser) durch die grobe Scheibe des Fleischwolfs drehen",
                        "Kalbfleisch mit stark gekühlter Milch durch die feine Scheibe des Fleischwolfs drehen",
                        "Alles zusammen mit den Eier und Gewürzen gut vermengen",
                        "Auf Schafssaitlinge ziehen und etwa 20 cm lang abdrehen"
                    ],
                    "anmerkungen": [
                        "Ernst Heckels Wurstrezept ist für mich bis heute unerreicht",
                        "Schön, dass er mir ein paar Geheimnisse der Wurstherstellung verraten hat",
                        "Zum Beispiel, dass eine Bratwurst mit Milch viel feiner wird, als mit Wasser, der Profi aber keine Milch verwenden darf",
                        "Deutschland! Deine Gesetze!",
                        "Die stark gekühlte Flüssigkeit verhindert das Gerinnen des Eiweißes",
                        "Ein kleines Zitat meines Vaters am Rande: 'Wurst machen ist die Kunst, Wasser schnittfest zu machen'"
                    ],
                    "tags": ["thueringer", "bratwurst", "metzger", "tradition", "hausgemacht"]
                },

                "tom-yam-gung": {
                    "id": "tom-yam-gung",
                    "name": "Tom Yam Gung",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "suppen",
                    "bild": "images/rezepte/tom-yam-gung.jpg",
                    "quelle": "Sauer-Scharfe Garnelen Suppe",
                    "quantitative_angaben": {
                        "portionen": "4 Personen",
                        "kochzeit": "10-15",
                        "kochzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Authentische thailändische Garnelensuppe",
                    "geschichte": "Ich gebe noch gerne ganz am Ende enthäutete Tomaten Filets in die Suppe.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Garnelen, roh mit Kopf und Schwanz", "menge": 500, "einheit": "g", "typ": "fisch" },
                        { "name": "Koriander mit Wurzel", "menge": 1, "einheit": "Stengel", "typ": "kraeuter" },
                        { "name": "Pfefferkörner, schwarz", "menge": 0.5, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Champignons", "menge": 300, "einheit": "g", "typ": "pilze" },
                        { "name": "Kafir Limetten Blätter", "menge": 3, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Zitronengras", "menge": 2, "einheit": "Stengel", "typ": "gewuerz" },
                        { "name": "Galgant", "menge": 1, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Chili Schoten, thailändische", "menge": 4, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Limettensaft", "menge": 4, "einheit": "EL", "typ": "saeure" },
                        { "name": "Fischsoße", "menge": 4, "einheit": "EL", "typ": "sosse" }
                    ],
                    "zubereitung": [
                        "Garnelen von Kopf und Schale befreien und den Darm ziehen. Köpfe und Schalen aufheben",
                        "1,5 l Wasser zum Kochen bringen. Köpfe und Schalen zugeben",
                        "Korianderwurzel, Pfefferkörner mörsern und zur Kochbrühe geben. 5 Minuten köcheln lassen",
                        "Brühe abseihen",
                        "Kafirblätter und Zitronengras kleinschneiden: Zitronengras mit dem Messer leicht andrücken",
                        "Galgant in dünne Scheiben schneiden. Chilischoten in dünne Ringe schneiden",
                        "Alles einschließlich der Garnelen und Limettensaft und Fischsoße in die Brühe geben und 3 Minuten bei geschlossenem Deckel sanft kochen",
                        "Suppe mit allem servieren und frischen Koriandergrün garnieren"
                    ],
                    "anmerkungen": [
                        "Wenn Sie sich nicht mit den Garnelen 'herumschlagen' wollen, kaufen Sie küchenfertige und einen fertigen Garnelen Fond. Das geht ohne weiteres"
                    ],
                    "tags": ["thailaendisch", "garnelen", "sauer-scharf", "suppe", "asiatisch"]
                },

                "tomaten-und-spinat-mousse": {
                    "id": "tomaten-und-spinat-mousse",
                    "name": "Tomaten und Spinat Mousse",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "vorspeisen",
                    "bild": "images/rezepte/tomaten-und-spinat-mousse.jpg",
                    "quelle": "Eine leichte Vorspeise",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Leichte Gemüsemousse als Vorspeise",
                    "geschichte": "Dass hier TK und Dosenware zum Einsatz kommt, tut der Qualität dieser Vorspeise keinen Abbruch.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Gelatine", "menge": 6, "einheit": "Blatt", "typ": "bindemittel" },
                        { "name": "Butter", "menge": 40, "einheit": "g", "typ": "fett" },
                        { "name": "Spinat, TK", "menge": 150, "einheit": "g", "typ": "gemuese" },
                        { "name": "Tomatenstücke, Dose", "menge": 150, "einheit": "g", "typ": "gemuese" },
                        { "name": "Tomatenmark", "menge": 1, "einheit": "EL", "typ": "gemuese" },
                        { "name": "Zucker", "menge": 1, "einheit": "TL", "typ": "suessungsmittel" },
                        { "name": "Sahne", "menge": 250, "einheit": "g", "typ": "milchprodukt" }
                    ],
                    "zubereitung": [
                        "Je drei Blatt Gelatine separat in kaltem Wasser einweichen",
                        "Mit 20g Butter den TK Spinat etwa 5 Minuten im Topf dünsten. Kräftig mit Salz, Pfeffer und Muskat Nuss würzen",
                        "3 Blatt Gelatine ausdrücken, im Spinat auflösen. Die Masse pürieren und kalt stellen",
                        "20 g Butter im Topf erwärmen, Tomatenmark kurz mit rösten",
                        "Tomaten zufügen, kräftig mit Zucker, Salz Pfeffer und etwas Cayenne Pfeffer würzen. Die restliche Gelatine in der Masse auflösen, pürieren und kalt stellen",
                        "Sahne steif schlagen, Jeweils die Hälfte unter die Pürees heben",
                        "Eine Terrinenform mit Frischhaltefolie auskleiden. Erst die Spinatmousse einfüllen und etwa 5 Minuten kalt stellen",
                        "Auf die erstarrte Spinatmousse jetzt noch die Tomatenmousse füllen. Kalt stellen"
                    ],
                    "anmerkungen": [
                        "Dosentomaten sind das einzige Dosenprodukt, das auch in der Sterneküche zum Einsatz kommt, da die reif geernteten Früchte meist aromatischer sind, als die zumeist unreif geerntete Frischware",
                        "Bei Garnieren der Mousse können Sie Ihrer Fantasie freien Lauf lassen. Ich arbeite gerne mit kleinen Blattsalaten und grünen Spargeln"
                    ],
                    "tags": ["mousse", "spinat", "tomaten", "vorspeise", "elegant"]
                },

                "vitello-tonato": {
                    "id": "vitello-tonato",
                    "name": "Vitello Tonato",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "kalb",
                    "bild": "images/rezepte/vitello-tonato.jpg",
                    "quelle": "Italienischer Vorspeisen Klassiker",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "kuehlzeit": "1-3 Tage"
                    },
                    "beschreibung": "Kalbfleisch in Thunfischsauce - italienischer Klassiker",
                    "geschichte": "Wird immer wieder gerne gegessen und ist ideal zum Vorbereiten.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Kalbschulter, gekocht", "menge": 1000, "einheit": "g", "typ": "fleisch" },
                        { "name": "Thunfisch", "menge": 1, "einheit": "Dose", "typ": "fisch" },
                        { "name": "Sardellenfilets", "menge": 4, "einheit": "Stück", "typ": "fisch" },
                        { "name": "Eier, die Eigelbe", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Olivenöl", "menge": 200, "einheit": "ml", "typ": "fett" },
                        { "name": "Essig", "menge": 0, "einheit": "etwas", "typ": "saeure" },
                        { "name": "Zitronen, Saft", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Eier, hartgekocht", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Kapern, fein gehackt", "menge": 1, "einheit": "EL", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Statt der gekochten Schulter könnte man auch gebratene Lende nehmen. Ich rate von dieser Lösung ab. Nehmen Sie am besten die flache Schulter - die bleibt saftig",
                        "Den abgetropften Thunfisch und die Sardellenfilets mit 1dl Kochsud glatt pürieren",
                        "Aus den Eigelb und dem Olivenöl eine Mayonnaise rühren und diese mit Essig, Zitronensaft und Salz würzen",
                        "Mayonnaise und Thunfischmasse miteinander verrühren. Die Creme sollte dickflüssig sein. Im Bedarfsfall noch mit Kochsud verdünnen",
                        "Fertige Creme über das vorbereitete Kalbfleisch gießen und bis zu drei Tage kalt stellen",
                        "Mit Kapern, Gehackten Ei und wenn Sie mögen mit Oliven ausgarnieren"
                    ],
                    "anmerkungen": [
                        "In meinem Lieblingskochbuch wird empfohlen, das Gericht drei Tage im Voraus herzustellen, da es dann den optimalen Geschmack entwickelt",
                        "Wir haben es noch nicht ausprobiert: zu gut ist das Gericht und in Null Komma Nichts weg!"
                    ],
                    "tags": ["vitello-tonato", "italienisch", "kalb", "vorspeise", "klassiker"]
                },

                "wuerzburger-fuhrmanns-braten": {
                    "id": "wuerzburger-fuhrmanns-braten",
                    "name": "Würzburger Fuhrmanns Braten",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "rind",
                    "bild": "images/rezepte/wuerzburger-fuhrmanns-braten.jpg",
                    "quelle": "Gefüllte Rinderbrust",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "kochzeit": "60",
                        "kochzeit_einheit": "Minuten",
                        "backzeit": "45",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Traditioneller gefüllter Rinderbraten",
                    "geschichte": "Ein köstlicher Braten, der die Beilage gleich 'im Bauch' trägt.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Rinderbrust ohne Knochen", "menge": 1500, "einheit": "g", "typ": "fleisch" },
                        { "name": "Semmeln", "menge": 2, "einheit": "Stück", "typ": "brot" },
                        { "name": "Zwiebeln", "menge": 4, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Butter", "menge": 80, "einheit": "g", "typ": "fett" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Bratwurst Fülle", "menge": 250, "einheit": "g", "typ": "fleisch" },
                        { "name": "Petersilie", "menge": 2, "einheit": "Bund", "typ": "kraeuter" },
                        { "name": "Suppengrün", "menge": 1, "einheit": "Bund", "typ": "gemuese" },
                        { "name": "Lorbeer Blatt", "menge": 1, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Rahm", "menge": 250, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Mehl", "menge": 2, "einheit": "EL", "typ": "mehl" },
                        { "name": "Tomatenmark", "menge": 2, "einheit": "EL", "typ": "gemuese" },
                        { "name": "Weißwein", "menge": 125, "einheit": "ml", "typ": "wein" }
                    ],
                    "zubereitung": [
                        "Am besten vom Metzger eine Tasche in das Fleisch schneiden lassen",
                        "Innen salzen und pfeffern. Außen nur salzen",
                        "Füllung vorbereiten: 2 Semmeln einweichen. 3 Zwiebeln würfeln",
                        "Butter in einer Pfanne erhitzen und die Zwiebeln glasig dünsten. Petersilie hacken",
                        "In einer großen Schüssel ausgedrückte Semmeln, Bratwurstfülle, Zwiebeln, Eier und Petersilie gut mischen",
                        "Die Brust mit dieser Masse füllen und zunähen",
                        "2,5 l Salzwasser aufkochen, das geputzte Suppengrün, die vierte Zwiebel und das Fleisch zusetzen und eine Stunde kochen",
                        "Das Fleisch herausnehmen, gut abtropfen und in einem großen Topf gut von allen Seiten anbraten",
                        "Die Sahne mit 1/4 l der Kochflüssigkeit mischen, über das Fleisch gießen und den Topf bei 220° für 45 Minuten ins Rohr schieben",
                        "Fleisch herausnehmen - warm stellen - den Bratendfond abseihen und mit Mehl, Tomatenmark und Wein abbinden und nochmal 8 Minuten aufkochen. Die restliche Petersilie einmischen"
                    ],
                    "anmerkungen": [
                        "Natürlich können Sie hierzu alle Arten von Mischgemüsen oder Salaten reichen"
                    ],
                    "tags": ["rinderbrust", "gefuellt", "tradition", "festlich", "deftig"]
                },

                "yam-nua": {
                    "id": "yam-nua",
                    "name": "Yam Nua",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "rind",
                    "bild": "images/rezepte/yam-nua.jpg",
                    "quelle": "Thailändischer Rindfleisch Salat",
                    "quantitative_angaben": {
                        "portionen": "4 Personen"
                    },
                    "beschreibung": "Sauer-scharfer thailändischer Rindfleischsalat",
                    "geschichte": "Dieser all-sauer-scharfe Salat ist wunderbar frisch.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Knoblauchzehen", "menge": 3, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Chili Schoten, thailändische, rot", "menge": 3, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Fischsauce", "menge": 4, "einheit": "EL", "typ": "sosse" },
                        { "name": "Limettensaft", "menge": 4, "einheit": "EL", "typ": "saeure" },
                        { "name": "Zucker", "menge": 1, "einheit": "EL", "typ": "suessungsmittel" },
                        { "name": "Zwiebeln, rot", "menge": 2, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Schnittlauch", "menge": 1, "einheit": "Bund", "typ": "kraeuter" },
                        { "name": "Koriander", "menge": 1, "einheit": "Stengel", "typ": "kraeuter" },
                        { "name": "Rinderfilet oder Roastbeef", "menge": 500, "einheit": "g", "typ": "fleisch" }
                    ],
                    "zubereitung": [
                        "Für die Salatsoße geschälten Knoblauch, entkernte Chilis zermörsern",
                        "Fischsoße, Limettensaft und Zucker verrühren und mit der obigen Masse mischen",
                        "Zwiebeln schälen und in Streifen schneiden",
                        "Koriander (und Schnittlauch) grob schneiden",
                        "Fleisch in der Pfanne mit wenig Öl medium (rare) braten. Etwas ruhen lassen und in Streifen schneiden",
                        "Fleisch mit der Salatsoße, Zwiebeln und Koriander (Schnittlauch) vermischen und mit dem gemörserten Reis bestreuen",
                        "Lauwarm zu Tisch bringen"
                    ],
                    "anmerkungen": [
                        "Statt Rind, kann man auch kleingeschnittene Hühnerbrust oder grobes Enten Hackfleisch nehmen",
                        "Ich nehme gerne noch Thai Basilikum",
                        "In vielen Rezepten findet man als Garnitur noch gebratenen, gemörsenden Reis: Jasminreis in trockener Pfanne leicht braun rösten und anschließend mörsern",
                        "Das über den Salat gestreut ist meiner Meinung nach eine Steigerung an Knusprigkeit. Ich verzichte nie darauf"
                    ],
                    "tags": ["thailaendisch", "rindfleischsalat", "sauer-scharf", "frisch", "asiatisch"]
                },

                "zwiebelkuchen": {
                    "id": "zwiebelkuchen",
                    "name": "Zwiebelkuchen",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "kuchen",
                    "bild": "images/rezepte/zwiebelkuchen.jpg",
                    "quelle": "Deutsch - Rustikal",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "40-45",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Herzhafter Zwiebelkuchen auf Brotteig-Basis",
                    "geschichte": "Dieser herrhaft rustikale Zwiebelkuchen auf Brotteig Basis ist gut als Hauptgericht geeignet, weniger als 'Weinbegleiter'.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Dinkelmehl", "menge": 300, "einheit": "g", "typ": "mehl" },
                        { "name": "Butter, in kleinen Stückchen", "menge": 175, "einheit": "g", "typ": "fett" },
                        { "name": "Salz", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zwiebeln", "menge": 1000, "einheit": "g", "typ": "gemuese" },
                        { "name": "Zwiebeln, rot", "menge": 2, "einheit": "Stück", "typ": "gemuese" },
                        { "name": "Butter", "menge": 3, "einheit": "EL", "typ": "fett" },
                        { "name": "Sahne", "menge": 250, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Eier", "menge": 5, "einheit": "Stück", "typ": "eier" },
                        { "name": "Greyerzer, gerieben", "menge": 150, "einheit": "g", "typ": "kaese" }
                    ],
                    "zubereitung": [
                        "Aus 2 Eiern, Dinkelmehl Salz und Butterflöckchen einen Teig kneten und mindestens 30 Minuten ruhen lassen",
                        "Zwiebel schälen und in Scheiben schneiden(oder hobeln) und in 3 EL Butter etwa 15 Minuten lang in der Pfanne unter Rühren dünsten",
                        "Sahne mit Eiern verquirlen und Käse unterheben. Mit Salz, Pfeffer und Muskat würzen",
                        "Ofen auf 180° vorheizen",
                        "Den Teig ausrollen und ein Backblech damit belegen",
                        "Zwiebeln darüber verteilen und mit der Eier/Käse Mischung begießen",
                        "40-45 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Reichen Sie ihn mit frischen Salaten"
                    ],
                    "tags": ["zwiebelkuchen", "herzhaft", "rustikal", "hauptgericht", "deutsch"]
                }
            }
        },
        
        

        "desserts": {
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
                },
                                "clafoutis": {
                    "id": "clafoutis",
                    "name": "Clafoutis",
                    "kategorie": "desserts",
                    "unterkategorie": "auflaeufe",
                    "bild": "images/rezepte/clafoutis.jpg",
                    "quelle": "Nachbarin RealBurghardt (*1992)",
                    "quantitative_angaben": {
                        "portionen": "4 Personen",
                        "backtemperatur": "200",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "40-45",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Französischer Aprikosenauflauf - einfach und lecker",
                    "geschichte": "Dieses Rezept ist von unserer lieben Nachbarin RealBurghardt. (*1992).",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Mehl", "menge": 40, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 1, "einheit": "Msp", "typ": "backmittel" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Milch", "menge": 125, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Zucker", "menge": 60, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Aprikosen", "menge": 0, "einheit": "nach Größe der Form", "typ": "obst" }
                    ],
                    "zubereitung": [
                        "Eine Auflaufform gut buttern",
                        "Halbierte Aprikosen auf dem Boden verteilen",
                        "Ofen auf 200 Grad vorheizen",
                        "Aus den restlichen Zutaten einen dicken Pfannkuchen Teig rühren und über das Obst gießen",
                        "Evtl. mit Mandelsplittern bestreuen",
                        "Für 40-45 Minuten im Ofen backen",
                        "Nach Auskühlen mit Puderzucker bestreuen"
                    ],
                    "anmerkungen": [
                        "Man kann diese Rezeptur mit allem Stein- und Beerenobst machen."
                    ],
                    "tags": ["auflauf", "aprikosen", "frankreich", "einfach", "obst"]
                },

                "joghurt-mousse": {
                    "id": "joghurt-mousse",
                    "name": "Joghurt Mousse",
                    "kategorie": "desserts",
                    "unterkategorie": "mousses",
                    "bild": "images/rezepte/joghurt-mousse.jpg",
                    "quelle": "Dr. Oetker",
                    "quantitative_angaben": {
                        "portionen": "4 Personen oder 1 Torte 28cm",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Standfeste Joghurt-Mousse für Torten oder Desserts",
                    "geschichte": "Ich habe diese Masse für ein Torten-Projekt genutzt.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Gelatine", "menge": 10, "einheit": "Blatt", "typ": "bindemittel" },
                        { "name": "Joghurt", "menge": 500, "einheit": "g", "typ": "milchprodukt" },
                        { "name": "Zucker", "menge": 180, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanille Zucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Zitrone (nur Abrieb)", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Zitronensaft", "menge": 180, "einheit": "ml", "typ": "saeure" },
                        { "name": "Sahne", "menge": 500, "einheit": "g", "typ": "milchprodukt" }
                    ],
                    "zubereitung": [
                        "Gelatine in kaltem Wasser einweichen",
                        "Joghurt mit Zucker, Zitronenabrieb und Vanille Zucker verrühren",
                        "Sahne steif schlagen",
                        "Gelatine ausdrücken und im erwärmten (nicht kochen) Zitronensaft auflösen",
                        "Mit 4 EL der Joghurtmasse verrühren und anschließend alles mit dem Schneebesen unter die Joghurtmasse rühren",
                        "Wenn die Masse zu stocken beginnt mit dem Schneebesen die steif geschlagene Sahne unterheben"
                    ],
                    "anmerkungen": [
                        "Diese Mousse wird fest und ist 'standfest'",
                        "Die halbe Menge reicht als Dessert für vier Personen",
                        "Als Tortenbelag für 28cm Durchmesser verwenden",
                        "Ich habe diese Masse für ein Torten-Projekt genutzt: Ein lockerer Schokoladenboden mit schwarzer Johannisbeer Confiture und darauf die Joghurt Mousse"
                    ],
                    "tags": ["joghurt", "mousse", "torte", "sauer", "leicht"]
                },

                "mousse-au-chocolat-massisch": {
                    "id": "mousse-au-chocolat-massisch",
                    "name": "Mousse au chocolat",
                    "kategorie": "desserts",
                    "unterkategorie": "mousses",
                    "bild": "images/rezepte/mousse-au-chocolat-massisch.jpg",
                    "quelle": "Massisch",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen"
                    },
                    "beschreibung": "Schwere, reichhaltige Schokoladenmousse",
                    "geschichte": "Eine sehr schwere, reichhaltige Variante des Klassikers, mit dem schokoladigsten Geschmack.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Eier", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Butter", "menge": 125, "einheit": "g", "typ": "fett" },
                        { "name": "Bittere Schokolade", "menge": 180, "einheit": "g", "typ": "schokolade" },
                        { "name": "Zucker", "menge": 4, "einheit": "EL", "typ": "suessungsmittel" },
                        { "name": "Rahm", "menge": 3, "einheit": "EL", "typ": "milchprodukt" },
                        { "name": "Starker Kaffee", "menge": 2, "einheit": "EL", "typ": "fluessigkeit" },
                        { "name": "Cognac", "menge": 2, "einheit": "EL", "typ": "alkohol" }
                    ],
                    "zubereitung": [
                        "Eigelb und Zucker (auf einem Wasserbad) dick cremig aufschlagen und dann den Cognac hinzufügen",
                        "Masse schlagen, bis sie wieder ausgekühlt ist",
                        "Schokolade (auf einem Wasserbad) zum Schmelzen bringen",
                        "Wenn sie flüssig ist nach und nach langsam die Butterstücke einrühren und den Kaffee",
                        "Wenn sich diese Masse gut verbunden und nicht mehr zu warm ist, langsam unter die Eimasse rühren",
                        "Eiweiß sehr steif schlagen und unter die Masse ziehen",
                        "Abfüllen und kalt stellen"
                    ],
                    "anmerkungen": [
                        "Sehr aufwendig in der Herstellung, aber meines Erachtens wirklich lohnend",
                        "Ich rate wirklich, über einem Wasserbad zu arbeiten - das Ergebnis wird besser!",
                        "Eine einfachere - weniger schwere - Variante und eine 'Blitzversion' habe ich unter Schoko Mousse aufgeführt"
                    ],
                    "tags": ["schokolade", "reichhaltig", "klassiker", "frankreich", "wasserbad"]
                },
                                "joghurt-mousse": {
                    "id": "joghurt-mousse",
                    "name": "Joghurt Mousse",
                    "kategorie": "desserts",
                    "unterkategorie": "mousses",
                    "bild": "images/rezepte/joghurt-mousse.jpg",
                    "quelle": "Dr. Oetker",
                    "quantitative_angaben": {
                        "portionen": "4 Personen oder 1 Torte 28cm",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Standfeste Joghurt-Mousse für Torten oder Desserts",
                    "geschichte": "Ich habe diese Masse für ein Torten-Projekt genutzt.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Gelatine", "menge": 10, "einheit": "Blatt", "typ": "bindemittel" },
                        { "name": "Joghurt", "menge": 500, "einheit": "g", "typ": "milchprodukt" },
                        { "name": "Zucker", "menge": 180, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanille Zucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Zitrone (nur Abrieb)", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Zitronensaft", "menge": 180, "einheit": "ml", "typ": "saeure" },
                        { "name": "Sahne", "menge": 500, "einheit": "g", "typ": "milchprodukt" }
                    ],
                    "zubereitung": [
                        "Gelatine in kaltem Wasser einweichen",
                        "Joghurt mit Zucker, Zitronenabrieb und Vanille Zucker verrühren",
                        "Sahne steif schlagen",
                        "Gelatine ausdrücken und im erwärmten (nicht kochen) Zitronensaft auflösen",
                        "Mit 4 EL der Joghurtmasse verrühren und anschließend alles mit dem Schneebesen unter die Joghurtmasse rühren",
                        "Wenn die Masse zu stocken beginnt mit dem Schneebesen die steif geschlagene Sahne unterheben"
                    ],
                    "anmerkungen": [
                        "Diese Mousse wird fest und ist 'standfest'",
                        "Die halbe Menge reicht als Dessert für vier Personen",
                        "Als Tortenbelag für 28cm Durchmesser verwenden",
                        "Ich habe diese Masse für ein Torten-Projekt genutzt: Ein lockerer Schokoladenboden mit schwarzer Johannisbeer Confiture und darauf die Joghurt Mousse"
                    ],
                    "tags": ["joghurt", "mousse", "torte", "sauer", "leicht"]
                },

                "mousse-au-chocolat-massisch": {
                    "id": "mousse-au-chocolat-massisch",
                    "name": "Mousse au chocolat",
                    "kategorie": "desserts",
                    "unterkategorie": "mousses",
                    "bild": "images/rezepte/mousse-au-chocolat-massisch.jpg",
                    "quelle": "Massisch",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen"
                    },
                    "beschreibung": "Schwere, reichhaltige Schokoladenmousse",
                    "geschichte": "Eine sehr schwere, reichhaltige Variante des Klassikers, mit dem schokoladigsten Geschmack.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Eier", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Butter", "menge": 125, "einheit": "g", "typ": "fett" },
                        { "name": "Bittere Schokolade", "menge": 180, "einheit": "g", "typ": "schokolade" },
                        { "name": "Zucker", "menge": 4, "einheit": "EL", "typ": "suessungsmittel" },
                        { "name": "Rahm", "menge": 3, "einheit": "EL", "typ": "milchprodukt" },
                        { "name": "Starker Kaffee", "menge": 2, "einheit": "EL", "typ": "fluessigkeit" },
                        { "name": "Cognac", "menge": 2, "einheit": "EL", "typ": "alkohol" }
                    ],
                    "zubereitung": [
                        "Eigelb und Zucker (auf einem Wasserbad) dick cremig aufschlagen und dann den Cognac hinzufügen",
                        "Masse schlagen, bis sie wieder ausgekühlt ist",
                        "Schokolade (auf einem Wasserbad) zum Schmelzen bringen",
                        "Wenn sie flüssig ist nach und nach langsam die Butterstücke einrühren und den Kaffee",
                        "Wenn sich diese Masse gut verbunden und nicht mehr zu warm ist, langsam unter die Eimasse rühren",
                        "Eiweiß sehr steif schlagen und unter die Masse ziehen",
                        "Abfüllen und kalt stellen"
                    ],
                    "anmerkungen": [
                        "Sehr aufwendig in der Herstellung, aber meines Erachtens wirklich lohnend",
                        "Ich rate wirklich, über einem Wasserbad zu arbeiten - das Ergebnis wird besser!",
                        "Eine einfachere - weniger schwere - Variante und eine 'Blitzversion' habe ich unter Schoko Mousse aufgeführt"
                    ],
                    "tags": ["schokolade", "reichhaltig", "klassiker", "frankreich", "wasserbad"]
                },

                "schokomousse-blitzrezept": {
                    "id": "schokomousse-blitzrezept",
                    "name": "Schokomousse",
                    "kategorie": "desserts",
                    "unterkategorie": "mousses",
                    "bild": "images/rezepte/schokomousse-blitzrezept.jpg",
                    "quelle": "Blitzrezept mit zwei Zutaten",
                    "quantitative_angaben": {
                        "portionen": "2 Personen",
                        "kuehlzeit": "1-1.5",
                        "kuehlzeit_einheit": "Stunden"
                    },
                    "beschreibung": "Einfache Schokoladenmousse mit nur zwei Zutaten",
                    "geschichte": "Dies ist ein erstaunlich einfaches und dabei doch luftiges und schmackhaftes Schokoladenmousse.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Schokolade", "menge": 60, "einheit": "g", "typ": "schokolade" },
                        { "name": "Schlagrahm", "menge": 120, "einheit": "g", "typ": "milchprodukt" }
                    ],
                    "zubereitung": [
                        "Schokolade fein hacken",
                        "30 g Rahm erwärmen und die Schokolade darin auflösen",
                        "Auskühlen lassen. Schokolade muss noch weich bleiben",
                        "90 g sehr kühlen Rahm steif schlagen. Die erkaltete Schokolade vorsichtig unterheben",
                        "1-1½ Stunden kalt stellen"
                    ],
                    "anmerkungen": [
                        "Ich nehme 70% Schokolade und 'süße' diese mit einem Teelöffel Kandiszucker und einem TL Zucker.",
                        "Wenn man die Mousse sehr lange stehen lässt wird sie härter und sollte dann ca. 20 Minuten vor dem Servieren wieder aus dem Kühlschrank geholt werden."
                    ],
                    "tags": ["schokolade", "blitzrezept", "einfach", "2-zutaten", "schnell"]
                },

                "schokomousse-siebeck": {
                    "id": "schokomousse-siebeck",
                    "name": "Schokomousse",
                    "kategorie": "desserts",
                    "unterkategorie": "mousses",
                    "bild": "images/rezepte/schokomousse-siebeck.jpg",
                    "quelle": "Wolfram Siebeck",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen"
                    },
                    "beschreibung": "Mühelose und unaufwendige Schokoladenmousse",
                    "geschichte": "Eine mühelose und unaufwendige Mousse au chocolat.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Zucker", "menge": 40, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Weinbrand", "menge": 20, "einheit": "ml", "typ": "alkohol" },
                        { "name": "Sahne", "menge": 200, "einheit": "g", "typ": "milchprodukt" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Starker Kaffee", "menge": 2, "einheit": "EL", "typ": "fluessigkeit" },
                        { "name": "Zartbitter Schokolade", "menge": 200, "einheit": "g", "typ": "schokolade" }
                    ],
                    "zubereitung": [
                        "Eigelb mit Zucker sehr hell und cremig schlagen",
                        "Schokolade im Wasserbad schmelzen",
                        "Eimasse unter die lauwarme Schokolade rühren und warmen Kaffee und Weinbrand unterrühren",
                        "Die Sahne steif schlagen. Die Eiweiß sehr steif schlagen",
                        "Erst die Sahne, zuletzt den Eischnee unter die Schokomasse heben",
                        "In Portionsgläser oder Schüssel abfüllen. Im Kühlschrank fest werden lassen"
                    ],
                    "anmerkungen": [
                        "Für welche der Drei in diesem Buch Sie sich entscheiden, müssen Sie selbst herausfinden. Jede der drei Varianten hat ihren Reiz.",
                        "Meine 'objektive Wertung' nach 'Schokoladigkeit': Die Maasische - Diese - Die Blitzvariante"
                    ],
                    "tags": ["schokolade", "siebeck", "klassiker", "wasserbad"]
                },

                "orangen-creme": {
                    "id": "orangen-creme",
                    "name": "Orangen Creme",
                    "kategorie": "desserts",
                    "unterkategorie": "cremes",
                    "bild": "images/rezepte/orangen-creme.jpg",
                    "quelle": "Johann Lafer",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Bitter-süßes Orangen-Dessert",
                    "geschichte": "Dies ist ein angenehm bitter-süßes Dessert.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Orangensaft und Abrieb", "menge": 300, "einheit": "ml", "typ": "obst" },
                        { "name": "Vanillepudding Pulver", "menge": 20, "einheit": "g", "typ": "pulver" },
                        { "name": "Griechischer Jogurt", "menge": 150, "einheit": "g", "typ": "milchprodukt" },
                        { "name": "Schlag Rahm", "menge": 150, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Zimtstange", "menge": 1, "einheit": "kleine", "typ": "gewuerz" },
                        { "name": "Kardamom Kapseln", "menge": 4, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Sternanis", "menge": 2, "einheit": "Stückchen", "typ": "gewuerz" },
                        { "name": "Chili Schote", "menge": 1, "einheit": "kleine", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "200 ml von Orangensaft mit den Gewürzen kurz aufkochen und 15 Minuten ziehen lassen",
                        "Pudding Pulver mit 3 EL Puderzucker anrühren und unter den warmen Saft mischen, einmal kurz aufkochen lassen und erkalten",
                        "Jogurt unterrühren",
                        "Sahne steif schlagen und unter die erkaltete Masse heben",
                        "In Portionsförmchen oder eine Schüssel abfüllen und einige Stunden im Kühlschrank erkalten lassen"
                    ],
                    "anmerkungen": [
                        "Vor dem Servieren könnte man nach Belieben die Creme noch wie eine Creme Brulée mit braunem Zucker abflämmen",
                        "Ich verzichte auf Abflämmen, weil ich es sehr schätze, dass diese Nachspeise etwas herb ist",
                        "Ich reiche Orangenfilet als Garnitur, das gibt eine angenehme Frische"
                    ],
                    "tags": ["orange", "creme", "lafer", "herb", "gewuerze"]
                },
                                "panna-cotta": {
                    "id": "panna-cotta",
                    "name": "Panna Cotta",
                    "kategorie": "desserts",
                    "unterkategorie": "cremes",
                    "bild": "images/rezepte/panna-cotta.jpg",
                    "quelle": "Italienisches Grundrezept",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen",
                        "kuehlzeit": "3-4",
                        "kuehlzeit_einheit": "Stunden"
                    },
                    "beschreibung": "Italienische Sahnecreme als Grundbaustein für Desserts",
                    "geschichte": "Ich verwende diese Panna Cotta als einen Grundbaustein für die verschiedensten Desserts.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Sahne", "menge": 500, "einheit": "g", "typ": "milchprodukt" },
                        { "name": "Vanille Schoten", "menge": 1, "einheit": "Stück", "typ": "gewuerz" },
                        { "name": "Zucker", "menge": 50, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Gelatine", "menge": 2, "einheit": "Blatt", "typ": "bindemittel" }
                    ],
                    "zubereitung": [
                        "Gelatine in kaltem Wasser einweichen",
                        "Sahne in einem Topf mit Zucker und Vanille Mark erhitzen und langsam 15 Minuten köcheln lassen",
                        "Den Topf von Herd ziehen und die Gelatine blätter tropfnass dazugeben. Unter Rühren auflösen",
                        "In Portionsförmchen oder eine Schüssel abfüllen",
                        "3-4 Stunden im Kühlschrank erkalten lassen"
                    ],
                    "anmerkungen": [
                        "Man kann sie aber einfach mit frischen Obst, Kompotten oder Fruchtspiegeln servieren",
                        "Lassen Sie Ihre Phantasie spielen!"
                    ],
                    "tags": ["panna-cotta", "sahne", "italienisch", "grundrezept", "einfach"]
                },

                "pasteis-de-nata": {
                    "id": "pasteis-de-nata",
                    "name": "Pasteis de Nata",
                    "kategorie": "desserts",
                    "unterkategorie": "gebackenes",
                    "bild": "images/rezepte/pasteis-de-nata.jpg",
                    "quelle": "Portugiesische Tradition",
                    "quantitative_angaben": {
                        "portionen": "12 Stück",
                        "backtemperatur": "230",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "10-12",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Portugiesische Puddingtörtchen",
                    "geschichte": "In Portugal werden diese leckeren Pasteten mit Zimt bestreut.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Zucker", "menge": 200, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Mehl", "menge": 2, "einheit": "EL", "typ": "mehl" },
                        { "name": "Eigelb", "menge": 8, "einheit": "Stück", "typ": "eier" },
                        { "name": "Sahne", "menge": 500, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Salz", "menge": 1, "einheit": "Prise", "typ": "gewuerz" },
                        { "name": "Zitrone (Abrieb)", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Blätterteig", "menge": 1, "einheit": "Paket", "typ": "teig" }
                    ],
                    "zubereitung": [
                        "Backofen auf 230° vorheizen",
                        "Für die Creme alle Zutaten (außer Blätterteig) über Wasserbad (oder sehr behutsam) dickcremig aufschlagen. Es ist wichtig, dass die Masse wirklich sehr dick wird",
                        "Auskühlen lassen und gelegentlich rühren, damit sich keine Haut bildet",
                        "Blätterteig dünn ausrollen und Kreise ausstechen, die in Muffinblech Mulden passen (ca. 8 cm)",
                        "Das Blech mit diesen Teigkreisen ausfüllen und die entstandenen 'Schalen' bis 1 cm unter den Rand mit der Eier/Sahne Masse befüllen",
                        "In 10-12 Minuten rasch fertig backen. Aus den Mulden nehmen und auskühlen lassen"
                    ],
                    "anmerkungen": [
                        "Das Ergebnis ist wirklich davon abhängig, wie viel Mühe Sie sich beim Aufschlagen der Masse geben. Das kann durchaus 10-15 Minuten dauern!",
                        "Je frischer sie verzehrt werden, desto besser sind sie"
                    ],
                    "tags": ["portugiesisch", "blätterteig", "pudding", "tradition", "karamell"]
                },

                "pralinen-parfait": {
                    "id": "pralinen-parfait",
                    "name": "Pralinen Parfait",
                    "kategorie": "desserts",
                    "unterkategorie": "parfaits",
                    "bild": "images/rezepte/pralinen-parfait.jpg",
                    "quelle": "Eigenkreation",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "kuehlzeit": "3",
                        "kuehlzeit_einheit": "Stunden"
                    },
                    "beschreibung": "Nuss-Nougat Parfait mit Orangenabrieb",
                    "geschichte": "In vielen Rezept Varianten dieses Parfaits werden Gewürzbirnen gereicht.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Zart Bitter Kouvertüre", "menge": 100, "einheit": "g", "typ": "schokolade" },
                        { "name": "Nuss-Nougat Masse", "menge": 100, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Milch", "menge": 120, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Eigelb", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 80, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Orangenabrieb", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Sahne", "menge": 350, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Brauner Rum", "menge": 2, "einheit": "TL", "typ": "alkohol", "optional": true }
                    ],
                    "zubereitung": [
                        "Kouvertüre grob hacken. Nuss-Nougat Masse grob schneiden im Wasserbad schmelzen",
                        "Milch mit Eigelb, Zucker und Orangenschale vermischen",
                        "Über Wasserbad im Schlagkessel 10 Minuten cremig rühren",
                        "Mit Nuss-Nougat Masse mischen und kalt rühren",
                        "Steif geschlagene Sahne unterheben. Wer will kann jetzt mit Rum aromatisieren",
                        "Mindestens 3 Stunden im Kühlfach kalt stellen"
                    ],
                    "anmerkungen": [
                        "Gewürzbirnen passen neben Desserts, auch sehr gut zu Käse und Wildgerichten",
                        "Gewürzbirnen-Zubereitung: Geschälte und halbierte Birnen in reichlich kräftigen Rotwein weich kochen (30 Minuten). Mit Zimt, Nelken, Piment oder Sternanis aromatisieren"
                    ],
                    "tags": ["parfait", "nougat", "schokolade", "orange", "gefroren"]
                },

                "preisselbeer-parfait": {
                    "id": "preisselbeer-parfait",
                    "name": "Preisselbeer Parfait",
                    "kategorie": "desserts",
                    "unterkategorie": "parfaits",
                    "bild": "images/rezepte/preisselbeer-parfait.jpg",
                    "quelle": "Österreich",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Österreichisches Preiselbeer-Parfait",
                    "geschichte": "Dieses Rezept hat uns von Anfang an sehr begeistert und ebenso alle Gäste.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Eidotter", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Puderzucker", "menge": 100, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Mandel Likör", "menge": 2, "einheit": "EL", "typ": "alkohol" },
                        { "name": "Schlagrahm", "menge": 400, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Preiselbeer Kompott", "menge": 300, "einheit": "g", "typ": "obst" }
                    ],
                    "zubereitung": [
                        "Parfait Form mit Frischhaltefolie auslegen",
                        "Dotter mit Zucker und Likör verrühren",
                        "Im Schlagkessel über Wasserbad dick cremig aufschlagen",
                        "Kessel im kalten Wasser weiterschlagen bis sie abgekühlt ist",
                        "Sahne sehr steif schlagen und die Hälfte unter die Eimasse ziehen",
                        "Preiselbeeren unterrührend und restliche Schlagsahne vorsichtig unterheben",
                        "Masse in vorbereitete Form geben und gefrieren lassen"
                    ],
                    "anmerkungen": [
                        "Ein würdiger Abschluss für ein feines Menü",
                        "Wir reichen dazu Mandelhörnchen und Orangen Soße",
                        "Jedoch sind Ihrer Fantasie keine Grenzen gesetzt, wie Sie das Parfait präsentieren"
                    ],
                    "tags": ["parfait", "preiselbeeren", "oesterreich", "gefroren", "elegant"]
                },

                "zimt-parfait": {
                    "id": "zimt-parfait",
                    "name": "Zimt Parfait",
                    "kategorie": "desserts",
                    "unterkategorie": "parfaits",
                    "bild": "images/rezepte/zimt-parfait.jpg",
                    "quelle": "Simpel und Wirkungsvoll",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Einfaches aber wirkungsvolles Zimt-Parfait",
                    "geschichte": "Dies ist ein erstaunlich einfaches und dabei doch luftiges und schmackhaftes Parfait.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Eigelb", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 200, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Rahm", "menge": 500, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Zimt, gemahlen", "menge": 2, "einheit": "TL", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Eiskalten Rahm sehr steif schlagen",
                        "Eigelb mit Zucker aufschlagen und Zimt zugeben",
                        "Schlagrahm langsam unter die Eimasse ziehen",
                        "Alles in eine Parfaitform oder Portionsformchen füllen",
                        "Mehrere Stunden ins Eisfach geben",
                        "Etwa 20 Minuten vor Gebrauch in den Kühlschrank geben, damit es wieder geschmeidiger wird"
                    ],
                    "anmerkungen": [
                        "Wir essen es am liebsten mit einem frisch zubereiteten lauwarmen Zwetschgen Kompott",
                        "Es lässt sich aber auch mit lauwarmen Zimthirschen und vielen anderen Dingen bestens kombinieren",
                        "Lassen Sie Ihre Phantasie spielen",
                        "Nachdem Sie ja Eiweiß übrig haben sind auch die Portugiesischen 'Bolinhas de Amêndoa' eine sehr gute Begleitung zu diesem Parfait"
                    ],
                    "tags": ["zimt", "parfait", "einfach", "gefroren", "aromatisch"]
                },
                                "quark-auflauf": {
                    "id": "quark-auflauf",
                    "name": "Quark Auflauf",
                    "kategorie": "desserts",
                    "unterkategorie": "auflaeufe",
                    "bild": "images/rezepte/quark-auflauf.jpg",
                    "quelle": "Bayerisches Kochbuch",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "backtemperatur": "190-200",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "60",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Bayerischer Quarkauflauf als Dessert oder Hauptspeise",
                    "geschichte": "Schmeckt am besten lauwarm oder zimmervarm. Erbsenmark ist ein guter Begleiter.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Butter, weich", "menge": 125, "einheit": "g", "typ": "fett" },
                        { "name": "Zucker", "menge": 250, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eier, getrennt", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zitrone (Saft und Schale)", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Gries", "menge": 4, "einheit": "EL", "typ": "getreide" },
                        { "name": "Backpulver", "menge": 0.5, "einheit": "TL", "typ": "backmittel" },
                        { "name": "Gehackte Mandeln", "menge": 50, "einheit": "g", "typ": "nuesse" },
                        { "name": "Topfen (20%)", "menge": 500, "einheit": "g", "typ": "kaese" }
                    ],
                    "zubereitung": [
                        "Schaummasse rühren aus Butter, Zucker und Eigelb",
                        "Zitronensaft- und Schale sowie Gries einstreuen und nochmals schaumig rühren",
                        "Mandeln und abgetropften Topfen hinzufügen - nochmals gut rühren",
                        "Zum Schluß sehr steifen Eischnee und Backpulver unterheben",
                        "In eine gut butterte Form geben und bei Mittellritze (190-200°C) in etwa einer Stunde goldgelb backen"
                    ],
                    "anmerkungen": [
                        "Ich benutze es als Dessert, weil es sehr üppig ist",
                        "Deshalb natürlich auch als sättigende Hauptspeise geeignet. Etwa mit Kompott",
                        "Wenn man fetteren Topfen verwendet, kann die Buttermenge leicht reduziert werden"
                    ],
                    "tags": ["quark", "auflauf", "bayerisch", "ueppig", "einfach"]
                },

                "quark-baellchen": {
                    "id": "quark-baellchen",
                    "name": "Quark Bällchen",
                    "kategorie": "desserts",
                    "unterkategorie": "gebackenes",
                    "bild": "images/rezepte/quark-baellchen.jpg",
                    "quelle": "Leckere Kleine Snacks",
                    "quantitative_angaben": {
                        "portionen": "ca. 20 Stück"
                    },
                    "beschreibung": "Köstliche Quarkbällchen als Snack oder Dessert",
                    "geschichte": "Köstliche, leckere Kleinigkeit für nebenbei, zum Tee oder Kaffee oder als lauwarme Nachspeise mit Beeren Kompott.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 150, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vanille Zucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" },
                        { "name": "Salz", "menge": 1, "einheit": "Prise", "typ": "gewuerz" },
                        { "name": "Zitrone (Abrieb)", "menge": 1, "einheit": "Stück", "typ": "obst" },
                        { "name": "Magerquark", "menge": 250, "einheit": "g", "typ": "kaese" },
                        { "name": "Mehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Backpulver", "menge": 0.5, "einheit": "TL", "typ": "backmittel" },
                        { "name": "Zucker", "menge": 2, "einheit": "EL", "typ": "suessungsmittel", "teil": "wälzen" },
                        { "name": "Zimt", "menge": 0.5, "einheit": "TL", "typ": "gewuerz", "teil": "wälzen" }
                    ],
                    "zubereitung": [
                        "Eier mit Zucker, Vanille Zucker, Salz und Zitronenabrieb schaumig schlagen",
                        "Quark zufügen und gut unterarbeiten",
                        "Mehl mit Backpulver mischen und unterheben",
                        "Mit zwei Esslöffeln kleine Nocken abstechen und im heißen Öl knusprig ausbacken",
                        "Noch warm in Zimt und Zucker wälzen"
                    ],
                    "anmerkungen": [
                        "Nicht zu lange aufbewahren"
                    ],
                    "tags": ["quark", "baellchen", "snack", "einfach", "gebacken"]
                },

                "rote-gruetze-tiramisu": {
                    "id": "rote-gruetze-tiramisu",
                    "name": "Rote Grütze Tiramisu",
                    "kategorie": "desserts",
                    "unterkategorie": "tiramisu",
                    "bild": "images/rezepte/rote-gruetze-tiramisu.jpg",
                    "quelle": "Hans Reibel",
                    "quantitative_angaben": {
                        "portionen": "6-8 Personen",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Abgewandeltes Tiramisu mit roter Grütze",
                    "geschichte": "Dies ist eigentlich nur eine Anregung für vielfältige Abwandlungen des 'Tiramisu' Themas oder weiter gefasst: Geschichtete Nachspeisen.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Biskuit Boden", "menge": 1, "einheit": "Portion", "typ": "boden" },
                        { "name": "Mascarpone", "menge": 250, "einheit": "g", "typ": "kaese" },
                        { "name": "Zucker", "menge": 60, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Sahne", "menge": 50, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Rote Grütze", "menge": 250, "einheit": "g", "typ": "obst" },
                        { "name": "Orangensaft, frisch", "menge": 50, "einheit": "ml", "typ": "obst" },
                        { "name": "Vanille Zucker", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Biskuitboden auf Blech backen",
                        "Mascarpone, Zucker und Sahne zu einer Masse verarbeiten, Sie sollte dickflüssig sein",
                        "Fertigen Biskuitboden in benötigte Form schneiden. Teigplatten gut z.B. mit Kirschsaft befeuchten",
                        "Abwechselnd Teig - Mascaponemasse und Rote Grütze schichten",
                        "Letzte Schicht Mascaponemasse und nach Belieben gerne mit Kakao bestreuen",
                        "Einige Stunden im Kühlschrank durchkühlen"
                    ],
                    "anmerkungen": [
                        "Hier kann gerne auf eine fertige rote Grütze zurückgegriffen werden",
                        "Sogar einen fertigen Tortenboden könnte man verwenden!",
                        "Ob im Glas oder in Auflaufformen sind sie immer eine gerne gegessene Nachspeise, die sich bequem vorbereiten lässt"
                    ],
                    "tags": ["tiramisu", "rote-gruetze", "geschichtet", "einfach", "vorbereitbar"]
                },

                "tiramisu": {
                    "id": "tiramisu",
                    "name": "Tiramisu",
                    "kategorie": "desserts",
                    "unterkategorie": "tiramisu",
                    "bild": "images/rezepte/tiramisu.jpg",
                    "quelle": "'Richte mich auf'",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen",
                        "kuehlzeit": "mehrere Stunden"
                    },
                    "beschreibung": "Klassisches italienisches Tiramisu",
                    "geschichte": "Diese Nachspeise ist in den 1970er Jahren sehr populär geworden, nachdem erste Gastarbeiter aus Italien auch ihre Heimatküche mit nach Deutschland brachten.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Löffelbiskuits", "menge": 100, "einheit": "g", "typ": "kekse" },
                        { "name": "Kaffee, stark", "menge": 150, "einheit": "ml", "typ": "getraenk" },
                        { "name": "Kaffee Likör", "menge": 1, "einheit": "EL", "typ": "alkohol" },
                        { "name": "Zucker", "menge": 2, "einheit": "EL", "typ": "suessungsmittel" },
                        { "name": "Eigelb", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 100, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Mascarpone", "menge": 300, "einheit": "g", "typ": "kaese" }
                    ],
                    "zubereitung": [
                        "Zucker im Kaffee auflösen. Likör zufügen",
                        "Eigelb und Zucker zu einer dicken Creme aufschlagen. Mascarpone zufügen und gut mischen",
                        "Löffelbiskuits in Kaffee einweichen",
                        "Biskuits und Creme schichtweise in ein schönes Gefäß einschichten. Letzte Schicht: Creme",
                        "Gut durchkühlen. Vor dem Servieren mit Kakao Pulver bestreuen"
                    ],
                    "anmerkungen": [
                        "Da hier nur wenige Zutaten am 'Start' sind, sollten diese von bester Qualität sein",
                        "Die große Zeit von Pizza und Pasta brach an und Dinge, die vorher niemand kannte - wie etwa Balsamico - eroberten den Deutschen Küchenalltag"
                    ],
                    "tags": ["tiramisu", "klassiker", "italienisch", "kaffee", "einfach"]
                },

                "wein-creme": {
                    "id": "wein-creme",
                    "name": "Wein Creme",
                    "kategorie": "desserts",
                    "unterkategorie": "cremes",
                    "bild": "images/rezepte/wein-creme.jpg",
                    "quelle": "Ella Rieger",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen"
                    },
                    "beschreibung": "Leichte Weincreme nach traditionellem Rezept",
                    "geschichte": "Traditionelles Rezept von Ella Rieger",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eigelb", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 7, "einheit": "EL", "typ": "suessungsmittel" },
                        { "name": "Weißwein", "menge": 500, "einheit": "ml", "typ": "wein" },
                        { "name": "Vanille Soßen Pulver", "menge": 2, "einheit": "Pck", "typ": "pulver" },
                        { "name": "Mondamin", "menge": 1, "einheit": "EL", "typ": "bindemittel" },
                        { "name": "Zitrone (Saft)", "menge": 0.5, "einheit": "Stück", "typ": "obst" }
                    ],
                    "zubereitung": [
                        "Wein zum kochen bringen. Soßen Pulver und Mondamin mit dem Saft der halben Zitrone und einem EL kalten Weißwein anrühren",
                        "Angerührtes Pulver in den heißen Wein einrühren, aufkochen und kalt stellen. Klumpenfrei arbeiten!",
                        "Alle Eier mit dem Zucker dick-cremig aufschlagen; bis Masse fast weiß wird",
                        "Während das Rührgerät läuft löffelweise die erkaltete Weinmasse einarbeiten",
                        "Alles gut zwei Minuten aufschlagen",
                        "Bis zum servieren kalt stellen. Entweder in großer Schüssel oder Portionsgläsern"
                    ],
                    "anmerkungen": [],
                    "tags": ["wein", "creme", "tradition", "elegant", "leicht"]
                },

                "wiener-nuss-auflauf": {
                    "id": "wiener-nuss-auflauf",
                    "name": "Wiener Nuss Auflauf",
                    "kategorie": "desserts",
                    "unterkategorie": "auflaeufe",
                    "bild": "images/rezepte/wiener-nuss-auflauf.jpg",
                    "quelle": "Internet Rezept",
                    "quantitative_angaben": {
                        "portionen": "6 Personen",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "30-40",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Wiener Nussauflauf als warmes Dessert",
                    "geschichte": "Warm als Dessert reichen. Dazu paßt sehr gut Obstkompott oder auch eine Schokoladen Soße.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Puderzucker", "menge": 30, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Biskuit- oder Semmelbrösel", "menge": 25, "einheit": "g", "typ": "boden" },
                        { "name": "Mehl", "menge": 40, "einheit": "g", "typ": "mehl" },
                        { "name": "Gemahlene Haselnüsse", "menge": 70, "einheit": "g", "typ": "nuesse" },
                        { "name": "Zucker", "menge": 50, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Eier, getrennt", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zitronenabrieb", "menge": 1, "einheit": "nach Geschmack", "typ": "gewuerz" },
                        { "name": "Butter", "menge": 100, "einheit": "g", "typ": "fett" }
                    ],
                    "zubereitung": [
                        "Butter und Puderzucker schaumig rühren",
                        "Eigelb und Zitronenabrieb untermischen, weiter rühren",
                        "Mehl, Brösel und Nüsse zugeben und gut mischen",
                        "Eiweiß mit Zucker aufschlagen und vorsichtig unter die Masse heben",
                        "In 6 gut gebuttere Portionsförmchen füllen (Oder komplett in eine gebutterte Auflauf Form)",
                        "30-40 Minuten bei 180 Grad backen"
                    ],
                    "anmerkungen": [
                        "Wir reichen am liebsten ein lauwarmes, grobstückiges Rotwein-Apfel Kompott dazu",
                        "Eine sehr gute Variante ist auch, den Zitronenabrieb durch Orangenabrieb zu ersetzen"
                    ],
                    "tags": ["nuss", "auflauf", "wiener", "warm", "kompott"]
                },
                                  "topfen-souffle": {
                    "id": "topfen-souffle",
                    "name": "Topfen Soufflé",
                    "kategorie": "desserts",
                    "unterkategorie": "souffles",
                    "bild": "images/rezepte/topfen-souffle.jpg",
                    "quelle": "4 Portionen",
                    "quantitative_angaben": {
                        "portionen": "4 Personen",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "22-25",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Luftiges Topfen-Soufflé",
                    "geschichte": "Zum ersten Mal am 14.5.2020 gekocht. Sensationell gut gelungen!",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Eiweiß", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eigelb", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 40, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Zitrone (nur Abrieb)", "menge": 0.5, "einheit": "Stück", "typ": "obst" },
                        { "name": "Quark (Mager)", "menge": 100, "einheit": "g", "typ": "kaese" },
                        { "name": "Salz", "menge": 1, "einheit": "Prise", "typ": "gewuerz" },
                        { "name": "Butter für die Förmchen", "menge": 0, "einheit": "nach Bedarf", "typ": "fett" },
                        { "name": "Zucker für die Förmchen", "menge": 0, "einheit": "nach Bedarf", "typ": "suessungsmittel" }
                    ],
                    "zubereitung": [
                        "Backofen auf 180°C vorheizen",
                        "3 Eiweiße steif schlagen. Sobald diese schaumig sind, 20 g Zucker hineinrieseln lassen",
                        "Anschließend Eigelbe mit 20 g Zucker hell schaumig schlagen",
                        "Abrieb einer halben Zitrone sowie Quark und eine kleine Prise Salz zur Eigelbmasse hinzugeben und ebenso verrühren",
                        "Nun das steif geschlagene Eiweiß vorsichtig unter die Quarkmasse heben. Nicht zu kräftig rühren!",
                        "Backförmchen buttern und zuckern und anschließend mit der Masse auffüllen",
                        "Die Soufflés im Wasserbad im vorgeheizten Ofen bei 180°C ca. 22-25 Minuten backen",
                        "Nach dem Backen sofort servieren"
                    ],
                    "anmerkungen": [
                        "Schüssel und Rührbesen müssen frei von jeglichem Fett sein, um den gewünschten Eischnee zu erzeugen",
                        "Nach dem Backen sofort servieren, da das Soufflé schnell wieder zusammenfallen kann",
                        "Nach Belieben mit Puderzucker garnieren (würde ich nicht machen! Das Ding ist eh schon süß)",
                        "Das Ding verträgt gut zwei drei Minuten längere Backzeit: Hängt vielleicht von der Größe der Eier ab"
                    ],
                    "tags": ["souffle", "quark", "luftig", "anspruchsvoll", "warm"]
                },

                "topfen-palatschinken": {
                    "id": "topfen-palatschinken",
                    "name": "Topfen Palatschinken",
                    "kategorie": "desserts",
                    "unterkategorie": "palatschinken",
                    "bild": "images/rezepte/topfen-palatschinken.jpg",
                    "quelle": "Vincent Mink",
                    "quantitative_angaben": {
                        "portionen": "4 Palatschinken",
                        "backtemperatur": "200",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "15-20",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Topfen-gefüllte Palatschinken mit Royal-Überzug",
                    "geschichte": "Einfaches, schmackhaftes Dessert",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Rosinen", "menge": 2, "einheit": "EL", "typ": "trockenfruechte", "teil": "teig" },
                        { "name": "Mehl", "menge": 60, "einheit": "g", "typ": "mehl", "teil": "teig" },
                        { "name": "Milch", "menge": 100, "einheit": "ml", "typ": "milchprodukt", "teil": "teig" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier", "teil": "teig" },
                        { "name": "Butter, flüssig", "menge": 1, "einheit": "EL", "typ": "fett", "teil": "teig" },
                        { "name": "Butter, weich", "menge": 30, "einheit": "g", "typ": "fett", "teil": "fuellung" },
                        { "name": "Speisestärke", "menge": 1, "einheit": "TL", "typ": "bindemittel", "teil": "fuellung" },
                        { "name": "Zucker", "menge": 2, "einheit": "EL", "typ": "suessungsmittel", "teil": "fuellung" },
                        { "name": "Eigelb", "menge": 1, "einheit": "Stück", "typ": "eier", "teil": "fuellung" },
                        { "name": "Topfen, 20% Fett", "menge": 100, "einheit": "g", "typ": "kaese", "teil": "fuellung" },
                        { "name": "Sahne", "menge": 50, "einheit": "ml", "typ": "milchprodukt", "teil": "fuellung" },
                        { "name": "Sahne", "menge": 80, "einheit": "ml", "typ": "milchprodukt", "teil": "royal" },
                        { "name": "Vollmilch", "menge": 80, "einheit": "ml", "typ": "milchprodukt", "teil": "royal" },
                        { "name": "Zucker", "menge": 1, "einheit": "EL", "typ": "suessungsmittel", "teil": "royal" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier", "teil": "royal" }
                    ],
                    "zubereitung": [
                        "Rosinen über Nacht in Wasser oder Weißwein einweichen: Abgießen und gut abtropfen lassen",
                        "Aus Mehl, Milch, Ei, Zucker und einer Brise Salz einen Pfannkuchenteig rühren und zuletzt die flüssige Butter unterrühren. Daraus vier dünne Pfannkuchen backen",
                        "Backofen auf 200 Grad vorheizen",
                        "Die Füllung zubereiten: Mark einer Vanilleschote auskratzen. Weiche Butter mit Vanillemark, Stärke, Zucker und Eigelb gut vermischen",
                        "Den Topfen und die Rosinen unterrühren. Sahne steif schlagen und vorsichtig unter die Masse heben",
                        "Die Pfannkuchen gleichmässig mit dieser Masse bestreichen und aufrollen. Nebeneinander in eine gefettete Auflaufform legen",
                        "Royal aus den angegebenen Zutaten rühren und über die Pfannkuchen gießen",
                        "Im Ofen 15-20 Minuten backen",
                        "Zum Schluß nach Belieben mit Puderzucker bestreuen"
                    ],
                    "anmerkungen": [
                        "Dazu kann man Beeren Kompott reichen oder Zwetschgen- oder Marillen Kompott",
                        "Oder einfach eine Vanille Eis. Oder gar nix"
                    ],
                    "tags": ["palatschinken", "quark", "gefuellt", "oesterreich", "warm"]
                },

                "gries-auflauf": {
                    "id": "gries-auflauf",
                    "name": "Gries Auflauf",
                    "kategorie": "desserts",
                    "unterkategorie": "auflaeufe",
                    "bild": "images/rezepte/gries-auflauf.jpg",
                    "quelle": "Bayerisches Kochbuch",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen",
                        "backtemperatur": "175",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "30-40",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Bayerischer Griesauflauf mit Obst-Kompott",
                    "geschichte": "Eine wunderbare Mehlspeise mit Obst-Kompott.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Milch", "menge": 500, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Vanille Zucker", "menge": 1, "einheit": "Pck", "typ": "gewuerz" },
                        { "name": "Hartweizengries", "menge": 100, "einheit": "g", "typ": "getreide" },
                        { "name": "Zucker", "menge": 75, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Butter", "menge": 100, "einheit": "g", "typ": "fett" },
                        { "name": "Eier, getrennt", "menge": 4, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Die Milch mit Salz und Vanillezucker in einem Topf aufkochen. Dann den Gries mit einem Schneebesen unterrühren. Den Brei bei schwacher Hitze 5 Min. köcheln lassen und gelegentlich umrühren",
                        "Eine runde Auflaufform mit 1 TL Butter ausstreichen. Die restliche Butter in eine Rührschüssel geben und mit einem Mixer den Zucker unterrühren, bis der Zucker aufgelöst ist",
                        "Die Eier trennen und Eigelb unter die Buttermasse rühren. Eiweiß steif schlagen",
                        "Den Backofen auf 175 Grad vorheizen",
                        "Jetzt den warmen Griesbrei zu der Butter-Eimasse geben und das steif geschlagene Eiweiß unterheben",
                        "Alles in die Auflaufform füllen und ca. 30-40 Min. backen"
                    ],
                    "anmerkungen": [
                        "Oder auch gut als warme Nachspeise geeignet"
                    ],
                    "tags": ["gries", "auflauf", "bayerisch", "einfach", "warm"]
                },

                "quark-schnitten": {
                    "id": "quark-schnitten",
                    "name": "Quark Schnitten",
                    "kategorie": "desserts",
                    "unterkategorie": "blechkuchen",
                    "bild": "images/rezepte/quark-schnitten.jpg",
                    "quelle": "Köstlicher Blechkuchen",
                    "quantitative_angaben": {
                        "portionen": "1 Backblech",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "30-35",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Feiner Blechkuchen mit Quarkfüllung",
                    "geschichte": "Feine und leicht herzustellende Alternative zu üppigen Quark-Sahne Torten.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Hefeteig", "menge": 1, "einheit": "Portion", "typ": "teig" },
                        { "name": "Quark 40%", "menge": 600, "einheit": "g", "typ": "kaese" },
                        { "name": "Sahne", "menge": 100, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Eier", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 100, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Rosinen", "menge": 120, "einheit": "g", "typ": "trockenfruechte" },
                        { "name": "Zitrone (Abrieb)", "menge": 0.5, "einheit": "Stück", "typ": "obst" },
                        { "name": "Ei zum Bestreichen", "menge": 1, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Rosinen einweichen und später gut ausdrücken",
                        "Ofen auf 180° vorheizen",
                        "Alle Zutaten (außer Hefeteig und Ei zum Bestreichen) zu einer Masse verarbeiten",
                        "Hefeteig auf Backblech ausrollen",
                        "Quarkmasse auf dem Teig verteilen und glattstreichen. Mit verquirltem Ei bestreichen",
                        "30-35 Minuten backen"
                    ],
                    "anmerkungen": [],
                    "tags": ["quark", "blechkuchen", "hefeteig", "einfach", "rosinen"]
                }
            }
               },

        
          "brot": {
            "name": "Brot & Gebäck",
            "beschreibung": "Selbstgebackene Brote, Brötchen und Gebäck",
            "rezepte": {
             "pinza": {
                    "id": "pinza",
                    "name": "Pinza",
                    "kategorie": "brot",
                    "unterkategorie": "hefegebaeck",
                    "bild": "images/rezepte/pinza.jpg",
                    "quelle": "Italienischer Osterfladen",
                    "quantitative_angaben": {
                        "portionen": "2 Fladen",
                        "backtemperatur": "190",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "20",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "180",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Besonders lockerer und feinporiger Hefefladen",
                    "geschichte": "Dieser besonders lockere und feinporige Hefefladen zeigt deutlich, was eine lange und sorgfältige Teigführung bewirkt.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Mehl", "menge": 50, "einheit": "g", "typ": "mehl", "teil": "vorteig1" },
                        { "name": "Hefe", "menge": 20, "einheit": "g", "typ": "hefe", "teil": "vorteig1" },
                        { "name": "Milch", "menge": 40, "einheit": "ml", "typ": "milchprodukt", "teil": "vorteig1" },
                        { "name": "Mehl", "menge": 120, "einheit": "g", "typ": "mehl", "teil": "vorteig2" },
                        { "name": "Milch", "menge": 25, "einheit": "ml", "typ": "milchprodukt", "teil": "vorteig2" },
                        { "name": "Zucker", "menge": 25, "einheit": "g", "typ": "suessungsmittel", "teil": "vorteig2" },
                        { "name": "Eigelb", "menge": 1, "einheit": "Stück", "typ": "eier", "teil": "vorteig2" },
                        { "name": "Mehl", "menge": 180, "einheit": "g", "typ": "mehl", "teil": "hauptteig" },
                        { "name": "Milch", "menge": 25, "einheit": "ml", "typ": "milchprodukt", "teil": "hauptteig" },
                        { "name": "Zucker", "menge": 25, "einheit": "g", "typ": "suessungsmittel", "teil": "hauptteig" },
                        { "name": "Butter", "menge": 50, "einheit": "g", "typ": "fett", "teil": "hauptteig" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier", "teil": "hauptteig" },
                        { "name": "Salz", "menge": 1, "einheit": "Prise", "typ": "gewuerz", "teil": "hauptteig" },
                        { "name": "Vanille", "menge": 1, "einheit": "Päckchen", "typ": "gewuerz", "teil": "hauptteig" },
                        { "name": "Zucker", "menge": 1, "einheit": "TL", "typ": "suessungsmittel", "teil": "hauptteig" }
                    ],
                    "zubereitung": [
                        "Für den ersten Vorteig alle Zutaten verkneten und zugedeckt etwas 1 Stunde stehen lassen",
                        "Mittlerweile die Zutaten für den zweiten Vorteig verkneten. Auch diesen Teig eine Stunde stehen lassen",
                        "Nun die Zutaten für den Haupt Teig verkneten und mit den beiden Vorteigen mischen. Diesen Gesamt Teig wieder eine Stunde stehen lassen",
                        "Teig in zwei Stücke aufteilen und runde Teigstücke formen. Diese im großem Abstand auf ein Backblech legen",
                        "Eigelb mit Milch verquirlen und die Pinza damit bestreichen. Oberfläche trocknen lassen und nochmals bestreichen",
                        "Pinza mit in Öl getauchter Schere an der Oberfläche dreimal tief einschneiden, um die typische Pinza Form zu erhalten",
                        "Backofen auf 190° vorheizen und die Pinza etwas 20 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Die Arbeit lohnt sich wirklich - für einen besonderen Anlass"
                    ],
                    "tags": ["pinza", "italienisch", "osterfladen", "hefeteig", "feinporig"]
                },
                "burgerbroetchen": {
                    "id": "burgerbroetchen",
                    "name": "Burgerbrötchen",
                    "kategorie": "brot",
                    "unterkategorie": "broetchen",
                    "bild": "images/rezepte/burgerbroetchen.jpg",
                    "quelle": "Brioche Teig",
                    "quantitative_angaben": {
                        "portionen": "ca. 10 Brötchen",
                        "backtemperatur": "200",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "15-20",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "120",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Fluffige Burgerbrötchen nach Brioche-Art",
                    "geschichte": "Perfekte Brötchen für selbstgemachte Burger",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Wasser (lauwarm)", "menge": 200, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Milch (lauwarm)", "menge": 4, "einheit": "EL", "typ": "milchprodukt" },
                        { "name": "Hefe", "menge": 40, "einheit": "g", "typ": "hefe" },
                        { "name": "Zucker", "menge": 35, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Salz", "menge": 8, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Butter (sehr weich oder flüssig)", "menge": 80, "einheit": "g", "typ": "fett" },
                        { "name": "Mehl", "menge": 500, "einheit": "g", "typ": "mehl" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier", "teil": "bestreichen" },
                        { "name": "Milch", "menge": 2, "einheit": "EL", "typ": "milchprodukt", "teil": "bestreichen" },
                        { "name": "Wasser", "menge": 2, "einheit": "EL", "typ": "fluessigkeit", "teil": "bestreichen" }
                    ],
                    "zubereitung": [
                        "Wasser und Milch in eine Schüssel geben; den Zucker darin auflösen und die Hefe hinein bröckeln. Das Ganze 5 Minuten gehen lassen (länger schadet auch nicht)",
                        "Danach die restlichen Zutaten zugeben und zu einem geschmeidigen Teig kneten. Abgedeckt an einem warmen Ort etwa eine Stunde gehen lassen (länger schadet nicht)",
                        "Nach dem Gehen rollt man aus dem Teig etwa 80g schwere Kugeln und drückt diese flach (Durchmesser ca. 8 cm) und lässt sie auf einem Backblech für ca. 1 Stunde gehen",
                        "Man verquirlt Wasser, Milch und Ei (Zusatz Zutaten) und bestreicht die Buns damit. Diese Mischung darf nicht kalt sein, sonst fällt der Bun zusammen",
                        "Nach Wunsch kann man den Bun noch mit Sesam bestreuen",
                        "Die Buns kommen nun in den auf 200 Grad vorgeheizten Ofen (Ober/Unterhitze) und werden 15-20 Minuten gebacken (bis die Oberfläche goldbraun ist)"
                    ],
                    "anmerkungen": [],
                    "tags": ["burgerbroetchen", "brioche", "fluffig", "broetchen", "hefeteig"]
                },

                "roggen-misch-semmel": {
                    "id": "roggen-misch-semmel",
                    "name": "Roggen Misch Semmel",
                    "kategorie": "brot",
                    "unterkategorie": "broetchen",
                    "bild": "images/rezepte/roggen-misch-semmel.jpg",
                    "quelle": "mit Buttermilch",
                    "quantitative_angaben": {
                        "portionen": "8-10 Semmeln",
                        "backtemperatur": "220",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "25-30",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "90",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Roggenmischbrötchen mit fester Kruste und weicher Krume",
                    "geschichte": "Diese Semmeln bekommen eine harte - aber nicht wische - Kruste und eine weiche Krume. Insgesamt erinnern sie in der Konsistenz an ein 'herzhaftes Brioche' mit fester Kruste.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Roggenmehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Weizenmehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Hefe", "menge": 50, "einheit": "g", "typ": "hefe" },
                        { "name": "Zucker", "menge": 1, "einheit": "TL", "typ": "suessungsmittel" },
                        { "name": "Wasser - lauwarm", "menge": 4, "einheit": "EL", "typ": "fluessigkeit" },
                        { "name": "Buttermilch", "menge": 250, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Salz", "menge": 2, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Schweineschmalz oder Butter", "menge": 75, "einheit": "g", "typ": "fett" }
                    ],
                    "zubereitung": [
                        "Mehl in eine Schüssel geben und mischen",
                        "Eine Mulde hineindrücken",
                        "Hefe, Zucker und Wasser hineingeben und mit etwas Mehl zum Vorteig verrühren. 30 Minuten gehen lassen. Längere Gehzeiten sind immer besser",
                        "Restliche Zutaten hinzufügen und Teig solange schlagen, bis er Blasen wirft. Nochmals gehen lassen",
                        "Teig nochmals durchwirken und Semmeln von beliebiger Form und Größe formen. Nochmals 30 Minuten oder länger gehen lassen",
                        "Backofen auf 220° vorheizen. Semmeln einschneiden; längs oder kreuzweise. 25-30 Minuten backen",
                        "Etwa fünf Minuten vor Ende der Backzeit Semmeln mit Wasser abstreichen"
                    ],
                    "anmerkungen": [
                        "Ich empfehle die Semmeln nicht zu klein zu machen, da sie somit innen trocken werden",
                        "Sie lassen sich gut einfrieren und schmecken nach dem Auftauen immer noch sehr gut. Bei 100° für 10 Minuten in den Ofen"
                    ],
                    "tags": ["roggen", "semmel", "buttermilch", "kruste", "mischbrot"]
                },

                "dinkel-roggen-brot": {
                    "id": "dinkel-roggen-brot",
                    "name": "Dinkel Roggen Brot",
                    "kategorie": "brot",
                    "unterkategorie": "brot",
                    "bild": "images/rezepte/dinkel-roggen-brot.jpg",
                    "quelle": "Mit Sauerteig",
                    "quantitative_angaben": {
                        "portionen": "1 Brot",
                        "backtemperatur": "220",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "55-60",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "90",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Sauerteigbrot mit Vollkornmehl",
                    "geschichte": "Dies ist ein Grundrezept für ein einfaches Sauerteig Brot mit Vollkornmehl.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Frische Hefe", "menge": 30, "einheit": "g", "typ": "hefe" },
                        { "name": "Lauwarmes Wasser", "menge": 250, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Sauerteig", "menge": 75, "einheit": "g", "typ": "sauerteig" },
                        { "name": "Salz", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Backmalz", "menge": 15, "einheit": "g", "typ": "malz" },
                        { "name": "Dinkelvollkornmehl", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Roggenvollkornmehl", "menge": 200, "einheit": "g", "typ": "mehl" },
                        { "name": "Körner nach Belieben", "menge": 3, "einheit": "EL", "typ": "koerner" },
                        { "name": "Gewürze nach Belieben (Kümmel, Koriander)", "menge": 0, "einheit": "nach Geschmack", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Hefe im lauwarmen Wasser auflösen und 15 Minuten gehen lassen. Den Sauerteig hinzufügen",
                        "Alle Zutaten in eine Schüssel geben und kneten; je länger, desto feinporiger wird das Brot",
                        "Den Teig nochmal kneten - zu einer flachen Kugel formen und auf dem Backblech nochmal mindestens eine halbe Stunde gehen lassen",
                        "Das Brot im vorgeheizten Ofen bei 220° C (Umluft) 15 Minuten backen; dann weitere 40-45 Minuten bei 180 Grad",
                        "Am Ende das Brot mit kaltem Wasser abstreichen. Um eine rösche Kruste zu erhalten eine kleine Schüssel Wasser mit ins Rohr stellen"
                    ],
                    "anmerkungen": [
                        "Gewürzt kann nach Geschmack werden",
                        "Auch können eine geringe Menge Körner mit eingearbeitet werden. Nicht zu viel, sonst geht das Brot nicht richtig auf"
                    ],
                    "tags": ["dinkel", "roggen", "sauerteig", "vollkorn", "kruste"]
                },

                "dinkel-vollkorn-brot": {
                    "id": "dinkel-vollkorn-brot",
                    "name": "Dinkel Vollkorn Brot",
                    "kategorie": "brot",
                    "unterkategorie": "brot",
                    "bild": "images/rezepte/dinkel-vollkorn-brot.jpg",
                    "quelle": "mit Nüssen und Körnern",
                    "quantitative_angaben": {
                        "portionen": "1 Brot",
                        "backtemperatur": "190",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "50-60",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "90",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Körnerbrot mit Nüssen aus dem kalten Ofen",
                    "geschichte": "Das Grundrezept haben wir von unserer Freundin Christine - jedoch nur in großen Zügen - mündlich erhalten.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Frische Hefe", "menge": 0.5, "einheit": "Päckchen", "typ": "hefe" },
                        { "name": "Lauwarmes Wasser", "menge": 500, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Salz", "menge": 2, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Essig", "menge": 2, "einheit": "EL", "typ": "saeure" },
                        { "name": "Körnermix", "menge": 200, "einheit": "g", "typ": "koerner" },
                        { "name": "Nussmix", "menge": 150, "einheit": "g", "typ": "nuesse" },
                        { "name": "Leinsamen", "menge": 100, "einheit": "g", "typ": "koerner" },
                        { "name": "Dinkelvollkornmehl", "menge": 500, "einheit": "g", "typ": "mehl" }
                    ],
                    "zubereitung": [
                        "Hefe im lauwarmen Wasser auflösen",
                        "Alle Zutaten in eine Rührschüssel geben. In die Mitte eine Mulde machen und die Hefe Mischung eingießen und leicht mit den übrigen Zutaten vermischen (Vorteig)",
                        "Etwa 1/2 Stunde gehen lassen",
                        "Dann den Teig kneten. Er sollte von dickflüssiger Beschaffenheit sein. Bei Bedarf etwas Wasser zugeben",
                        "In eine 30cm Kastenform füllen. Nochmals gehen lassen",
                        "Das Brot dann in den kalten (!) Ofen stellen und bei 190° C 50-60 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Aus der Erinnerung und einem ähnlichen Rezept aus dem Internet sind wir zu dieser Fassung gekommen",
                        "Die Salzmenge ist 'Glaubensfrage'. Meine Gattin nimmt nur einen TL, mir schmeckt 'herzhaft' besser",
                        "Die Versuche ohne Leinsamen haben uns besser geschmeckt. Entweder durch Haferflocken ersetzen, oder Körnermix Menge erhöhen"
                    ],
                    "tags": ["dinkel", "vollkorn", "koerner", "nuesse", "kastenform"]
                },

                "kastenweissbrot": {
                    "id": "kastenweissbrot",
                    "name": "Kastenweißbrot",
                    "kategorie": "brot",
                    "unterkategorie": "brot",
                    "bild": "images/rezepte/kastenweissbrot.jpg",
                    "quelle": "nach Bäckermeister Fahrenkamp",
                    "quantitative_angaben": {
                        "portionen": "1 Brot",
                        "backtemperatur": "225",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "30",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "60",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Einfaches Weißbrot das lange frisch bleibt",
                    "geschichte": "Dies ergibt ein sehr schmackhaftes einfach Brot, das sich problemlos fast eine Woche hält.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Hefe", "menge": 30, "einheit": "g", "typ": "hefe" },
                        { "name": "Wasser, lauwarm", "menge": 1, "einheit": "Tasse", "typ": "fluessigkeit" },
                        { "name": "Zucker", "menge": 1, "einheit": "EL", "typ": "suessungsmittel" },
                        { "name": "Weizenmehl 405", "menge": 500, "einheit": "g", "typ": "mehl" },
                        { "name": "Salz", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Butter, flüssig", "menge": 25, "einheit": "g", "typ": "fett" },
                        { "name": "Wasser, lauwarm", "menge": 250, "einheit": "ml", "typ": "fluessigkeit" }
                    ],
                    "zubereitung": [
                        "Die zerbröckelte Hefe mit 1 EL Zucker und Tasse Wasser auflösen",
                        "Mehl in eine Schüssel sieben und in der Mitte eine Vertiefung eindrücken",
                        "Aufgelöste Hefe hinein geben. Restliche Zutaten hinzufügen und den Teig solange kneten bis er Blasen wirft",
                        "Teig mindestens 45 Minuten gehen lassen (Je länger desto feinporiger wird das Brot)",
                        "Den Teig auf eine bemehlte Arbeitsplatte geben, nochmal durchkneten und in eine Kastenform geben. Nochmal mindestens 15 Minuten gehen lassen",
                        "Ofen auf 225 ° vorheizen. Eine Tasse kochendes Wasser in den Ofen stellen und dann die Kastenform",
                        "Nach 10 Minuten Klappe kurz öffnen und Wasserdampf entweichen lassen",
                        "In weiteren 20 Minuten fertig backen",
                        "Nach Ende der Backzeit schnell mit Wasser abstreichen, so bekommt das Brot Glanz"
                    ],
                    "anmerkungen": [
                        "Am besten schmeckt es natürlich ganz frisch mit Butter - wie fast jedes Brot oder Semmel"
                    ],
                    "tags": ["weissbrot", "kastenform", "einfach", "lange-frisch", "klassiker"]
                },
                                "laugen-brezen": {
                    "id": "laugen-brezen",
                    "name": "Laugen Brezen",
                    "kategorie": "brot",
                    "unterkategorie": "brezen",
                    "bild": "images/rezepte/laugen-brezen.jpg",
                    "quelle": "Internet",
                    "quantitative_angaben": {
                        "portionen": "ca. 16 Brezen",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "18-20",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "120",
                        "gehzeit_einheit": "Minuten",
                        "kuehlzeit": "60",
                        "kuehlzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Authentische Laugenbrezen mit Natronlauge",
                    "geschichte": "Die Brezen lassen sich gut einfrieren - am besten ganz frisch.",
                    "schwierigkeitsgrad": "anspruchsvoll",
                    "zutaten": [
                        { "name": "Mehl 550", "menge": 500, "einheit": "g", "typ": "mehl" },
                        { "name": "Milch, lauwarm", "menge": 300, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Salz", "menge": 1, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Hefe", "menge": 42, "einheit": "g", "typ": "hefe" },
                        { "name": "Zucker", "menge": 1, "einheit": "TL", "typ": "suessungsmittel" },
                        { "name": "Butter (oder Schmalz)", "menge": 40, "einheit": "g", "typ": "fett" },
                        { "name": "Wasser", "menge": 1000, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Natron", "menge": 3, "einheit": "EL", "typ": "lauge" }
                    ],
                    "zubereitung": [
                        "Hefe mit ein paar Tropfen der Milch und dem Zucker verrühren. Mindestens 25 Minuten bei Zimmertemperatur gehen lassen",
                        "Diese Hefemasse nun zu Mehl, Salz der restlichen Milch und der flüssigen Butter geben und einen elastischen Teig kneten. Diesen wieder mindestens 30 Minuten gehen lassen",
                        "Den gegangenen Teig auf einer bemehlten Arbeitsfläche gründlich durchkneten und eine Rolle formen. Aus dieser Rolle ca. 16 gleich große Teile schneiden",
                        "Aus jedem Teil eine etwa 30 cm lange Wurst rollen, die in der Mitte eine Verdickung hat und am Ende leicht spitz zuläuft",
                        "Diese fertigen Brezen nochmals mindestens 15 Minuten gehen lassen",
                        "Jetzt die Brezen für gut eine Stunde unabgedeckt in den Kühlschrank stellen. Das ist wichtig, damit der Gärvorgang unterbrochen wird",
                        "Gegen Ende der 'Kühlschrankstunde' 1l Wasser aufkochen und das Natron langsam einrieseln lassen. Hierbei Vorsicht! Abstand halten und evtl. Handschuhe tragen",
                        "Nun die Brezen einzeln für ca. 30 Sekunden mit dem Schaumlöffel in die Lauge geben. Auf ein gebuttertes Backblech legen und mit groben Salz bestreuen. Kein Backpapier verwenden!",
                        "Das volle Blech in den kalten (!) Ofen stellen und auf 180 Grad für 18-20 Minuten goldbraun backen"
                    ],
                    "anmerkungen": [
                        "Beim Auftauen werden sie noch wochen, wie frisch aus dem Ofen. 12 Minuten bei 100 Grad",
                        "Die Brezen kommen in den kalten Ofen, damit der Vorgang des 'Gehens' erst während des Backens wieder einsetzt. Das ist wichtig!"
                    ],
                    "tags": ["laugenbrezen", "brezen", "natron", "bayern", "tradition"]
                },

                "rosinen-semmel": {
                    "id": "rosinen-semmel",
                    "name": "Rosinen Semmel",
                    "kategorie": "brot",
                    "unterkategorie": "broetchen",
                    "bild": "images/rezepte/rosinen-semmel.jpg",
                    "quelle": "nach Bäckermeister Fahrenkamp",
                    "quantitative_angaben": {
                        "portionen": "12 Semmeln",
                        "backtemperatur": "200",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "25",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "90",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Fluffige Rosinensemmeln mit weicher Krume",
                    "geschichte": "Im Original Rezept sind 50 g Butter und 75 g Zucker angegeben. Ich habe die beiden Mengen gegeneinander ausgetauscht; Semmel wird nicht so süß und fluffiger.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Hefe", "menge": 40, "einheit": "g", "typ": "hefe" },
                        { "name": "Zucker", "menge": 1, "einheit": "TL", "typ": "suessungsmittel" },
                        { "name": "Milch, lauwarm", "menge": 0.5, "einheit": "Tasse", "typ": "milchprodukt" },
                        { "name": "Mehl 405", "menge": 500, "einheit": "g", "typ": "mehl" },
                        { "name": "Milch, lauwarm", "menge": 250, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Butter, sehr weich", "menge": 75, "einheit": "g", "typ": "fett" },
                        { "name": "Zucker", "menge": 50, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Salz", "menge": 8, "einheit": "g", "typ": "gewuerz" },
                        { "name": "Rosinen", "menge": 100, "einheit": "g", "typ": "trockenfruechte" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Die zerbröckelte Hefe mit 1 TL Zucker und 1/2 Tasse Milch auflösen",
                        "Mehl in eine Schüssel sieben und in der Mitte eine Vertiefung eindrücken",
                        "Aufgelöse Hefe hinein geben. Restliche Zutaten hinzufügen (außer dem Ei) und den Teig solange kneten bis er Blasen wirft",
                        "Teig mindestens 45 Minuten gehen lassen",
                        "Den Teig auf eine bemehlte Arbeitsplatte geben, rund wirken und eine lange Rolle formen. Daraus 12 Semmeln formen und diese nochmal 20 Minuten gehen lassen",
                        "Ofen auf 200 ° vorheizen. Eine Tasse kochendes Wasser in den Ofen stellen und die Semmeln ins Rohr schieben",
                        "15 Minuten auf mittlerer Schiene backen; dann mit dem verquirlten Ei einstreichen",
                        "Weitere 10 Minuten backen. Semmeln abdecken, falls diese zu dunkel werden"
                    ],
                    "anmerkungen": [
                        "Ebenso habe ich die Salzmenge halbiert - sonst wird die Semmel zu salzig",
                        "Im Original ist eine Temperatur von 325° vorgesehen; da wären mir die Semmeln fast schwarz geworden",
                        "Das hängt letztendlich vom Ofen ab. Ich habe das Blech auch nach der 'Ei-Streiche' auf die unterste Schiene gesetzt"
                    ],
                    "tags": ["rosinensemmel", "hefe", "suess", "broetchen", "fluffig"]
                },

                "hefeteig-mittelfest": {
                    "id": "hefeteig-mittelfest",
                    "name": "Hefeteig",
                    "kategorie": "brot",
                    "unterkategorie": "grundteig",
                    "bild": "images/rezepte/hefeteig-mittelfest.jpg",
                    "quelle": "mittelfest",
                    "quantitative_angaben": {
                        "portionen": "Grundmenge für verschiedene Gebäcke",
                        "gehzeit": "90-120",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Universeller Hefeteig für verschiedene Gebäcke",
                    "geschichte": "Aus diesem Teig kann man einen Hefezopf formen oder einzelne Brioche machen. Man kann daraus Rohrnudeln oder Dampfnudeln machen. Nußschnecken oder einen Nußzopf.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Hefe", "menge": 20, "einheit": "g", "typ": "hefe" },
                        { "name": "Zucker", "menge": 1, "einheit": "TL", "typ": "suessungsmittel" },
                        { "name": "Zucker", "menge": 50, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Milch, lauwarm", "menge": 125, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Mehl 405", "menge": 375, "einheit": "g", "typ": "mehl" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Butter", "menge": 100, "einheit": "g", "typ": "fett" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eigelb", "menge": 4, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Hefe mit Zucker in einem Teil der Milch auflösen",
                        "Mehl in eine Rührschüssel geben; eine Vertiefung in die Mitte machen und dort mit der Hefemilch einen Vorteig anrühren",
                        "30-40 Minuten gehen lassen (gerne auch länger)",
                        "Butter, Zucker, Eier und restliche Milch zugeben und zu einem Teig kneten",
                        "Nochmals gehen lassen. Je länger, desto feinporiger wird der Teig (aber mind. 30 Minuten)",
                        "Teig nochmal durchkneten und weiter verarbeiten"
                    ],
                    "anmerkungen": [
                        "Milchmenge richtet sich nach der Größe der Eier. Der Teig sollte mittelfest sein",
                        "Für einen Streuselkuchen nehme ich nur 2 Eier, aber 80g Zucker",
                        "Für Nussschnecken verwende ich diese Teigmenge"
                    ],
                    "tags": ["hefeteig", "grundteig", "universell", "einfach", "vielseitig"]
                },

                "hefeklos-germknoedel": {
                    "id": "hefeklos-germknoedel",
                    "name": "Hefeklos - Germknödel",
                    "kategorie": "brot",
                    "unterkategorie": "knoedel",
                    "bild": "images/rezepte/hefeklos-germknoedel.jpg",
                    "quelle": "Herzhaft und süß",
                    "quantitative_angaben": {
                        "portionen": "6 mittelgroße Knödel",
                        "kochzeit": "20-25",
                        "kochzeit_einheit": "Minuten",
                        "gehzeit": "80",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Hefeknödel für herzhafte und süße Gerichte",
                    "geschichte": "Vielseitige Hefeknödel die sowohl als Beilage zu deftigen Gerichten als auch als süße Mehlspeise serviert werden können.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Mehl (405)", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Hefe", "menge": 15, "einheit": "g", "typ": "hefe" },
                        { "name": "Zucker", "menge": 1, "einheit": "TL", "typ": "suessungsmittel" },
                        { "name": "Zucker", "menge": 50, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Butter, weiche", "menge": 50, "einheit": "g", "typ": "fett" },
                        { "name": "Eier", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Milch, lauwarm", "menge": 125, "einheit": "ml", "typ": "milchprodukt" }
                    ],
                    "zubereitung": [
                        "Vorteig herstellen: Mehl in eine Rührschüssel geben. Eine Vertiefung in der Mitte machen. Zerbröckelte Hefe mit 1 TL Zucker in die Vertiefung geben und mit etwas Milch auflösen. Zudeckt an einem warmen Ort mindestens 40 Minuten gehen lassen",
                        "Hauptteig: Alle Zutaten zum Vorteig geben und so lange kräftig durchschlagen bis der Teig Blasen wirft. Mit wenig Mehl bestäuben und abgedeckt erneut mindestens 40 Minuten gehen lassen. Der Teig sollte sich verdoppeln",
                        "Endzubereitung: Aus dem gegangenen Teig sechs gleich große Knödel formen und auf bemehlten Brett nochmals ca. 15 Minuten zudeckt gehen lassen",
                        "In der Zwischenzeit reichlich Wasser in einem großen Topf zum Kochen bringen. Gegangene Knödel einlegen und bei geschlossenen Deckel 20-25 Minuten ziehen lassen"
                    ],
                    "anmerkungen": [
                        "Verwendung als Beilage zu deftigen, sosserreichen Gerichten: Zucker (bis auf den TL vom Vorteig) weglassen. Bei der Endzubereitung Wasser salzen",
                        "Verwendung als Mehlspeise: Knödel mit flüssiger Butter und Zimtzucker bestreuen. Oder: Vanillesoße dazu reichen. Oder: Mit Beeren- oder Obstkompott essen. Oder: Was Ihnen sonst noch so in den Sinn kommt - Mohn zum Beispiel"
                    ],
                    "tags": ["hefeknoedel", "germknoedel", "hefeteig", "vielseitig", "oesterreich"]
                },

                "topfen-stritzel": {
                    "id": "topfen-stritzel",
                    "name": "Topfen Stritzel",
                    "kategorie": "brot",
                    "unterkategorie": "gebackenes",
                    "bild": "images/rezepte/topfen-stritzel.jpg",
                    "quelle": "Bayerisches Kochbuch",
                    "quantitative_angaben": {
                        "portionen": "ca. 8 Stritzel",
                        "backzeit": "10-12",
                        "backzeit_einheit": "Minuten",
                        "gehzeit": "90",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Gebackene Topfenteig-Stritzel",
                    "geschichte": "Bei längerer Gehzeit sind, desto feinporiger wird später der Teig.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Mehl 405", "menge": 400, "einheit": "g", "typ": "mehl" },
                        { "name": "Hefe", "menge": 20, "einheit": "g", "typ": "hefe" },
                        { "name": "Milch, lauwarm", "menge": 125, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Ei", "menge": 1, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eigelb", "menge": 2, "einheit": "Stück", "typ": "eier" },
                        { "name": "Zucker", "menge": 50, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Butter", "menge": 80, "einheit": "g", "typ": "fett" },
                        { "name": "Topfen", "menge": 250, "einheit": "g", "typ": "kaese" }
                    ],
                    "zubereitung": [
                        "Weichen Hefeteig unter Zugabe von Topfen herstellen",
                        "Mehl in eine Rührschüssel geben und eine Vertiefung in der Mitte machen. Hefe mit etwas Zucker und etwas lauwarmer Milch verrühren und in die Vertiefung geben. Abgedeckt gehen lassen",
                        "Anschließend mit allen anderen Zutaten einen weichen Hefeteig kneten und wieder abgedeckt gehen lassen",
                        "Stritzel (etwas Krapfengroß) daraus formen und diese nochmals ca. 20 Minuten gehen lassen",
                        "In schwimmenden Fett 10-12 Minuten ausbacken"
                    ],
                    "anmerkungen": [
                        "Die Gehzeiten sollten 30 Minuten nicht unterschreiten; länger ist - wie gesagt - kein Problem",
                        "Man kann die Stritzel beliebig formen: Einzeln als Laibchen etwa, oder wie oben im Bild hingelegt, formen und kreuzweise mit einer Schere einschneiden",
                        "Nach Belieben mit Zucker bestreuen"
                    ],
                    "tags": ["topfenstritzel", "hefeteig", "gebacken", "bayern", "mehlspeise"]
                },
                                "pizzateig": {
                    "id": "pizzateig",
                    "name": "Pizzateig",
                    "kategorie": "brot",
                    "unterkategorie": "teig",
                    "bild": "images/rezepte/pizzateig.jpg",
                    "quelle": "Einfacher Pizzateig",
                    "quantitative_angaben": {
                        "portionen": "1 Pizza",
                        "gehzeit": "150",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Einfacher elastischer Pizzateig",
                    "geschichte": "Es gibt schon sehr guten fertigen Pizzateig zu kaufen, wenn Sie jedoch einmal einen selbstgemachten verarbeitet haben - was wirklich nicht viel Arbeit macht - werden Sie so schnell keinen fertigen mehr kaufen.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Mehl 550", "menge": 500, "einheit": "g", "typ": "mehl" },
                        { "name": "Hefe", "menge": 30, "einheit": "g", "typ": "hefe" },
                        { "name": "Salz", "menge": 0.5, "einheit": "TL", "typ": "gewuerz" },
                        { "name": "Wasser", "menge": 150, "einheit": "ml", "typ": "fluessigkeit" }
                    ],
                    "zubereitung": [
                        "Hefe zerbröckeln und in 1 dl lauwarmen Wasser auflösen",
                        "100 g Mehl zufügen und alles zu einem Vorteig verrühren. 30 Minuten stehen lassen",
                        "Mit dem restlichen Mehl und dem Salz zu einem Teig verkneten. Nach und nach - je nach Saugfähigkeit des Teigs - noch lauwarmes Wasser mit einarbeiten. Es soll ein elastischer Teig entstehen",
                        "Teig zugedeckt 2 Stunden ruhen lassen",
                        "Danach nochmal kräftig durchkneten und weiterverwenden"
                    ],
                    "anmerkungen": [
                        "Wie bei allen guten Teig Produkten ist auch hier die lange Ruhezeit das A und O"
                    ],
                    "tags": ["pizzateig", "hefeteig", "einfach", "elastisch", "grundlage"]
                },

                "pfannen-focaccia": {
                    "id": "pfannen-focaccia",
                    "name": "Pfannen Focaccia",
                    "kategorie": "brot",
                    "unterkategorie": "fladenbrot",
                    "bild": "images/rezepte/pfannen-focaccia.jpg",
                    "quelle": "Schnelles Brot",
                    "quantitative_angaben": {
                        "portionen": "4 Stücke",
                        "backzeit": "ca. 10 Minuten pro Seite",
                        "gehzeit": "40",
                        "gehzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Schnelles Fladenbrot aus der Pfanne",
                    "geschichte": "Als Beilage zu Salaten, Suppen oder Vorspeisen.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Hefe", "menge": 20, "einheit": "g", "typ": "hefe" },
                        { "name": "Zucker", "menge": 1, "einheit": "TL", "typ": "suessungsmittel" },
                        { "name": "Wasser, lauwarm", "menge": 150, "einheit": "ml", "typ": "fluessigkeit" },
                        { "name": "Mehl 405", "menge": 250, "einheit": "g", "typ": "mehl" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Olivenöl", "menge": 3, "einheit": "EL", "typ": "fett" },
                        { "name": "Olivenöl", "menge": 0, "einheit": "etwas", "typ": "fett", "teil": "backen" },
                        { "name": "Grobes Salz", "menge": 0, "einheit": "nach Belieben", "typ": "gewuerz", "teil": "bestreuen" }
                    ],
                    "zubereitung": [
                        "Hefe mit Zucker in Wasser auflösen",
                        "10 Minuten gehen lassen",
                        "Mit Mehl, Salz und Olivenöl zu einem Teig verarbeiten",
                        "30-40 Minuten gehen lassen",
                        "Teig nochmal durchkneten und dünn ausrollen",
                        "Fladen in Pfanne mit Olivenöl (dünn einpinseln) backen und wenden, wenn eine Seite gebräunt ist",
                        "Mit grobem Salz bestreuen"
                    ],
                    "anmerkungen": [
                        "Als Snack mit beliebigen Beilagen belegt",
                        "Große Focaccia eignet sich auch (würzig belegt) als Hauptgericht",
                        "Weiteres Verarbeitungsbeispiel: In den ausgerollten Teig mit dem Daumen kleine Mulden drücken und dort halbierte Cocktailtomaten platzieren"
                    ],
                    "tags": ["focaccia", "fladenbrot", "pfanne", "schnell", "olivenoel"]
                },

                "muensterlaender-strunzen": {
                    "id": "muensterlaender-strunzen",
                    "name": "Münsterländer Strunzen",
                    "kategorie": "brot",
                    "unterkategorie": "pfannkuchen",
                    "bild": "images/rezepte/muensterlaender-strunzen.jpg",
                    "quelle": "Einanzen",
                    "quantitative_angaben": {
                        "portionen": "ca. 12 Stück",
                        "backzeit": "3 Minuten pro Seite"
                    },
                    "beschreibung": "Dicke Hefepfannkuchen aus dem Münsterland",
                    "geschichte": "Dieser 'dicke Hefepfannkuchen' ist unter verschiedenen Namen in fast ganz Europa verbreitet.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Mehl 405", "menge": 500, "einheit": "g", "typ": "mehl" },
                        { "name": "Rosinen", "menge": 130, "einheit": "g", "typ": "trockenfruechte" },
                        { "name": "Milch", "menge": 380, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Hefe", "menge": 1, "einheit": "Würfel", "typ": "hefe" },
                        { "name": "Zucker", "menge": 50, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Salz", "menge": 1, "einheit": "Prise", "typ": "gewuerz" },
                        { "name": "Butter", "menge": 30, "einheit": "g", "typ": "fett" },
                        { "name": "Eier", "menge": 3, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Rosinen einweichen",
                        "Milch erwärmen und die Hefe hineinbröckeln",
                        "Mehl in eine Schüssel geben",
                        "Hefemilch und alle anderen Zutaten (außer Rosinen) mit dem Mixer zu einem Teig verarbeiten",
                        "Gut abgetropfte Rosinen unterheben und Teig für eine Stunde ruhen lassen (wichtig!)",
                        "In einer Pfanne reichlich Fett (ich mische Butter und Sonnenblumenöl) zerlassen und jeweils einen reichlichen Esslöffel vom Teig in die Pfanne geben",
                        "Pro Seite ca. 3 Minuten backen - bis die Struwen goldbraun sind",
                        "Nach Belieben vor dem Servieren (warm) mit Zimtzucker bestreuen"
                    ],
                    "anmerkungen": [
                        "Im Münsterland sind sie ein typisches Karfreitagsgericht",
                        "Apfelmus oder jede Art von Obstkompott sind ideale Begleiter"
                    ],
                    "tags": ["strunzen", "hefepfannkuchen", "muensterland", "rosinen", "pfannkuchen"]
                },

                "pizza-taler": {
                    "id": "pizza-taler",
                    "name": "Pizza Taler",
                    "kategorie": "brot",
                    "unterkategorie": "kleingebaeck",
                    "bild": "images/rezepte/pizza-taler.jpg",
                    "quelle": "Eiweiß Verwertung",
                    "quantitative_angaben": {
                        "portionen": "ca. 20 Stück",
                        "backtemperatur": "160",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "20",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Herzhafte Käsegebäcke zur Eiweiß-Verwertung",
                    "geschichte": "Netter kleiner Snack, etwa als Beilage zu einer Suppe, oder zum Wein.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Hartkäse (Edamer, Emmentaler)", "menge": 85, "einheit": "g", "typ": "kaese" },
                        { "name": "Rauchfleisch in Würfeln", "menge": 10, "einheit": "g", "typ": "fleisch" },
                        { "name": "Röstzwiebeln", "menge": 5, "einheit": "g", "typ": "gemuese" },
                        { "name": "Haferflocken", "menge": 2, "einheit": "EL", "typ": "getreide" },
                        { "name": "Mehl", "menge": 2, "einheit": "EL", "typ": "mehl" },
                        { "name": "Pfeffer", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Paprikapulver", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Eiweiß", "menge": 4, "einheit": "Stück", "typ": "eier" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Buttkäse, Rauchfleich und Röstzwiebeln zerkleinern (Kutter)",
                        "Haferflocken, Mehl, Pfeffer und Paprikapulver zugeben und vermengen",
                        "Eiweiß mit 1 Brise Salz fest schlagen",
                        "Ofen auf 160 Grad vorheizen",
                        "Eiweiß mit 'Pizzamasse' vermengen",
                        "Kleine Häufchen auf Backblech (mit Backpapier belegt) geben und 20 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Mal eine andere - herzhafte - Art für Eiweiß zu verwerten",
                        "Man kann die Pizzamasse auch noch mit getrockneten italienischen Kräutern 'aufpeppen'",
                        "Oder auch herzhaftere Käsesorten verwenden"
                    ],
                    "tags": ["pizzataler", "eiweiss", "kaese", "herzhaft", "snack"]
                },

                "tahini-keks": {
                    "id": "tahini-keks",
                    "name": "Tahini Keks",
                    "kategorie": "brot",
                    "unterkategorie": "keks",
                    "bild": "images/rezepte/tahini-keks.jpg",
                    "quelle": "Vegane Kekse",
                    "quantitative_angaben": {
                        "portionen": "40-50 Stück",
                        "backtemperatur": "180",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "15",
                        "backzeit_einheit": "Minuten",
                        "kuehlzeit": "60",
                        "kuehlzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Würzige Sesamkekse mit Tahini",
                    "geschichte": "Vorsicht! Suchtcharakter! Von gefräßigen Freunden bewahren.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Mehl", "menge": 285, "einheit": "g", "typ": "mehl" },
                        { "name": "Rohrzucker", "menge": 150, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Vegane Butter", "menge": 150, "einheit": "g", "typ": "fett" },
                        { "name": "Tahini Paste", "menge": 75, "einheit": "g", "typ": "paste" },
                        { "name": "Salz", "menge": 1, "einheit": "Brise", "typ": "gewuerz" },
                        { "name": "Heller Sesam", "menge": 20, "einheit": "g", "typ": "koerner" },
                        { "name": "Schwarzer Sesam", "menge": 20, "einheit": "g", "typ": "koerner" },
                        { "name": "Meersalz Flocken", "menge": 0, "einheit": "nach Belieben", "typ": "gewuerz" }
                    ],
                    "zubereitung": [
                        "Mehl, Rohrzucker und Salz in einer Schüssel verrühren",
                        "Vegane Butter und Tahini Paste zugeben und alles verkneten",
                        "Rollen mit ca. 2cm Ø formen und in Sesam wälzen",
                        "Eine Stunde kalt stellen",
                        "Ofen auf 180 Grad vorheizen",
                        "Vom Teig dünne Scheiben abschneiden. Auf Backblech legen und nach Belieben mit ein wenig Meersalz bestreuen",
                        "Etwa 15 Minuten backen und auskühlen lassen"
                    ],
                    "anmerkungen": [
                        "Ergibt 40-50 Stück"
                    ],
                    "tags": ["tahini", "sesam", "vegan", "keks", "wuerzig"]
                }
            }
        }, 
         "weihnachtsgebaeck": {
            "name": "Weihnachtsgebäck",
            "beschreibung": "Feines Gebäck nicht nur zur Weihnachtszeit", 
            "rezepte": {
             "bolachas-amendoa": {
                    "id": "bolachas-amendoa",
                    "name": "Bolachas & Amendoa",
                    "kategorie": "weihnachtsgebaeck",
                    "unterkategorie": "konfekt",
                    "bild": "images/rezepte/bolachas-amendoa.jpg",
                    "quelle": "Portugiesisches Mandelkonfekt",
                    "quantitative_angaben": {
                        "portionen": "ca. 20 Stück",
                        "backtemperatur": "160",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "25",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Portugiesisches Mandelkonfekt mit Suchtfaktor",
                    "geschichte": "Gebäck mit Suchtgefahr zum Tee und zwischendurch.",
                    "schwierigkeitsgrad": "einfach",
                    "zutaten": [
                        { "name": "Feiner Zucker", "menge": 200, "einheit": "g", "typ": "suessungsmittel" },
                        { "name": "Mandeln, geschält, gemahlen", "menge": 100, "einheit": "g", "typ": "nuesse" },
                        { "name": "Mandeln, ungeschält, gemahlen", "menge": 150, "einheit": "g", "typ": "nuesse" },
                        { "name": "Eiweiß", "menge": 3, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Mandeln und Zucker mischen",
                        "Eiweiß nur ganz leicht anschlagen und untermischen",
                        "Kugeln formen - etwa Walnuß groß",
                        "Mit Abstand auf ein Backblech setzen",
                        "Im vorgeheizten Ofen bei 160 Grad 25 Minuten backen"
                    ],
                    "anmerkungen": [
                        "Variante 1: Auf jede plattgedrückte Kugel vor dem Backen eine halbe Mandel setzen und zuckern",
                        "Variante 2: Ich gebe zu der Masse ein wenig Zimt und Piment",
                        "Es ist wichtig ungeschälte Mandeln mit zu verarbeiten, denn das gibt dem Konfekt erst die richtige Struktur"
                    ],
                    "tags": ["portugiesisch", "mandeln", "konfekt", "weihnachten", "suechtig"]
                },

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
                }, 
                "zwiebelsuchen": {
                    "id": "zwiebelsuchen",
                    "name": "Zwiebelsuchen",
                    "kategorie": "hauptgerichte",
                    "unterkategorie": "tarte",
                    "bild": "images/rezepte/zwiebelsuchen.jpg",
                    "quelle": "Französisch - Sehr Fein",
                    "quantitative_angaben": {
                        "portionen": "4-6 Personen als Vorspeise",
                        "backtemperatur": "175",
                        "backtemperatur_einheit": "°C",
                        "backzeit": "20-25",
                        "backzeit_einheit": "Minuten"
                    },
                    "beschreibung": "Feine französische Zwiebeltarte",
                    "geschichte": "Dieses feine Rezept stammt aus dem weltbekannten Restaurant 'Auberge de L\'Ill' in Mülhausen im Elsass. Dort hielt man über 30 Jahre lang drei Michelin Sterne.",
                    "schwierigkeitsgrad": "mittel",
                    "zutaten": [
                        { "name": "Pâte brisée", "menge": 250, "einheit": "g", "typ": "teig" },
                        { "name": "Zwiebeln, klein geschnitten", "menge": 1, "einheit": "Tasse", "typ": "gemuese" },
                        { "name": "Butter", "menge": 3, "einheit": "EL", "typ": "fett" },
                        { "name": "Sahne (crème épaisse)", "menge": 250, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Milch", "menge": 250, "einheit": "ml", "typ": "milchprodukt" },
                        { "name": "Eier", "menge": 3, "einheit": "Stück", "typ": "eier" },
                        { "name": "Eigelb", "menge": 2, "einheit": "Stück", "typ": "eier" }
                    ],
                    "zubereitung": [
                        "Mürbeteig ausrollen und Backform (22cmØ) auskleiden; auch die Ränder. Einige Löcher in den Boden stechen",
                        "Bei 200-220° 15 Minuten blind backen. Hierzu Boden mit Pergamentpapier und kleinen Steinen (oder Trockenbohnen) beschweren",
                        "Zwiebeln in Butter andünsten: Farbe nehmen lassen, aber nicht braun werden lassen",
                        "In einer Schüssel Sahne, Milch, Eier und Eigelb verquirlen und mit Salz, Pfeffer und nach Belieben Cayenne Pfeffer würzen",
                        "Den vorgebackenen Boden mit der Zwiebel Masse befüllen. Bei 175° in etwa 20-25 Minuten goldbraun backen",
                        "Heiß auftragen"
                    ],
                    "anmerkungen": [
                        "Sehr fein als Vorspeise, wobei das Stückchen nicht zu groß sein sollte",
                        "Mein Salat Bouquet dazu reichen"
                    ],
                    "tags": ["zwiebeltarte", "franzoesisch", "fein", "tarte", "elsass"]
                }
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
