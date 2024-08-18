interface Item {
  name: string;
  price: number;
  quantity: number;
}

class Inventory<T extends Item> {
  private items: Item[] = [];
  add(newItem: Item): void {
    if (!this.hasItem(newItem.name)) {
      this.items.push(newItem);
    }
  }
  remove(itemName: string): boolean {
    if (this.hasItem(itemName)) {
      const index = this.items.findIndex((item) => item.name === itemName);
      this.items.splice(index, 1);
      return true;
    } else {
      console.log("item not exist");
      return false;
    }
  }
  listItems(): Item[] {
    return this.items;
  }

  private hasItem(itemName: string) {
    return this.items.map((item: Item) => item.name).indexOf(itemName) >= 0;
  }
}

// test case
const inventory = new Inventory()
const item1 = {
    name: 'item1',
    price: 2,
    quantity: 2,
}
const item2 = {
    name: 'item2',
    price: 20,
    quantity: 20,
}

inventory.add(item1)
inventory.add(item2)

console.log(inventory.listItems());

