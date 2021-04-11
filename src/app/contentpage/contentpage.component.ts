import { Component, OnInit } from '@angular/core';
import * as Clarifai from 'clarifai';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentpageComponent implements OnInit {

  url : any;
  image : any;
  display:boolean=false;
  boxes:any;
  values:any;
  count:any=0;
  app = new Clarifai.App({
    apiKey: "094543c3f5f943a2bac07b7b06a3370c"
    // 'Your Api Key goes here...'
   });

  constructor(private dataService: DataService) {    }

  ngOnInit() {
    
  }  

  assignUrl(value){
    this.values=[];
    this.display=true;
    this.url=value;
    this.image=this.url;
    // console.log(this.url);
  }

  onButtonClick(){
    if(this.url!==""&&this.url!==undefined){
      this.display=true;
      this.image=this.url;
      var image = this.image;
      this.app.models.predict(Clarifai.FACE_DETECT_MODEL,image)
      .then(response => this.calculateFaceLocation(response))
      .catch(err => console.log(err));
    }
    else{
      this.display=false;
    }
  }

  calculateFaceLocation= (data) =>{
    // console.log("data",data);
    const clarifaiFaces = data.outputs[0].data.regions.map(region=> region.region_info.bounding_box);
    // console.log("clarifaiFace",clarifaiFaces);
    this.boxes = clarifaiFaces.map(clarifaiFace=>{  
      return{
        leftCol: clarifaiFace.left_col * 100,
        topRow: clarifaiFace.top_row * 100,
        rightCol: 100 - (clarifaiFace.right_col * 100),
        bottomRow: 100 - (clarifaiFace.bottom_row * 100)
      }
    });
    // console.log("boxes",this.boxes);
    this.displayFaceBox(this.boxes);
  }

  displayFaceBox = async (displayBoxes) =>{
    this.values= displayBoxes.map(box=>`${box.topRow}% ${box.rightCol}% ${box.bottomRow}% ${box.leftCol}%`);
    // console.log("insetValues",this.values);

    this.count= await this.dataService.recognizedFaces(displayBoxes).subscribe((data: any[])=>{
      this.count = data;
    })  
  } 


}
 