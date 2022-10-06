import { Notify } from 'notiflix/build/notiflix-notify-aio';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import { renderCardImage } from "./js/galleryCartList";
import {NewsApiService} from'./js/NewsApiService'
import {reft} from "./js/reft"

const textInput = new NewsApiService();


 function onListSumbmit(e) {
    e.preventDefault()
 
    const target = e.target.elements.searchQuery.value.trim().toLowerCase();
  
    reft.gallery.innerHTML = "";
    reft.loadMore.classList.add('is-hidden')
    textInput.resetPage()
         if(!target) return;

         textInput.searchQery = target;

         textInput.optionClass().then(({data})=>{

          const {hits, total,totalHits} = data

            if(hits.length > 0){
               Notify.success(`Hooray! We Found ${totalHits} imges`)
        
               textInput.calculateTotalPage(total);

               const isShow = textInput.hasMorePhotos();

               if (isShow) {
                 reft.loadMore.classList.remove('is-hidden')
               } 
              const map =  renderCardImage(hits)
               simpleLightbox(map)
               // lightbox.refresh()
               scroll()
                } 

          if(hits.length === 0){
      
            Notify.failure("Sorry, there are no images matching your search query. Please try again.")   
            return
          }
      
         })
}



function onClickForm() {
   textInput.increnebtPage()
console.log(textInput);
const isShow = textInput.hasMorePhotos();

if (!isShow) {
  reft.loadMore.classList.add('is-hidden')
}

textInput.optionClass().then(({data})=>{

   const {hits, total, totalHits} = data
Notify.info(`We ${totalHits}ve reached the end of search results.`)
   renderCardImage(hits)
  })


}
reft.loadMore.addEventListener("click",onClickForm)
reft.searchForm.addEventListener("submit", onListSumbmit)

function simpleLightbox() {
   let lightbox = new SimpleLightbox('.gallery a', {
     captions: false,
     captionDelay: 250,
     enableKeyboard: true,
     doubleTapZoom: 5,
   });
   lightbox.refresh();
 }



function scroll() {
   const { height: cardHeight } = document
     .querySelector('.gallery')
     .firstElementChild.getBoundingClientRect();
 
   window.scrollBy({
     top: cardHeight * 2,
     behavior: 'smooth',
   });
 }




  
