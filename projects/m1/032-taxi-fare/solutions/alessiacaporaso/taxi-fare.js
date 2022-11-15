const taxiKilometers = parseInt(prompt('Please, enter the distance traveled'))
const baseFare = 4.00;
let totalFare;
// calc taki fares
function calcTotalFare(kilometers){
  if(kilometers <= 140){ // // if the distance is less than 140, fare is equaled base fare else add plus
    totalFare = baseFare
  } else {
    totalFare = (((kilometers / 140) * 0.25)+ baseFare).toFixed(2)
  }
  return alert(`The cost is €${totalFare}`)
}
//take taliKilometers like attribute
calcTotalFare(taxiKilometers)