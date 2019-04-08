$('#one').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
});

$('#two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1
});

$('#banner-carousel').owlCarousel({
    items: 1
});

var data =
{
    "destination": [
        {
            "name": "Medan",
            "gambar": "https://www.indonesia.travel/content/dam/indtravelrevamp/en/main-banner/destination-thumbnail/Medan.jpg",
            "text": "Medan is a city in Indonesia that delivers ethnic diversities..."
        },
        {
            "name": "Raja Ampat",
            "gambar": "https://www.indonesia.travel/content/dam/indtravelrevamp/en/main-banner/destination-thumbnail/Raja Ampat.jpg",
            "text": "Raja Ampat is wher you should travel to experience th..."
        },
        {
            "name": "Bali",
            "gambar": "https://www.indonesia.travel/content/dam/indtravelrevamp/en/main-banner/destination-thumbnail/Bali.jpg",
            "text": "Also known as the Land of the Gods, Bali appeals through its sheer..."
        },
        {
            "name": "Bintan Island",
            "gambar": "https://www.indonesia.travel/content/dam/indtravelrevamp/en/main-banner/destination-thumbnail/Bintan.jpg",
            "text": "With all of its mesmerizing fascinations, Bintan island is as well as its..."
        },
        {
            "name": "Lombok",
            "gambar": "https://www.indonesia.travel/content/dam/indtravelrevamp/en/main-banner/destination-thumbnail/Lombok.jpg",
            "text": "With divine beaches, the majestic Mt Rinjani and spectacular marine..."
        },
    ]
}

var travel =
{
    "travel": [
        {
            "name": "Favourite Misool Raja Ampat Trip by Lion Air 5D/4N",
            "gambar": "https://images.yuktravel.com/images/upload/groups/images/5D4N-Favourite-Misool-Raja-Ampat-Trip.jpg",
            "harga": "IDR 15.500.000",
            "location": "Raja Ampat - Indonesia"
        },
        {
            "name": "The Kasih Villas & Spa 3D/2N Simply Package",
            "gambar": "https://images.yuktravel.com/images/upload/partners/images/main-mainimage-thekasih2.jpg",
            "harga": "IDR 5.720.000",
            "location": "Bali - Indonesia"
        },
        {
            "name": "Jeeva Santai Villas 3D/2N Honeymoon Package",
            "gambar": "https://images.yuktravel.com/images/upload/partners/images/jeeva-santai-480x320.jpg",
            "harga": "IDR 6.875.000",
            "location": "Lombok - Indonesia"
        },
        {
            "name": "4D/3N Grand Favourite Belitung Bangka Tour",
            "gambar": "https://images.yuktravel.com/images/upload/tours/images/4D3N-Favourite-Belitung-Tour.jpg",
            "harga": "IDR 3.105.000",
            "location": "Bangka Belitung - Indonesia",
        },
        {
            "name": "4D/3N Favourite Wakatobi Tropical Treasure Package",
            "gambar": "https://images.yuktravel.com/images/upload/tours/images/pulauhogamainimg1.jpg",
            "harga": "IDR 4.851.000",
            "location": "Wakatobi - Indonesia",
        },
    ]
}

function addContent() {
    content = $('<figure><img class="thumbnail" src="' + data.destination[i].gambar + '"><h5 class="pt-2">' + data.destination[i].name + '</h5><p>' + data.destination[i].text + '</p><a href="#"><p class="btn btn-discover">Read More</p></a></figure>');
    temp = $('<div class="col-md-2 shadow p-2 bg-white rounded m-1">').append(content);
    $('#row').append(temp);
}

for (i = 0; i < data.destination.length; i++) {
    addContent();
}

function addTour() {
    content = $('<img class="thumbnail" src="' + travel.travel[i].gambar + '"><h5 class="pt-2">' + travel.travel[i].name + '</h5><p>' + travel.travel[i].harga + '</p><p style="font-size:10px">'+travel.travel[i].location+'</p><button id="btn_order" class="btn btn-discover float-right" data-toggle="modal" data-img='+travel.travel[i].gambar+ ' data-target="#order">Order Tour</button>');
    temp = $('<div class="col-md-2 shadow p-2 bg-white rounded m-1">').append(content);
    $('#tour').append(temp);
}

for (i = 0; i < travel.travel.length; i++) {
    addTour();
}


$("#btn_order").click(function(){
    var imgsrc = $(this).data('img');
    $('#modal-image').attr('src',imgsrc);
})
   


