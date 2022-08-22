// CHARGER LE JSON

fetch("public/assets/js/statham.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        json.results.forEach(element => {
            let title = element.original_name;
            let ref = element.id;
            let cat = element.cat;
            let color = element.color;
            let description = element.description;
            let overview = element.overview;
            let housePrice = element.house_price;
            let hotelPrice = element.hotel_price;
            let bPrice = element.b_price;
            let buttons = 0;

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

document.getElementById('btnRue').addEventListener("click", () => {
    document.querySelectorAll('.parc').forEach(element => {
        element.classList.toggle('hide');
    })
    document.querySelectorAll('.gare').forEach(element => {
        element.classList.toggle(('hide'));
    })

})

document.getElementById('btnGare').addEventListener("click", () => {
    document.querySelectorAll('.parc').forEach(element => {
        element.classList.toggle('hide');
    })
    document.querySelectorAll('.rue').forEach(element => {
        element.classList.toggle(('hide'));
    })
})

document.getElementById('btnParc').addEventListener("click", () => {
    document.querySelectorAll('.rue').forEach(element => {
        element.classList.toggle('hide');
    })
    document.querySelectorAll('.gare').forEach(element => {
        element.classList.toggle(('hide'));
    })
})

// GESTION DE L'AJOUT DANS LE PANIER

window.addEventListener("click", (e) => {
    if (e.target.classList.contains('text')) {

        // si le panier contient un item avec le data-street
        if (cartContent.hasChildNodes() == false) {
            cartContent.innerHTML +=
                `
            <div class="cartItem">
                <p data-street="${e.target.dataset.street}"> ${e.target.dataset.street} </p>
                <span>1 </span> 
                <p> ${e.target.dataset.price} </p>
            </div>
        `;
        } else {
            let childTest = cartContent.children;
            for (let i = 0; i < childTest.length; i++) {
                if (childTest[i].firstElementChild.getAttribute('data-street') == e.target.dataset.street) {
                    console.log('condition true', childTest[i]);
                    childTest[i].querySelector('span').textContent = parseInt(childTest[i].querySelector('span').textContent) + 1;
                    break;
                    // } else if (childTest[i].firstElementChild.getAttribute('data-street') !== e.target.dataset.street) {
                    //     continue;
                }
                else {
                    continue;
                }
            }

            if (condition) {

            }
            cartContent.innerHTML +=
                `
            <div class="cartItem">
                <p data-street="${e.target.dataset.street}"> ${e.target.dataset.street} </p>
                <span>1 </span> 
                <p> ${e.target.dataset.price} </p>
            </div>
            `;
            console.log('condition false', childTest[i]);


        }
        // console.log(document.querySelector('.cartItem > p').getAttribute('data-street'));
        priceTotal.textContent = parseInt(priceTotal.textContent) + parseInt(e.target.dataset.price);
    }
})

// VIDER LE PANIER

cartEmpty.addEventListener("click", (e) => {
    cartContent.innerHTML = '';
    priceTotal.innerHTML = 0;
})

// GESTION DE L'ONGLET DU PANIER

cartButton.addEventListener("click", () => {
    cartSlide.classList.remove('cartSlideOut');
    cartSlide.classList.add('cartSlideIn');
})

cartClose.addEventListener('click', () => {
    cartSlide.classList.remove('cartSlideIn');
    cartSlide.classList.add('cartSlideOut');
})

//