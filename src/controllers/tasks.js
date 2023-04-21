import { connect } from "../database";

export const getTasks = async (req,res) =>{
   const connection = await connect();
   const [rows] = await connection.query('SELECT * FROM tasks');
    res.json(rows)
}

export const getTask = async (req,res) =>{
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?',
    [req.params.id,
    ]);
    res.json(rows)
}

export const getTaskCount = async (req,res) =>{
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM tasks');
    res.json(rows[0]["COUNT(*)"])
}

export const createTask = async (req,res) =>{
    const connection = await connect();
    const result = await connection.query('INSERT INTO tasks(title,description) VALUES (?,?)',[
        req.body.title,
        req.body.description
    ]);
    console.log(result)
}

export const deleteTask = async(req,res) =>{
    const connection = await connect();
    const result = await connection.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    console.log(result)
}

export const updateTask = async (req,res) =>{
    const connection = await connect();
    const result = connection.query('UPDATE tasks SET ? WHERE id = ?',[
        req.body,
        req.params.id
    ]);
    console.log(result)
}