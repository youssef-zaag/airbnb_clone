import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import {Link, Stack} from 'expo-router'
import ExploreHeader from '@/components/exploreHeader'
import Listing from '@/components/listing'

import listingsData from '@/assets/data/airbnb-listings.json'
const page = () => {
  const items = useMemo(() =>listingsData as any, [])
  return (
    
    <View style={{flex:1,marginTop:130}}>

      <Stack.Screen
       options={{
        header: ()=> <ExploreHeader />,
      }}
        />
        <Listing listings={items} category={''}/>
        
    </View>
   
    

    

  )
}

export default page