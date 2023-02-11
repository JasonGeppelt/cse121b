const car = {type: 'Fiat', model: '500', color: 'white'};
console.log(car.type);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
}
console.log(person);

const aCourse = {
  code: 'CSE121b',
  name: 'JavaScript Language',
  logo: '',
  students: ['joe', 'sally'],
  showSection: function(){
    console.log('showSection ran');
  }
} 

aCourse.showSection(); 