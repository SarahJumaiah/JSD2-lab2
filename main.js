//1
//اكتب دالة تقوم بترتيب هذه المصفوفة تصاعدياً .
let numbers = [1,5,3,8,2,4,6,7,9,10];
let rev = numbers.reverse()
console.log(rev)

//قم بإنشاء مصفوفة جديدة تحتوي على مربعات العناصر في المصفوفة الأصلية.
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * numbers [i]
}
console.log(numbers);
//قم بإرجاع أول عنصر في المصفوفة يكون أكبر من 25.
let result = numbers.find(item =>{
    return item > 25
})
console.log(result);

//تحقق مما إذا كانت جميع العناصر في المصفوفة أكبر من 5
let mt5 = numbers.every(num=> num > 5);
console.log(mt5);

//تحقق مما إذا كانت المصفوفة تحتوي على الرقم 3.
console.log(numbers.includes(3));

//اكتب دالة  لإرجاع مصفوفة تحتوي فقط على الأرقام الزوجية.
let even = numbers.filter(num => {
    return num % 2 === 0
})
console.log(even);

//قم بإزالة العنصرين الأوسطين من المصفوف
console.log(numbers.splice(2,2))

//قم بحساب حاصل ضرب جميع الأرقام في المصفوفة
console.log(numbers.reduce((acc,num) => acc * num));

//إيجاد موضع العنصر الأول الذي يكون أكبر من 5
let position = numbers.findIndex(item =>{
    return item > 5
})
console.log(position);

//قم بإزالة آخر عنصر من المصفوفة وطباعته
console.log(numbers.pop());

//قم بإضافة القيمة 100 إلى نهاية المصفوفة.
console.log(numbers.push(100));

//2
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(names.filter(name=> name.toLowerCase().includes('a')))

//قم بتحويل المصفوفة إلى سلسلة نصية (string) مفصولة بـ -.
console.log(names.join(" "));

//3
//قم بالتحقق  مما إذا كانت المصفوفة تحتوي على اسم يبدأ  بحرف 'b'
let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];

console.log(names.filter(name=> name.toLowerCase().startsWith('a')))

//قم بإرجاع مصفوفة جديدة تحتوي على العناصر من العنصر الثاني إلى الرابع

console.log(fruits.slice(1,5))

//قم بإضافة 'yellow' إلى بداية المصفوفة
console.log(fruits.shift("yellow"))

//4

let words = ['hello', 'world', 'javascript', 'array', 'function'];

//قم بإنشاء مصفوفة جديدة تحتوي على طول كل كلمة في المصفوفة الأصلية
let length = words.map(name =>
    name.length)

console.log(length)

//ابحث عن العنصر javascript في المصفوفة. إذا وُجد، اطبعه، وإذا لم يكن موجودًا اطبع رسالة بأنه غير موجود

if(words.includes("javascript")){
    console.log("javascript")
}
else{
    console.log("no javascript")
}

//function lab

function plus(num1,num2){
    return num1 + num2
}
console.log("2+2=", plus(2,2))

function minus(num1,num2){
    return num1 - num2
}
console.log("2-2=", minus(2,2))


function multi(num1,num2){
    return num1 * num2
}
console.log("2*2=", multi(2,2))

function devide(num1,num2){
    return num1 / num2
}
console.log("2/2=", devide(2,2))

function mod(num1,num2){
    return num1 % num2
}
console.log("2%2=", mod(2,2))
