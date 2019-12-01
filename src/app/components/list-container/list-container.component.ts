import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { ListState } from 'src/app/store/list.state';
import { Observable } from 'rxjs';
import { DeleteListItem } from 'src/app/store/list.actions';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  @Select(ListState.SelectAllItems) listItems: Observable<string[]>;

  constructor(private store: Store) {}
  ngOnInit() {}

  deleteItem(evt: string) {
    console.log(evt);
    this.store.dispatch(new DeleteListItem(evt));
  }
}
