let stuArray : any[];


stuArray = [
  {
    fname: 'Chinedu',
    lname: 'Amos',
    age: 23,
    lang: 'English',
    class: 'JSS2'
  },
  {
    fname: 'Umahi',
    lname: 'Chinyere',
    age: 25,
    lang: 'French',
    class: 'SS1'
  },
  {
    fname: 'Kola',
    lname: 'Bobola',
    age: 26,
    lang: 'German',
    class: 'SS3'
  }
];

// console.log(stuArray[1]);


// stuArray.forEach(element => {
//   console.log(element)
// });


// Function (Parameter with types)

function getAge(array : any[]) {
  array.forEach(element => {
    console.log(`${element.fname} has an age of ${element.age}`);
  })
}

getAge(stuArray);