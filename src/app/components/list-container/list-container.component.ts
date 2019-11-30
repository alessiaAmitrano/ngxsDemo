import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  form: any;
  constructor() {
    this.form = new FormGroup({
      listItem: new FormControl('')
    });
  }

  ngOnInit() {}
}
