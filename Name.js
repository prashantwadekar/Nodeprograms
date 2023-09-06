function Student(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
    this.fullname=function(){
        return this.firstname+this.lastname;
    }
}
var p=new Student("Prashant", "Wadekar");
console.log(p.fullname());