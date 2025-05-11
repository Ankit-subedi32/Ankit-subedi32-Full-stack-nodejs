// books, bookName,bookPrice, bookAuthor, bookGenre
const { sequelize } = require("../connection");

const bookModel = (sequelize,DataTypes) => {
  const Book =  sequelize.define("book",{
    bookName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : DataTypes.INTEGER,
    },
    bookAuthor : {
        type : DataTypes.STRING,

    },
    bookGener : {
        type : DataTypes.STRING
    }
  })
  return Book
}

module.exports = bookModel     // export default bookModel