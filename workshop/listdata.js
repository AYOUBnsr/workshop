const fs = require("fs");

function list() {
    try {
        
        const data = fs.readFileSync("data10.json", "utf8");
        
    
        const jsonData = JSON.parse(data);
        
   
        jsonData.forEach((person) => {
            console.log(`ID: ${person.id}, First Name: ${person.fname}, Last Name: ${person.lname}, age: ${person.age}, city: ${person.city}`);
        });

    } catch (error) {
        console.error("8alta :", error);
    }
}

list();
