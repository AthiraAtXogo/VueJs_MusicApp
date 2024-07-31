
<!-- <template>
  <h1>About</h1>
  <base-button />
</template> -->


<template>
  <main>
    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
     
     <div
       class="absolute inset-0 w-full h-full bg-contain introduction-bg"
       style="background-image: url(/assets/img/header.png)"
     ></div>
     <div class="container mx-auto">
       <div class="text-white main-header-content">
         <h1 class="font-bold text-5xl mb-5">{{ $t('about.listen') }}</h1>
         <p class="w-full md:w-8/12 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laudantium atque eveniet pariatur alias voluptates ab molestias unde est amet similique iusto ea eligendi a, incidunt quos. Quia minima perspiciatis reiciendis est asperiores porro, perferendis possimus debitis illo, sequi ab excepturi nostrum ipsum vel nulla exercitationem doloribus veniam. Nulla voluptatum, unde libero consequatur quibusdam blanditiis totam laboriosam enim. Animi eveniet, quos officia saepe voluptate, exercitationem maxime neque molestias dolor deserunt sed porro, similique non rerum nemo tempora alias explicabo? Quaerat voluptatibus facilis cumque sed dicta fuga iste impedit consectetur rem cum beatae repudiandae veniam deleniti amet hic quis optio doloremque reiciendis iusto, magnam esse facere laboriosam? Ipsa excepturi recusandae adipisci ipsum nihil consequatur totam deserunt iure voluptatum fugit suscipit saepe libero nulla soluta voluptate magnam quos quisquam, officiis molestiae voluptas molestias, tenetur beatae sint pariatur? Incidunt animi quas asperiores! Iure, ipsum ducimus temporibus soluta voluptatibus aspernatur! Nesciunt animi nisi aut? Excepturi deserunt, veniam consequatur provident qui ipsam quaerat, quibusdam animi itaque consectetur ullam dolorum quo nulla repudiandae id facere cumque. Et deserunt tenetur facere, saepe totam incidunt? Quas ut fugit facilis illum ipsum.  

         </p>
       </div>
     </div>

     <img
       class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
       src="/assets/img/introduction-music.png"
     />
   </section>

   <!-- Main Content -->
   
  </main>
</template>

<script>
// import {songsCollection} from "@/includes/firebase.js"
// import AppSongItem from '@/components/SongItem.vue';
// import { icon } from "@fortawesome/fontawesome-svg-core";
// import IconSecondary from '@/directives/icon-secondary'


export default {
 name:'Home',
//  components:{
//    AppSongItem
//  },
//  directives:{
//    'icon-secondary' :IconSecondary,
//  },
//  data(){
//    return{
//      songs:[],
//      maxPerPage:25,
//      pendingRequest:false,
//    }
//  },
//  async created(){
//    this.getSongs();

//    window.addEventListener('scroll',this.handleScroll);
//  },
//  beforeUnmount(){
//    window.removeEventListener('scroll',this.handleScroll)
//  },
//  methods:{

//    handleScroll(){
//      const {scrollTop , offsetHeight} = document.documentElement;

//      const {innerHeight} = window;
//      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

//      if(bottomOfWindow){
//        this.getSongs();
//      }

//    },
//    async getSongs(){

//      if(this.pendingRequest){
//        return;
//      }

//      this.pendingRequest = true;
//     let snapshots;
//     if(this.songs.length){
//      const lastDoc = await songsCollection.doc(this.songs[this.songs.length - 1].docID).get();
     
//      snapshots = await songsCollection
//      .orderBy('modified_name')
//      .startAfter(lastDoc)
//      .limit(this.maxPerPage).get();

//     }else{
//       snapshots = await songsCollection
//      .orderBy('modified_name')
//      .limit(this.maxPerPage).get();
//     }
// snapshots.forEach(document => {
//  this.songs.push({
//    docID:document.id,
//    ...document.data()
//  })
// });

// this.pendingRequest = false;

//    }
//  }
}
</script>