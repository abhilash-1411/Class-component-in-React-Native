import React ,{Component} from 'react';
import {Text,View,Button} from 'react-native';

class Student extends Component {
    render(){
        return(
            <View>
                <Text style={{fontSize:25,color:'green'}}>Student Component</Text>
            </View>
        )
    }
}
export default Student;
