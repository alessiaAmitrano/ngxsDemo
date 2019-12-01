export class AddListItem {
  static readonly type = '[List] Add List Item';
  constructor(public readonly payload: string) {}
}
export class DeleteListItem {
  static readonly type = '[List] Delete List Item';
  constructor(public readonly payload: string) {}
}
