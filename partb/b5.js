function flighthotel() {
        let ans = prompt("Have you booked the flight ticket? yes/no");
        let flight= new Promise(function(resolve,reject){
            if(ans=='Yes' || ans =='yes'){
            resolve("You can book the hotel!");}
            else{
    reject('You cannot book the hotel,Please book the flight first'); }
        });
        flight.then(function successValue(result){
            let ans1 = prompt("Have you booked the hotel? yes/no");
            let hotel= new Promise(function(resolve1,reject1){
            if(ans1=='Yes' || ans1 =='yes'){
            resolve1("Hotel booked successfully!");}
            else{
               reject1('You can book the hotel now!'); }
        });
            hotel.then(function successValue(result)
            {
                alert(result);
            },)
            hotel.catch(function errorValue(result){
                alert(result);
            })
        },)
            flight.catch(function errorValue(result){
                alert(result);
            })
}
