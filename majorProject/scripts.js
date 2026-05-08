
//im scared

//this url will determine the random api 
const url = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,image_idhttps://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,image_id&limit=20";
let random = document.querySelector('.randomart');

async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw (response.status);
        }
    } catch (error) {
        console.error(error);
    }
}


//Takes a random 
function randpiece(randomNumber){
    let randomArtNum = Math.floor(Math.random() * randomNumber.data.length);
    console.log(randomArtNum);
    return randomArtNum;
}
//function to display random art from api
function randomArt(artObject){
  let randomArtNum = randpiece(artObject);

//using the varaibles to change the artist information in the randomArt div
    let randartistName = random.querySelector('.artistName');
    let randartPeice = random.querySelector('.artPeice');
    let randdate = random.querySelector('.date');
    let randdescription = random.querySelector('.description');
    let randimg = random.querySelector('.apiimg');

//changing the information in the randomart div in the dom
    randartistName.innerHTML = artObject.data[randomArtNum].title;
    randartPeice.innerHTML = artObject.data[randomArtNum].artist_display;
    randdate.innerHTML = artObject.data[randomArtNum].date_display;
    randdescription.innerHTML = artObject.data[randomArtNum].id;
    randimg.innerHTML = "<img class='imgsize' src='https://www.artic.edu/iiif/2/"+ artObject.data[randomArtNum].image_id +"/full/843,/0/default.jpg'>";


    //big shoutout to this video for unerstanding the link and with the random art: https://www.youtube.com/watch?v=L8bCI0_u3As
}

function createcards(artObject){
   let results = artObject.data;
   let artResults = document.querySelector(".artResults");

   //this makes the things display
   results.forEach((result) =>{
    //adds the card into the main, card needs to be appended to the html 
    let card = document.createElement('div');
    card.className = 'artCard'; 

    //needs to be appended to the card
    let img = document.createElement('img');
    img.className = 'apiimg';
    img.src= `https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`;
    card.appendChild(img);

    //creates title
    let title = document.createElement('div');
    title.className = 'artPeice';
    title.innerHTML = result.title;
    card.appendChild(title);

    //creates artist
    let artist = document.createElement('div');
    artist.className = 'artistName';
    artist.innerHTML = result.artist_display;
    card.appendChild(artist);

    //creates date
    let date = document.createElement('div');
    date.className = 'date';
    date.innerHTML = result.date_display;
    card.appendChild(date);

    //creates id number
    let id = document.createElement('div');
    id.className = 'description';
    id.innerHTML = result.id;
    card.appendChild(id);
//puts everything into a the artcard div
    artResults.appendChild(card);

   });
}


//when the DOM loads and my sanity is gone
document.addEventListener("DOMContentLoaded", function () {

    //toggles advanced search on
    document.querySelector("#advancedSeach").addEventListener("click", function(){
        document.body.classList.toggle("showsearchModal");
        console.log("clicked");
    });

    //untoggles advanced search from the form
    document.querySelector(".advancedsearchexit").addEventListener("click", function(){
        document.body.classList.toggle("showsearchModal");
        console.log("clicked");
    });

        //toggles random art on
    document.querySelector("#randArt").addEventListener("click", function(){
        document.body.classList.toggle("showartModal");
        console.log("clicked");
    });

    //untoggles random art from the form
    document.querySelector(".randartexit").addEventListener("click", function(){
        document.body.classList.toggle("showartModal");
        console.log("clicked");
    });

    //toggles random art when clicking 
    //ATTEMPTing to make the api work
    getData(url).then(function (result){
        console.log(result);  //I NEED YOU TO KNOW I DID THIS MY FIRST TRY
        randomArt(result);
        createcards(result);

        //changing random art with the button 
        document.querySelector(".mainButton").addEventListener("click", function() {
            randomArt(result);
        });
    });


});

