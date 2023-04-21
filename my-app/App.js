import React from "react";
import { Text, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
 
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Home"
          component={HomeScreen}
           options={({navigation}) => ({
            title:'Tasks App',
          headerStyle:{backgroundColor:'#222f3e'},
          headerTitleStyle:{color: '#ffffff'},
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                <Text style={{color: '#ffffff', marginRight: 20, fontSize: 15}}>New</Text>
              </TouchableOpacity>
            );
          }
        })}
        />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen}
        options={{
          title:'New Task',
          headerStyle:{backgroundColor:'#222f3e'},
          headerTitleStyle:{color: '#ffffff'},
          headerTintColor: '#ffffff',
          headerRight: () => {}
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App;
