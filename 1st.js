
 // ========================= Question No.1 ======================= //
/*
 var items = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 },
  ];
  
var singleItem = items.forEach((item, index) => {
var items = item.price;
    console.log("The price of  items", index, "is", items);
  });
var total = items.reduce((sum, item) => sum + item.price, 0);
    console.log("The total prices of items are Rs: ", total);
*/

 // ========================= Question No.2 ======================= //
 
 /*
 var StudentInfo = {
   firstName: "Salman",
   lastName: "Ali",
   email: "romanstar786@gmail.com",
   password: "0987654321",
   age: 18,
   gender: "Male",
   city: "Karachi",
   country: "Pakistan",
  };
  
  var fName = StudentInfo.hasOwnProperty("firstName");
  console.log(fName);
  var lName = StudentInfo.hasOwnProperty("lastName");
  console.log(lName);
  var age = StudentInfo.hasOwnProperty("age");
  console.log(age);
  var country = StudentInfo.hasOwnProperty("country");
  console.log(country);
  */
  
// ========================= Question No.3 ======================= //

/*
function Person(first, email, age, id, coaching) {
  this.first = first;
  this.email = email;
  this.age = age;
  this.id = id;
  this.coaching = coaching;
}

const Student1 = new Person("Salman", "salo786@g,mail.com", 18, 18950, "Saylani");
const Student2 = new Person("Ahsan", "ali786@g,mail.com", 35, 14576, "Axiom");
console.log(Student1, Student2);
*/

// ========================= Question No.4 ======================= //


function CheckPopulation(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

const Peoples = new CheckPopulation(
  "Salman",
  "Male",
  "Nazimabad",
  "Inter ",
  "We Developer"
);
console.log(Peoples);

// save vales of education

function educationData() {
  var select = document.getElementById("education");
  if (localStorage === "") {
    select[localStorage.getItem("save")].selected = true;
  } else if (select.value === "mid") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "mat") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "int") {
    localStorage.setItem("save", select.value);
  } else if (select.value === "cs") {
    localStorage.setItem("save", select.value);
  }
}

// save values for profession

function professionPeoples() {
  var profession = document.getElementById("profession");
  if (localStorage === "") {
    profession[localStorage.getItem("save")];
  } else if (profession.value === "Web developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "Apps Devp") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "Software Developer") {
    localStorage.setItem("profession", profession.value);
  } else if (profession.value === "ios developer") {
    localStorage.setItem("profession", profession.value);
  }
}

// save values of radio buttons

var radio = document.getElementsByName("gender");
for (var i = 0; i < radio.length; i++) {
  if (radio[i].checked) {
    localStorage.getItem("gender");
  }
}

