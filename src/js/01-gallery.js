import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryCreate = creatGalleryItems('galleryItems');

gallery.insertAdjacentHTML('beforeend', galleryCreate);

function creatGalleryItems() {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a href="${original}" class="gallery__link" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
