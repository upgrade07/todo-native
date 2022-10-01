import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])
  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null)
  }

  const completeTask=(index)=>{
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
        <View style={styles.textWrapper}> 
          <Text style={styles.sectionTitle}>Todays's Tasks</Text>
          <View style={styles.items}>
            {
              taskItems.map((item,index)=>{
                return(
                  <TouchableOpacity onPress={()=>completeTask(index)}>
                    <Task key={index} text={item}/>
                  </TouchableOpacity>
                )
              })
            }
          
          </View>
        </View>

        <KeyboardAvoidingView style={styles.writeTaskWrapper} >
          <TextInput style = {styles.input} placeholder='Write a Task' value={task} onChangeText={text=>setTask(text)}></TextInput>
          <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
          </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  textWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold'
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    backgroundColor:"#FFF",
    paddingHorizontal:15,
    paddingVertical:15,
    width:250,
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderWidth:1,
    borderRadius:60,
    borderColor:"#C0C0C0",
    justifyContent:'center',
    alignItems:'center'
  },
  addText:{
    fontSize:28,
    justifyContent:'center',
    alignItems:'center'
  }
});
