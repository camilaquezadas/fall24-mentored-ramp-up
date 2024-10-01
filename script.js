var sweet = 0;
var money = 0;
var insta = 0;

function updateValues(swee, inst, mon) {
    sweet += swee;
    money += mon;
    insta += inst;
    console.log(sweet, insta, money);
}

function transition_question(curr_q, next_q) {
    document.getElementById(curr_q).style.display = "none"; 
    document.getElementById(next_q).style.display = "block";


    document.getElementById("food-rec-text").style.display = "none";
    document.getElementById("test-button").style.display = "none";
}
const typedContent = document.querySelector('.typed-content');

setTimeout(function() {
    typedContent.style.borderRight = 'none'; 
}, 5000);

function get_description() {
    
    let descriptions = document.getElementsByClassName("description_of_results");
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }

    document.getElementById("result").style.display = "block";

    let restaurantName = document.getElementById("restaurant_name"); 
    let restaurantImage = document.getElementById("restaurant_image"); 
    
    if (sweet === 100 && insta === 100 && money === -100) {
        restaurantName.textContent = "Con Azúcar"; 
        restaurantImage.src = "https://s3-media0.fl.yelpcdn.com/bphoto/yZmKs4O838ug72lPXeDmBg/348s.jpg"; 
        restaurantImage.style.display = "block"; 
        document.getElementById("con-azucar").style.display = "block";
    } else if (sweet === 100 && insta === 100 && money === 100) {
        restaurantName.textContent = "Smitten Ice Cream"; 
        restaurantImage.src = "https://s.hdnux.com/photos/57/77/64/12582199/7/rawImage.jpg"; 
        restaurantImage.style.display = "block"; 
        document.getElementById("smitten-ice-cream").style.display = "block";
    } else if (sweet === 100 && insta === -100 && money === -100) {
        restaurantName.textContent = "La Original Paleteria y Niveria";
        restaurantImage.src = "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/c9bd0673-a8f7-46e6-baea-7ec0cc84b2ba.jpg"; 
        restaurantImage.style.display = "block"; 
        document.getElementById("la-original-paleteria-y-niveria").style.display = "block";
    } else if (sweet === 100 && insta === -100 && money === 100) {
        restaurantName.textContent = "Pastelaria"; 
        restaurantImage.src = "https://fastly.4sqi.net/img/general/600x600/2546416_phhH2xbchwWOmhHK1I5_9W_XbPT45SsTWg0bogU1q8g.jpg"; 
        restaurantImage.style.display = "block"; 
        document.getElementById("pastelaria").style.display = "block";
    } else if (sweet === -100 && insta === 100 && money === -100) {
        restaurantName.textContent = "K Café Patisserie & Tea House"; 
        restaurantImage.src = "https://offloadmedia.feverup.com/secretsanfrancisco.com/wp-content/uploads/2021/04/21055800/Webp.net-resizeimage-94-1-1024x683.jpg"; 
        restaurantImage.style.display = "block"; 
        document.getElementById("k-cafe-patisserie-&-tea-house").style.display = "block";
    } else if (sweet === -100 && insta === 100 && money === 100) {
        restaurantName.textContent = "El Jardin"; 
        restaurantImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm9fU2YpHBsLdkQjGIltptuNqLsu8ufGescjSYnOrr2fmTdNi7MQA1E1onQlXb5MSIEqOeMgViMU3JgDZ4Qk0eU6UQ8Z27OGXP1-MYeXXxxLKcnomQxdrPP2daBy6ShUTxKLZ5_-EU1i4/s1600/Santana-Row-San-Jose-CA-5.jpg"; 
        restaurantImage.style.display = "block"; 
        document.getElementById("el-jardin").style.display = "block";
    } else if (sweet === -100 && insta === -100 && money === -100) {
        restaurantName.textContent = "Tacos 3 Reyes"; 
        restaurantImage.src = "https://s3-media0.fl.yelpcdn.com/bphoto/yNj8hsqJ-r0MLJIjmc6O7w/348s.jpg"; 
        restaurantImage.style.display = "block"; 
        document.getElementById("tacos-3-reyes").style.display = "block";
    } else if (sweet === -100 && insta === -100 && money === 100) {
        restaurantName.textContent = "D D Delight"; 
        restaurantImage.src = "https://tb-static.uber.com/prod/image-proc/processed_images/b7866d157409a4b518ccd571a71642e7/a70f5c9df440d10213e93244e9eb7cad.jpeg"; 
        restaurantImage.style.display = "block"; 
        document.getElementById("d-d-delight").style.display = "block";
    }
}
