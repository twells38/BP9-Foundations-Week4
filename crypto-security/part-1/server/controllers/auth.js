const users = []
const bcrypt = require('bcrypt')
module.exports = {
  
  login: (req, res) => {
    console.log('Logging In User')
    console.log(req.body)
    const { username, password } = req.body
    let userData
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) { // check if username in the arraydatabase
        userData = users[i]
       // res.status(200).send(users[i])
      }
    }
      if (!userData) { // check if the user is not match
        res.status(200).send({ success: false, message: 'bad email or username' })
      } else {
        bcrypt.compare(password, userData.passwordHash, (err, result) => {
          if (!err) {
            if (result) {
              delete userData.passwordHash
              console.log( userData)
              res.status(200).send({ userData, success: true })
            } else {
              res.status(200).send({ success: false, message: 'bad password or username' })
            }
          } else {
            console.log('Error during bycrypt.compare(): ' + err)
            res.status(400).send({ success: false })
          }
        })
      }
     
    },
      register: (req, res) => {
        const { username, email, password, firstName, lastName } = req.body
        const saltRounds = 16
        bcrypt.hash(password, saltRounds, (err, passwordHash) => {
          let newUserEntry = {}
          newUserEntry.username = username
          newUserEntry.email = email
          newUserEntry.firstName = firstName
          newUserEntry.lastName = lastName
          newUserEntry.passwordHash = passwordHash
          console.log('Registering User')
          console.log(newUserEntry)
          users.push(newUserEntry)
          res.status(200).send(newUserEntry)
        })
      }
    }
  


  // login: (req, res) => {
  //     console.log('Logging In User')
  //     console.log(req.body)
  //     const { username, password } = req.body
  //     let userData

  //     for (let i = 0; i < users.length; i++) {
  //        if (users[i].username === username) {
  //        userData = users[i]
  //     //   res.status(200).send(users[i])
  //        }
  //      }

  //     if (!userData) {
  //       res.status(200).send({success: false, message: 'bad username'})
  //     } else {
  //       bcrypt.compare(password, userData.passwordHash, (err, result) => {
  //         if(!err) {
  //           if (result) {
  //             delete userData.passwordHash
  //             console.log(It, userData)
  //             res.status(200).send({userData, success: true})
  //           } else {
  //             res.status(200).send({success: false, message:bad password or username})
  //           }
  //         } else {
  //           console.log(Error during bcrypt.compare():  + err)
  //           res.status(400).send({success: false})
  //         }
  //       })
  //     }

  //   //res.status(400).send("User not found.")
  //   },
