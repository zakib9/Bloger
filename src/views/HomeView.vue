<script setup>
import { computed, inject, ref, watch } from 'vue';

const store = inject("store")
</script>

<template>
  <div class=" w-full flex flex-col items-center justify-between min-h-screen p-20">
    <div class=" flex flex-col gap-10 items-center w-full">
      <h3 class=" text-6xl">Bloger</h3>
      <div class=" w-full flex flex-col gap-10">
        <h5 class=" text-5xl">Blogs:</h5>
        <div class="flex flex-col gap-2 text-xl">
          <p><span class=" font-bold">Title: </span>title</p>
          <p><span class=" font-bold">Blog 1: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In culpa reiciendis commodi hic soluta. Modi sint doloremque sit voluptatibus. Temporibus quod veniam beatae debitis iste placeat eum dolore eaque dicta!</p>
        </div>

      </div>
    </div>
    <div class="flex flex-col md:flex-row w-full mt-2 bg-white rounded-lg  mx-auto p-8  gap-4">
       
        

        <textarea 
        v-model="comment"  
        placeholder="Add a Blog..." 
        class="block w-full rounded-lg border border-solid py-1.5 pl-4 text-gray-900 shadow-sm  ring-gray-400 placeholder:text-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-indigo-600 focus:ring-1 " />
        <div class="flex justify-between">
            <button
           
            type="submit"
             class="h-10 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Blog</button>
           
          
        </div>
    </div>
  </div>
</template>
