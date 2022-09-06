import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'mosh1';
  post = {
    title: "Title",
    isFavorite: true
  };
  tweet = {
    count: 10,
    liked: false,
    title: 'Hello from like'
  }
  constructor(private elementRef: ElementRef){}
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor = '#121212';
  }

  onFavoriteChange(event: Event){
    console.log('Favorite component changed.');
    console.log(event);
  }
}
