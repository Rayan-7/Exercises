
class Vehicle {

    constructor (x ,y, speed,fuel)
    {
       this.x=x;
       this.y=y;
       this.speed=speed;
       Vehicle.carsSold++;
       this.fuel=fuel;
    }

    getInfo () {
        console.log("Cars are great");
    }

    
    calculateMoney () {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.")
    }
    
    set fuel(fuel) {
        if (fuel < 0 || fuel > 150)
            return console.log(" the fuel cannot be less than 0, or greater than 150")

        this._fuel = fuel
    }
    get fuel(){
        this._fuel = fuel
    }
    
}
Vehicle.carsSold=0
const vehicle1 = new Vehicle(5, 4,150)
const vehicle2 = new Vehicle(5, 4,150)
const vehicle3 = new Vehicle(5, 4,150)


vehicle1.calculateMoney();