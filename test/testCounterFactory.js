let res=require('../counterFactory.js').f1;
console.log('Incremented value is',res().increment());
console.log('Decremented value is',res().decrement());