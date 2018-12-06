//create an Interface called schInfo for School Info 

// method one of exporting modules

/**
 export interface schInfo {
   fname: string,
   lname: string,
   age: number,
   lang: string,
   class: string
 }
 **/



//method two of exporting modules

interface schInfo {
  fname: string,
  lname: string,
  age: number,
  lang: string,
  class: string
}

export { schInfo }