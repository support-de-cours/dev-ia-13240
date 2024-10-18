// Fontion nomée

function doSomething () 
{
    console.log("I do something !");
    let a = 10;
    let b = 5;

    console.log( a+b );   
}

// doSomething();



// Fonction Anonyme
const doAnotherThing = function() {
    console.log("I do another thing");
    
};

// doAnotherThing();


this.property;

(function(){
    
    this.property;
    console.log("I am immediate function callback");
    
})();



(() => {
    
    this.property;
    console.log("I am immediate arrow function callback");
    
})();


(arg => {
    
    console.log("I am immediate arrow function callback");
    
})();
((arg) => {
    
    console.log("I am immediate arrow function callback");
    
})();
((arg1, arg2) => {
    
    // console.log("I am immediate arrow function callback");
    console.log(arg1);
    
})("val1", "val2");