import { View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getTasks } from '../api'
import TaskList from '../components/TaskList'
import Layout from '../components/Layout'

const HomeScreen = () => {

   const [tasks, setTasks] = useState([])

   const loadTasks = async () =>{
    const data = await getTasks()
    setTasks(data)
   }

    useEffect(() => {
        loadTasks();
    }, [])

  return (
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  )
}

export default HomeScreen