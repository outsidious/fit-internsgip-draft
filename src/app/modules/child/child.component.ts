import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {

  constructor() {
    console.log('Child constructor');
  }

  ngOnInit() {
    console.log('Child OnInit');
  }

  ngAfterViewInit(): void {
    console.log('ChildComponent ngAfterViewInit');
  }

  @Input() fromParent: string = 'default';

  @Output() parentEvent = new EventEmitter();

  public onClick() {
    this.parentEvent.emit('value from child');
  }
}
