<script setup>
import {ref} from 'vue'
import Navbar from '../components/Navbar.vue'
import Drawer from '../components/Drawer/Drawer.vue'
import Footers from '../components/Footer.vue'
const toggle=ref(false)
function myAction(){
  
   toggle.value=!toggle.value;
}
</script>

<template>
    <div class="">
        <q-layout view="lHh Lpr lff">
            <q-header class="bg-white text-dark" >
               <Navbar @my-event="myAction" />
            </q-header>

            <q-drawer v-model="toggle" :width="250" show-if-above :breakpoint="900" class="bg-primary ">
             <Drawer/>
            </q-drawer>
            <q-footer elevated class="bg-white text-dark q-px-md  shadow-up-1 ">
               <Footers/>
            </q-footer>

            <q-page-container>
                <q-page padding class="bg-grey-11">
                    <router-view />
                </q-page>
            </q-page-container>
        
        </q-layout>
    </div>
</template>




<style lang="scss" scoped></style>