fetch("public/assets/js/statham.json")
    .then(function(response) {
        return response.json
    })
    .then (function(json){
        json.results.forEach(element => {
            let title = element.original_name;
            let description = element.description;
            let overview = element.overview;
            let housePrice = element.house_price;
            let hotelPrice = element.hotel_price;
            console.log(title);
        })
    })