// Navigation und Kategorie-Management
class NavigationManager {
    constructor() {
        this.currentCategory = null;
        this.currentRecipe = null;
        this.expandedCategories = new Set();
    }

    init() {
        this.renderCategoryList();
        this.setupEventListeners();
        this.showWelcomeScreen();
    }

    // Kategorienliste in der Sidebar rendern
    renderCategoryList() {
        const categoryList = document.getElementById('categoryList');
        const categories = RecipeManager.getAllCategories();
        
        categoryList.innerHTML = categories.map(category => `
            <div class="category-item">
                <div class="category-header" data-category="${category.key}">
                    <span>${category.name}</span>
                    <span class="category-count">${category.rezeptAnzahl}</span>
                </div>
                <ul class="recipe-list" id="recipe-list-${category.key}">
                    ${this.renderRecipeList(category.key)}
                </ul>
            </div>
        `).join('');
    }

    // Rezeptliste für eine Kategorie rendern
    renderRecipeList(categoryKey) {
        const recipes = RecipeManager.getRecipesByCategory(categoryKey);
        return recipes.map(recipe => `
            <li class="recipe-item" data-recipe-id="${recipe.id}" data-category="${categoryKey}">
                ${recipe.name}
            </li>
        `).join('');
    }

    // Event Listeners einrichten
    setupEventListeners() {
        // Kategorie-Header Klicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-header')) {
                this.toggleCategory(e.target.dataset.category);
            }
            
            // Rezept-Klicks
            if (e.target.classList.contains('recipe-item')) {
                this.showRecipeDetail(e.target.dataset.recipeId);
            }
        });

        // Zurück-Button
        document.getElementById('backToCategoryBtn').addEventListener('click', () => {
            this.showCategoryView(this.currentCategory);
        });
    }

    // Kategorie ein-/ausklappen
    toggleCategory(categoryKey) {
        const recipeList = document.getElementById(`recipe-list-${categoryKey}`);
        
        if (this.expandedCategories.has(categoryKey)) {
            recipeList.classList.remove('expanded');
            this.expandedCategories.delete(categoryKey);
        } else {
            recipeList.classList.add('expanded');
            this.expandedCategories.add(categoryKey);
        }
    }

    // Willkommens-Bildschirm anzeigen
    showWelcomeScreen() {
        document.getElementById('defaultContent').classList.remove('hidden');
        document.getElementById('recipeGrid').classList.add('hidden');
        document.getElementById('recipeDetail').classList.add('hidden');
        this.currentCategory = null;
        this.currentRecipe = null;
    }

    // Kategorie-Übersicht anzeigen
    showCategoryView(categoryKey) {
        const category = recipeDatabase.kategorien[categoryKey];
        const recipes = RecipeManager.getRecipesByCategory(categoryKey);
        
        // Titel und Beschreibung setzen
        document.getElementById('categoryTitle').textContent = category.name;
        document.getElementById('categoryDescription').textContent = category.beschreibung || '';
        
        // Rezepte rendern
        this.renderRecipeGrid(recipes);
        
        // Views wechseln
        document.getElementById('defaultContent').classList.add('hidden');
        document.getElementById('recipeGrid').classList.remove('hidden');
        document.getElementById('recipeDetail').classList.add('hidden');
        
        this.currentCategory = categoryKey;
        this.currentRecipe = null;
    }

    // Rezept-Grid rendern
    renderRecipeGrid(recipes) {
        const container = document.getElementById('recipesContainer');
        
        container.innerHTML = recipes.map(recipe => `
            <div class="recipe-card" data-recipe-id="${recipe.id}">
                <div class="recipe-image" data-image="${recipe.bild}">
                    <!-- Bild Platzhalter -->
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <div class="recipe-meta">
                        ${recipe.quantitative_angaben?.portionen ? `<span>${recipe.quantitative_angaben.portionen}</span>` : ''}
                        ${recipe.quantitative_angaben?.backzeit ? `<span>🕒 ${recipe.quantitative_angaben.backzeit} Min</span>` : ''}
                    </div>
                    ${recipe.beschreibung ? `<p class="recipe-description">${recipe.beschreibung}</p>` : ''}
                    ${recipe.tags ? `
                        <div class="recipe-tags">
                            ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');

        // Klick-Event für Rezept-Karten
        container.querySelectorAll('.recipe-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showRecipeDetail(card.dataset.recipeId);
            });
        });
    }

    // Rezept-Detailansicht anzeigen
    showRecipeDetail(recipeId) {
        const recipe = RecipeManager.getRecipeById(recipeId);
        if (!recipe) return;

        this.renderRecipeDetail(recipe);
        
        // Views wechseln
        document.getElementById('defaultContent').classList.add('hidden');
        document.getElementById('recipeGrid').classList.add('hidden');
        document.getElementById('recipeDetail').classList.remove('hidden');
        
        this.currentRecipe = recipeId;
    }

    // Rezept-Detailansicht rendern
    renderRecipeDetail(recipe) {
        const container = document.querySelector('.recipe-detail');
        
        container.innerHTML = `
            <div class="recipe-detail-header">
                <div class="recipe-detail-info">
                    <h1 class="recipe-detail-title">${recipe.name}</h1>
                    <div class="recipe-meta-large">
                        ${recipe.quantitative_angaben?.portionen ? `
                            <div class="meta-item">👨‍👩‍👧‍👦 ${recipe.quantitative_angaben.portionen}</div>
                        ` : ''}
                        ${recipe.quantitative_angaben?.backzeit ? `
                            <div class="meta-item">🕒 ${recipe.quantitative_angaben.backzeit} Min</div>
                        ` : ''}
                        ${recipe.quantitative_angaben?.backtemperatur ? `
                            <div class="meta-item">🌡️ ${recipe.quantitative_angaben.backtemperatur}°C</div>
                        ` : ''}
                        ${recipe.schwierigkeitsgrad ? `
                            <div class="meta-item">⭐ ${recipe.schwierigkeitsgrad}</div>
                        ` : ''}
                    </div>
                    ${recipe.beschreibung ? `
                        <p class="recipe-description-large">${recipe.beschreibung}</p>
                    ` : ''}
                    ${recipe.geschichte ? `
                        <div class="recipe-story">
                            <strong>Geschichte & Tipps:</strong><br>
                            ${recipe.geschichte}
                        </div>
                    ` : ''}
                </div>
                <div class="recipe-detail-image" data-image="${recipe.bild}">
                    <!-- Bild Platzhalter -->
                </div>
            </div>

            ${recipe.zutaten && recipe.zutaten.length > 0 ? `
                <div class="ingredients-section">
                    <h2 class="section-title">Zutaten</h2>
                    <div class="ingredients-list">
                        ${recipe.zutaten.map(ingredient => `
                            <div class="ingredient-item">
                                <span class="ingredient-amount">
                                    ${ingredient.menge} ${ingredient.einheit}
                                </span>
                                <span class="ingredient-name">${ingredient.name}</span>
                                ${ingredient.zustand ? `
                                    <span class="ingredient-note">(${ingredient.zustand})</span>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${recipe.zubereitung && recipe.zubereitung.length > 0 ? `
                <div class="preparation-section">
                    <h2 class="section-title">Zubereitung</h2>
                    <div class="preparation-steps">
                        ${recipe.zubereitung.map((step, index) => `
                            <div class="preparation-step">
                                <div class="step-text">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            ${recipe.anmerkungen && recipe.anmerkungen.length > 0 ? `
                <div class="recipe-notes">
                    <h2 class="section-title">Anmerkungen</h2>
                    ${recipe.anmerkungen.map(note => `
                        <div class="note-item">${note}</div>
                    `).join('')}
                </div>
            ` : ''}

            ${recipe.quelle ? `
                <div class="recipe-source">
                    <p><strong>Quelle:</strong> ${recipe.quelle}</p>
                </div>
            ` : ''}
        `;
    }
}

// Globale Navigation Instanz
const navigationManager = new NavigationManager();