let array = [];
increment =0;
let container = document.querySelector('.container');


// fast
// this while loop calls  dom operation for 1 time
// this functionality called batch update
// batch update can be achived without batch update
// but react has applied a technique to upadte just what is changed exactly by keep snap track 
//  scenario of update before and after

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