const numObj={
  two:2,
  three:3,
  four:4,
  five:5,
  six:6,
  seven:7,
  eight:8,
  nine:9,
  ten:10,
  thirteen:13
}

const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = ['Ace', numObj.two, numObj.three, numObj.four, numObj.five, numObj.six,
numObj.seven, numObj.eight, numObj.nine, numObj.ten, 'Jack', 'Queen', 'King'];
const ranks={1: 'Ace', 2:'2', 3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10', 11: 'Jack', 12:'Queen', 13: 'King'}


class Deck{
  constructor(){
    this.cards=[];
    this.count=[];
    Object.defineProperty(this, 'count',{
      writable: false,
      configurable:false
    })

    for (let suit of suits) {
      for (let value of values) {
        this.cards.push(`${value} of ${suit}`);
      }
    }
  }

  shuffle(){
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  drawn(n){
    const lastCards=this.cards.splice(this.cards.length-1-(n-1),n);
    return lastCards;
  }
}


class Card{
  constructor(){
    this.suit = suits[Math.round(Math.random()*(suits.length-1))];
    this.rank = Math.round(Math.random() * (numObj.thirteen - 1) + 1);
    this.isFaceCard = this.rank >numObj.ten || this.rank === 1 ? 'face card': 'not a face card';


      Object.defineProperty(this,'rank',{
        writable: false,
        configurable: false
      })
    }

    toString(){
      for(let el of suits){
          for(let key in ranks){
          if(this.rank===+key){
            return `${ranks[key]} of ${el}`
          }
          }
      }
    }

      compare(cardOne, cardTwo){
        if (cardOne.rank > cardTwo.rank) {
 return 'Card 1 has higher rank';
}
        if(cardOne.rank < cardTwo.rank) {
 return 'Card 2 has higher rank';
} else {
 return 'Ranks are the same';
}
      }

}


class Player{
  constructor(name){
    this.name=name;
    this.wins=0;
    Object.defineProperty(this,'wins',{
      configurable:false
    });
    this.deck=new Deck().cards;
  }

  play(playerOne, playerTwo){

    while(playerOne.deck.length>0 && playerTwo.deck.length > 0){
    const card=new Card();
    const card1=new Card();

    if(Card.prototype.compare(card, card1)==='Card 1 has higher rank'){
      playerOne.wins+=1;
    } if (Card.prototype.compare(card, card1)==='Card 2 has higher rank'){
      playerTwo.wins+=1;
    } else {
      playerOne.wins;
      playerTwo.wins;
    }

    const index=playerOne.deck.indexOf(card.toString());
    const index1=playerTwo.deck.indexOf(card1.toString());
    playerOne.deck.splice(index,1);
    playerTwo.deck.splice(index1,1);
    }


    if (playerOne.wins > playerTwo.wins) {
 return `${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`;
}
    if(playerOne.wins < playerTwo.wins) {
 return `${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`;
} else {
 return 'The scores are equal';
}
  }

}
const player1=new Player('Tim');
const player2=new Player('George');
// ======================================task#2==========================================

class Employee{

  constructor(id,FirstName,lastName,birthday,salary,position,department,fullName){
    this.id=id;
    this.FirstName=FirstName;
    this.lastName=lastName;
    this.birthday=birthday;
    this.salary=salary;
    this.position=position;
    this.department=department;
    this.age= ageCalc(this.birthday),
    this.fullName=fullName;

    Object.defineProperty(this, 'age', {
      writable: false,
      configurable: false
    });
    Object.defineProperty(this, 'fullName', {
      writable: false,
      configurable: false
    });
    Employee.employees.push(this);

  }

  quit(item){
    const index=this.employees.indexOf(item);
    this.employees.splice(index,1);
    return this.employees;
  }

  retire(item){
    const index=this.employees.indexOf(item);
    this.employees.splice(index,1);
    console.log('It was such a pleasure to work with you!');
  }

  getFired(item){
    const index=this.employees.indexOf(item);
    this.employees.splice(index,1);
    console.log('It was such a pleasure to work with you!');
  }

  changeDepartment(newDepartment){
    this.department=newDepartment;
  }

  changePosition(newPosition){
    this.position=newPosition;
  }

  changeSalary(newSalary){
    this.salary=newSalary;
  }

  getPromoted(benefits){
    if(compareProperties(benefits)) {
 console.log('Yoohooo!');
}
  }

  getDemoted(punishment){
    if(compareProperties(punishment)) {
 console.log('Damn!');
}
  }

}

Object.defineProperty(Employee, 'employees', {
  value: [],
  writable: false,
  configurable: false
});


function compareProperties(obj){
  const keys=Object.keys(obj);

  if(keys.includes('salary') && keys.includes('position') && keys.includes('department')){
    return true;
  }
}

class Manager extends Employee{
  constructor(id,FirstName,lastName,birthday,salary,position,department,age,fullName){
    super(id,FirstName,lastName,birthday,salary,'manager',department,age,fullName);
    this.managedEmployees = selectEmployees(Manager.prototype);
    Object.defineProperty(this,'managedEmployees',{
      writable: false,
      configurable: false
    })
  }
}

class BlueCollarWorker extends Employee{
  constructor(id,FirstName,lastName,birthday,salary,position,department){
    super(id,FirstName,lastName,birthday,salary,position,department,FirstName + ' ' + lastName);
  }
}

class HRManager extends Manager{
  constructor(id,FirstName,lastName,birthday,salary, position,department,age,fullName,managedEmployees){
    super(id,FirstName,lastName,birthday,salary,'manager','hr',age,fullName,managedEmployees)
  }
}

class SalesManager extends Manager{
  constructor(id,FirstName,lastName,birthday,salary,position, department,age,fullName,managedEmployees){
    super(id,FirstName,lastName,birthday,salary,'manager','sales',age,fullName,managedEmployees)
  }
}


function ageCalc(data){
  let seconds=3.15576e+10;
 const date = new Date();
 const date1=new Date(data);
 return Math.round((date-date1.getTime())/seconds);
}

function selectEmployees(obj){
 return obj instanceof Manager && obj['position'] !=='manager' ? console.log(true):console.log(false);

}
// ======================================task#3==========================================

function ManagerPro(obj){
  Employee.prototype.getPromoted(obj);
  Employee.prototype.getDemoted(obj);
}


