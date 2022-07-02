export default class Item {
  category: string;
  description: string;
  price: number;
  tax: number;

  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
    this.tax = this.calculateTax(category);
  }

  calculateTax(category: string) {
    if (category === 'Beer') return 0.2;
    if (category === 'Cigar') return 0.25;
    if (category === 'Eletronics') return 0.3;
    if (category === 'Water') return 0;
  }
}
