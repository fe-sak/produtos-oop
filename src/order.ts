import { Beer, Cigar, Eletronics, Water } from './item';

type products = Beer | Cigar | Eletronics | Water;

export default class Order {
  items: products[];

  constructor() {
    this.items = [];
  }

  addItem(item: products) {
    this.items.push(item);
  }

  getTotal = () => this.items.reduce((acc, curr) => acc + curr.price, 0);

  getTaxes = () =>
    this.items.reduce((acc, curr) => {
      if (!(curr instanceof Water)) {
        const tax = curr.getTax();
        return acc + curr.calculateTax(tax);
      } else return acc;
    }, 0);
}
