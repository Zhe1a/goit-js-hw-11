import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY_USER = '30366820-6d702dd9a35a2869e6c96b3e9';
// &q=yellow+flowers&image_type=photo';
// https://pixabay.com/api/30366820-6d702dd9a35a2869e6c96b3e9&q=car&image_type=photo&orientation=horizontal&safesearch=true&page

export class NewsApiService {
constructor(){
this.searchQery = "",
this.totalPages = 0,
this.perPage = 40,
this.page = 1

}
async optionClass (){
    const searchParams = new URLSearchParams({
        key : KEY_USER,
        q : this.searchQery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.perPage,
      });
const url = `${URL}/?${searchParams}`

return await axios.get(url);
}

get search(){
  return this.searchQery 
}
set search(e){
  this.searchQery = e
}
calculateTotalPage(totalPhotos){
  this.totalPages = Math.ceil(totalPhotos / this.perPage)
}

hasMorePhotos(){
  return this.page < this.totalPages
}
increnebtPage(){
  this.page += 1
}

resetPage(){
  this.page = 1
}
}

