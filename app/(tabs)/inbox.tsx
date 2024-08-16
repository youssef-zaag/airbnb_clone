import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const page = () => {
  return (
    <View style={styles.container}>
      
      <LottieView style={{flex:1,width:500 }} source={require('@/assets/images/Aniki Hamster.json')} autoPlay loop/>
    
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    height:300,
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    paddingVertical:5,
    justifyContent:'space-around'
  }
})
export default page