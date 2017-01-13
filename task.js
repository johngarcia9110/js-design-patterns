
var obj1 = {};

obj1.title = 'My Title';
obj1.description = 'My Description';
obj1.toString = function(){
  return this.title + ' ' + this.description;
}

console.log( 'Obj1: ' + obj1.toString());


var obj2 = Object.create(Object.prototype);

obj2.title = 'My Title';
obj2.description = 'My Description';
obj2.toString = function(){
  return this.title + ' ' + this.description;
}

console.log( 'Obj2: ' + obj2.toString());

var obj3 = new Object();

obj3.title = 'My Title';
obj3.description = 'My Description';
obj3.toString = function(){
  return this.title + ' ' + this.description;
}

console.log( 'Obj3: ' + obj3.toString());

var obj4 = {
  title : 'My Title',
  description : 'My Description',
  toString : function(){
    return this.title + ' ' + this.description;
  }
}
console.log( 'Obj4: ' + obj4.toString());
