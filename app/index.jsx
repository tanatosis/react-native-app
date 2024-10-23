import { StatusBar } from "expo-status-bar";
import {  Text, View, ScrollView, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from '../constants';
import CustomButton from "../components/CustomButton";



export default function App(){
return(
  <SafeAreaView className="bg-primary h-full" >
    <ScrollView contentContainerStyle={{height: '100%'}}>
      <View className="w-full justify-center items-center min-h-[85vh] px-4">
         <Image 
         source={images.logo}
         className="w-[230px] h-[84px]"
         resizeMode="contain"
         />
         <Image 
         source={images.cards}
         className="max-w-[380px] w-ful h-[300px]"
         resizeMode="contain"
         />
       <View className="relative mt-5">
        <Text className="text-3xl text-white font-bold text-center">
        Creando experiencias digitales {''}
        <Text className="text-secondary-200">Agencia Sombra</Text>
        </Text>
        <Image 
        source={images.path}
        className="w-[136px] h-[15px] absolute -bottom-3 -right-6"
        resizeMode="contain"
        />
       </View>
       <Text
       className="text-sm font-pregular text-gray-100 mt-7 text-center"
       >Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>

       <CustomButton
       title="Inicia sesión con tu correo"
       handlePress={() =>router.push('/sign-in')}
       containerStyles="w-full mt-7"
       />
           
      </View>
    </ScrollView>
    {/* Visible la parte superior con la hora y los status del teléfono */}
    <StatusBar 
    backgroundColor="#161622"
    style='light'
    />
  </SafeAreaView>
);

}

