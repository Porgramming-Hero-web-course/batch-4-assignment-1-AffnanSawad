{

    
    function removeDuplicates(x: number[]): number[] {
       
       
        const result: number[] = [];
    
        for (let i = 0; i < x.length; i++) {
          
          
            if (result.indexOf(x[i]) === -1) {
                result.push(x[i]);
            }
        }
    
        return result;
    }
    
  
    const values = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

    console.log(values)






}