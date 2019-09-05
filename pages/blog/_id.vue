<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-body">
                <h1> {{articulo.title}} </h1>
                <p class="small"> {{articulo.nombre}} </p>
                <p>{{articulo.body}} </p>
                <nuxt-link to="/blog" class="btn btn-primary">Atras</nuxt-link>
            </div>
        </div>
    </div>
</template>


<script> 
import axios from 'axios';

export default { 
    // data(){
    //     return  {
        
    // }},  
//   head:{
//     title:'Esta es mi página demo'
//   },
//   async created(){
//       try {
//           const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id} `)

//           this.articulo=res.data;
//           const autor=await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)

//           console.log('Autor : ',autor.data.name);
//           this.articulo.nombre=autor.data.name;

          
          
//       } catch (error) {
//           console.log(error);
          
//       }      
//   },
  async     asyncData({isDev, route, store, env, params, query, req, res, redirect, error}){
      try{
          const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id} `)

          const articulo=res.data;
          const autor=await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)

          console.log('Autor : ',autor.data.name);
          articulo.nombre=autor.data.name;

          return {articulo};

      }catch(error){
          console.log(error);
          return {error:error}
      }

  }
    



}
</script>