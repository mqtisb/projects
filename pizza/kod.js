const products = [
    { id: 1, category: "Przystawki", name: "Focaccia z Rozmarynem", desc: "Wypiekane na miejscu pieczywo z oliwą extra virgin, solą morską i świeżym rozmarynem.", price: 18, img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Focaccia.png" },
    { id: 2, category: "Przystawki", name: "Bruschetta Pomodoro", desc: "Grzanki z domowego chleba z marynowanymi pomidorkami, czosnkiem i bazylią (3 szt.).", price: 22, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8mQ_bgYO64RcIXWdoMo2GdCq2AoVLSKAoKfpKlxQAfNSpWJitJrh6l29-j8_kXdz7TMNRI9n1welv3qesanmmSt7DNGdrne5P37jJXLkzTTYF-z2D8vHGXWGEwKj936JtgySJJVPwU7ML/s1600/bruschetta+al+pomodoro%252Cbruschetta%252Ccalabria%252Ccucina+calabrese%252Cmozzarella%252Cbazylia%252Ccaprese%252Cpomidory%252Canipasto%252Colitalia%252Coliwa+z+oliwek%252Cproeco%252Clidl%252Cdan+cake%252C+%252816%2529.JPG" },
    { id: 4, category: "Przystawki", name: "Carpaccio Wołowe", desc: "Cienkie plastry polędwicy wołowej, kapary, parmezan, oliwa cytrynowa.", price: 42, img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Carpaccio_with_cheese_in_Warsaw.jpg" },
    { id: 10, category: "Pizze Klasyczne", name: "Margherita Classic", desc: "Sos z pomidorów San Marzano, mozzarella fior di latte, świeża bazylia, oliwa.", price: 32, img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg" },
    { id: 11, category: "Pizze Klasyczne", name: "Salame Piccante", desc: "Pomidory, mozzarella, pikantne salami spianata calabra, peperoncino.", price: 38, img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500&auto=format&fit=crop" },
    { id: 12, category: "Pizze Klasyczne", name: "Capricciosa", desc: "Pomidory, mozzarella, szynka cotto, pieczarki, karczochy, czarne oliwki.", price: 39, img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=500&auto=format&fit=crop" },
    { id: 13, category: "Pizze Klasyczne", name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, pecorino romano, parmezan (pizza biała lub czerwona).", price: 42, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop" },
    { id: 14, category: "Pizze Klasyczne", name: "Prosciutto e Funghi", desc: "Pomidory San Marzano, mozzarella, włoska szynka gotowana, pieczarki.", price: 37, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop" },
    { id: 20, category: "Pizze Premium", name: "Parma Special", desc: "Sos, mozzarella, po upieczeniu: szynka parmeńska, rukola, pomidorki, płatki parmezanu.", price: 46, img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=500&auto=format&fit=crop" },
    { id: 21, category: "Pizze Premium", name: "Truflowa Uczta", desc: "Krem truflowy, mozzarella, ricotta, świeżo mielony pieprz, oliwa truflowa.", price: 49, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop" },
    { id: 22, category: "Pizze Premium", name: "Pistacchio e Mortadella", desc: "Biała baza: mozzarella, pesto pistacjowe, włoska mortadela, kruszone pistacje.", price: 48, img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=500&auto=format&fit=crop" },
    { id: 23, category: "Pizze Premium", name: "Nduja & Mascarpone", desc: "Pomidory, mozzarella, ostra kalabryjska kiełbasa nduja, łagodny ser mascarpone.", price: 44, img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=500&auto=format&fit=crop" },
    { id: 24, category: "Pizze Premium", name: "Gamberi e Zucchine", desc: "Mozzarella, krewetki tygrysie, cukinia, czosnek, natka pietruszki.", price: 47, img: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=500&auto=format&fit=crop" },
    { id: 30, category: "Wege & Vegan", name: "Veggie Garden", desc: "Pomidory, mozzarella, grillowany bakłażan, cukinia, papryka, kukurydza.", price: 38, img: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=500&auto=format&fit=crop" },
    { id: 32, category: "Wege & Vegan", name: "Spinaci e Gorgonzola", desc: "Biała baza, mozzarella, świeży szpinak, gorgonzola, orzechy włoskie.", price: 40, img: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_med_gorgonzola%2C_spinat_og_bacon%2C_March_2010.jpg" },
    { id: 40, category: "Dodatki", name: "Sos Czosnkowy", desc: "Domowy sos na bazie jogurtu i świeżego czosnku.", price: 5, img: "https://upload.wikimedia.org/wikipedia/commons/8/83/Aioli_mit_Oliven.jpg" }
];
function renderMenu() {
    const container = document.getElementById('product-list');
    if (!container) return;
    const categories = [...new Set(products.map(item => item.category))];
    container.innerHTML = "";
    categories.forEach(cat => {
        const section = document.createElement('section');
        section.className = 'menu-section';
        section.innerHTML = `<h2 class="section-title">${cat}</h2>`;
        const grid = document.createElement('div');
        grid.className = 'product-grid';
        const items = products.filter(item => item.category === cat);
        items.forEach(dish => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${dish.img}" alt="${dish.name}" style="width:100%; height:200px; object-fit:cover; border-radius:10px 10px 0 0;">
                </div>
                <div class="product-info" style="padding: 15px;">
                    <h3 style="margin-top:0;">${dish.name}</h3>
                    <p style="font-size: 0.9rem; color: #666; min-height: 40px;">${dish.desc}</p>
                    <span class="price" style="font-weight:bold; color: #d4af37;">${dish.price.toFixed(2)} zł</span>
                </div>
            `;
            grid.appendChild(card);
        });
        section.appendChild(grid);
        container.appendChild(section);
    });
}
document.addEventListener('DOMContentLoaded', renderMenu);
const modal = document.getElementById("reservationModal");
const dateInput = document.getElementById("res-date");
const timeInput = document.getElementById("res-time");
function setMinDateAndTime() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const todayFormatted = `${yyyy}-${mm}-${dd}`;
    dateInput.min = todayFormatted;
    function updateMinTime() {
        if (dateInput.value === todayFormatted) {
            const currentNow = new Date();
            const hours = String(currentNow.getHours()).padStart(2, '0');
            const minutes = String(currentNow.getMinutes()).padStart(2, '0');
            timeInput.min = `${hours}:${minutes}`;
        } else {
            timeInput.min = "11:00"; 
        }
    }
    dateInput.addEventListener('change', updateMinTime);
    updateMinTime();
}
setMinDateAndTime();
function openModal() {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    setMinDateAndTime();
}
function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
}
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
function submitReservation(event) {
    event.preventDefault(); 
    const date = dateInput.value;
    const time = timeInput.value;
    const guests = document.getElementById("res-guests").value;
    const firstName = document.getElementById("res-firstname").value;
    const lastName = document.getElementById("res-lastname").value;
    const email = document.getElementById("res-email").value;
    const selectedDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    if (selectedDateTime < now) {
        alert("Wybrana data lub godzina już minęła. Wybierz poprawny termin.");
        return;
    }
    alert(`Dziękujemy, ${firstName} ${lastName}! 
Twoja rezerwacja na ${date} o godzinie ${time} dla ${guests} osób została pomyślnie wysłana. 
Potwierdzenie wyślemy na adres: ${email}`);
    document.getElementById("reservationForm").reset();
    closeModal();
}
async function makeReservation(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        guests: document.getElementById('guests').value,
        email: document.getElementById('email').value
    };

    const response = await fetch('http://localhost:3000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert("Stolik zarezerwowany!");
    } else {
        alert("Wystąpił błąd.");
    }
}