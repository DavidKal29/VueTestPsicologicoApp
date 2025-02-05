<template>
    <section class="flex flex-col justify-center items-center gap-[50px] p-[20px] bg-gray-50 h-screen">
      <div class="flex flex-col justify-center items-start">
          <h1 class="font-bold text-blue-500 text-[35px]">ACCEDER</h1>
          <p class="text-[30px]">Si ya tienes cuenta <br> inicia sesión para <br> acceder al formulario</p>
      </div>
      
      <div class="flex flex-col justify-center items-start gap-[20px]">
        <input type="email" class="bg-gray-200 rounded py-[8px] px-[36px]" placeholder="Correo electrónico" v-model="email">
        <input type="password" class="bg-gray-200 rounded py-[8px] px-[36px]" placeholder="Contraseña" v-model="password">
        <button class="bg-blue-500 text-white rounded py-[6px] px-[16px]" @click="loginUser">Acceder</button>
        <p>¿No tienes cuenta? <router-link to="/register" class="text-orange-600">Registrate</router-link> </p>
      </div>

    </section>
  </template>

<script>
import { auth } from '../firebase/firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
export default {
    name:'LoginView',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async loginUser(){
            try {
                const userCredentials=await signInWithEmailAndPassword(auth,this.email,this.password)
                if (!userCredentials.user.emailVerified) {
                    alert('Debes verificar tu cuenta para poder acceder')
                }else{
                    this.$router.push('/perfil')
                }

            } catch (error) {
                alert(error.message)
            }
        }
    }
}
</script>

<style>

</style>