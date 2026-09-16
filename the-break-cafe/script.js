const products = [
  ["Espresso","coffee",9,"assets/espresso.jpg","Short, rich and classic."],
  ["Double Espresso","coffee",14,"assets/double-espresso.jpg","Double shot for extra energy."],
  ["Americano","coffee",14,"assets/americano.jpg","Espresso with hot water."],
  ["Café Latte","coffee",15,"assets/cafe-latte.jpg","Smooth espresso with milk."],
  ["Cappuccino","coffee",18,"assets/cafe-latte.jpg","Espresso, milk, foam and cacao powder."],
  ["Cappuccino Viennois","coffee",24,"assets/cafe-latte.jpg","Espresso, milk, foam, cacao powdern and Whipped cream."],
  ["affogato","coffee",30,"assets/cafe-latte.jpg","single espresso with a scoop of ice creem vanille."],
  ["Break coffe(bresilianno)","coffee",30,"assets/cafe-latte.jpg","Double Espresso,nuttela and nestle."],
  ["corttado","coffee",25,"assets/cafe-latte.jpg","espresso with Evaporated milk."],
  ["Mocha Latte","coffee",25,"assets/mocha-latte.jpg","Chocolate, espresso and milk."],
  ["Black Tea","coffee",18,"assets/mocha-latte.jpg","lipton and water."],
    ["Espresso","coffee",9,"assets/espresso.jpg","Short, rich and classic."],
  ["Double Espresso","coffee",14,"assets/double-espresso.jpg","Double shot for extra energy."],
  ["Americano","coffee",14,"assets/americano.jpg","Espresso with hot water."],
  ["Café Latte","coffee",15,"assets/cafe-latte.jpg","Smooth espresso with milk."],
  ["Cappuccino","coffee",18,"assets/cafe-latte.jpg","Espresso, milk, foam and cacao powder."],
  ["Cappuccino Viennois","coffee",24,"assets/cafe-latte.jpg","Espresso, milk, foam, cacao powdern and Whipped cream."],
  ["affogato","coffee",30,"assets/cafe-latte.jpg","single espresso with a scoop of ice creem vanille."],
  ["Break coffee(bresilianno)","coffee",30,"assets/cafe-latte.jpg","Double Espresso,nuttela and nestle."],
  ["corttado","coffee",25,"assets/cafe-latte.jpg","espresso with Evaporated milk."],
  ["Mocha Latte","coffee",25,"assets/mocha-latte.jpg","Chocolate, espresso and milk."],
  ["Black Tea","coffee",18,"assets/mocha-latte.jpg","lipton and water."],
  ["Black Tea with milk","coffee",20,"assets/mocha-latte.jpg","lipton and Milk."],


  ["Spanish Latte","iced",25,"assets/featured-caramel.jpg","Creamy iced latte with a sweet finish."],
  ["Iced Latte","iced",26,"assets/featured-caramel.jpg","Cold latte with rome of your choice."],
  ["Iced Tea","iced",30,"assets/featured-caramel.jpg","Lipton, sparkling water and lemon."],


  ["Chocolate Milkshake","milkshake",35,"assets/chocolate-milkshake.jpg","Rich chocolate shake."],
  ["Caramel Milkshake","milkshake",35,"assets/caramel-milkshake.jpg","Creamy caramel favorite."],
  ["Vanilla Milkshake","milkshake",35,"assets/vanilla-milkshake.jpg","Classic vanilla shake."],
  ["Strawberry Milkshake","milkshake",35,"assets/strawberry-milkshake.jpg","Sweet strawberry blend."],
  ["Oreo Milkshake","milkshake",35,"assets/milk-shake-oreo.jpg","Oreo, cream and chocolate."],

  ["Chocolat Chaud","hot",18,"assets/chocolate-milkshake.jpg","Hot chocolate, smooth and cozy."],
  ["Chocolat Fondue","hot",28,"assets/chocolate-milkshake.jpg","Warm chocolate indulgence."],

  ["Green Matcha Latte","matcha",25,"assets/featured-matcha.jpg","Creamy matcha latte."],
  ["Iced Matcha Latte","matcha",30,"assets/iced-matcha.jpg","Refreshing iced matcha."],

  ["Virgin Mojito","mojito",20,"assets/mojito-1.jpg","Mint, lime and sparkling freshness."],
  ["Tropical Mojito","mojito",30,"assets/virgin-mojito.jpg","Fruity tropical refreshment."],
  ["Break Mojito(Red Mauve)","mojito",35,"assets/virgin-mojito.jpg","Berry-forward mojito."],
  ["Blue Mojito","mojito",30,"assets/virgin-mojito.jpg","Bright and refreshing."],

  ["Jus d'Orange","juice",18,"assets/orange-juice.jpg","Fresh orange juice."],
  ["Jus de Fraise","juice",25,"assets/strawberry-juice.jpg","Fresh strawberry juice."],
  ["Jus de Banane","juice",20,"assets/banana-juice.jpg","Creamy banana blend."],
  ["Jus de Mangue","juice",25,"assets/mango-juice.jpg","Sweet mango juice."],
  ["Jus d'Avocat","juice",30,"assets/avocado-juice.jpg","Avocado smoothie-style juice."],
  ["Pina Colada","juice",30,"assets/virgin-mojito.jpg","Tropical pineapple & coconut."],
  ["Jus de Citron","juice",18,"assets/orange-juice.jpg","Bright fresh lemon."],
  ["Jus Citron Gingembre","juice",20,"assets/orange-juice.jpg","Lemon with a ginger kick."],
  ["Dragon fruit smoothie","juice",45,"assets/dragon-fruit.jpg","Dragon fruit, banana, mangue and (Milk or orange juice)"],
  ["Strawberry smoothie","juice",45,"assets/smothie-1.jpg","Strawberry, banana, mangue and (Milk or orange juice)"],
  ["pineapple smoothie","juice",45,"assets/orange-juice.jpg","pineapple, banana, mangue and (Milk or orange juice)"],
  ["Avocado smoothie","juice",45,"assets/orange-juice.jpg","Avocado, banana, mangue and (Milk or orange juice)"],
  ["Break smoothie smoothie","juice",55,"assets/orange-juice.jpg","Dragon fruit, banana, mangue, Avocado, pineapple  and (Milk or orange juice)"],


  ["Tiramisu Classique","special",30,"assets/tiramisu.jpg","Classic coffee dessert."],
  ["Tiramisu Lotus","special",30,"assets/tiramissu-lotus.jpg","Lotus-inspired tiramisu."],
  ["Tiramisu raspberry","special",30,"assets/tiramissu-fram.jpg","raspberry tiramisu."],
  ["Tiramisu Mangue","special",30,"assets/tiramisu.jpg","Mango twist."],
  ["Tiramisu Pistache","special",35,"assets/cheesecake-pistachio.jpg","Pistachio signature dessert."],

  ["Oreo Cheesecake","cheesecake",20,"assets/cheesecake-oreo.jpg","Creamy Oreo cheesecake."],
  ["Lotus Cheesecake","cheesecake",20,"assets/cheesecake-lotus.jpg","Lotus biscuit cheesecake."],
  ["Pistache Cheesecake","cheesecake",25,"assets/cheesecake-pistachio.jpg","Pistachio cheesecake."],
  ["Fraise Cheesecake","cheesecake",20,"assets/cheesecake-fraise.jpg","Strawberry cheesecake."],
  ["Mangue Cheesecake","cheesecake",20,"assets/cheesecake-mango.jpg","Mango cheesecake."],

  ["Gelato Cookies","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Pineapple","gelato",12,"assets/strawberry-juice.jpg","Starting from one scoop."],
  ["Gelato Chocolate ","gelato",12,"assets/banana-juice.jpg","Starting from one scoop."],
  ["Gelato Oreo","gelato",12,"assets/mango-juice.jpg","Starting from one scoop."],
  ["Gelato Coffee","gelato",12,"assets/avocado-juice.jpg","Starting from one scoop."],
  ["Gelato Caramel","gelato",12,"assets/virgin-mojito.jpg","Starting from one scoop."],
  ["Gelato Strawberry","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Woodenfruit","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Hazelnut","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Lemon","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato redberry","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Cherry Mania","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Mango","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Chewing Gum","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Vanilla","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],
  ["Gelato Nouga","gelato",12,"assets/orange-juice.jpg","Starting from one scoop."],

];

const menuGrid = document.querySelector("#menuGrid");
const search = document.querySelector("#menuSearch");
const filters = document.querySelectorAll(".filter");
const note = document.querySelector("#notModal");
const call = document.querySelector(".call");

let currentFilter = "all";

function renderMenu() {
  const q = search.value.trim().toLowerCase();
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
          <span class="price">${p[2]} Dh</span>
        </div>
      </div>
    </article>
  `).join("") : `<div class="no-results">Nothing found. Try another search.</div>`;
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
    document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
  });
});

search.addEventListener("input", renderMenu);

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.querySelector(".search-open")?.addEventListener("click", () => {
  document.querySelector("#menu").scrollIntoView({behavior:"smooth"});
  setTimeout(() => search.focus(), 500);
});

document.querySelector("#storyBtn")?.addEventListener("click", () => {
  document.querySelector("#storyModal")?.classList.add("open");
  document.querySelector("#overlay")?.classList.add("open");
});

document.querySelectorAll(".modal-close").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("open"));
  document.querySelector("#overlay")?.classList.remove("open");
}));

document.querySelectorAll(".Explore").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("open"));
  document.querySelector("#overlay")?.classList.remove("open");
}));

call.addEventListener('click',()=> {
  alert("this servece isn't avalaible for now");
});

document.querySelector("#overlay")?.addEventListener("click", () => {
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("open"));
  document.querySelector("#overlay")?.classList.remove("open");
});


document.querySelector("#year").textContent = new Date().getFullYear();
