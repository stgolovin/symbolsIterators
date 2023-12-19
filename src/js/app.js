class Charackter {
  constructor(name, type, health, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

const bowman = new Charackter("Legolas", "Bowman", 50, 40, 10);
const swordsman = new Charackter("Aragorn", "Swordsman", 70, 40, 10);
const magican = new Charackter("Gandalf", "Magican", 30, 20, 30);

class Team {
  constructor() {
    this.items = new Array();
  }

  addItem(item) {
    this.items.push(item);
  }

  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index < this.items.length) {
          return { value: this.items[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const team = new Team;
team.addItem(bowman)
team.addItem(swordsman)
team.addItem(magican)

for (const item of team) {
    console.log(item);
}
