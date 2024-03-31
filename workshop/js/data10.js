

 const fs = require("fs")
const allData = require("./allData")

 const addPerson = (id ,fname , lname, age, city) => {

      const allData = loadData()

      const duplicatedDate = allData.filter((obj) => {
        return obj.id === id 
      })
      const readPerson = (id ,fname , lname, age, city) => {

        const allData = loadData()
  
        const duplicatedDate = allData.find((obj) => {
          return obj.id === id 
        })
  

    //   console.log(duplicatedDate)

      if (duplicatedDate.length == 0) {
        allData.push({
            id : id,
            fname : fname,
            lname : lname,
            age:age,
            city:city
         })
   
         savaAllData(allData)
      } else {
        console.log("ERROR DUPLICATED ID")
      }

 }
 ///////////////////////////////////////////////////////////////////////////////

  const loadData = () => {
    try {
        const DataJson = fs.readFileSync("data10.json").toString()
        return  JSON.parse(DataJson)
    }
    catch {
        return []
    }
    
  }

  //////////////////////////////////////////////////////////////////////////////

  const savaAllData = (allData) => {
      const AllDataJson = JSON.stringify(allData)
      fs.writeFileSync("data10.json" , AllDataJson )
  }

  //////////////////////////////////////////////////////////////////////////////

  const deleteData = (id) => {
     const allData = loadData()

     const dataToKeep = allData.filter((obj) => {
        return obj.id !== id 
       
     })
     savaAllData(dataToKeep)
     
     console.log("you have already deleted an Item")
  }


  ///////////////////////////////////////////////////////////////////////////////
  module.exports = {
    addPerson,
    deleteData,
    readPerson
  }
 }
