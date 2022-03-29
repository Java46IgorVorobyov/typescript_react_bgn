// // let str: string;
// // str = "10";
// //
// // function fun(op1: number, op2: number): number {
// //     return op1 * op2;
// // }
// //
// // let a = fun(2, 2);
// // a = 10;
// // let b = 10;
// // let d = b - +"10";
// // if(str) {
// //     console.log(str);
// // }
// // function fun1(s: string): boolean {
// //     return !!s;
// // }
// // let vf: (n1: number, n2: number) => string;
// // function fun4(op1: number, op2: number): string {
// //     return op1 + op2 + "";
// // }
// // vf = fun4;
// // console.log(vf(2, 2));
// //
//
// function sum(arr: number[]): number {
//     return arr.reduce((res, cur) => res + cur);
// }
// // let arr: Array <number> = [1, 2, 3, 10];
// // arr.push(12);
// // console.log(sum(arr));
//
// let set = new Set<number>([1, 1, 1, 2, 2, 3, 3]); //убирает повторябщиеся значения
// //console.log(set);
// //set.forEach(el => console.log(el));
// set.add(10);
// const arr1 = Array.from(set);
// console.log(set.has(10)); //поиск числа в массиве
// console.log(sum(arr1));

////////////////////////

// const mapMonths = new Map<number, string>([
//     [1, 'January'], [2, 'February'], [3, 'March']
// ]);
// mapMonths.set(4, 'April');//добовляет новую пару либо заменяет существуещую
// mapMonths.set(1, 'Jan');
// // console.log(mapMonths);
// // console.log(mapMonths.get(5)); // существует или не существует
// console.log(mapMonths.has(5));
// const arrEntries = Array.from(mapMonths); //array of entries
// console.log(arrEntries);
// const arrKeys = Array.from(mapMonths.keys()); //array of keys
// arrEntries.push([6, 'hhh']);
// arrKeys.push(10);
// console.log(arrKeys);
// const arValues = Array.from(mapMonths.values());
// console.log(arValues);
// arValues.push('10');
//
// type Person = {
//     id: number,
//     name: string,
//     age?: number, //optional
//     city?: string,
// }
// console.log(arValues);
//
// function createPerson(id: number, name: string): Person {
//     return {id, name};
// }
// console.log(createPerson(123, 'Vasya'));
// let person: Person = { id: 100, name: 'Moshe', age: 20, city: 'Rishon' };
// let persons: Person[] = [];
// persons.push(person);
//
// function strLength(str: string): number {
//     return str.length;
// }
// console.log(strLength(person.city));

//*********** HW 32/
function intersection(set1: Set<number>, set2: Set<number>): number[] {
    //TODO write function return array of common numbers between two sets, that is the numbers existing in both sets
    return [];
}

function subtract(set1: Set<number>, set2: Set<number>): number[] {
    //TODO write function return array of numbers from set1 that don't exist in the set2
    return [];
}

type Occurrency = {
    str: string,
    count: number,
}

function getSortedOccurrences(array: string[]): Occurrency[] {
    //TODO write function returning array of occurrences
    //each occurrency contains a string from the given array and how many times it occures in the array
    //a result array should be sorted in the descending order of the occurrences and ascending order of the string
    //example: the given array is ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']
    //result: [{ str: 'lmn', count: 3 }, { str: 'cd', count: 2 }, { str: 'a', count: 1 }, { str: 'ab', count: 1 }, { str: 'ab', count: 1 }]
    //implementation notes: to use Map<string, number>
    return [];
}














