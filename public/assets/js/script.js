// CHARGER LE JSON

fetch("public/assets/js/statham.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        json.results.forEach(element => {
            var title = element.original_name;
            var ref = element.id;
            var cat = element.cat;
            var color = element.color;
            var description = element.description;
            var overview = element.overview;
            var housePrice = element.house_price;
            var hotelPrice = element.hotel_price;
            var bPrice = element.b_price;
            var buttons = 0;

            if (cat == "parc") {
                document.querySelector('.container').innerHTML +=
                    `<div class="card parc">
                    <div class="cont">
                        <div class="title ${color}">
                            <h2>${title}</h2>
                        </div>
                        <div class="imgs">
                            <img src="${overview}" alt="photo de ${title}">
                        </div>
                        <h3>Prix d'achat</h3>
                        <div class="content">
                            <div class="houseBuy">
                                <p>${bPrice}€</p>
                                <button class="button-82-pushable" role="button">
                                    <span class="button-82-shadow"></span>
                                    <span class="button-82-edge"></span>
                                    <span class="button-82-front text" data-street="${title}" data-price="${bPrice}">+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
            }
            else if (cat == "gare") {
                document.querySelector('.container').innerHTML +=
                    `<div class="card gare">
                        <div class="cont">
                            <div class="title ${color}">
                                <h2>${title}</h2>
                            </div>
                            <div class="imgs">
                                <img src="${overview}" alt="photo de ${title}">
                            </div>
                            <h3>Prix d'achat</h3>
                            <div class="content">
                                <div class="houseBuy">
                                    <p>${bPrice}€</p>
                                    <button class="button-82-pushable" role="button">
                                        <span class="button-82-shadow"></span>
                                        <span class="button-82-edge"></span>
                                        <span class="button-82-front text" data-street="${title}" data-price="${bPrice}">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`
            }
            else {
                document.querySelector('.container').innerHTML +=
                    `<div class="card rue">
                    <div class="cont">
                        <div class="title ${color}">
                            <h2>${title}</h2>
                        </div>
                        <div class="imgs">
                            <img src="${overview}" alt="photo de ${title}">
                        </div>
                        <h3>Prix d'achat</h3>
                        <div class="content">
                            <div class="houseBuy">
                                <p>Maison : ${housePrice}€</p>
                                <button class="button-82-pushable" role="button">
                                    <span class="button-82-shadow"></span>
                                    <span class="button-82-edge"></span>
                                    <span class="button-82-front text" data-street="${title}" data-price="${housePrice}">+</span>
                                </button>
                            </div>
                            <div class="hotelBuy">
                                <p>Hôtel : ${hotelPrice}€</p>
                                <button class="button-82-pushable" role="button">
                                    <span class="button-82-shadow"></span>
                                    <span class="button-82-edge"></span>
                                    <span class="button-82-front text" data-street="${title}" data-price="${hotelPrice}">+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
            }
            buttons = document.querySelectorAll('button');
        })
    })

document.getElementById('btnRue').addEventListener("click", ()=> {
        document.querySelectorAll('.parc').forEach(element => {
            element.classList.toggle('hide');
        })
        document.querySelectorAll('.gare').forEach(element => {
            element.classList.toggle(('hide'));
        })

})

document.getElementById('btnGare').addEventListener("click", ()=> {
    document.querySelectorAll('.parc').forEach(element => {
        element.classList.toggle('hide');
    })
    document.querySelectorAll('.rue').forEach(element => {
        element.classList.toggle(('hide'));
    })
})

document.getElementById('btnParc').addEventListener("click", ()=> {
    document.querySelectorAll('.rue').forEach(element => {
        element.classList.toggle('hide');
    })
    document.querySelectorAll('.gare').forEach(element => {
        element.classList.toggle(('hide'));
    })
})


// GESTION DU CAROUSEL



// CREATION DES CARDS DEPUIS JSON



// GESTION DE L'AJOUT DANS LE PANIER

window.addEventListener("click", (e) => {
    if (e.target.classList.contains('text')) {
        cartContent.innerHTML +=
            `
            <div class="cartItem">
                <p> ${e.target.dataset.street} </p>
                <p> ${e.target.dataset.price} </p>
            </div>
        `;
        console.log(typeof parseInt(priceTotal.textContent), parseInt(priceTotal.textContent), typeof parseInt(e.target.dataset.price), parseInt(e.target.dataset.price));
        priceTotal.textContent = parseInt(priceTotal.textContent) + parseInt(e.target.dataset.price);
    }
})

// VIDER LE PANIER



// GESTION DE L'ONGvar DU PANIER

cartButton.addEventListener("click", () => {
    cartSlide.classList.remove('cartSlideOut');
    cartSlide.classList.add('cartSlideIn');
    console.log('check');
})

cartClose.addEventListener('click', () => {
    cartSlide.classList.remove('cartSlideIn');
    cartSlide.classList.add('cartSlideOut');
})