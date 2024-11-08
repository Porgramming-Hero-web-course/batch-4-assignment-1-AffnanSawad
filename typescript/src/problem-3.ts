{
  //  To do :
    //  1. same case e ni jawa.
    //  2. split kora.
    //   4. count kora . count = 0 initially
    //  5 .array loop through kore word check kora.. then return.....
    // 5 STEPS BRO.....................


    //  starting:
    function countWordOccurrences(x: string, w: string): number {

        //  sentence + word ke same letter e niye jawa , jate counting e subida hoi.
       
        const lowerCaseSentence = x.toLowerCase();
        const lowerCaseWord = w.toLowerCase();
        
    //    split : sentence vag kore dite.
        const words = lowerCaseSentence.split(" ");
        
    //     counting words ;
        let count = 0;
    
       
        for (let i = 0; i < w.length; i++) {
          
     if (words[i] === lowerCaseWord) {
        
        count++;

            }
        }
    
       
        return count;
    }
    

    const result = countWordOccurrences("I love TypeScript TypeScript TypeScript", "typescript");
    console.log(result); 



   








}