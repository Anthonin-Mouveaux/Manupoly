fetch("public/assets/js/statham.json")
    .then(function(response) {
        return response.json()
    })
    .then (function(json){
        json.results.forEach(element => {
            let title = element.original_name;
            let ref = element.id;
            let cat = element.cat;
            let color = element.color;
            let description = element.description;
            let overview = element.overview;
            let housePrice = element.house_price;
            let hotelPrice = element.hotel_price;
            let buttons = 0;
            document.querySelector('.container').innerHTML +=
            `
                <div class="card">
                    <div class="cont">
                        <div class="title ${color}">
                            <h2>${title}</h2>
                        </div>
                        <div class="imgs">
                            <img src="${overview}" alt="photo de ${title}">
                        </div>
                        <div class="content">
                            <div class="houseBuy">
                                <p>Acheter une maison : ${housePrice}€</p>
                                <button class="button-82-pushable" role="button" data-street="${title}" data-price="${housePrice}">
                                    <span class="button-82-shadow"></span>
                                    <span class="button-82-edge"></span>
                                    <span class="button-82-front text">+</span>
                                </button>
                            </div>
                            <div class="hotelBuy">
                                <p>Acheter un hôtel : ${hotelPrice}€</p>
                                <button class="button-82-pushable" role="button" data-street="${title}" data-price="${hotelPrice}">
                                    <span class="button-82-shadow"></span>
                                    <span class="button-82-edge"></span>
                                    <span class="button-82-front text">+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
                buttons = document.querySelectorAll('button');
                console.log(buttons[1].dataset.price);
            })
        })