import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,  TouchableOpacity } from 'react-native';
import Todo from './Todo';
import TodoList from './TodoList';

export default class SignUp extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        } 
    }
    

    render(){
        

        return (
            
                <View style={styles.container}>
                 
             
                    
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(username) => this.setState({username})}
                            value={this.state.username}
                            placeholder='Username'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'>
                        </TextInput>  
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            placeholder='Password'
                            placeholderTextColor='white'
                            underlineColorAndroid='transparent'>
                        </TextInput>     
                        <TouchableOpacity onPress={this.signup.bind(this)} style={styles.addButton}>
                            <Text style={styles.addButtonText}>Sign Up</Text>
                        </TouchableOpacity>
                    
                </View>
                

        );

    }

    signup(){
        const axios = require('axios').default;
        axios.post(`http://localhost:8000/api/register`, {
                username: this.state.username,
                password: this.state.password
              })
              .then(function (response) {
                console.log("Registered!")
                this.props.navigation.navigate('LoginPage');
                console.log(response);
                
              })
              .catch(function (error) {
                console.log(error);
              });
    
    }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
        backgroundColor: '#E91E63',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 32,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    }
});
