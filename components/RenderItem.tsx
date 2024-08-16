import { View, Text,StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { OnboardingData } from '@/assets/data/onbordData'
import LottieView from 'lottie-react-native'
import Animated, { Extrapolation, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Link } from 'expo-router';


type Props={
    item:OnboardingData;
    index:number;
    x:SharedValue<number>
}
const RenderItem = ({item, index,x}: Props) => {
    const{width:SCREEN_WIDTH}=useWindowDimensions();

    const circleAnimation= useAnimatedStyle(()=>{
        const scale = interpolate(
            x.value,
            [
                (index-1)* SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index+1)* SCREEN_WIDTH
            ],
            [1,4,4],
            Extrapolation.CLAMP,
        )
        return{
            transform: [{ scale:scale}],
        }
    })
  return (
    <View style={[styles.itemContainer,{width:SCREEN_WIDTH}]}>
        <View style={styles.circle}>
            <Animated.View style={[{width:SCREEN_WIDTH, height:SCREEN_WIDTH, backgroundColor:item.backgroundColor,
            borderRadius:SCREEN_WIDTH/2,},
          circleAnimation,
        ]
            } />
        </View>
        <View>
        <LottieView
  source={item.animation}
  style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9 }}
  autoPlay
  loop
  speed={item.id === 5 ? 1.5 : 50} // Doublé la vitesse si item.id === 5, sinon la vitesse est normale (1)
/>
        
        <Text style={styles.itemText}>
            {item.id === 5 ? ( <Link href={'/(tabs)/'}>{item.text}</Link>) : (<>{item.text}</>)}
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        justifyContent:'space-around',
        alignItems:"center",
        marginBottom:120,
        
        



    },
    itemText:{
        fontFamily:'mon',
        textAlign:"center",
        marginBottom:10,
        marginHorizontal:20,
        

    },
    circle:{
        ...StyleSheet.absoluteFillObject,
        alignItems:'center',
        justifyContent:'flex-end'
    }
})

export default RenderItem