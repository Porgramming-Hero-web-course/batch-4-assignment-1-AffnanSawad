{

    function validateKeys(obj: object, keys: string[]): boolean {
        // conditional
        for (let i = 0; i < keys.length; i++) {
          
          if (!(keys[i] in obj)) {
            return false;
          }
        }
        return true; 
      }
      
      
      const person = { name: "Alice", age: 25, email: "alice@example.com" };
      
    //     Example 1 : true hbe

      console.log(validateKeys(person, ["name", "age"]));  
     
     
    //   wx - 2 : false hbe
      console.log(validateKeys(person, ["name", "address"])); 
      





}