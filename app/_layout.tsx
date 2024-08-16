
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

const CLERK_PUBLISHABLE_KEY =process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;


const tokenCache={
  async getToken(key:string){
    try{
      return SecureStore.getItemAsync(key);
        }
    catch(err){
      return null;
    }
  },
  async saveToken(key:string, value:string){
    try{
      return SecureStore.setItemAsync(key,value);
        }
    catch(err){
      return;
    }
  },
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(onboard)/onboard',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'mon': require('../assets/fonts/Montserrat-Bold.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}><RootLayoutNav /></ClerkProvider>);
}

function RootLayoutNav() {
  const router= useRouter();
  const { isLoaded, isSignedIn }= useAuth();

  


  return (
  
  <Stack>
          <Stack.Screen name="(onboard)/onboard" options={{ headerShown: false }} />

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      

        <Stack.Screen name="(modals)/login" options={{title:'login or sign up ',
         presentation:'modal',
         headerTitleStyle:{
          fontFamily:'mon-sb',

            },
            headerTitleAlign:'center',
          headerLeft:() => (
            <TouchableOpacity onPress={()=> router.back()} >
              <Ionicons name='close-outline' size ={28}></Ionicons>
            </TouchableOpacity>

          )
      
       }} />



       <Stack.Screen name="(modals)/booking" options={{title:'login or sign up ',
         presentation:'transparentModal',
         animation:'fade',
         headerTitleStyle:{
          fontFamily:'mon-sb',

            },
         
          headerLeft:() => (
            <TouchableOpacity onPress={()=> router.back()} >
              <Ionicons name='close-outline' size ={28}></Ionicons>
            </TouchableOpacity>

          )

      
       }} />
       <Stack.Screen name="listing/[id]" options={{ headerTitle:'', headerTransparent:true}} />
    </Stack>
    
  );
}
