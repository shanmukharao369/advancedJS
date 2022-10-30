class Student{
    static count=0;
    constructor(name,age,phone_number,marks){
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.marks=marks;
        Student.count++;
    }
    static countStudents(){
        console.log("No.of students:"+Student.count)
    }

    isEligible(){
        if(this.marks>40){
            console.log("Eligible");
        }else{
            console.log("Not Eligible");
        }
    }

    checkForPlacements(min_marks){
        return (min_age) => {
            if(this.marks>min_marks && this.age > min_age){
                console.log(`${this.name} is eligible for placement`)
            }else{
                console.log(`${this.name} is not eligible for placement`)
            }
        }
    }
    
}
const S1 = new Student('shanmukha',22,973458986,100);
const S2 = new Student('abcd',20,973458986,70);
const S3 = new Student('efgh',25,973458986,35);
const S4 = new Student('ijkl',23,973458986,65);
const S5 = new Student('mnop',25,973458986,30);


// console.log(S1.marks)
Student.countStudents()
// S1.isEligible()
S1.checkForPlacements(40)(18)
S2.checkForPlacements(40)(18)
S3.checkForPlacements(40)(18)
S4.checkForPlacements(40)(18)
S5.checkForPlacements(40)(18)