// 1. APIs in JS

// console.log("hello world");
// console.warn("this is a warning");
// console.error("this is an error");

// 2. ways to print in JS

// alert("Hello world"); //this will display an alert message on the top of our browser
// console.log("hello world");

// 3. Variables in JS
// var num1 = 3;
// var num2 = 4;
// console.log(num1 + num2);


// // 4. Datatypes in JS
// // i. numbers
// var num1 = 45;
// var num2 = 34.78;

// // ii. strings
// var str1 = "This is a string";
// var str2 = 'This is also a string';

// // iii. objects
// var marks ={Sushant : 23 , 
//             Sumit : 24 , 
//             Anshit : 30};
// console.log(marks);

// iv. booleans
// var a = true;
// var b = false;
// console.log(a,b); // prints both true and false

// v. undefined (which vlaue is not assigned to it)
// var value = undefined;
// var value1; //both of them is a method to store undefined value
// console.log(value);
// console.log(value1); 

// vi. null
// var n = null;
// console.log(n);

/*
    Primitive Datatype: number, string, boolean,  undefined, null
    Reference Datatype: arrays, objects
*/

// var arr = [1,"Sushant",6.58,'Hi',9,2];
// console.log(arr);

// var num1 = 100;
// var num2 = 10;
// console.log("The value of the sum of ",num1," and ",num2," is ", num1+num2);

//similarly we have Arithmetic Operators(+,-,*,/), Comparision Operator(a==b), Logical Operator(true && true gives true)


//Functions in JS
// function avg(a,b){
//     return (a+b)/2;
// }

// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1, c2); 
// console.log(avg(c1,c2));

// Conditionals (Same as in Java)
// var age = 17;
// if(age > 18){
//     console.log("You can vote");
// }
// else if(age < 10){
//     console.log("Lollipop khao bache");
// }
// else if(age > 10 && age < 18){
//     console.log("Padhai likhai karo IAS YAS bano")
// }

// LOOPS in JS
// var arr = [1,3,5,6,9,2,7];
// for(var i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

//forEach loop is one of the unique look it and mind
// arr.forEach(function(element){
//     console.log(element)
// })

// we generally use let instead of var as let denotes the scope of the variable is within the braces only or a particular function
// let j = 10 ;
// console.log(j);

// const a = 10;
// a = a + 1; // will through error that is can't be done
// var arr = [1,3,5,6,9,2,7];
// for(let i = 0 ; i < arr.length ; i++){
//     if(i == 2){
//         // continue; // will skip 5 ie arr[2] and performs the remaining operations
//         break; //will come out of the loop if i = 2 is encountered
//     }
//     console.log(arr[i]);

// }

//ARRAY METHODS 
// let myArr = [1, 43, 2 , 5.97 , 81,9];
// console.log(myArr.length);
// myArr.pop(); //deletes the last element from the array
// myArr.push("Hello", "Second") //push the given parameter to the end of the list as many as 
// myArr.shift(); // removes elements from the starting of the list
// myArr.unshift("Hello"); // adds element to the start of the list
// console.log(myArr.toString()); //Converts the array into an string 
// console.log(myArr.sort()); //sorts the array in lexological order ie coming from 1 first then 2 then 3 and so on


//STRING METHOD IN JS
// let myStr = "Sushant is a good boy good very good";
// console.log(myStr.length);
// console.log(myStr.indexOf("good"))
// console.log(myStr.lastIndexOf("good")) // gives the index of the last occurence of the given string 
// console.log(myStr.slice(2,9)) // prints from index 2 to (9-1)
// console.log(myStr.replace("good","bad")) //replace only the first occurence 


// // DATE METHOD IN JS
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getHours());
// console.log(myDate.getFullYear());