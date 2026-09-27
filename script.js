const products = [
  // ==================== CAFÉS CHAUDS ====================
  ["Espresso", "coffee", 10, "assets/espresso.jpg", "Un espresso court, riche et classique."],
  ["Double Espresso", "coffee", 14, "assets/double-espresso.jpg", "Deux doses d'espresso pour un goût plus intense."],
  ["Americano", "coffee", 14, "assets/americano.jpg", "Espresso allongé avec de l'eau chaude."],
  ["Latte", "coffee", 15, "assets/cafe-latte.jpg", "Espresso doux accompagné de lait chaud."],
  ["Cappuccino", "coffee", 18, "assets/cafe-latte.jpg", "Espresso, lait, mousse de lait et cacao."],
  ["Cappuccino Viennois", "coffee", 22, "assets/cafe-latte.jpg", "Espresso, lait, mousse de lait, cacao et crème chantilly."],
  ["Cortado", "coffee", 25, "assets/cafe-latte.jpg", "Espresso accompagné de lait évaporé."],
  ["Affogato", "coffee", 30, "assets/cafe-latte.jpg", "Espresso accompagné d'une boule de glace à la vanille."],
  ["Brésiliano", "coffee", 27, "assets/cafe-latte.jpg", "Double espresso, Nutella et lait Nestlé."],

  // ==================== CAFÉS GLACÉS ====================
  ["Caramel Macchiato", "iceCoffee", 23, "assets/cafe-latte.jpg", "Espresso glacé, lait et caramel."],
  ["Pistachio Latte", "iceCoffee", 30, "assets/cafe-latte.jpg", "Latte glacé à la pistache."],
  ["Spanish Latte", "iceCoffee", 25, "assets/cafe-latte.jpg", "Latte glacé crémeux avec une touche sucrée."],
  ["Tiramisu Latte", "iceCoffee", 28, "assets/cafe-latte.jpg", "Latte glacé inspiré du tiramisu."],
  ["Matcha Latte", "iceCoffee", 30, "assets/cafe-latte.jpg", "Latte glacé au matcha crémeux."],
  ["Nutella Latte", "iceCoffee", 25, "assets/cafe-latte.jpg", "Latte glacé gourmand au Nutella."],

  // ==================== BOISSONS CHAUDES ====================
  ["Thé à la menthe", "hotTea", 4, "assets/mocha-latte.jpg", "Thé à la menthe traditionnel."],
  ["Tisanes", "hotTea", 25, "assets/mocha-latte.jpg", "Infusion chaude et parfumée."],
  ["Chocolat Chaud", "hotTea", 22, "assets/chocolate-milkshake.jpg", "Chocolat chaud, doux et réconfortant."],
  ["Chocolat Fondue", "hotTea", 28, "assets/chocolate-milkshake.jpg", "Délicieuse fondue au chocolat chaud."],

  // ==================== THÉS GLACÉS ====================
  ["Thé à la menthe glacé", "icedTea", 28, "assets/featured-caramel.jpg", "Thé à la menthe glacé."],
  ["Thé à la menthe (Grand)", "icedTea", 30, "assets/featured-caramel.jpg", "Grande portion de thé à la menthe glacé."],

  // ==================== JUS DE FRUITS ====================
  ["Jus d'Orange", "juice", 18, "assets/orange-juice.jpg", "Jus d'orange frais."],
  ["Jus de Fraise", "juice", 25, "assets/strawberry-juice.jpg", "Jus frais à la fraise."],
  ["Jus de Banane", "juice", 20, "assets/banana-juice.jpg", "Mélange crémeux à la banane."],
  ["Jus de Mangue", "juice", 25, "assets/mango-juice.jpg", "Jus de mangue doux et fruité."],
  ["Jus d'Avocat", "juice", 30, "assets/avocado-juice.jpg", "Boisson crémeuse à l'avocat."],
  ["Jus de Citron", "juice", 18, "assets/orange-juice.jpg", "Jus de citron frais et acidulé."],
  ["Jus de Citron Gingembre", "juice", 20, "assets/orange-juice.jpg", "Jus de citron avec une touche de gingembre."],

  // ==================== MILKSHAKES ====================
  ["Cherry", "milkshake", 35, "assets/strawberry-milkshake.jpg", "Milkshake gourmand à la cerise."],
  ["Vanille", "milkshake", 30, "assets/vanilla-milkshake.jpg", "Milkshake classique à la vanille."],
  ["Chocolat", "milkshake", 30, "assets/chocolate-milkshake.jpg", "Milkshake riche au chocolat."],
  ["Fraise", "milkshake", 30, "assets/strawberry-milkshake.jpg", "Milkshake doux à la fraise."],
  ["Caramel", "milkshake", 32, "assets/caramel-milkshake.jpg", "Milkshake crémeux au caramel."],
  ["Café", "milkshake", 32, "assets/cafe-latte.jpg", "Milkshake au café, crémeux et gourmand."],
  ["Oreo", "milkshake", 32, "assets/milk-shake-oreo.jpg", "Milkshake Oreo avec crème et chocolat."],

  // ==================== SMOOTHIES ====================
  ["Cherry Smoothie", "smoothie", 35, "assets/strawberry-juice.jpg", "Smoothie fruité à la cerise."],
  ["Vanille Smoothie", "smoothie", 30, "assets/vanilla-milkshake.jpg", "Smoothie doux à la vanille."],
  ["Chocolat Smoothie", "smoothie", 30, "assets/chocolate-milkshake.jpg", "Smoothie gourmand au chocolat."],
  ["Fraise Smoothie", "smoothie", 30, "assets/strawberry-juice.jpg", "Smoothie frais à la fraise."],
  ["Caramel Smoothie", "smoothie", 32, "assets/caramel-milkshake.jpg", "Smoothie crémeux au caramel."],
  ["Café Smoothie", "smoothie", 32, "assets/cafe-latte.jpg", "Smoothie gourmand au café."],
  ["Oreo Smoothie", "smoothie", 32, "assets/milk-shake-oreo.jpg", "Smoothie Oreo crémeux et gourmand."],

  // ==================== NY COOKIES ====================
  ["The Original", "cookies", 13, "assets/cookie.jpg", "Le cookie classique et gourmand."],
  ["Diva Nutella", "cookies", 16, "assets/cookie.jpg", "Cookie gourmand au Nutella."],
  ["Oreo Boss", "cookies", 16, "assets/cookie.jpg", "Cookie généreux aux Oreo."],
  ["Lotus Crunch", "cookies", 17, "assets/cookie.jpg", "Cookie croustillant au Lotus."],
  ["Queen Pistachio", "cookies", 20, "assets/cookie.jpg", "Cookie gourmand à la pistache."],
  ["Le Roi Lion", "cookies", 17, "assets/cookie.jpg", "Cookie généreux et gourmand."],
  ["Coco Loco", "cookies", 17, "assets/cookie.jpg", "Cookie gourmand à la noix de coco."],
  ["Prince Bueno", "cookies", 17, "assets/cookie.jpg", "Cookie gourmand inspiré du Kinder Bueno."],

  // ==================== TIRAMISU ====================
  ["Tiramisu Classique", "tiramisu", 30, "assets/tiramisu.jpg", "Tiramisu classique au café."],
  ["Tiramisu Citron", "tiramisu", 30, "assets/tiramisu.jpg", "Tiramisu frais au citron."],
  ["Tiramisu Framboise", "tiramisu", 30, "assets/tiramissu-fram.jpg", "Tiramisu gourmand à la framboise."],
  ["Tiramisu Pistache", "tiramisu", 35, "assets/cheesecake-pistachio.jpg", "Tiramisu délicat à la pistache."],
  ["Tiramisu Nutella", "tiramisu", 32, "assets/tiramisu.jpg", "Tiramisu gourmand au Nutella."],
  ["Tiramisu Caramel Beurre Salé", "tiramisu", 30, "assets/tiramisu.jpg", "Tiramisu au caramel beurre salé."],

  // ==================== CHEESECAKES ====================
  ["Cheesecake Framboise", "cheesecake", 20, "assets/cheesecake-fraise.jpg", "Cheesecake crémeux à la framboise."],
  ["Cheesecake Mangue", "cheesecake", 20, "assets/cheesecake-mango.jpg", "Cheesecake frais à la mangue."],
  ["Cheesecake Lotus", "cheesecake", 30, "assets/cheesecake-lotus.jpg", "Cheesecake gourmand au Lotus."],
  ["Cheesecake Oreo", "cheesecake", 20, "assets/cheesecake-oreo.jpg", "Cheesecake crémeux aux Oreo."],

  // ==================== AUTRES DESSERTS ====================
  ["Brownies", "dessert", 11, "assets/brownies.jpg", "Brownie fondant au chocolat."],
  ["Flan Caramel", "dessert", 18, "assets/flan.jpg", "Flan crémeux au caramel."],
  ["Three Leche", "dessert", 14, "assets/three-leche.jpg", "Gâteau moelleux aux trois laits."],
  ["Muffins", "dessert", 13, "assets/muffin.jpg", "Muffin moelleux et gourmand."],
  ["Verrines", "dessert", 15, "assets/verrine.jpg", "Délicieuse verrine dessert."],

  // ==================== GLACE ====================
  ["1 Boule", "gelato", 12, "assets/gelato.jpg", "Une boule de glace au choix."],
  ["2 Boules", "gelato", 20, "assets/gelato.jpg", "Deux boules de glace au choix."],
  ["Boule supplémentaire", "gelato", 10, "assets/gelato.jpg", "Une boule supplémentaire."],

  // ==================== HOT COOKIE ====================
  ["Kunafa Pistache", "hotCookie", 32, "assets/cookie.jpg", "Hot cookie gourmand à la pistache et au kunafa."],
  ["Nutella Hot Cookie", "hotCookie", 25, "assets/cookie.jpg", "Hot cookie généreux au Nutella."],
  ["Chocolat Belge", "hotCookie", 30, "assets/cookie.jpg", "Hot cookie au chocolat belge."],

  // ==================== RAIB ====================
  ["Raib Nature", "raib", 5, "assets/raib.jpg", "Raib nature frais et crémeux."],
  ["Raib Granola Banane", "raib", 15, "assets/raib.jpg", "Raib accompagné de granola et de banane."]
];

const menuGrid = document.querySelector("#menuGrid");
const search = document.querySelector("#menuSearch");
const filters = document.querySelectorAll(".filter");
const call = document.querySelector(".call");

let currentFilter = "all";

function renderMenu() {
  if (!menuGrid) return;
  const q = search ? search.value.trim().toLowerCase() : "";
  const filtered = products.filter(p =>
    (currentFilter === "all" || p[1] === currentFilter) &&
    (!q || p[0].toLowerCase().includes(q))
  );

  menuGrid.innerHTML = filtered.length ? filtered.map(p => `
    <article class="menu-card">
      <img src="${p[3]}" alt="${p[0]}" loading="lazy">
      <div>
        <h3>${p[0]}</h3>
        <p>${p[4]}</p>
        <div class="menu-meta">
          <span class="price">${p[2]} DH</span>
        </div>
      </div>
    </article>
  `).join("") : `<div class="no-results">Auccun résultat trouvé. Essayez une autre recherche.</div>`;
}

renderMenu();

filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  renderMenu();
}));

document.querySelectorAll(".category-grid button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    filters.forEach(b => b.classList.toggle("active", b.dataset.filter === currentFilter));
    renderMenu();
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  });
});

search?.addEventListener("input", renderMenu);

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

document.querySelector("#storyBtn")?.addEventListener("click", () => {
  document.querySelector("#storyModal")?.classList.add("open");
  document.querySelector("#overlay")?.classList.add("open");
});

const closeModal = () => {
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("open"));
  document.querySelector("#overlay")?.classList.remove("open");
};

document.querySelectorAll(".modal-close, .Explore, #overlay").forEach(el => {
  el?.addEventListener("click", closeModal);
});

call?.addEventListener("click", () => {
  alert("Ce service n'est pas disponible pour le moment.");
});

const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
