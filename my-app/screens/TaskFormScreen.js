import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { saveTask , getTask, updateTask} from '../api'

const TaskFormScreen = ({navigation, route}) => {

  const [task, setTask] = useState({
    title: "",
    description: "", 
  })

  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSubmit = async () => {
    try {
      if (!editing) {
        await saveTask(task);
      } else {
        console.log(route.params.id, task)
        await updateTask(route.params.id, {...task});
      }
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      setEditing(true);
      navigation.setOptions({ headerTitle: "Updating Task" });
      (async () => {
        const task = await getTask(route.params.id);
        setTask({ title: task[0].title, description: task[0].description });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
      style={styles.input}
      placeholder='Write title'
      value={task.title}
      placeholderTextColor={'#576574'}
      onChangeText={(text) => handleChange('title',text)}
      />
      <TextInput
      style={styles.input}
      placeholder='Write description'
      value={task.description}
      placeholderTextColor={'#576574'}
      onChangeText={(text) => handleChange('description',text)}
      />

      {!editing ? (
      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save task</Text>
      </TouchableOpacity> 
        ) : (
          <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update task</Text>
        </TouchableOpacity> 
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    fontSize: 14,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    color: 'white',
    textAlign: 'center'
  },
  buttonSave: {
    width: '90%',
    height: 40,
    backgroundColor: '#576574',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    marginTop: 10
  },
  buttonUpdate: {
    width: '90%',
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    marginTop: 10
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  }
})

export default TaskFormScreen