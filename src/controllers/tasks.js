import { connect } from "../database";

export const getTasks = async (req,res) =>{
   const db = await connect();
   const [rows] = await db.query('SELECT * FROM tasks');
   console.log(rows)
    res.send('Hello world');
}

export const getTask = (req,res) =>{
    res.send('Hello world');
}

export const getTaskCount = (req,res) =>{
    res.send('Hello world');
}

export const createTask = (req,res) =>{
    res.send('Hello world');
}

export const deleteTask = (req,res) =>{
    res.send('Hello world');
}

export const updateTask = (req,res) =>{
    res.send('Hello world');
}