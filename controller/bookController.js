const { books } = require("../database/connection")

exports.fetchBook = async function(req,res){


    //logic for fetch book from here

    //connnection ko db.books bata ko halyako ho
   const datas = await books.findAll();      // select * from books,books.find(), always returns array
   res.json({
      message : "Book fetched succesfully",
      datas
})
    

}


exports.addBook = async function(req,res){
    //logic for add book to database goes here

    // console.log(req.body)
    // const bookName = req.book.bookName
    // const bookPrice = req.book.bookPrice



    //  check if all data ako xa vane only proced , else not proced throw error in response
    
    const {bookName,bookPrice,bookAuthor,bookGener} =req.body

    await books.create({
        bookName,
        price : bookPrice,
        bookAuthor,
        bookGener
    })
    res.json({
        message : "Book added succesfully"

    })
}


exports.deleteBook = async(req,res) => {

     //logic to delete book
//first ma hami ,kun book delete garna chayako ho teskp id lena
     const id = req.params.id

     //id paisakyapaxi ,tyo id koo book chai books tabel bata udaidini
    const datas = await books.destroy({
        where : {
            id : id
        }
    })
    res.json({
      message :  "Book Deleted Succesfully",
      datas
    })
} 

exports.patchBook = async(req,res) => {
     try {
           // Logic to update book
        //kun id ko chai edit garne ho tyo id lina paryo
        const id = req.params.id

        //k k update garne ta

    const {bookName,price,bookAuthor,bookGener} = req.body

    await books.update({bookName : bookName,price,bookAuthor,bookGener},{
        where : {
            id  : id
        }
    })
    res.json({
       message : "Book Upadated Succesfully"
    })
        
     } catch (error) {
        res.json({
            message: "somthing went wrong" +error
        })
        
        
     }
}


exports.singleFetchBook =async function(req,res){

    const id =req.params.id
   const datas = await books.findByPk(id)
//  const dat  books.findAll({

//     where : { 
//         id : id
//     }
//    })
    res.json({
        message : "single Book fetched Succesfully",
        datas
   })

}


    //yo tarika le garda ne hunxa tara hamile mathi function ma nai export garyako xam


   // module.exports = {fetchBook,addBook,deleteBook,editBook}