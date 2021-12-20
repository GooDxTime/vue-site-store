import Vue from 'vue';
import Vuex from 'vuex';
import products from "@/data/products"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartProducts: [
            
        ]
    },
    mutations:{
        addProductToCart(state, {productId, amout}){
            const item = state.cartProducts.find(item => item.productId === productId);

            if(item){
                item.amout += amout;
            }else{

            state.cartProducts.push({
                productId,
                amout
            });
            }
        },
        updateCartProductAmout(state, {productId, amout}){
            const item = state.cartProducts.find(item => item.productId === productId);

            if(item){
                item.amout = amout
            }
        },
        deleteCartProduct(state, productId){
            state.cartProducts = state.cartProducts.filter(item=>item.productId !== productId);
        },
        incrementCartProductAmout(state, productId){
            const item = state.cartProducts.find(item => item.productId === productId);

            if(item){
                item.amout = item.amout+1
            }
        },
        decrementCartProductAmout(state, productId){
            const item = state.cartProducts.find(item => item.productId === productId);

            if(item){
                if(item.amout==0){
                    return
                }
                item.amout = item.amout-1;
            }
            
        }
    },
    getters: {
        cartDetailProducts(state){
            return state.cartProducts.map(item=>{
                return{
                    ...item,
                    product: products.find(p=>p.id ===item.productId)
                }
            });
        },
        cartTotalPrice(state, getters){
            return getters.cartDetailProducts.reduce((acc,item)=>{
                return item.product.price * item.amout + acc
            },0);
        }
    }
});