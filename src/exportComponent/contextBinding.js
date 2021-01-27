var x = 9;
var module = {
    x: 85,
    getX: function() {
        return(this.x)
    }
};

module.getX();

var retrieveX = module.getX;
var content = {
    x:55
};

var bindGetX = retrieveX.bind(context); //we select the context where we plan get a value, binding 
bindGetX();

// -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

var fullName = 'Carlos Santana';

var person = {
    other: {
        fullName: 'miguel idalgo'
    },
    fullName: 'francisco villa',
    getFullName: function(){
        return (this.fullName)
    }
};

var getFullName = person.getFullName.bind(person.other);

console.log(getFullName);