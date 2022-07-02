import { AbstractClassError, Beer, Cigar, Eletronics, Item, TaxItem, Water } from './item';
import Order from './order';

test('Deve criar um pedido e calcular o total', function () {
  const order = new Order();
  order.addItem(new Beer('Beer', 'Brahma', 6));
  order.addItem(new Cigar('Cigar', 'Malboro', 10));
  order.addItem(new Eletronics('Eletronics', 'IPhone 13', 13000));
  order.addItem(new Water('Water', 'Crystal', 1));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test('Deve criar um pedido e calcular os impostos', function () {
  const order = new Order();
  order.addItem(new Beer('Beer', 'Brahma', 6));
  order.addItem(new Cigar('Cigar', 'Malboro', 10));
  order.addItem(new Eletronics('Eletronics', 'IPhone 13', 13000));
  order.addItem(new Water('Water', 'Crystal', 1));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});

test('Não deve permitir criar instâncias das classes abstratas "Item" e "TaxItem"', function () {
  expect(() => new Item('Beer', 'Brahma', 6)).toThrowError(AbstractClassError);
  expect(() => new TaxItem('Beer', 'Brahma', 6)).toThrowError(AbstractClassError);
});
