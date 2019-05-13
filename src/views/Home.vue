<template>
  <div id="app">
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="card text-white bg-warning mb-3" style="max-width: 20rem;">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h4 class="card-title">Warning card title</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quibusdam quis
          repellendus ut. Accusamus aliquam, amet assumenda delectus distinctio dolore eaque esse iste mollitia omnis
          quae repudiandae suscipit, ut voluptate?</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
//
// export default {
//   name: 'home',
//   components: {
//     HelloWorld,
//   },
// };
export default {
  data() {
    return {
      users: [
        {
          Nom: 'Carter',
          Marque: 'Smart',
          type: 'Break',
          couleur: 'green',
          espace_utile: 15,
          kilometrage: 173016,
          carburant: 'Diesel',
          puissance: 106,
        },
        {
          Nom: 'Blair',
          Marque: 'Ferrari',
          type: 'Break',
          couleur: 'indigo',
          espace_utile: 9,
          kilometrage: 98113,
          carburant: 'GPL',
          puissance: 196,
        },
      ],
    };
  },
};

</script>
