/* let fu =()=>{
    let primer = 0
    let segundo = 1
    let suce = [0,1]
    for(let i = 2; i<= 4; i++){
        let suma = primer + segundo
        primer = segundo
        segundo = suma
        suce.push(suma)
    }
    console.log(suce);
    
}
fu()
 */

let fuba = (n) => {
    if (n > 2) {
        return fuba(n - 1) + fuba(n - 2);
    } else {
        return 1
    }
}
console.log(fuba(6)); // Output: 8


/* let fu =(n)=>{
    let primer = 0
    let segundo = 1
    let suce 
    for(let i = 0; i<n; i++){
        primer = segundo
        suce = primer
        primer = suce + segundo
    }
    return primer
    
}
console.log(fu(4));
 */