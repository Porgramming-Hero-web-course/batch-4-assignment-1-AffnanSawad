
Type guards are necessary in TypeScript to help the compiler understand the type of a variable. It ensure the run time errors and many other things such as improve readibility. There are many kind of Type Guards such as :

1. type of .
2. in guard.
3. instace of .

1. Type Of : The typeof operator is used to check the data type of variables.
<!-- For Example -->
type dataType = string | number ;


const summ = ( a1 : dataType , a2 : dataType) : dataType =>{

 if( typeof a1 ==='number' && typeof a2==='number' ){

    return a1 + a2 ;
 }
 else{
    return a1.toString() + a2.toString();
 }


}

const result1 = summ(2,3);
const result12 = summ("2","3");

console.log(result1)
console.log(result12);



2. For Instance : The instanceof operator checks if an object is an instance of a particular class or constructor function.

 // Type guard using instance of

    class Animal{
   
        constructor( public name:string , public age: number , public sound:string) {}

         makeSound(){
           
            console.log(`The ${this.name} who is ${this.age} years old , says ${this.sound}`)
         
        }
   

    }


    class Dog extends Animal {
   
        constructor( public name:string , public age: number , public sound:string) {   
            // 
            
            super(name,age,sound);

             
        }

        makeBark(){
            console.log(`bark bark`)
        }

   }




   class Cat extends Animal {
   
    constructor( public name:string , public age: number , public sound:string) {   
        // 
        
        super(name,age,sound);

         
    }

    makeMeow(){
        console.log(`meow`)
    }

}



const cat1 = new Animal('Persian', 12 , 'meow');
const dog1 = new Animal('German', 12 , 'gheow');

// 
const isDog = ( animal : Animal) : animal is Dog => {

    return animal instanceof Dog ;
}

const isCat = ( animal : Animal) : animal is Cat => {

    return animal instanceof Cat ;
}

const soundHobe = ( animal : Animal ) => {

    if(isDog(animal)){

        animal.makeBark()
    }
    else if( isCat(animal)){
        animal.makeMeow()
    }
    else{
        animal.makeSound();
    }
}






3. In Operator  : The in operator checks whether a particular property exists on an object

//  in guard 

type Normaluser = {
  
    name: string;

}
type Adminuser = {
  
    name: string;

    role: 'Admin' ;

}


const loggedInUser = ( user : Normaluser | Adminuser) =>{
 
    if('role' in user){

        console.log(` Log in user ${user.name} who is ${user.role}  `)
    }

    else{
        console.log(` Log in user ${user.name}   `)
    }


}


// calling
const firstUser : Normaluser = {

 name: 'Asad',

}

const SecondUser : Adminuser = {
    
    name: 'Affnan',
    role: 'Admin'

}

// 
const result = loggedInUser(firstUser); 
const result22 = loggedInUser(SecondUser); 