
import React, {Component} from 'react';

import {Text,TextInput,View,Button} from 'react-native';
import Student from './components/Student';

class App extends Component{
  fruit=()=>{
    console.warn("Apple")
  }
  render(){
    return(

      <View>
      <Text style={{fontSize:30,color:'red'}}> Class Component</Text>
      <TextInput
      placeholder='Enter Your name'/>
      <Button title='Submit' onPress={this.fruit}/>
      <Student/>
      </View>
    )
  }
}

 

export default App;
