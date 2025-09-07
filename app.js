// ....................................Logic:01........................................

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const inputValue = parseInt(document.querySelector("#numberInput").value);
  const result = inputValue < 0 ? "Negative Number" : inputValue % 2 === 0 ? "Even" : "Odd";
  console.log(result);
});

// ................................. Logic:2..........................................

const numberListInputBtn = document.querySelector("#numberListInputBtn");
numberListInputBtn.addEventListener("click", () => {
  // Access Input Value
  const numberListInputValue = document.querySelector("#numberListInput").value;
  console.log(numberListInputValue);

  //   Split By Comma
  const convertIntoString = numberListInputValue.split("");
  console.log(convertIntoString);

  // Convert Array into Number
  const convertArrayIntoNumber = convertIntoString.map((e) => parseInt(e));
  console.log(convertArrayIntoNumber);

  //   Find Sum of All numbers
  const sumOfAllNumbers = convertArrayIntoNumber.reduce((sum, nextNum) => sum + nextNum, 0);
  console.log(sumOfAllNumbers);

  //   Find Minimum Number
  const minValue = Math.min(...convertArrayIntoNumber);
  console.log(minValue);

  // Find Maximum Number
  const maxValue = Math.max(...convertArrayIntoNumber);
  console.log(maxValue);
});

// ................................. Logic:3..........................................

// Access to UserEnter Button
const numberListBtn = document.querySelector("#numberListBtn");

numberListBtn.addEventListener("click", () => {
  // Access to UserInput Values
  const numberList = document.querySelector("#numberList").value;
  // Convert Into Array
  const numArr = numberList.split("").map((e) => parseInt(e));

  const filter = numArr.filter((num,index) =>numArr.indexOf(num)=== index);
  console.log(filter);

  // Remove Duplicate Values
  const uniqueVal = [...new Set(numArr)];
  console.log(uniqueVal);

  // Sort Array
  const sortArr = uniqueVal.sort((a, b) => a - b);
  console.log(sortArr);
});

// ................................. Logic:4..........................................

const userBtn = document.querySelector(".userBtn");
userBtn.addEventListener("click", () => {
  let userVal1 = parseInt(document.querySelector("#val1").value); // 2
  let userVal2 = parseInt(document.querySelector("#val2").value); //3

  // Swap Numbers
  userVal1 = userVal1 + userVal2; //5
  userVal2 = userVal1 - userVal2; //2
  userVal1 = userVal1 - userVal2; //3

  console.log(userVal1);
  console.log(userVal2);
  
  
});

// ................................. Logic:5..........................................
const submitBtn=document.querySelector(".submitBtn");
submitBtn.addEventListener("click",()=>{
const userInput=document.querySelector("#userWord").value;
const reverseString=userInput.split("").reverse().join("");
console.log(reverseString);
})

// ................................. Logic:6..........................................
const submitButton=document.querySelector(".submitButton");
submitButton.addEventListener("click",()=>{
const pallinWord=document.querySelector("#pallinWord").value;

const changeIntoArray=pallinWord.split("");
console.log(changeIntoArray);

const reverseWord=[...changeIntoArray].reverse();
console.log(reverseWord);

const showOutput=changeIntoArray.join()===reverseWord.join()?"Ooh It's Palindrome":"It's  not Palindrome";
console.log(showOutput);

})

// ................................. Logic:7..........................................

const subButton=document.querySelector(".subButton");
console.log(subButton);

subButton.addEventListener("click",()=>{
const sentence=document.querySelector("#sentence").value.trim();
console.log(sentence);

const splitSentence=sentence.split(" ");
console.log(splitSentence);

const filterWords=splitSentence.filter((e)=>e!==" ");
console.log(filterWords);


const countLength=filterWords.length;
console.log(countLength);

})

// ................................. Logic:8..........................................

const subBtn=document.querySelector(".subBtn");
console.log(subBtn);

subBtn.addEventListener("click",()=>{
  const userNumber=document.querySelector("#userNumber").value;
  console.log(userNumber);

  const splitUserNum=userNumber.split("");
  console.log(splitUserNum);

  const removeDuplicate=[...new Set(splitUserNum)];
  console.log(removeDuplicate);

  const sort=removeDuplicate.sort((a,b)=>b-a);
  console.log(sort);

 console.log(sort[1]);
  
})
