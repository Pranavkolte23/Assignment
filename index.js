const express = require("express");

const app = express();

//to parse the request body
app.use(express.json());


//Books Api Routes: GET, POST, PUT, DELETE
let books = [
    {
        id: 1,
        name: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 2,
        name: "The Alchemist",
        author:"anymous"
    },
    {
        id: 3,
        name: "The Da Vinci Code",
    }

];


app.get("/", (req, res) => {
    
    res.status(200).json({ "Books_information" : books });
})
app.get("/ping", (req, res) => {
    res.status(200).json({ message: "Pong" });
})


// Add other requests GET, POST, PUT, DELETE

app.post("/addBook",(req,res)=>{
   
    let book = {
        id: books[books.length - 1].id + 1,
        name: req.body.name,
        author : req.body.author
      };
      books.push(book);
      console.log(books)

    res.status(200).json({"message" : "Book Added Successfully"});
    
    

});



app.put("/updateBook/:id",(req,res)=>{
    const objectId = parseInt(req.params.id);
    const updatedObject = req.body; 

   
    const index = books.findIndex(obj => obj.id === objectId);
    
    if (index !== -1) {
        
        books[index] = { ...books[index], ...updatedObject };
        res.json({ message: 'Object updated successfully', updatedObject: books[index] });
    } else {
        res.status(404).json({ message: 'Object not found' });
    }


});
    

app.delete('/deleteBook/:id', (req, res) => {
    const recordId = parseInt(req.params.id);

    // Find the index of the record with the given ID in the array
    const index = books.findIndex(record => record.id === recordId);

    // If record with given ID is found
    if (index !== -1) {
        // Remove the record from the array
        books.splice(index, 1);
        res.json({ message: 'Record deleted successfully' });
    } else {
        res.status(404).json({ message: 'Record not found' });
    }
});

app.listen(8000, () => {
    console.log(`App is live on: http://localhost:8000`);
});
