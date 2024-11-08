{

    class Car {
        constructor(public make: string, public model: string, public year: number) {}
      
        
        getCarAge(currentYear: number): number {
          return currentYear - this.year;
        }
      }
      
      // Sample Input
      const car = new Car("Honda", "Civic", 2018);
      console.log(car.getCarAge(2024));





}