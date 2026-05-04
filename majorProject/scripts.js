//im scared

async function getData(url, options) {
    try {
        const response = await fetch(url, options);
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

document.addEventListener("DOMContentLoaded", function () {

    //toggles advanced search on
    document.querySelector("#advancedSeach").addEventListener("click", function(){
        document.body.classList.toggle("showModal");
        console.log("clicked");
    });

    //untoggles advanced search from the form
    document.querySelector(".advancedsearchexit").addEventListener("click", function(){
        document.body.classList.toggle("showModal");
        console.log("clicked");
    });
});