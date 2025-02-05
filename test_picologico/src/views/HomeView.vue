<template>
  <section class="flex flex-col justify-around items-center p-[20px] bg-gray-50 h-screen">
    <div class="flex flex-col justify-center items-center">
        <h1 class="font-bold text-[25px]">BIENVENIDO AL</h1>
        <h1 class="font-bold text-blue-500 text-[25px]">HUMANÓMETRO</h1>
    </div>
    <p class="text-[20px]">¡Prepárate!Vamos a <br> evaluar tu calidad de <br> humano a través de 5 <br> preguntas. Ideal para <br> reflexionar y <br>compatir con <br> amigos.</p>
    <button class="rounded-full w-[24vh] h-[24vh] shadow-lg p-4 bg-gray-100 text-[20px] text-gray-500">Comenzar</button>
    

    <div class="flex justify-center items-center gap-[20px]">
        <button class="rounded-full w-[6vh] h-[6vh] bg-blue-500 text-white"><i class="fa-solid fa-user"></i></button>
        <button class="rounded-full w-[6vh] h-[6vh] bg-blue-500 text-white"><i class="fa-solid fa-right-from-bracket"></i></button>
        <button class="rounded-full w-[6vh] h-[6vh] bg-blue-500 text-white"><i class="fa-solid fa-house"></i></button>
    </div>
  </section>
</template>

<script>
export default {
    name:'HomeView'
}
</script>

