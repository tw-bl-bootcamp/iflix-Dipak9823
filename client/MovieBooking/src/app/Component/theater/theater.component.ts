import { Component, OnInit } from '@angular/core';
import { RootServiceService } from 'src/app/Service/root-service.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  constructor(private service:RootServiceService) { }
  sample:any;
  theater:any;
  theaterArray
  ngOnInit() {
  }

  getAllTheaters(){
    
    this.service.getTheater().subscribe(res =>{
        
        this.sample=res;
        this.theater = this.sample.message;

        console.log("Theaters",this.theater);
        
        for(let i=0;i<this.theater.length;i++) {
         this.theaterArray.push(this.theater[i]);
        }
        
      },
      (err)=>{
        console.log("Error in getting data",err);
      }
    )
}

}
