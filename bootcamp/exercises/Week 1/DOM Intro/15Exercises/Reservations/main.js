const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

 function checkReservation() {
    const name =document.getElementById("Name").value;
    if(reservations[name] !== 'undefined' && reservations[name].claimed == false)
    {
        alert("welcome to user");
    }
}


