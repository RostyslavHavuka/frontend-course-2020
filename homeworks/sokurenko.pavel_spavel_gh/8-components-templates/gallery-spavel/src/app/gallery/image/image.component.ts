import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { IMAGES } from '../../../assets/data';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnInit {

  @Input() dataFromParent?: string;
  @Output() sendEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  public sendToParent(): void {
    this.sendEvent.emit('Test from child');
  }

  public choosePrev(): void {
    this.sendEvent.emit('prev');
  }
  public chooseNext(): void {
    this.sendEvent.emit('next');
  }

}
