import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export const cartStore = new Vuex({
    state(){
        return{
            items:[],
        }
    },
    mutations:{
        addItems:(product)=>{},
        removeProduct:(id)=>{}
    }
});
