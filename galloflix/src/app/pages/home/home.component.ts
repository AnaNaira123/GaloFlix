import { Component } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: MovieApiService) {};

  bannerResults: any = [];

  ngOnIniot(): void {
    this.bannerData();
  }

  //Banner
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      //console.log(result.results);
      this.bannerResults = result.results;
      
    })
  }


}
