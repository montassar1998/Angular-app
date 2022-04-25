import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() myColor: string = '...';
  @Output() msgToParent = new EventEmitter<string>();
  constructor() {}
  @Input() received: string = "";
  ngOnInit(): void {}

  sendMsg() {
    this.msgToParent.emit('Message envoyé par le child au parent ');
  }
}
