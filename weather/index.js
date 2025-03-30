function chooseCloth(){
    while (true) {
        let temp = prompt("Enter the temperature in degree Celcius: ");
        
        if (temp === null || temp.trim() === "" || isNaN(temp)){
            alert("Please insert a valid temperature in digits only");
            continue;
        }

        temp = Number(temp);

        let israining = prompt("Is it raining: ").trim().toLowerCase();

        if (israining !== "yes" && israining !== "no") {
            alert("Is it raining? Enter Yes or No only");
            continue;
        }
        if (temp > 25 && israining === "yes"){
            alert("Please grab an umbrella and wear  light clothes");
        } else if (temp <= 25 && israining === "yes") {
            alert("Get a sweater and put on a fully kitted raincoat");
        } else if (temp > 25 && israining === "no") {
            alert("The weather is fine, a light shirt and shorts will be fine on you");
        } else {
            alert("It may soon get chilling out there, you may jump in a tracksuit, jug along and buiold some heat");
        }
        break;
    }
}

chooseCloth();