//create a CAr object using ES5 with prototype
function Car(carCost,topSpeed, kms){
    this.carCost=carCost;
    this.topSpeed=topSpeed;
    this.kms = 0;
    this.drive=function(){
        console.log("Driving");
        this.kms+=8;
    }
    this.reverse=function(){
        console.log("Reversing");
        if(this.kms>=4){
            this.kms-=4;
        }
    }
}
Car.prototype.carInfo = function(){
    console.log(`Price: ${this.carCost} Top Speed: ${this.topSpeed} Kilometers: ${this.kms}`)
}
//3 instances of Car
const toyota=new Car(120000,90+'KPH');
//4 drive
for (let index = 0; index < 4; index++) {
    toyota.drive();   
}
//1 reverse
toyota.reverse();
setTimeout(toyota.carInfo(),4000);
// toyota.carInfo();
const kia=new Car(75000,60+'KPH');
//2 drive
for (let index = 0; index < 2; index++) {
    kia.drive();   
}
//4 reverse
for (let index = 0; index < 4; index++) {
    kia.reverse();   
}
kia.carInfo();
const honda=new Car(150000,120+'KPH');
//3 reverse
for (let index = 0; index < 3; index++) {
    honda.reverse();   
}
honda.carInfo();