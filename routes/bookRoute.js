const { patchBook, addBook, deleteBook,  singleFetchBook, fetchBook } = require("../controller/bookController")

const router = require("express").Router()

router.route("/books").get(fetchBook)
router.route("/").post(addBook)
router.route("/:id").delete(deleteBook).patch(patchBook).get(singleFetchBook)
// router.get("/books",fetchBooks)
// router.post("/boooks",addBook)
// router.delete("/books",deleteBook) yesari ni milxa garna chai 

module.exports = router