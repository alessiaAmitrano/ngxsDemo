import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddListItem, DeleteListItem } from './list.actions';

export interface ListStateModel {
  list: string[];
  lastAdded: string;
}

@State<ListStateModel>({
  name: 'ListState',
  defaults: {
    list: [],
    lastAdded: null
  }
})
export class ListState {
  @Selector() static SelectAllItems(state: ListStateModel): string[] {
    return state.list;
  }

  @Action(AddListItem)
  addListItem(
    { getState, setState }: StateContext<ListStateModel>,
    { payload }: AddListItem
  ) {
    const state = getState();
    setState({
      list: [...state.list, payload],
      lastAdded: payload
    });
  }

  @Action(DeleteListItem)
  deleteListItem(
    { getState, setState }: StateContext<ListStateModel>,
    { payload }: DeleteListItem
  ) {
    const state = getState();
    console.log('st', state.list);
    const newList = this.arrayRemove(state.list, payload);
    console.log('nl', newList);
    setState({
      ...state,
      list: newList
    });
  }

  private arrayRemove(arr, value) {
    return arr.filter(ele => {
      return ele !== value;
    });
  }
}
