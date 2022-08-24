import { Component, OnInit } from '@angular/core';
import { Photo } from '../general/general.component';
import { PhotosService } from '../service/photos.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

   photo : Photo = {
    albumId: 0,
    id: 0,
    title: "",
    url: "",
    thumbnailUrl: ""
  };

  constructor(private photoService : PhotosService) { 
    
    
  }

  ngOnInit(): void {
  }



}
