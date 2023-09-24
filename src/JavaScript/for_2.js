/*//исходные данные
const repeatCount = 3;

for (let index = 1; index >= repeatCount; index++) {
    document.write('a')
}

//Массиив оценок студента

let Grades = [5, 4 ,3, 2, 5, 4];
for (let i = 0; i < length; i++){
    document.write(grades[i], '<br>')
}


//Массив названий книг в библиотеке

let books = [
    'Война и мир',
    "Мастер и Маргарита",
    "Колобок"
];

for (let i = 0; i < books.length; i++){
    document.write(books[i], '<br>')
}



let students = [
    {
        name: "Анна",
        surname: "Смирнова",
        birthYear: 1990
    },
    {
        name: "Иван",
        surname: "Петров",
        birthYear: 1985
    }
];

for (let i = 0; i < students.length; i++){
    document.write(students[i].name, '<br>')
}

let shoppingLists = [
    ['молоко', 'хлеб', 'яйца'],
    ['сок', 'мороженое'],
    ['корм для котта', 'шампунь']
];*/

// extract subarrays form main array

/*for (let i = 0; i < shoppingLists.length; i++) {
    let subarray = shoppingLists[i];
    document.write('-------------', '<br>');
    for (let j = 0; j < subarray.length; j++) {
        let product = subarray[j];
        document.write(product, '<br>');
    }
}*/
/*let list = shoppingLists[0];
let product0 = list[0];
let product1 = list[1];
let product2 = list[2];

 list = shoppingLists[1];
 product0 = list[0];
 product1 = list[1];

list = shoppingLists[2];
 product0 = list[0];
 product1 = list[1];

console.log(product)*/




const words = [
    {
        original: 'Wassup',
        transaction: 'Здарова'
    },
    {
        original: 'Bye',
        transaction: 'Пока'
    }
];

const notificationMessages = {
    result: {
        finishSuccess: 'Молодец. Good Morning',
        finishUnsuccess: 'Молодец. Но постарайся лучше'
    },
    start: {
        hello: 'Hello man. You can learn English. Good Luck'
    }
}

const settings = {
    correctAnswersMinPercent: 50
}

const result = {
    correctAnswerCount: 0
}

// --------------------

for (let i = 0; i < words.length; i++){
    let userAnswer = prompt(words[i].original); //0
    alert(userAnswer === words[i].transaction);
    if(userAnswer === words[i].transaction) {
        result.correctAnswerCount = result.correctAnswerCount +1;
    }
}

const userCorrectAnswersParcent = result.correctAnswerCount / words.length * 100;

if (userCorrectAnswersParcent > settings.correctAnswersMinPercent) {
    alert(notificationMessages.result.finishSuccess);
}else {
    alert(notificationMessages.result.finishUnsuccess)
}
