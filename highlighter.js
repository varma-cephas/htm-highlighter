const paraBlock=document.querySelector("#myParagraph");

const arrOfParagraphWords=paraBlock.textContent.split(" ");
const arrOfWordCount=[];
let counterW=0
let countWordNum;

for(let i=0; i<arrOfParagraphWords.length; i++){
    for(let j=0;j<arrOfParagraphWords.length; j++){
        if(arrOfParagraphWords[i].toLowerCase() === arrOfParagraphWords[j].toLowerCase()){
            counterW+=1
        }
    }
    countWordNum=arrOfParagraphWords[i].toLowerCase()+" "+counterW;
    if(arrOfParagraphWords[i]!=="" && arrOfWordCount.includes(countWordNum.toLowerCase())===false){
        arrOfWordCount.push(countWordNum)
    }
    counterW=0;
}



const arrOfTopFive=[];
let isGreater;

for(let i=0; i<arrOfWordCount.length; i++){
    for(let j=0; j<arrOfWordCount.length; j++){
        // console.log(arrOfWordCount[j].split(" ")[1])
        if(Number(arrOfWordCount[j].split(" ")[1]) > Number(arrOfWordCount[i].split(" ")[1])){
            isGreater=false;
            break;
        }else{
            isGreater=true
        }
    }
    if(isGreater){
        if(arrOfTopFive.length < 5){
            arrOfTopFive.push(arrOfWordCount[i])
            arrOfWordCount.splice(i, 1)
        }
    }
}

for(let i=0; i<arrOfWordCount.length; i++){
    for(let j=0; j<arrOfWordCount.length; j++){
        // console.log(arrOfWordCount[j].split(" ")[1])
        if(Number(arrOfWordCount[j].split(" ")[1]) > Number(arrOfWordCount[i].split(" ")[1])){
            isGreater=false;
            break;
        }else{
            isGreater=true
        }
    }
    if(isGreater){
        if(arrOfTopFive.length < 5){
            arrOfTopFive.push(arrOfWordCount[i])
            arrOfWordCount.splice(i, 1)
        }
    }
}

console.log(newArr)
console.log(arrOfWordCount)


//loop through the array with the top numbers
    //a nested loop for comparing each the element inside of the nested loop with element inside of the array.
    //the goal is to find the word with the top letter push it a new array, and remove it.

//the reason that this might not be working is that there is some big numbers that is near the end of the list
//copying and pasting the loop might solve the problem tho


//now that the array has the elements that I want, which is a bit expense, using two different for loops.
//let just highlight the words and call it a good effor.


