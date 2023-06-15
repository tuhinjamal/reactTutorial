let array = [];
increment =0;
let container = document.querySelector('.container');


// fast
// this while loop calls  dom operation for 1 time
// this functionality called batch update
// batch update can be achived without batch update
// but react has applied a technique to upadte just what is changed exactly by keep snap track 
// scenario of update before and after but this is difficult to do while stays in DOM so they made 
// a separate world where there is no rule bound, no hassle of repaint and can works only on javascript
// without abide by browser rules named Virtual DOM . work in Virtual DOM is more cheaper than browser DOM
// next starts from 9.7 min

while(increment < 10000){
    array.push(++increment);

}
container.innerHTML = array.join(' ')


// slow
// this while loop calls 10000 timese dom operation



// while(increment < 10000){
//     increment ++
//     container.innerHTML += ' ' + increment
// }