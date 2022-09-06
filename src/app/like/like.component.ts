import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})

export class LikeComponent{


  @Input() likeCount : number = 0;
  @Input() isLiked : boolean = false;
  @Output() change = new EventEmitter();


  toggleLike($event : Event){
    this.change.emit($event);
    this.isLiked = !this.isLiked;
    this.isLiked ? this.likeCount++ : this.likeCount--;
  }
}
