import { Bst } from '../bst';

class MockObject {
  constructor(public id: number, public value: string) {}
}

const bst = new Bst();
const mock1 = new MockObject(1, 'A');
bst.insert(mock1.id, mock1);

test('Bst', () => {
  expect(bst.isContains(1)).toBe(true);
});
