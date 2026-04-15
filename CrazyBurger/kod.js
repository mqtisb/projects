const products = [
    { id: 1, category: "Przystawki", name: "Loaded Fries", desc: "Frytki z bekonem, szczypiorkiem i sosem serowym.", price: 24, img: "https://images.unsplash.com/photo-1573225342350-16731dd9bf3d?q=80&w=500&auto=format&fit=crop" },
    { id: 2, category: "Przystawki", name: "Krążki Cebulowe", desc: "Chrupiące krążki w panierce piwnej z sosem BBQ.", price: 18, img: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=500&auto=format&fit=crop" },
    { id: 3, category: "Przystawki", name: "Skrzydełka Buffalo", desc: "Pikantne skrzydełka z kurczaka (6 szt.) z dipem blue cheese.", price: 26, img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500&auto=format&fit=crop" },
    { id: 10, category: "Burgery Wołowe", name: "Classic Crazy", desc: "Wołowina 200g, cheddar, sałata, pomidor, czerwona cebula, ogórek kiszony, sos firmowy.", price: 34, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop" },
    { id: 11, category: "Burgery Wołowe", name: "Bacon BBQ Beast", desc: "Podwójny bekon, ser mimolette, krążek cebulowy, sos BBQ, sałata, majonez.", price: 39, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500&auto=format&fit=crop" },
    { id: 13, category: "Burgery Wołowe", name: "Truffle Mushroom", desc: "Wołowina, sos truflowy, grillowane pieczarki, rukola, ser parmezan.", price: 42, img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=500&auto=format&fit=crop" },
    { id: 20, category: "Wege & Kurczak", name: "Crispy Chicken", desc: "Chrupiący kurczak w panierce cornflakes, coleslaw, majonez, pikle.", price: 35, img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500&auto=format&fit=crop" },
    { id: 21, category: "Wege & Kurczak", name: "Crazy Halloumi", desc: "Grillowany ser halloumi, konfitura z czerwonej cebuli, awokado, rukola, sos aioli.", price: 38, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500&auto=format&fit=crop" },
    { id: 22, category: "Wege & Kurczak", name: "Beyond Crazy", desc: "Roślinny kotlet Beyond Meat, wegański ser, sałata, pomidor, sos wegański.", price: 44, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=500&auto=format&fit=crop" },
    { id: 30, category: "Dodatki", name: "Frytki Klasyczne", desc: "Cienkie i chrupiące frytki z solą morską.", price: 12, img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg" },
    { id: 31, category: "Dodatki", name: "Bataty", desc: "Frytki ze słodkich ziemniaków z dipem czosnkowym.", price: 16, img: "https://dietoma.pl/wp-content/uploads/2023/12/Frytki-z-batatow.png" }
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
const SUPABASE_URL = 'https://njwscihtqdsvvabofjpi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lBzZyhg8uavJDMTuz3sfnA_FV-WkpBG'; 
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
async function submitReservation(event) {
    event.preventDefault(); 
    const date = dateInput.value;
    const time = timeInput.value;
    const guests = document.getElementById("res-guests").value;
    const firstName = document.getElementById("res-firstname").value;
    const lastName = document.getElementById("res-lastname").value;
    const email = document.getElementById("res-email").value;
    const selectedDateTime = new Date(`${date}T${time}`);
    if (selectedDateTime < new Date()) {
        alert("Wybrana data lub godzina już minęła.");
        return;
    }
    const { data, error } = await supabase
        .from('reservations')
        .insert([
            { 
                first_name: firstName, 
                last_name: lastName, 
                email: email, 
                res_date: date, 
                res_time: time, 
                guests: parseInt(guests) 
            }
        ]);
    if (error) {
        console.error("Błąd zapisu:", error);
        alert("Wystąpił błąd podczas rezerwacji. Spróbuj ponownie.");
    } else {
        alert(`Dziękujemy ${firstName}! Rezerwacja na ${date} została zapisana w bazie.`);
        document.getElementById("reservationForm").reset();
        closeModal();
    }
}