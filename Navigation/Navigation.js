import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Components/Splash'
import Connexion from '../Components/Connexion'
import creerCompte from '../Components/creerCompte'
import React from 'react'

const Stack = createStackNavigator();
export default function StackNav(){
    return(
         <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}></Stack.Screen>
             <Stack.Screen name="connexion" component={Connexion} options={{headerShown: false}}></Stack.Screen>
             <Stack.Screen name="creerCompte" component={creerCompte} options={{headerShown: false}}></Stack.Screen> 
         </Stack.Navigator>
          </NavigationContainer>
    )
}

{/* Rest of your app code */}
    
    
    
   