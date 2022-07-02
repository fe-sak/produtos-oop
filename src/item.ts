export class Item {
  category: string;
  description: string;
  price: number;

  constructor(category: string, description: string, price: number) {
    if (this.constructor === Item) {
      throw new Error("Abstract classes can't be instantiated.");
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
      throw new Error("Abstract classes can't be instantiated.");
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
