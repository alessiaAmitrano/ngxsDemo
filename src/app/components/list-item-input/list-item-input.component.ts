import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-item-input',
  templateUrl: './list-item-input.component.html',
  styleUrls: ['./list-item-input.component.scss']
})
export class ListItemInputComponent implements OnInit {
  @Input() listItemControl: FormControl;
  @Output() submitItemEmt: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
