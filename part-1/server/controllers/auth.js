const bcrypt = require('bcrypt')

const users = []

module.exports = {
    login: (req, res) => {
      // console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body
      let userData

      for (let i = 0; i <users.length; i++) {
        if (users[i].username === username) {
          userData = users[i]
        }
      }
      // for (let i = 0; i < users.length; i++) {
      //   if (users[i].username === username && users[i].password === password) {
      //     userData = users[i]
          // res.status(200).send(users[i])
      //   }
      // }
      // res.status(400).send("User not found.")
      if (userData === undefined) {
        res.status(400).send({success: false, message: 'bad username or password'})
      }else {
        bcrypt.compare(password, userData.password, (error, success) => {
          if (!error) {
            if (success) {
              res.status(200).send({success: true, 
                username: userData.username, 
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName
              })
            } else {
              res.status(400).send({success: false, message: 'bad password'})
            }
          } else {
            console.log('bcyrpt had an error comparing passwords: ')
            console.log(error)
            res.status(500).send({success: false, message: 'backend error'})
          }
        })
      }
    },
    register: (req, res) => {
      
      const {username, email, firstName, lastName, password} = req.body
      const saltRounds = 10
      
      bcrypt.hash(password, saltRounds, (error, hashPass) => {
        // console.log("hasPass", hashPass)
        // console.log("password", password)
        let newDatabaseEntry = {}
        newDatabaseEntry.username = username
        newDatabaseEntry.email = email
        newDatabaseEntry.firstName = firstName
        newDatabaseEntry.lastName = lastName
        newDatabaseEntry.password = hashPass
        
        console.log('Registering User')
        console.log(newDatabaseEntry)
          users.push(newDatabaseEntry)
          res.status(200).send(newDatabaseEntry)
          console.log(users)
        })
    }
}