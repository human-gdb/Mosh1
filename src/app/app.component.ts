import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mosh1';
  starColor = 'white';
  post = {
    title: "Title",
    isFavorite: true
  }

  toggleFavorite(event: MouseEvent){
    this.post.isFavorite = this.post.isFavorite ? false : true;
    this.starColor = this.starColor === 'white' ?  'accent' : 'white';
  }
}
