var citiesByState = {
    Odisha: ["Bhubaneswar","Puri","Cuttack"],
    Maharashtra: ["Mumbai","Pune","Nagpur"],
    AndhraPradesh: ["Nellore","Vizag"],
    TamilNadu:["Chennai","Erode"]
    }

    function makeSubmenu(value) {
    if(value.length==0) 
    {
        document.getElementById("citySelect").innerHTML = "<option></option>";
    }
    else {
        var citiesOptions = "";
        for(var cityId in citiesByState[value])
            {
            citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
            }
        document.getElementById("citySelect").innerHTML = citiesOptions;
    }

    }
    function resetSelection()
     {
        document.getElementById("countrySelect").selectedIndex = 0;
        document.getElementById("citySelect").selectedIndex = 0;
    }

          