// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.


let occupancyOb = { 
  adults: 0,
  children: 0
}

const occupancy = () => {

  
  occupancyOb.adults = adults
  occupancyOb.children = children

  return occupancyOb
  
}
const enter = (numAdults, numChildren) => {
  if (numAdults >= numChildren) {
    
    
    adults = adults + numAdults
    children = children + numChildren
    
    
    return true
  
  }
    
    return false
}

const leave = (numAdults, numChildren) => {
  if (numAdults >= numChildren && 
      numAdults - numChildren <= adults - children &&
      numChildren <= children){
      
        adults = adults - numAdults
        children = children - numChildren
        
      return true
      }

      return false
      
}

console.log( occupancy() )
console.log( enter(8, 4))
console.log( occupancy() )
console.log( leave(5, 0))
console.log( occupancy() )


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
