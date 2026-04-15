const products = [
    { id: 1, category: "Przystawki", name: "Bruschetta z pomidorami", desc: "Chrupiąca bagietka, czosnek, świeża bazylia i oliwa.", price: 22 },
    { id: 2, category: "Przystawki", name: "Carpaccio z buraka", desc: "Ser kozi, orzechy włoskie, rukola, glazura balsamiczna.", price: 28 },
    { id: 3, category: "Przystawki", name: "Hummus Duo", desc: "Klasyczny i paprykowy, podawany z ciepłą pitą.", price: 24 },
    { id: 4, category: "Przystawki", name: "Arancini z grzybami", desc: "Sycylijskie kulki ryżowe z mozzarellą i dipem truflowym.", price: 26 },
    { id: 5, category: "Przystawki", name: "Kalafior Buffalo", desc: "Pikantne różyczki w panierce z sosem jogurtowym.", price: 21 },
    { id: 6, category: "Przystawki", name: "Tatar z awokado", desc: "Z mango, kolendrą, chili i nachosami kukurydzianymi.", price: 29 },
    { id: 7, category: "Zupy", name: "Krem z dyni", desc: "Mleczko kokosowe, imbir, prażone pestki.", price: 19 },
    { id: 8, category: "Zupy", name: "Zielony chłodnik", desc: "Jogurt, ogórek, rzodkiewka i mnóstwo koperku.", price: 18 },
    { id: 9, category: "Zupy", name: "Wegański Ramen", desc: "Bulion grzybowy, tofu, pak choi, makaron udon.", price: 34 },
    { id: 10, category: "Zupy", name: "Krem pomidorowy", desc: "Z pesto bazyliowym i mozzarellą di bufala.", price: 20 },
    { id: 11, category: "Zupy", name: "Soczewica po marokańsku", desc: "Gęsta, aromatyczna z kuminem i kolendrą.", price: 21 },
    { id: 12, category: "Dania Główne", name: "Stek z kalafiora", desc: "Puree z groszku, pieczone ziemniaki, chimichurri.", price: 42 },
    { id: 13, category: "Dania Główne", name: "Gnocchi z szałwią", desc: "Masło palone, parmezan, orzeszki pini.", price: 38 },
    { id: 14, category: "Dania Główne", name: "Risotto ze szparagami", desc: "Białe wino, cytryna, młody szpinak.", price: 45 },
    { id: 15, category: "Dania Główne", name: "Burger z boczniaka", desc: "Boczniaki w tempurze, coleslaw, sos sriracha, frytki.", price: 39 },
    { id: 16, category: "Dania Główne", name: "Bakłażan Parmigiana", desc: "Zapiekany z sosem pomidorowym i serem.", price: 37 },
    { id: 17, category: "Dania Główne", name: "Curry z batatem", desc: "Ciecierzyca, szpinak, ryż jaśminowy.", price: 36 },
    { id: 18, category: "Dania Główne", name: "Penne alla Norma", desc: "Smażony bakłażan, pomidory, ricotta salata.", price: 34 },
    { id: 19, category: "Dania Główne", name: "Lasagne warzywna", desc: "Cukinia, papryka, beszamel, mozzarella.", price: 38 },
    { id: 20, category: "Dania Główne", name: "Tofu Teriyaki", desc: "Wok z warzywami, sezam, makaron ryżowy.", price: 35 },
    { id: 21, category: "Dania Główne", name: "Placki z sosem kurkowym", desc: "Chrupiące placki ziemniaczane, sos na śmietanie.", price: 44 },
    { id: 22, category: "Sałatki", name: "Sałatka z Halloumi", desc: "Grillowany ser, granat, mix sałat, sos miodowy.", price: 36 },
    { id: 23, category: "Sałatki", name: "Quinoa Power Bowl", desc: "Awokado, edamame, batat, dressing tahini.", price: 34 },
    { id: 24, category: "Sałatki", name: "Wege Cezar", desc: "Sałata rzymska, płatki parmezanu, wege sos.", price: 32 },
    { id: 25, category: "Sałatki", name: "Sałatka z pieczoną marchewką", desc: "Feta, czarnuszka, świeża mięta.", price: 31 },
    { id: 26, category: "Desery", name: "Sernik z białą czekoladą", desc: "Mus malinowy, spód owsiany.", price: 24 },
    { id: 27, category: "Desery", name: "Mus czekoladowy (Wegański)", desc: "Na bazie aquafaby, owoce leśne.", price: 22 },
    { id: 28, category: "Desery", name: "Tarta cytrynowa", desc: "Z opalana bezą włoską.", price: 21 },
    { id: 29, category: "Desery", name: "Pudding Chia", desc: "Mus mango, mleczko kokosowe.", price: 19 },
    { id: 30, category: "Desery", name: "Gruszka w winie", desc: "Czerwone wino, lody waniliowe.", price: 25 }
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
        grid.className = 'grid';
        const items = products.filter(item => item.category === cat);

        items.forEach(dish => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            card.innerHTML = `
                <h3>${dish.name}</h3>
                <p>${dish.desc}</p>
                <span class="price">${dish.price.toFixed(2)} zł</span>
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