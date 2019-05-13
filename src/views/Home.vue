<template>
  <div id="app">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-3">
            <img src="../assets/car1.png" width="200" alt="">
          </div>
          <div class="col-4">
            <h5 class="card-title">{{users[0].Nom}} est a Louer !</h5>
            <p class="card-text">Puissance: {{users[0].puissance}}ch</p>
            <p class="card-text">Prix: {{users[0].espace_utile}}</p>
          </div>
          <div class="col-5">
            <div class="row">
              <div class="col-6"><img src="../assets/moteur.svg" alt="puissance" width="50px"><p>{{users[0].puissance}}ch</p></div>
              <div class="col-6"><img src="../assets/volant.svg" alt="puissance" width="50px"><p>{{users[0].puissance}}ch</p></div>
            </div>
            <div class="row">
              <div class="col-6"><img src="../assets/moteur.svg" alt="puissance" width="50px"><p>{{users[0].puissance}}ch</p></div>
              <div class="col-6"><img src="../assets/moteur.svg" alt="puissance" width="50px"><p>{{users[0].puissance}}ch</p></div>
            </div>
            <div class="row">
              <div class="col-6"><img src="../assets/moteur.svg" alt="puissance" width="50px"><p>{{users[0].puissance}}ch</p></div>
              <div class="col-6"><img src="../assets/moteur.svg" alt="puissance" width="50px"><p>{{users[0].puissance}}ch</p></div>
            </div>
          </div>
        </div>
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
