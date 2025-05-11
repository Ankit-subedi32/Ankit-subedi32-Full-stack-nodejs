
// hami yesa chai datbase connection ko code or logic lekhxau

const {Sequelize,DataTypes} = require("sequelize")
        // OR

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataType = sequelize.DataType


const sequelize = new Sequelize("postgresql://postgres.umskzmhprbjqlghpqhoo:aaannnkkkiiittt@aws-0-us-east-2.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
.then(() => {
    console.log("Authenticated successfully completed")
})

.catch((err) => {
    console.log("Error Aayo" + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize,DataTypes)
// yo chai uuta bata expot garyako lai import garyako aane direct function lai call garyako as arguments


// migrate code halna parxa database table create garyako lai supabase ma halna ko laghi 

//migrate code ho yo chai

sequelize.sync({alter : false }).then(() =>{
    console.log("Migrate vayo")
})

module.exports = db