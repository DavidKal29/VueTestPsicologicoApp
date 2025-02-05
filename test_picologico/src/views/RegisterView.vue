<template>
    <section class="flex flex-col justify-center items-center gap-[50px] p-[20px] bg-gray-50 h-screen">
      <div class="flex flex-col justify-center items-start">
          <h1 class="font-bold text-blue-500 text-[35px]">REGISTRATE</h1>
          <p class="text-[30px]">Para acceder al <br> formulario debes <br> registrarte primero</p>
      </div>
      
      <div class="flex flex-col justify-center items-start gap-[20px]">
        <input type="email" class="bg-gray-200 rounded py-[8px] px-[36px]" placeholder="Correo electrónico" v-model="email">
        <input type="password" class="bg-gray-200 rounded py-[8px] px-[36px]" placeholder="Contraseña" v-model="password">
        <button class="bg-blue-500 text-white rounded py-[6px] px-[16px]" @click="RegisterUser">Registrate</button>
        <p>¿Ya tienes cuenta? <router-link to="/login" class="text-orange-600">Iniciar sesión</router-link> </p>
      </div>

    </section>
  </template>

<script>
import { auth } from '../firebase/firebase.js'
 import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
export default {
    name:'RegisterView',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async RegisterUser(){
            try {
                let UserCredentials=await createUserWithEmailAndPassword(auth,this.email,this.password)
                await sendEmailVerification(UserCredentials.user)
                alert('Registrado correctamente')
                this.$router.push('/perfil')
            } catch (error) {
                alert(error.message)
            }
        }
    }
}
</script>

<style>

</style>