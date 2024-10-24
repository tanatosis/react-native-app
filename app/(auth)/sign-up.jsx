import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {Link} from 'expo-router'
import { createUser } from '../../lib/appwrite'

export default Signup = () => {
const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
});
const [isSubmitting, setIsSubmitting] = useState(false)

const submit = () =>{
  createUser();

}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[82vh] px-4 my-6">
          <Image 
          source={images.logo}
          resizeMode='contain'
          className="w-[115px] h-[35px]"
          />
          <Text
          className="text-2xl text-white text-semibold mt-10 font-psemibold"
          >Registrate</Text>

          {/*Campos para el formulario */}

          <FormField
          title="Nombre de usuario"
          value={form.username}
          handleChangeText={(e) =>{
            setForm({...form, username: e})}}
            otherStyles='mt-10'
           
          />

          <FormField
          title="Correo electrónico"
          value={form.email}
          handleChangeText={(e) =>{
            setForm({...form, email: e})}}
            otherStyles='mt-7'
            keyboardType='email-address'
          />
            <FormField
          title="Contraseña"
          value={form.password}
          handleChangeText={(e) =>{
            setForm({...form, password: e})}}
            otherStyles='mt-7'
             />

             <CustomButton 
             title ="Iniciar sesión"
             handlePress={submit}
             containerStyles="mt-7"
             isLoading={isSubmitting} 
          />
          <View className="justify-center pt-5 flex-row gap-2">
               <Text className="text-gray-100 text-lg font-pregular ">
               ¿Ya tienes una cuenta?
               
                </Text>
                <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Iniciar sesión</Link>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

