import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import listingsData from '@/assets/data/airbnb-listings.json'
import { listing } from '@/interface/listing';
import Animated from 'react-native-reanimated'

const page = () => {
    const { id } = useLocalSearchParams<{ id: string}>();
const laa: listing=(listingsData as any[]).find((item)=> item.id ===id);
  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image source={ { uri: laa.xl_picture_url } } style={styles.image}/>
      </Animated.ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  image:{
    height:300,
    width:'100%',
  }
})

export default page