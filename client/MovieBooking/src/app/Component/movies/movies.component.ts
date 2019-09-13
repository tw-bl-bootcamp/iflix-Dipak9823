import { Component, OnInit } from '@angular/core';
import { RootServiceService } from 'src/app/Service/root-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private service:RootServiceService,
              private router:Router) { }
  movies:any;
  sample:any;
  movieArray:any=[];
  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies(){
    
    this.service.getMovies().subscribe(res =>{
        
        this.sample=res;
        this.movies = this.sample.message;

        console.log("Movies",this.movies);
        
        for(let i=0;i<this.movies.length;i++) {
         this.movieArray.push(this.movies[i]);
        }
        
      },
      (err)=>{
        console.log("Error in getting data",err);
      }
    )
}

  goToTheater() {
    
  }
}
