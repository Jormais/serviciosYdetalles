import { Component, Input, OnInit } from '@angular/core';
import { PhotosService } from '../service/photos.service';

export type Photo ={
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string  
}

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  photos : Photo[] = [];
    photo : Photo = {
    albumId: 0,
  id: 0,
  title: "",
  url: "",
  thumbnailUrl: ""
  };

  photoIdString = "";

  constructor(private photoService : PhotosService) {
    photoService.getAll()
    .then( cosas => this.photos = cosas);
    
  }

  ngOnInit(): void {
  }

  getOnePhoto(id : number){
    this.photoIdString = id.toString();
    this.photoService.getOne(this.photoIdString).then( cosa => {
      
    });
  }
}
