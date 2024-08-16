import { View, Text, ListRenderItem,FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'expo-router';
import { listing } from '@/interface/listing';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInRight, FadeOutLeft } from 'react-native-reanimated';

interface Props{
  listings: any[];

  category: string;
}
const Listing = ({listings: items, category}: Props) => {
  const [loading, setloading]=useState(false);
  const listRef = useRef<FlatList>(null);
  useEffect(()=>{
    console.log("reload listings ",items.length);
    setloading(true);
    setTimeout(() => {
      setloading(false);
      
    }, 200);

  },[category]);



  const renderRow: ListRenderItem<listing> =({item} )=>(
    <Link href={'/listing/${item.id}'} asChild>
    <TouchableOpacity activeOpacity={.82} >
      <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
      <Image source={{uri:item.medium_url}} style={styles.image}/>
      <TouchableOpacity  style={{ position: 'absolute', right:30,top:30}}>
        <Ionicons name='heart-outline' size={24} color={'black'} />
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
        <Text style={{fontSize:13 ,  fontFamily:'mon'}} >{item.host_location.length > 40 ? `${item.host_location.substring(0, 35)}...`: item.host_location}</Text>
        <View style={{flexDirection:'row'}}>
          <Ionicons name='star' size={20}></Ionicons>
          <Text  style={{fontFamily:'mon-sb'}}> {item.review_scores_rating }</Text>
          
        </View>
      </View>
      <Text style={{fontSize:12 ,  fontFamily:'mon-sb'}}>Ajoutee il y a {item.last_scraped} ans</Text>
      <View style={{gap:4, flexDirection:'row',marginTop:10}}>
      <Text style={{fontSize:16 ,  fontFamily:'mon'}}>{item.price}$ </Text>
      <Text style={{fontSize:15 ,  fontFamily:'mon-sb'}}>par nuit</Text>
      

      </View>
      </Animated.View>
    </TouchableOpacity>
    </Link>
  );
  
  return (
    <View>
      <FlatList 
      renderItem={renderRow}
      ref={listRef}
      data={loading ? [] : items}/>
    </View>
  );
};

const styles = StyleSheet.create({
  listing:{
    padding:16,

  },
  image:{
    width:'100%',
    height:300,
    borderRadius:20

  }
})
export default Listing