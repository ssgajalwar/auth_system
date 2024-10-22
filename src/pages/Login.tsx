import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import ButtonWrapper from '../components/ButtonWrapper';
import InputComponent from '../components/InputComponent';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import ImageBanner from '../components/ImageBanner';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginImage = require('../../assets/login_page_2x.png');
const data = require('./data.json')


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Login : React.FC<LoginProps> = ({navigation}) => {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const resetPass = () => {
      navigation.navigate('ContactAdmin')
    }
    const handlePress = () => {
      if(data.user === user && data.password === password){
        alert(`Login Success`)
        navigation.navigate('Home')
      }else{
        alert('Incorrect Credentials, You can reset the password')
      }
    } 
  return (
    <View style={styles.container}>
      <ImageBanner image={LoginImage} opacity={0.7}>
        <></>
      </ImageBanner>
      <Form>
        <InputComponent placeholder='User ID' secureText={false} value={user} setValue={setUser}/>
        <InputComponent placeholder='Password' secureText={true} value={password} setValue={setPassword}/>
        <TouchableOpacity onPress={() => resetPass()}>
            <Text style={styles.link}>Forgot your password?</Text>
        </TouchableOpacity>
      </Form>
      <ButtonWrapper title="Log In" enabled={false} handlePress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C396C',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  link: {
    color: '#3A69B2',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});


export default Login