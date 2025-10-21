// Suchfunktion für Rezepte
class SearchManager {
    constructor() {
        this.searchTimeout = null;
        this.currentResults = [];
    }

    init() {
        this.setupSearchListeners();
    }

    setupSearchListeners() {
        const searchInput = document.getElementById('searchInput');
        const clearSearch = document.getElementById('clearSearch');

        // Live-Suche mit Verzögerung
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.trim();
            
            // Clear Button anzeigen/verstecken
            clearSearch.style.display = searchTerm ? 'block' : 'none';

            // Suche mit Verzögerung (300ms)
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.performSearch(searchTerm);
            }, 300);
        });

        // Clear Search
        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            clearSearch.style.display = 'none';
            this.clearSearch();
        });

        // Enter-Taste für sofortige Suche
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch(searchInput.value.trim());
            }
        });
    }

    performSearch(searchTerm) {
        if (!searchTerm) {
            this.clearSearch();
            return;
        }

        // Suche durchführen
        this.currentResults = RecipeManager.searchRecipes(searchTerm);
        this.displaySearchResults(searchTerm);
    }

    displaySearchResults(searchTerm) {
        const noResults = document.getElementById('noResults');
        const recipeGrid = document.getElementById('recipeGrid');
        const defaultContent = document.getElementById('defaultContent');
        const categoryTitle = document.getElementById('categoryTitle');
        const categoryDescription = document.getElementById('categoryDescription');

        // Keine Ergebnisse
        if (this.currentResults.length === 0) {
            noResults.textContent = `Keine Rezepte gefunden für "${searchTerm}"`;
            noResults.classList.remove('hidden');
            recipeGrid.classList.add('hidden');
            defaultContent.classList.add('hidden');
            return;
        }

        // Ergebnisse anzeigen
        noResults.classList.add('hidden');
        defaultContent.classList.add('hidden');
        recipeGrid.classList.remove('hidden');

        // Titel und Beschreibung setzen
        categoryTitle.textContent = `Suchergebnisse für "${searchTerm}"`;
        categoryDescription.textContent = `${this.currentResults.length} Rezept(e) gefunden`;

        // Ergebnisse rendern
        this.renderSearchResults();
    }

    renderSearchResults() {
        const container = document.getElementById('recipesContainer');
        
        container.innerHTML = this.currentResults.map(recipe => `
            <div class="recipe-card" data-recipe-id="${recipe.id}">
                <div class="recipe-image" data-image="${recipe.bild}">
                    <!-- Bild Platzhalter -->
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <div class="recipe-meta">
                        <span class="category-badge">${recipe.kategorieName}</span>
                        ${recipe.quantitative_angaben?.portionen ? `<span>${recipe.quantitative_angaben.portionen}</span>` : ''}
                    </div>
                    ${recipe.beschreibung ? `<p class="recipe-description">${recipe.beschreibung}</p>` : ''}
                    <div class="recipe-tags">
                        <span class="tag">${recipe.kategorieName}</span>
                        ${recipe.tags ? recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                    </div>
                </div>
            </div>
        `).join('');

        // Klick-Event für Suchergebnisse
        container.querySelectorAll('.recipe-card').forEach(card => {
            card.addEventListener('click', () => {
                navigationManager.showRecipeDetail(card.dataset.recipeId);
            });
        });
    }

    clearSearch() {
        const searchInput = document.getElementById('searchInput');
        const clearSearch = document.getElementById('clearSearch');
        const noResults = document.getElementById('noResults');

        searchInput.value = '';
        clearSearch.style.display = 'none';
        noResults.classList.add('hidden');

        // Zurück zur vorherigen Ansicht
        if (navigationManager.currentCategory) {
            navigationManager.showCategoryView(navigationManager.currentCategory);
        } else {
            navigationManager.showWelcomeScreen();
        }
    }

    // Erweiterte Suche mit Filtern
    advancedSearch(options = {}) {
        const { 
            category = null, 
            tags = [], 
            maxTime = null,
            difficulty = null 
        } = options;

        let results = [];

        // Durch alle Rezepte iterieren
        for (const categoryKey in recipeDatabase.kategorien) {
            // Kategorie-Filter
            if (category && categoryKey !== category) continue;

            const categoryRecipes = recipeDatabase.kategorien[categoryKey].rezepte;
            
            for (const recipeKey in categoryRecipes) {
                const recipe = categoryRecipes[recipeKey];
                let matches = true;

                // Tags-Filter
                if (tags.length > 0 && recipe.tags) {
                    matches = tags.some(tag => recipe.tags.includes(tag));
                }

                // Zeit-Filter
                if (maxTime && recipe.quantitative_angaben?.backzeit) {
                    const time = parseInt(recipe.quantitative_angaben.backzeit);
                    if (time > maxTime) matches = false;
                }

                // Schwierigkeits-Filter
                if (difficulty && recipe.schwierigkeitsgrad !== difficulty) {
                    matches = false;
                }

                if (matches) {
                    results.push({
                        ...recipe,
                        kategorieName: recipeDatabase.kategorien[categoryKey].name
                    });
                }
            }
        }

        return results;
    }
}

// Globale Search Instanz
const searchManager = new SearchManager();