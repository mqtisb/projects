const products = [
    { id: 1, name: "Stek Ribeye Wagyu", price: 120.00, weight: "0.5kg", img: "https://www.flomaro.pl/wp-content/uploads/2025/06/Ribye-Wagyu-Japonia-2.png" },
    { id: 2, name: "Szynka Wędzona", price: 45.50, weight: "1kg", img: "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=200" },
    { id: 3, name: "Kiełbasa Jałowcowa", price: 38.00, weight: "1kg", img: "https://sklep-zemat.pl/wp-content/uploads/2025/06/kielbasa-jalowcowa.webp" },
    { id: 4, name: "Boczek Pieczony", price: 32.90, weight: "0.8kg", img: "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?q=80&w=200" },
    { id: 5, name: "Polędwica Wołowa", price: 150.00, weight: "0.5kg", img: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=200" },
    { id: 6, name: "Salami dojrzewające", price: 55.00, weight: "0.4kg", img: "https://freshme.pl/hpeciai/9d18c641189ef99a6adaa6a662d4207a/pol_pl_Salami-Piccante-Dojrzewajace-Bezglutenowe-BIO-Okolo-2-50-kg-2-5-szt-x-1-kg-14999_1.png" },
    { id: 7, name: "Kaszanka Gryczana", price: 18.50, weight: "1kg", img: "https://wedzarniasmakow.pl/wp-content/uploads/2023/12/KASZANKA-GRYCZANA-scaled.jpg" },
    { id: 8, name: "Pasztet z Dziczyzny", price: 25.00, weight: "0.3kg", img: "https://www.dobrezlasu.pl/_img/_pictures/949.png" },
    { id: 9, name: "Żeberka Wieprzowe", price: 29.99, weight: "1.2kg", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200" },
    { id: 10, name: "Karkówka na Grill", price: 35.00, weight: "1kg", img: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=200" },
    { id: 11, name: "Kaczka faszerowana", price: 89.00, weight: "2.5kg", img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=200" },
    { id: 13, name: "Frankfurterki", price: 42.00, weight: "0.6kg", img: "https://wedlinyciak.pl/wp-content/uploads/2025/05/IMG_9465-scaled.jpg" },
    { id: 14, name: "Antrykot Wołowy", price: 95.00, weight: "0.7kg", img: "https://www.ukuby.pl/antrykot-wolowy-marmurkowy.2.jpg" },
    { id: 15, name: "Schab ze śliwką", price: 48.00, weight: "1.2kg", img: "https://zmnowyzmigrod.pl/wp-content/uploads/2021/03/Schab-pieczony-ze-sliwka_2_wyciete_bez_tla.png" }
];

let cart = [];

function displayProducts() {
    const container = document.getElementById('product-list');
    if(!container) return;
    
    container.innerHTML = "";
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" class="product-img-box">
            <h3>${p.name}</h3>
            <span style="color: #bbb; display: block; font-size: 0.8rem;">Waga: ${p.weight}</span>
            <span class="price">${p.price.toFixed(2)} zł</span>
            <button class="add-to-cart" onclick="addToCart(${p.id})">Dodaj do koszyka</button>
        `;
        container.appendChild(card);
    });
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    if(sidebar) sidebar.classList.toggle('active');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const count = document.getElementById('cart-count');
    const total = document.getElementById('cart-total');
    
    if(!list || !count || !total) return;

    list.innerHTML = "";
    let sum = 0;

    cart.forEach((item, index) => {
        sum += item.price;
        list.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" style="width:50px; height:50px; border-radius:5px;">
                <div style="flex:1">
                    <h4 style="font-size: 0.9rem">${item.name}</h4>
                    <span style="color: #bbb; font-size: 0.7rem;">Porcja: ${item.weight}</span><br>
                    <span style="color: #d4af37">${item.price.toFixed(2)} zł</span>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ff4d4d; cursor:pointer">Usuń</button>
            </div>
        `;
    });

    count.innerText = cart.length;
    total.innerText = sum.toFixed(2) + " zł";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) {
        alert("Twój koszyk świeci pustkami!");
        return;
    }

    if (cart.length > 15) {
        alert("Przystopuj z zakupami grubasie");
    } else {
        alert("Zamówienie przyjęte do realizacji! Nasi rzeźnicy już ostrzą noże.");
        cart = [];
        updateCartUI();
        toggleCart();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});