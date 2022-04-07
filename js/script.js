// DATI RICHIESTI
const busRideKm = parseFloat(prompt("Quanti kilometri devi percorrere?"));
const passengerAge = parseInt(prompt("Quanti anni hai?"));

// ELABORAZIONE DATI
const ticketPrice = busRideKm * 0.21;
console.log(ticketPrice);
const under18Age = 18;
const over65Age = 65;
//PER IL SECONDO METODO
// const ticketDiscount20 = (ticketPrice * 20) / 100;
// console.log(ticketDiscount20);
// const ticketDiscount40 = (ticketPrice * 40) / 100;
// console.log(ticketDiscount40);

let finalTicketPrice; 

if (passengerAge < under18Age) {
    finalTicketPrice = ticketPrice - ((ticketPrice * 20) / 100); //PRIMO METODO
    // SECONDO METODO
    // finalTicketPrice = ticketPrice - ticketDiscount20;
} else if (passengerAge > over65Age) {
    finalTicketPrice = ticketPrice - ((ticketPrice * 40) / 100); //PRIMO METODO
    // SECONDO METODO
    // finalTicketPrice = ticketPrice - ticketDiscount40;
} else {
    finalTicketPrice = ticketPrice;
}

//  OUTPUT
document.getElementById("final-ticket-price").innerHTML = finalTicketPrice.toFixed(2);