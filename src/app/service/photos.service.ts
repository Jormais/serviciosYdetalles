import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photo = {};

  private url : string = "https://jsonplaceholder.typicode.com/photos";

  constructor() { }

  getAll(){
    return axios.get(this.url).then(resp =>  resp.data);
  }

  getOne(param :string){
    return axios.get(this.url + "/" + param).then(resp => resp.data);
  }

}
