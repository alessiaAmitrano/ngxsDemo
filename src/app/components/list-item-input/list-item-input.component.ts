import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { AddListItem } from 'src/app/store/list.actions';

@Component({
  selector: 'app-list-item-input',
  templateUrl: './list-item-input.component.html',
  styleUrls: ['./list-item-input.component.scss']
})
export class ListItemInputComponent implements OnInit {
  form: any;
  showItemAdded = false;

  constructor(private store: Store, private router: Router) {
    this.form = new FormGroup({
      listItem: new FormControl('')
    });
  }

  ngOnInit() {}

  submitItem() {
    this.showItemAdded = true;
    const item = this.form.get('listItem').value;
    this.store.dispatch(new AddListItem(item));
    this.form.reset();
    setTimeout(() => {
      this.showItemAdded = false;
    }, 2000);
  }

  viewList() {
    this.router.navigate(['list']);
  }
}
