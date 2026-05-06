//im scared
const url = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number";

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

//function to display random art from api
function randomArt(artObject){
    console.log(artObject);
    let randomArtNum = Math.floor(Math.random() * artObject.data.length);
    console.log(newart);
    var newart = artObject[randomArtNum];

//using the varaibles to change the artist information in the randomArt div
    let randomArt = document.querySelector(".title");
    let randartistName = randomArt.querySelector(".artistName");
    let randartPeice = randomArt.querySelector(".artPeice");
    let randdate = randomArt.querySelector(".date");
    let randdescription = randomArt.querySelector(".description");

//cahnging the information in the randomart div in the dom
    
 
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
    });



});