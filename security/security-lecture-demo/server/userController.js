const bcrypt = require('bcrypt');

module.exports = {
  signup: (req, res) => {
    const {email, password} = req.body
    const saltRounds = 10

    bcrypt.hash(password, saltRounds, (err, passwordHash) => { //call passwordHash
      let newDatabaseEntry = {} //empty object
      newDatabaseEntry.email = email 
      newDatabaseEntry.passwordHash = passwordHash
      newDatabaseEntry.destiny = destinies[Math.floor(Math.random() * destinies.length)]
      console.log('\nNew database entry: ')
      console.log(newDatabaseEntry)
      database.push(newDatabaseEntry) //push the encrype password in datatbase
      res.status(200).send({success: true})
    })

  },
  // check raw password and passwordHash
  login: (req, res) => {
    const {email, password} = req.body
    let userData

    for (let i=0; i<database.length; i++) {
      if (email === database[i].email) { // check if email is in the database
        userData = database[i] //let grab that info
      }
    }

    if (!userData) { // not match
      res.status(200).send({success: false, message: 'bad email or username'}) //bad username, specifically
    } else {
      // update dom to show destiny if passwordHash is matching to the email and password that login.
      bcrypt.compare(password, userData.passwordHash, (err, result) => {
        //if nothing goes wrong
        if (!err) {
          if (result) {
            const destinyIntro = "Your final destiny is to "
            res.status(200).send({success: true, destiny: userData.destiny, intro: destinyIntro})
          } else {
            res.status(200).send({success: false, message: 'bad password or username'}) //bad password, specifically
          }
        } else { // do other thing
          console.log('Error during bycrypt.compare(): ' + err)
          res.status(400).send({success: false})
        }
      })
    }
  }
}


const database = [
  {
    email:'john@gmail.com',
    password:'1234asdf',
    destiny:'becoming the new Santa'
  },
  {
    email:'sallybonnet@yahoo.com',
    passwordHash:'funpassword',
    destiny:'becoming best friends with Martha Stewart'
  },
]


const destinies = [
  'become a well-respected bartender',
  'cure cancer',
  'become a bear whisperer',
  'become a hoarder',
  'become the lead in a high-budget film, filling in for Henry Cavill when he unexpectedly goes MIA',
  'summit Everest',
  'become the next Bruce Willis',
]