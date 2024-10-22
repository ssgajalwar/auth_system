import React, {useState}from 'react'
import { TextInput,StyleSheet,Text,View } from 'react-native'

interface InputComponentProps{
    secureText : boolean,
    placeholder: string,
    value:string,
    setValue:(newValue: string) => void,

}

const InputComponent : React.FC<InputComponentProps> = ({secureText,placeholder,value,setValue}) => {
  return (
    <View>


      {value.length > 0 && <Text style={styles.label}>{placeholder}</Text> }
      <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureText} // Masks the input text
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholderTextColor="#1D1D1D"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    label: {
      fontSize: 14,
    },
    input: {
      height: 40,
      borderBottomColor:'gray',
      borderBottomWidth: 1,
      color: "#1D1D1D",
      fontSize:18
    },
    inputDanger:{
      height: 40,
      borderBottomColor:'gray',
      borderBottomWidth: 1,
      color:'#FF0001',
      fontSize:18
    }
  });
  

export default InputComponent