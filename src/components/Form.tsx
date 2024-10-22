import React,  { ReactNode } from 'react'
import { Text, View,StyleSheet } from 'react-native'

interface FormProps {
    children:ReactNode
}

const Form : React.FC<FormProps> = ({children}) => {
  return (
    <View style={styles.container}>
       {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        gap:30,
        height:"50%",
        backgroundColor:"#fff",
        width:"100%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingHorizontal:30,
        paddingVertical:"15%"    
    }
})

export default Form