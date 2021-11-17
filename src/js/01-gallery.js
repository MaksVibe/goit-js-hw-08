// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from "./gallery-items.js";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
let gallery = document.querySelector(".gallery");

const liMarkup = galleryItems
  .map(({ preview, description, original }) => {
    //   Add item
    const liRef = document.createElement("li");
    liRef.classList.add("gallery__item");
    gallery.append(liRef);
    // Add link
    const linkRef = document.createElement("a");
    linkRef.classList.add("gallery__link");
    linkRef.setAttribute("href", original);
    liRef.append(linkRef);
    // Add img
    const imgRef = document.createElement("img");
    imgRef.classList.add("gallery__image");
    imgRef.setAttribute("data-source", original);
    imgRef.src = preview;
    imgRef.alt = description;
    imgRef.classList.add("img");
    linkRef.append(imgRef);
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", liMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
