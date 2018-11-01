function newRoadSystem(roadRegister) {
    var cities = roadRegister.length
    var approved = true
    for(i = 0; i < cities; i++){
        var inbound = 0;
        var outbound = 0;
        for(j = 0; j < cities; j++){
            if(roadRegister[i][j])
                inbound++
            if(roadRegister[j][i])
                outbound++
        }
        approved = approved && (inbound === outbound)
    }
    return approved

}

const res = newRoadSystem(
    [[false,true,false,false],
        [false,false,true,false],
        [true,false,false,true],
        [false,false,true,false]]
)
console.log(res)
