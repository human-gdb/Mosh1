import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {


  @Input() isFavorite: boolean = false;
  @Output() change = new EventEmitter();

  toggleFavorite(){
    this.isFavorite = !this.isFavorite; 
    this.change.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
