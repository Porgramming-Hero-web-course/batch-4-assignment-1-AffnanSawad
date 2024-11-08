{

    function sumArray( x : number[]){

    let sum = 0 ;

    for( let i = 0 ; i < x.length ; i++){

        sum += x[i];
    }

    return sum ;

    }
    const result = sumArray([1,2,3,4,5]);
    console.log(result);








}