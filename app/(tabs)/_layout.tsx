import { View, Text, TouchableOpacity,  } from 'react-native';
import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


const layout = () => {
    
  return (
    
  <Tabs 
     screenOptions={{
        tabBarStyle:{
            height:60,
            

        },
        
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle:{
            fontFamily:'mon',
            top:-8,
            
            
            
        },
    
    }
       }>
        
    <Tabs.Screen name="index"  options={
        {
            tabBarLabel: 'explore',
            tabBarIcon:({color,size}) =>(<Ionicons name="search" color={color} size={size}></Ionicons>)
        }

    }/>
    <Tabs.Screen name="inbox" options={
        {
            tabBarLabel: 'favoris',
            tabBarIcon:({color,size}) =><Ionicons name="heart-outline" color={color} size={size}></Ionicons>
        }

    }/>
    <Tabs.Screen name="explore" options={
        {
            tabBarLabel: 'voyage',
            tabBarIcon:({color,size}) =><FontAwesome6 name="airbnb" color={color} size={size}></FontAwesome6>
        }

    }/>
    
    <Tabs.Screen name="wishlist" options={
        { 
            tabBarLabel: 'messages',
            tabBarIcon:({color,size}) =><MaterialCommunityIcons name="message-outline" color={color} size={size}></MaterialCommunityIcons>
        }

    }/>
    <Tabs.Screen name="profile" options={
        {
            tabBarLabel: 'profile',
            tabBarIcon:({color,size}) =>(<Ionicons name="person-circle-outline" size={30} color={color} ></Ionicons>),
        }

    }/>

    </Tabs>
  );
};

export default layout;