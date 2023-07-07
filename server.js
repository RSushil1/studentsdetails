const express = require('express');
const cors = require('cors');
const { connectToDb, getDb } = require('./db');
const { ObjectId } = require('mongodb');
const { GetAllStudentsList,studentById,studentByName,createDoc,deleteDoc,updateDoc } = require('./services/studentService');

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
let db;
connectToDb((err)=>{
    if(!err){
    app.listen(4000, () => {
        console.log('app listening on port 4000...')});
    }
    db = getDb();    
})

// routes
app.get('/', (req, res) => {
    res.json("Welcome to the Api");
})

// Pagination get
app.get('/students', async (req, res) => {
     let result  = await GetAllStudentsList(parseInt(req.query.page)||1 ,parseInt(req.query.limit)||10,db);
     let status = 200;
     if(result.error)
     {
        status=404;
     }
     res.status(status).json(result);
})

// get by id
app.get('/students/:id', async (req, res) => {
    let result = await studentById(new ObjectId(req.params.id), db);
    res.status(200).json(result); 
    
})

// get by name
app.get('/students/name/:name', async (req, res) => {
    let result = await studentByName(req.params.name, db);
    res.status(200).json(result);
    
})

//post method
app.post('/students', async (req, res) => {
    let result = await createDoc(req.body, db);
    res.status(200).json(result);
})

// delete method

app.delete('/students/:id', async (req, res) => {
    let result = await deleteDoc( new ObjectId(req.params.id), db);
    res.status(200).json(result);
})

// update methode
app.put('/students/:id',async (req, res) => {
    let result = await updateDoc( new ObjectId(req.params.id),req.body, db);
    res.status(200).json(result);
})

