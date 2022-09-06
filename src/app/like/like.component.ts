import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  template: 
  ` <ng-container >
      <button mat-icon-button
      [style.color]="isLiked ? 'red' : 'white'"
      (click)="toggleLike($event)"
      > <mat-icon>favorite</mat-icon>
      </button>
      <h4
      style="font-size: 15px; color:white; display: inline; position: relative; top: .1em;" 
      >{{likeCount}}</h4>
    </ng-container>

  `
})
export class LikeComponent{


  @Output() likeCount = 0;
  @Output() isLiked = false;
  @Output() change = new EventEmitter();

  toggleLike($event : Event){
    this.change.emit($event);
    this.isLiked = !this.isLiked;
    this.isLiked ? this.likeCount++ : this.likeCount--;
  }
}
