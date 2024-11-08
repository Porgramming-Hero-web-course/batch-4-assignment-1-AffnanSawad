{


interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
   
    return { ...profile
        , ...updates 
    
         };
  }
  
  
  const my_own_Profile = { name: "Alice", age: 25, email: "alice@example.com" };
  const updated_Profile = updateProfile(my_own_Profile, { age: 26 });
  

  console.log(updated_Profile);







}