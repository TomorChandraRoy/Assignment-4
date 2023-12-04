function findAddress(obj) {
    const street = obj.street || "_ ";
    const house = obj.house || "_";
    const society = obj.society || "_";
    return street +"," + house + "," + society;
    
}

    const num ={
        street:10,
        house: "15A",
        society:"Earth Perfect"
    }
    const data =findAddress(num);
    console.log(data)


            // 15A 
        // Earth Perfect