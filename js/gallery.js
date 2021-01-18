
//Activates the image gallery
//The main task is to attach an event listener to each image in the gallery
//and respond appropriately on click

function activateGallery() {
    let currentClass = "current";
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-photo img");
    let description = document.querySelector("#gallery-info p");
    let title = document.querySelector("#gallery-info h3");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            //Set clicked image as main image
            let newImageSrc = thumbnail.dataset.largeVersion;
            let newDescription = thumbnail.dataset.description;
            let newTitle = thumbnail.dataset.title;
            mainImage.setAttribute("src", newImageSrc);
            description.innerHTML = newDescription;
            title.innerHTML = newTitle;

            //Change which image is current
            document.querySelector("."+currentClass).classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);
        });
    });
}