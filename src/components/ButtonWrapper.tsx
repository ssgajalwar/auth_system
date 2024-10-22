import React from 'react'
import { Text, View, Button, StyleSheet,TouchableOpacity } from 'react-native'

interface ButtonWrapperProps {
  title:string,
  enabled:boolean,
  handlePress:(newValue:string)=> void
}

const ButtonWrapper : React.FC<ButtonWrapperProps> = ({title,enabled,handlePress}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={enabled  ? styles.buttonEnabled : styles.button}
        onPress={()=>handlePress("")}
        >
          <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#DADADA",
    width:"100%",
    height:"100%"
  },
  buttonEnabled:{
    backgroundColor: '#69B76F',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#DADADA",
    width:"100%",
    height:"100%"
  },
  container:{
    width:"100%",
    height:"7%"
  },
  text:{
    fontSize:18,
    color: "#DADADA",
  }
});
export default ButtonWrapper