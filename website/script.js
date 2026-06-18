const products = [
  { name: "Kaju Katli", category: "sweets", price: 980, tag: "Best Seller", image: "https://images.pexels.com/photos/18488311/pexels-photo-18488311.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Besan Laddu", category: "sweets", price: 520, tag: "Pure Ghee", image: "https://images.pexels.com/photos/18488316/pexels-photo-18488316.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Motichoor Laddu", category: "sweets", price: 560, tag: "Festival", image: "https://images.pexels.com/photos/18488319/pexels-photo-18488319.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Boondi Laddu", category: "sweets", price: 500, tag: "Classic", image: "https://images.pexels.com/photos/8819258/pexels-photo-8819258.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Gulab Jamun", category: "sweets", price: 420, tag: "Hot Favorite", image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?auto=format&fit=crop&w=700&q=80" },
  { name: "Rasgulla", category: "sweets", price: 430, tag: "Fresh Syrup", image: "https://images.unsplash.com/photo-1666190091859-9d3a4ab212f7?auto=format&fit=crop&w=700&q=80" },
  { name: "Rasmalai", category: "sweets", price: 680, tag: "Premium", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=700&q=80" },
  { name: "Kalakand", category: "sweets", price: 620, tag: "Milk Rich", image: "https://images.pexels.com/photos/18488305/pexels-photo-18488305.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Milk Cake", category: "sweets", price: 640, tag: "Slow Cooked", image: "https://images.pexels.com/photos/18488300/pexels-photo-18488300.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Peda", category: "sweets", price: 560, tag: "Temple Style", image: "https://images.pexels.com/photos/8887004/pexels-photo-8887004.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Kaju Barfi", category: "sweets", price: 960, tag: "Rich Nuts", image: "https://images.pexels.com/photos/18488311/pexels-photo-18488311.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Badam Barfi", category: "sweets", price: 1040, tag: "Luxury", image: "https://images.pexels.com/photos/18488316/pexels-photo-18488316.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Pista Barfi", category: "sweets", price: 1080, tag: "Nutty", image: "https://images.pexels.com/photos/18488305/pexels-photo-18488305.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Coconut Barfi", category: "sweets", price: 540, tag: "Soft Bite", image: "https://images.pexels.com/photos/18488319/pexels-photo-18488319.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Soan Papdi", category: "sweets", price: 420, tag: "Flaky", image: "https://images.unsplash.com/photo-1727341816347-a5d69f174dcc?auto=format&fit=crop&w=700&q=80" },
  { name: "Balushahi", category: "sweets", price: 480, tag: "Crisp", image: "https://images.pexels.com/photos/6576317/pexels-photo-6576317.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Cham Cham", category: "sweets", price: 540, tag: "Bengali", image: "https://images.pexels.com/photos/18488316/pexels-photo-18488316.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Imarti", category: "sweets", price: 460, tag: "Fresh Fried", image: "https://images.pexels.com/photos/18488308/pexels-photo-18488308.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Samosa", category: "snacks", price: 25, tag: "Hot Snack", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80" },
  { name: "Kachori", category: "snacks", price: 30, tag: "Crispy", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80" },
  { name: "Dhokla", category: "snacks", price: 280, tag: "Soft", image: "https://images.unsplash.com/photo-1657196118354-f25f29fe636d?auto=format&fit=crop&w=700&q=80" },
  { name: "Aloo Tikki", category: "snacks", price: 50, tag: "Chaat", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80" },
  { name: "Mathri", category: "snacks", price: 320, tag: "Tea Time", image: "https://images.pexels.com/photos/6576317/pexels-photo-6576317.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Mixture", category: "snacks", price: 300, tag: "Namkeen", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80" },
  { name: "Bhujia", category: "snacks", price: 280, tag: "Crunchy", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80" },
  { name: "Sev", category: "snacks", price: 260, tag: "Classic", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80" },
  { name: "Namak Para", category: "snacks", price: 260, tag: "Savory", image: "https://images.pexels.com/photos/6576317/pexels-photo-6576317.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Wedding Gift Box", category: "special", price: 1450, tag: "Wedding", image: "https://images.unsplash.com/photo-1727341816347-a5d69f174dcc?auto=format&fit=crop&w=700&q=80" },
  { name: "Festival Assortment", category: "special", price: 1250, tag: "Festival", image: "https://images.pexels.com/photos/8819258/pexels-photo-8819258.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Corporate Hamper", category: "special", price: 1650, tag: "Gift Box", image: "https://images.pexels.com/photos/18488311/pexels-photo-18488311.jpeg?auto=compress&cs=tinysrgb&w=700" }
];

let activeFilter = "all";
let cart = JSON.parse(localStorage.getItem("sbbCart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("sbbWishlist") || "[]");

const productGrid = document.querySelector("#productGrid");
const productSearch = document.querySelector("#productSearch");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const toastElement = document.querySelector("#siteToast");
const toastBody = document.querySelector("#toastBody");
const toast = bootstrap.Toast.getOrCreateInstance(toastElement);

function money(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function showToast(message) {
  toastBody.textContent = message;
  toast.show();
}

function productUnit(product) {
  return product.category === "snacks" && product.price < 100 ? "per piece" : "per kg";
}

function filteredProducts() {
  const query = productSearch.value.trim().toLowerCase();
  return products.filter((product) => {
    const matchesFilter = activeFilter === "all" || product.category === activeFilter;
    const matchesQuery = product.name.toLowerCase().includes(query) || product.tag.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });
}

function renderProducts() {
  const list = filteredProducts();
  productGrid.innerHTML = list.map((product) => {
    const id = product.name.replace(/\s+/g, "-").toLowerCase();
    const wished = wishlist.includes(product.name);
    return `
      <div class="col-sm-6 col-lg-4 col-xl-3 reveal visible" data-product-card>
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="badge-luxury">${product.tag}</span>
            <button class="wishlist-btn ${wished ? "active" : ""}" type="button" data-wishlist="${product.name}" aria-label="Add ${product.name} to wishlist">
              <i class="bi ${wished ? "bi-heart-fill" : "bi-heart"}"></i>
            </button>
          </div>
          <div class="product-body">
            <h3 id="${id}">${product.name}</h3>
            <p>${product.category === "snacks" ? "Fresh, crisp, and prepared in small batches." : "Rich traditional mithai crafted with premium ingredients."}</p>
            <div class="product-meta">
              <span class="price">${money(product.price)} <small>${productUnit(product)}</small></span>
              <button class="btn btn-maroon btn-sm" type="button" data-add="${product.name}" aria-describedby="${id}">
                <i class="bi bi-bag-plus"></i>Add
              </button>
            </div>
          </div>
        </article>
      </div>
    `;
  }).join("");

  if (!list.length) {
    productGrid.innerHTML = `<div class="col-12"><div class="signature-card text-center"><strong>No products found.</strong><p class="mb-0">Try a different search or filter.</p></div></div>`;
  }
}

function saveCart() {
  localStorage.setItem("sbbCart", JSON.stringify(cart));
  renderCart();
}

function addToCart(productName) {
  const product = products.find((item) => item.name === productName);
  const existing = cart.find((item) => item.name === productName);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  showToast(`${productName} added to cart`);
}

function updateQty(productName, delta) {
  cart = cart.map((item) => item.name === productName ? { ...item, qty: item.qty + delta } : item)
    .filter((item) => item.qty > 0);
  saveCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartCount.textContent = count;
  cartTotal.textContent = money(total);

  if (!cart.length) {
    cartItems.innerHTML = `<div class="signature-card text-center"><strong>Your cart is empty.</strong><p class="mb-0">Add sweets or snacks from the menu.</p></div>`;
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div>
        <strong>${item.name}</strong>
        <p class="mb-0">${money(item.price)} x ${item.qty}</p>
      </div>
      <div class="qty-controls" aria-label="Quantity controls for ${item.name}">
        <button type="button" data-qty="${item.name}" data-delta="-1" aria-label="Decrease ${item.name}">-</button>
        <span>${item.qty}</span>
        <button type="button" data-qty="${item.name}" data-delta="1" aria-label="Increase ${item.name}">+</button>
      </div>
    </div>
  `).join("");
}

function toggleWishlist(productName) {
  if (wishlist.includes(productName)) {
    wishlist = wishlist.filter((item) => item !== productName);
    showToast(`${productName} removed from wishlist`);
  } else {
    wishlist.push(productName);
    showToast(`${productName} saved to wishlist`);
  }
  localStorage.setItem("sbbWishlist", JSON.stringify(wishlist));
  renderProducts();
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const wishlistButton = event.target.closest("[data-wishlist]");
  const qtyButton = event.target.closest("[data-qty]");

  if (addButton) addToCart(addButton.dataset.add);
  if (wishlistButton) toggleWishlist(wishlistButton.dataset.wishlist);
  if (qtyButton) updateQty(qtyButton.dataset.qty, Number(qtyButton.dataset.delta));
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderProducts();
  });
});

productSearch.addEventListener("input", renderProducts);

const savedTheme = localStorage.getItem("sbbTheme");
if (savedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
  document.body.dataset.theme = "dark";
  document.querySelector("#themeToggle i").className = "bi bi-sun";
}

document.querySelector("#themeToggle").addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme === "dark";
  document.documentElement.dataset.theme = isDark ? "light" : "dark";
  document.body.dataset.theme = isDark ? "light" : "dark";
  document.querySelector("#themeToggle i").className = isDark ? "bi bi-moon-stars" : "bi bi-sun";
  localStorage.setItem("sbbTheme", isDark ? "light" : "dark");
});

window.addEventListener("load", () => {
  setTimeout(() => document.querySelector(".loader").classList.add("loaded"), 350);
});

const nav = document.querySelector(".premium-nav");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
  const sections = document.querySelectorAll("main section[id]");
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

document.querySelector("#orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const cartSummary = cart.map((item) => `${item.name} x ${item.qty}`).join(", ");
  document.querySelector("#orderDetails").value ||= cartSummary;
  showToast("Order enquiry received. We will confirm soon.");
  event.currentTarget.reset();
});

document.querySelector("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Subscribed to festival offers.");
  event.currentTarget.reset();
});

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Demo login successful.");
  bootstrap.Modal.getInstance(document.querySelector("#loginModal")).hide();
});

const chatPanel = document.querySelector("#chatPanel");
const chatBody = document.querySelector("#chatBody");
const chatInput = document.querySelector("#chatInput");

document.querySelector("#chatToggle").addEventListener("click", () => {
  chatPanel.hidden = !chatPanel.hidden;
  if (!chatPanel.hidden) chatInput.focus();
});

document.querySelector("#chatClose").addEventListener("click", () => {
  chatPanel.hidden = true;
});

document.querySelector("#chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  chatBody.insertAdjacentHTML("beforeend", `<p class="user-msg">${question}</p>`);
  const lower = question.toLowerCase();
  let answer = "Our team can help you choose fresh sweets, snacks, gift boxes, or catering quantities. Share your occasion and guest count for a better recommendation.";
  if (lower.includes("wedding") || lower.includes("catering")) {
    answer = "For weddings and catering, we recommend assorted mithai counters, dry sweet boxes, samosa or kachori snacks, and advance booking for smooth service.";
  } else if (lower.includes("gift") || lower.includes("festival")) {
    answer = "Festival gift boxes can include kaju katli, badam barfi, motichoor laddu, peda, and namkeen. Bulk customization is available.";
  } else if (lower.includes("best") || lower.includes("popular")) {
    answer = "Our best sellers are kaju katli, motichoor laddu, gulab jamun, rasmalai, samosa, and kachori.";
  }
  setTimeout(() => {
    chatBody.insertAdjacentHTML("beforeend", `<p class="bot-msg">${answer}</p>`);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 250);
  chatInput.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
});

renderProducts();
renderCart();
