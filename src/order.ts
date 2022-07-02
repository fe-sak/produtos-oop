import Item from './item';

export default class Order {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((acc, curr) => acc + curr.price, 0);
  }

  getTaxes() {
    return this.items.reduce((acc, curr) => acc + curr.tax * curr.price, 0);
  }
}
