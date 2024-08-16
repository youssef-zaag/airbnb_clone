import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'



const ExploreHeader = () => {
  return (
    <SafeAreaView style={{flex:1}}>


      <View style={styles.container}>
         <View style={styles.actionRow}>
            <Link href={'/(modals)/booking'} asChild>
                <TouchableOpacity style={styles.searchBtn} activeOpacity={0.8} >
                    <Ionicons name='search' size={24}></Ionicons>
                <View>
                    <Text style={{fontFamily: 'mon'}}>where to go</Text>
                    <Text style={{fontFamily: 'mon-sb'}}>Anywhere to any week </Text>


                </View>

                </TouchableOpacity>

            </Link>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.5}>
        <Ionicons name="options-outline" size={18} color="black" />
        </TouchableOpacity >
         </View>
      </View>
      





    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:130,
        
    },
    actionRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:24,
        marginTop:20,
        gap:2,


    },
    filterBtn:{
        borderRadius:24,
        borderColor:Colors.grey,
        borderWidth:1,
        padding:10,
        elevation:4,
        backgroundColor:'#fff'
        



    },
    searchBtn:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        borderColor:'#c2c2c2',
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:30,
        padding:18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor:'#fff',
        elevation:6,
        height:70,
        width:280
        
        



    }

})

export default ExploreHeader