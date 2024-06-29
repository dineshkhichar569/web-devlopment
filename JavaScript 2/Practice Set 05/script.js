// Question 1 //
// let arr = [];
// let size = prompt("Enter the size of an array : ")
// for (let i = 0; i < size; i++) {
//     let data = prompt("Enter the data : ",arr[i]);
//     arr.push(data);
// }
// alert(arr);

// Question 2 //
// let arr2 = [];
// let size_arr2 = prompt("Enter the size : ")
// for (let j = 0; j < size_arr2; j++) {
//     let data = prompt("enter data : ", arr2[j]);
//     arr2.push(data);
// }
// if(data == 0){
//     alert
// }


// Question 3 //
let arr3 = [10,20,34,534,123,20,100];

function fill(e){
    if(arr3[e]%10==0){
        return true;
    }
}
console.log(arr3.filter(fill));