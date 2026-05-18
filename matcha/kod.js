const products = [
            { id: 1, name: "Matcha Ceremonialna Uji", price: "129,00 zł", img: "https://placehold.co/400x300/799450/FFF?text=Matcha+Ceremonialna" },
            { id: 2, name: "Matcha Kulinarna", price: "59,00 zł", img: "https://placehold.co/400x300/8ca863/FFF?text=Matcha+Kulinarna" },
            { id: 3, name: "Matcha Latte w Proszku", price: "45,00 zł", img: "https://placehold.co/400x300/a3bf7a/FFF?text=Matcha+Latte" },
            { id: 4, name: "Zestaw Startowy (Chasen + Czarka)", price: "149,00 zł", img: "https://placehold.co/400x300/4a5c31/FFF?text=Zestaw+Startowy" },
            { id: 5, name: "Bambusowa Trzepaczka (Chasen)", price: "69,00 zł", img: "https://placehold.co/400x300/dcb871/FFF?text=Chasen" },
            { id: 6, name: "Ceramiczna Czarka (Kuro)", price: "89,00 zł", img: "https://placehold.co/400x300/333333/FFF?text=Czarka+Ceramiczna" },
            { id: 7, name: "Bambusowa Łyżeczka (Chashaku)", price: "25,00 zł", img: "https://placehold.co/400x300/dcb871/FFF?text=Chashaku" },
            { id: 8, name: "Syrop Matcha (Do kawy i deserów)", price: "35,00 zł", img: "https://placehold.co/400x300/799450/FFF?text=Syrop+Matcha" },
            { id: 9, name: "Ciasteczka Matcha z Białą Czekoladą", price: "22,00 zł", img: "https://placehold.co/400x300/a3bf7a/FFF?text=Ciasteczka" },
            { id: 10, name: "Czekolada Rzemieślnicza Matcha", price: "28,00 zł", img: "https://placehold.co/400x300/8ca863/FFF?text=Czekolada" },
            { id: 11, name: "Matcha Truskawkowa (Smakowa)", price: "49,00 zł", img: "https://placehold.co/400x300/e07a8b/FFF?text=Matcha+Truskawkowa" },
            { id: 12, name: "Termos z zaparzaczem", price: "119,00 zł", img: "https://placehold.co/400x300/999999/FFF?text=Termos" }
        ];
        const productsContainer = document.getElementById('products-container');
        products.forEach(product => {
            const productHTML = `
                <div class="product-card">
                    <img src="${product.img}" alt="${product.name}" class="product-img">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price}</p>
                        <button class="btn btn-small" onclick="alert('Dodano ${product.name} do koszyka!')">Do koszyka</button>
                    </div>
                </div>
            `;
            productsContainer.innerHTML += productHTML;
        });
        document.getElementById('res-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            alert(`Dziękujemy ${name}! Twój stolik na ${date} o godzinie ${time} został zarezerwowany.`);
            this.reset();
        });