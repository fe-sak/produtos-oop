export class AbstractClassError extends Error {
  constructor() {
    super(); // (1)
    this.name = 'AbstractClassError'; // (2)
    this.message = "Abstract classes can't be instantiated";
  }
}

export class Item {
  category: string;
  description: string;
  price: number;

  constructor(category: string, description: string, price: number) {
    if (this.constructor === Item) {
      throw new AbstractClassError();
    }

    this.category = category;
    this.description = description;
    this.price = price;
  }
}

export class TaxItem extends Item {
  constructor(category: string, description: string, price: number) {
    super(category, description, price);

    if (this.constructor === TaxItem) {
      throw new AbstractClassError();
    }
  }
  calculateTax = (tax: number) => this.price * tax;

  getTax = () => 0;
}

export class Beer extends TaxItem {
  getTax = () => 0.2;
}

export class Cigar extends TaxItem {
  getTax = () => 0.25;
}

export class Eletronics extends TaxItem {
  getTax = () => 0.3;
}

export class Water extends Item {}
