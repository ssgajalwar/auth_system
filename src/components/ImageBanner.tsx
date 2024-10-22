import React, { ReactNode } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

interface ImageBannerProps{
    image:any,
    opacity:number,
    children:ReactNode
}

const ImageBanner : React.FC<ImageBannerProps> = ({children,image,opacity}) => {
  styles.image.opacity  = opacity;  
  return (
    <View style={styles.container}>
        <Image 
            source={image}
            style={styles.image}
            
        />
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        height:"37%",
        width:"100%",
        paddingVertical:30,
        paddingHorizontal:30,
        justifyContent:'center'
        
    },
    image : {
        width:'auto',
        height:"80%",
        resizeMode:'contain',
        opacity:1
        // backgroundColor:'black'
    }
})
export default ImageBanner