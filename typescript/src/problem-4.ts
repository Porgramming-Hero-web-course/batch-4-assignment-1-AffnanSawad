{

    // To Do :
    //  create type for circle and rectangle.
    //  add it in a union type variable.
    // then use conditional way to determine circle | rec.
    
   
type Circle = {
    shape: "circle";
    radius: number;
  };
  
 
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
 
  type Shape = Circle | Rectangle;
  
 
  function calculateShapeArea(shape: Shape): number {
  
    if (shape.shape === "circle") {
     
      return Math.PI * shape.radius * shape.radius;
    }
  
    
    if (shape.shape === "rectangle") {
    
      return shape.width * shape.height;
    }
  
    
    return 0;
  }
  
  
  const CArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(CArea); 
  

  const RArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(RArea); 
  



}