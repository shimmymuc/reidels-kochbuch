// Haupt-Applikation - Initialisierung und Event Handling
class KochbuchApp {
    constructor() {
        this.isInitialized = false;
    }

    // App initialisieren
    init() {
        if (this.isInitialized) return;
        
        console.log('🚀 Reibels Kochbuch wird gestartet...');
        
        // Event Listeners setup
        this.setupEventListeners();
        
        // Module initialisieren
        navigationManager.init();
        searchManager.init();
        
        // Splash Screen Handler
        this.setupSplashScreen();
        
        this.isInitialized = true;
        console.log('✅ Kochbuch erfolgreich gestartet!');
    }

    // Event Listeners einrichten
    setupEventListeners() {
        // Globaler Klick-Handler für Kategorien
        document.addEventListener('click', (e) => {
            // Kategorie-Header Klicks
            if (e.target.classList.contains('category-header')) {
                const categoryKey = e.target.dataset.category;
                navigationManager.showCategoryView(categoryKey);
            }
            
            // Rezept-Item Klicks in der Sidebar
            if (e.target.classList.contains('recipe-item')) {
                const recipeId = e.target.dataset.recipeId;
                navigationManager.showRecipeDetail(recipeId);
            }
        });

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            // Escape geht zurück
            if (e.key === 'Escape') {
                this.handleEscapeKey();
            }
            
            // Strg+F für Suche
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                document.getElementById('searchInput').focus();
            }
        });

        // Window Resize Handler
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    // Splash Screen Handling
    setupSplashScreen() {
        const enterBtn = document.getElementById('enterBtn');
        const splashScreen = document.getElementById('splashScreen');
        const mainApp = document.getElementById('mainApp');

        enterBtn.addEventListener('click', () => {
            // Übergangseffekt
            splashScreen.style.opacity = '0';
            
            setTimeout(() => {
                splashScreen.style.display = 'none';
                mainApp.style.display = 'flex';
                
                // Fade-In Effekt für Haupt-App
                mainApp.style.opacity = '0';
                mainApp.style.transition = 'opacity 0.5s ease-in-out';
                
                setTimeout(() => {
                    mainApp.style.opacity = '1';
                }, 50);
                
            }, 500);
        });

        // Auch mit Enter-Taste möglich
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && splashScreen.style.display !== 'none') {
                enterBtn.click();
            }
        });
    }

    // Escape Key Handler
    handleEscapeKey() {
        if (navigationManager.currentRecipe) {
            // Zurück zur Kategorie-Ansicht
            navigationManager.showCategoryView(navigationManager.currentCategory);
        } else if (navigationManager.currentCategory) {
            // Zurück zur Startseite
            navigationManager.showWelcomeScreen();
        }
        
        // Suche zurücksetzen falls aktiv
        const searchInput = document.getElementById('searchInput');
        if (searchInput.value) {
            searchInput.value = '';
            document.getElementById('clearSearch').style.display = 'none';
            searchManager.clearSearch();
        }
    }

    // Window Resize Handler
    handleResize() {
        // Mobile Optimierungen
        if (window.innerWidth < 768) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }

    // App-Status abfragen
    getStatus() {
        return {
            initialized: this.isInitialized,
            currentCategory: navigationManager.currentCategory,
            currentRecipe: navigationManager.currentRecipe,
            searchActive: document.getElementById('searchInput').value !== ''
        };
    }

    // Debug-Funktionen
    debug() {
        console.log('🔍 App Debug Info:');
        console.log('- Kategorien:', RecipeManager.getAllCategories().length);
        
        let totalRecipes = 0;
        for (const categoryKey in recipeDatabase.kategorien) {
            const recipeCount = Object.keys(recipeDatabase.kategorien[categoryKey].rezepte).length;
            totalRecipes += recipeCount;
            console.log(`- ${categoryKey}: ${recipeCount} Rezepte`);
        }
        
        console.log(`- Gesamt: ${totalRecipes} Rezepte`);
        console.log('- Aktueller Status:', this.getStatus());
    }

    // Export-Funktion für spätere Erweiterungen
    exportData() {
        return {
            rezepte: recipeDatabase,
            status: this.getStatus(),
            version: '1.0.0',
            exportDatum: new Date().toISOString()
        };
    }
}

// 🔥 APP STARTEN 🔥

// Globale App Instanz
const kochbuchApp = new KochbuchApp();

// App starten wenn DOM geladen
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        kochbuchApp.init();
    });
} else {
    kochbuchApp.init();
}

// Globale Hilfsfunktionen für die Konsole
window.Kochbuch = {
    app: kochbuchApp,
    navigation: navigationManager,
    search: searchManager,
    recipes: RecipeManager,
    
    // Schnellzugriff für Debugging
    debug: () => kochbuchApp.debug(),
    status: () => kochbuchApp.getStatus(),
    
    // Rezept direkt öffnen (für Testing)
    openRecipe: (recipeId) => navigationManager.showRecipeDetail(recipeId),
    
    // Kategorie öffnen
    openCategory: (categoryKey) => navigationManager.showCategoryView(categoryKey)
};

console.log('🍳 Reibels Skizzenbücher bereit!');
console.log('💡 Tipp: Verwende Kochbuch.debug() für Infos');