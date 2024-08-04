import express from "express";

const app=express();


// app.get("/",(req,res)=>{
//     res.send("Server is ready");
// })

//get a list of 5 jokes
app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'B joke',
            content:'this is a joke'
        }
    ]    
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res)=> {
    console.log(`Server at http://localhost${port}`);
})