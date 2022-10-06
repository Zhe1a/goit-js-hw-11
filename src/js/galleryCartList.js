import {reft} from "./reft";
// import "../sass/_example.scss"
 function galleryCartList(arr) {
    const{views,likes,comments,downloads,largeImageURL,webformatURL,tags} = arr
    return `<div class="photo-card">
    <a href='${largeImageURL}'>
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b>
        ${likes}
      </p>
      <p class="info-item">
        <b>Views</b>
        ${views}
      </p>
      <p class="info-item">
        <b>Comments</b>
        ${comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>
        ${downloads}
      </p>
    </div>
  </div>`
}

export function renderCardImage(arr) {

  const markup = arr.map(item => galleryCartList(item)).join('');
reft.gallery.insertAdjacentHTML('beforeend',markup)
}