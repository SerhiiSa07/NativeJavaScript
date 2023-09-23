// замыкание, лексическое окружение, рекурсии
// lexical environment

// {a: undefined}
/*let a

a = 5 //{a: 5}

foo();

function foo() {
    console.log('hi')
}*/
bar();
function bar() {} // declaration function

const foo = function() {}// expression function
foo();
const baz = () => {} // expression function

baz();


const car = 'bmw';

startEngine();

function startEngine () {
    console.log(`Start ${car}`)
}

const car = 'bmw';

function startEngine(){
    //[[envrinment]] => globalLE
    //startEngineLE {}
    // const car = 'audi';
    return () => {
        console.log(`Start ${car}`);
    }
}

const foo = startEngine();

foo();
