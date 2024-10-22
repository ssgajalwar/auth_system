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
        height:"42%",
        width:"100%",
        paddingVertical:60,
        paddingHorizontal:30
        // backgroundColor:'#fff'        
    },
    image : {
        width:'auto',
        height:"100%",
        resizeMode:'contain',
        opacity:1
        // backgroundColor:'black'
    }
})
export default ImageBanner