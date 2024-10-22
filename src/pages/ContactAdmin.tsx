import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import ButtonWrapper from '../components/ButtonWrapper';
import InputComponent from '../components/InputComponent';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import ImageBanner from '../components/ImageBanner';
const ContactImage = require('../../assets/contact_2x.png') 


type ContactAdminScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContactAdmin'>;

interface ContactAdminProps {
  navigation: ContactAdminScreenNavigationProp;
}

const ContactAdmin : React.FC<ContactAdminProps> = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('SetPassword')
    } 
  return (
    <View style={styles.container}>
      <ImageBanner image={ContactImage} opacity={1} >
        <></>
      </ImageBanner>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Contact your admin</Text>
        <Text style={styles.subHeading}>Password can only be reset by your admin. Contact the admin and request them to reset your password.</Text>
        <Text style={styles.subHeading}>For the admins assistance - to reset the password the admin will have to:</Text>
        <Text style={styles.subHeading}>Open Q2Pay → Settings → Users → Select user → Reset password</Text>
        <Text style={styles.paragraph}>Password reset successfully?</Text>
      </View>  
      <ButtonWrapper title="Log In" enabled={true} handlePress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c3963',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  textContainer:{
    display:'flex',
    gap:20,
    paddingHorizontal:20,
    paddingVertical:0,
    textAlign:'center',
    textAlignVertical:'center',
    height:'50%'
  },
  heading:{
    color:"#fff",
    fontSize:24,
    textAlign:'center',
    marginTop:-30,
    marginBottom:20
  },
  subHeading:{
    color:"#fff",
    fontSize:16,
    textAlign:'center'
  },
  paragraph:{
    color:"#fff",
    fontSize:14,
    textAlign:'center',
    marginTop:50
  }
});


export default ContactAdmin