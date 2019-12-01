import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listItems: string[];
  @Output() deleteItemEmt: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router) {}

  ngOnInit() {}

  deleteItem(item: string) {
    this.deleteItemEmt.emit(item);
  }

  back() {
    this.router.navigate(['']);
  }
}
