function AMC(parent,Arr){
    console.log(Arr);
    for (let i=0;i<Arr.length;i++){
        parent.appendChild(Arr[i])
    }
}
export default AMC;