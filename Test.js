function KthRotation(arr,k){
    let newArray=[];
    for(let i=0;i<=arr.length-1;i++){
        if(i>=k){
            // console.log(arr[i])
            newArray.push(arr[i]);
        }
    }
    
    for(let i=0;i<k;i++){
        newArray.push(arr[i]);
    }

    return newArray;
}

let arr=[1,2,3,4,5,6,7,8,9,10], k=3;

console.log(KthRotation(arr,k))