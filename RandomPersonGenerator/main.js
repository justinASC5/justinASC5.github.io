fetch('https://randomuser.me/api')
    .then(function(response) {
        const json = response.json();
        return json;
    })
    .then(function(data) {
        let firstName = data.results[0].name.first;  
        let lastName = data.results[0].name.last;
        let fullName = `${firstName} ${lastName}`;
        let fullCapName = capitalize(fullName);

        function capitalize(str){   //capitalizes the first letters of all words
            let array = str.split(' ');
            let strng = "";
        
            for(let i = 0; i < array.length; i++){
              let word = array[i][0].toUpperCase() + array[i].slice(1);
              if(i === array.length - 1){
                strng += `${word}`;
              }
              else{
              strng += `${word} `;
              }
            }
            return strng;
        }

        let cityName = data.results[0].location.city;
        let stateName = data.results[0].location.state;
        let postalCode = data.results[0].location.postcode;
        let loc = `${cityName}, ${stateName}, ${postalCode}`;
        let userLocation = capitalize(loc);

        let birthDate = data.results[0].dob.date;
        let yrsOld = data.results[0].dob.age;
        let formatter = formatBDay(birthDate);
        let birthAge = `${formatter}, ${yrsOld} years old`;

        function formatBDay(birthday){  //puts date in mm/dd/yyyy format
            let bday = birthday;
            let month = bday.substring(5, 7);
            let day = bday.substring(8, 10);
            let year = bday.substring(0, 4);
            bday = `${month}/${day}/${year}`;
            return bday;
          }

        let idName = data.results[0].id.name;
        let idValue = data.results[0].id.value;
        let fullID = `${idName} ${idValue}`;

        if(idName === "" || idValue === null){  //if no id is found, null is replaced with N/A
            fullID = "N/A";
        }

        let cellPhoneArray = ["(765)457-8905", "(337)546-1445", "(970)968-9361", "(360)388-0177", 
            "(847)252-3434", "(276)494-4683", "(215)850-2650", "(928)283-6528",
            "(440)237-6040", "(804)884-7055", "(435)813-6292", "(603)709-1309",
            "(337)558-2948", "(520)551-6661", "(425)458-1834", "(712)934-3766", 
            "(407)996-0655", "(760)676-1445", "(435)727-9565", "(231)266-4316",
            "(713)981-6129", "(609)221-4636", "(562)388-9303", "(623)341-9897", 
            "(863)526-9655", "(407)328-6754", "(541)761-6864", "(724)988-8072", 
            "(864)944-1379", "(401)586-6054", "(719)533-9521", "(706)339-9970",
            "(434)956-3728", "(626)241-3291", "(812)492-3622", "(734)957-4145", 
            "(517)388-2573", "(619)401-2128", "(254)876-5230", "(973)379-0669",
            "(843)298-8032", "(602)213-0209", "(732)617-6149", "(563)391-5442", 
            "(606)289-0588", "(715)773-2710", "(479)899-9945", "(254)623-5791", 
            "(772)467-3412", "(708)596-9034"];
            

        let phoneNumber = data.results[0].phone;
        let cellNumber = data.results[0].cell;

        if(phoneNumber.charAt(0) != "("){   //if phone number doesn't have a parantheses, picks a random number from cellPhoneArray 
            phoneNumber = cellPhoneArray[Math.floor(Math.random() * 48)];
        }

        if(cellNumber.charAt(0) != "("){
            cellNumber = cellPhoneArray[Math.floor(Math.random() * 48)];
        }

        document.getElementById("picture").src = data.results[0].picture.large;

        document.getElementById("name").innerHTML = fullCapName;
        document.getElementById("username").innerHTML = data.results[0].login.username;
        document.getElementById("location").innerHTML = userLocation;
        document.getElementById("birthday").innerHTML = birthAge;
        document.getElementById("ID").innerHTML = fullID;

        document.getElementById("email").innerHTML = data.results[0].email;
        document.getElementById("phone").innerHTML = phoneNumber;
        document.getElementById("cell").innerHTML = cellNumber;

        const button = document.getElementById("button");

        button.addEventListener('click', buttonClick);

        function buttonClick(event){    //refreshes window after clicking button
            event.preventDefault();
            window.location.reload();
        }
    });


