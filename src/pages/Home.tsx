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


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home : React.FC<HomeProps> = ({navigation}) => {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    
  return (
    <View style={styles.container}>
      <ImageBanner image={LoginImage} opacity={0.7}>
        <></>
      </ImageBanner>
      <Form>
        <Text style={styles.text}>Hello {data.user}</Text>
      </Form>
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
  text: {
    color: 'grey',
    fontSize: 24,
  },
});


export default Home