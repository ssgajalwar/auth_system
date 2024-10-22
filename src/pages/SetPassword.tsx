import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Form from '../components/Form';
import ButtonWrapper from '../components/ButtonWrapper';
import InputComponent from '../components/InputComponent';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import ImageBanner from '../components/ImageBanner';
const Checked = require('../../assets/checked.png')
const Success = require('../../assets/success_2x.png')
const passwordImg = require('../../assets/login_success_2x.png')
const data = require('./data.json')


type SetPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SetPassword'>;

interface SetPasswordProps {
  navigation: SetPasswordScreenNavigationProp;
}

const SetPassword : React.FC<SetPasswordProps> = ({navigation}) => {
    const [oldPass,setOldPass] = useState('')
    const [newPass,setNewPass] = useState('')
    const [confPass,setConfPass] = useState('')
    const [element,setElement] = useState(<></>)
    const [loggedin,setLoggedin] = useState(false)
    const getElement = () => {
      if( oldPass == data.password &&  newPass != oldPass &&  newPass == confPass) {
        return( 
                <View style={{display:'flex',flexDirection:'row'}}>
                  <Image source={Checked} style={styles.checked}/> 
                  <Text> Allow user to set their own password on first login.</Text>
                </View>
              ) 
          
      }else{
        return <Text style={styles.notmatching}>The passwords do not match</Text>;
      }
    }

    const handleLoginClick = () => {
      navigation.navigate('Login')
    }
    const handleSetPassword = () => {      
      setElement(getElement())
      setTimeout(()=>{
        setLoggedin(true)
      })
    } 
  return (
    <View style={styles.container}>
      <ImageBanner image={passwordImg} opacity={1}>
        <Text style={styles.paragraph}>It is mandatory for you to set a new password, which is not the same as the password provided by the admin.</Text>
      </ImageBanner>
      <Form>
        {loggedin ? 
        <>
          <Image source={Success} style={styles.successImage} />
          <Text style={styles.successHeading}>Password reset successfully!</Text>
          <Text style={styles.successParagraph}>Your password has been successfully reset.Click below to Login with new credential</Text>
        </>
        :
        <>
          <Text style={styles.text}>Set New Password</Text>
          <InputComponent placeholder='Old Password' secureText={true} setValue={setOldPass} value={oldPass}/>
          <InputComponent placeholder='New Password' secureText={true} setValue={setNewPass} value={newPass}/>
          <InputComponent placeholder='Confirm Password' secureText={true} setValue={setConfPass} value={confPass}/>
          {element}
        </>
        

        }
      </Form>
      {loggedin ?  
      <ButtonWrapper title='Log In' enabled={true} handlePress={handleLoginClick}/>:
      <ButtonWrapper title='Set New Password' enabled={false} handlePress={handleSetPassword}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A69B2',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text:{
    color: "#1D1D1D",
    fontSize:18,
  },
  paragraph:{
    color:"#fff",
    fontSize:12,
    textAlign:'center',
    marginTop:10
  },
  checked:{
    height:20,
    width:20,
    resizeMode:'contain', 
  },
  notmatching:{
    color:'#FF0001',
  },
  successImage:{
    height:100,
    width:'auto',
    resizeMode:'contain'
  },
  successHeading:{
    fontSize:20,
    textAlign:'center'
  },
  successParagraph:{
    fontSize:16,
    textAlign:'center'
  }
});


export default SetPassword