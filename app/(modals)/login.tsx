import { View, Text,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { defaultStyles } from '@/constants/styles'
import Colors from '@/constants/Colors'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useOAuth } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'


enum Strategy{
  Google = 'oauth_google',
  Facebook= 'oauth_facebook',
}
const login = () => {
  useWarmUpBrowser();
  const router =useRouter();
  const {startOAuthFlow: googleAuth} = useOAuth({strategy: 'oauth_google'});
  const {startOAuthFlow: facebookAuth} = useOAuth({strategy: 'oauth_facebook'});

  const onSelectAuth =async(strategy:Strategy)=>{
    const selectedAuth={
      [Strategy.Google]: googleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];

    try{
      const{ createdSessionId, setActive}= await selectedAuth();
      console.log('OAuth response',createdSessionId);
      if (createdSessionId){
        setActive!({ session: createdSessionId})
        router.back();
        router.back();
      }
    }catch(err){
        console.error('OAuth error', err);
      }
    };

  
  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' placeholder='email' style={[defaultStyles.inputField, { marginBottom:30}]}/>
      <TouchableOpacity style={defaultStyles.btn}>
      <Text style={[defaultStyles.btnText]}>continue</Text>
      </TouchableOpacity>
      <View style={styles.seperatorview}>
      <View style={{
        borderBottomColor:'#000',
        borderBottomWidth:StyleSheet.hairlineWidth,
        flex:1,

      }}/>
      <Text style={ styles.seperator}>or</Text>
      <View style={{
        flex:1,
        borderBottomColor:'#000',
        borderBottomWidth:StyleSheet.hairlineWidth,

      }}/>
      </View>
      <View style={{gap:20}}>
      <TouchableOpacity style={styles.btnOutline}>
      <Feather name="phone" size={24} color="black" style={defaultStyles.btnIcon } />
      <Text style={[styles.btnOutlineText]}>continue with phone</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnOutline}  onPress={()=> onSelectAuth(Strategy.Google)}>
      <Ionicons name="logo-google" size={24} color="black" style={defaultStyles.btnIcon } />
      <Text style={[styles.btnOutlineText]}>continue with google</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btnOutline}  onPress={()=> onSelectAuth(Strategy.Facebook)}>
      <Feather name="facebook" size={24} color="black" style={defaultStyles.btnIcon } />
      <Text style={[styles.btnOutlineText]}>continue with facebook</Text>
      </TouchableOpacity>
      
      </View>

      </View>
    
  )
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    padding: 26,
  },
  seperatorview:{
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    marginVertical:30,
  },
  seperator:{
    fontFamily:'mon-sb',
    color: Colors.grey,

  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    },
    btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
    },
});

export default login