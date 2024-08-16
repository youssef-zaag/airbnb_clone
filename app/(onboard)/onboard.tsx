import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import data, { OnboardingData } from '@/assets/data/onbordData'
import RenderItem from '@/components/RenderItem'
import { Link } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'


const onboard = () => {
    const flatlistRef=useAnimatedRef<FlatList<OnboardingData>>();
    const x=useSharedValue(0)
    const onScroll=useAnimatedScrollHandler({
        onScroll: event=>{
            x.value=event.contentOffset.x;
        },
    })
  return (
    <View style={styles.container}>
        <Animated.FlatList
        ref={flatlistRef}
        onScroll={onScroll}
        data={data}
        renderItem={({item,index})=>{
            return <RenderItem item={item} index={index} x={x}/>
        }}
        keyExtractor={item=>item.id}
        scrollEventThrottle={0}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        />

        
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,

    }
})
export default onboard