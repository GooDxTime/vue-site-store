<template>
  <li class="cart__item product">
              <div class="product__pic">
                <img :src="item.product.image" width="120" height="120" alt="item.product.title">
              </div>
              <h3 class="product__title">
                {{item.product.title}}
              </h3>
              <span class="product__code">
                Артикул: {{item.product.id}}
              </span>

              <div class="product__counter form__counter">
                <button type="button" aria-label="Убрать один товар" @click.prevent="decProductAmout(item.productId)">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" v-model.number="amout" name="count">

                <button type="button" aria-label="Добавить один товар" @click.prevent="incProductAmout(item.productId)">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price">
                {{ item.amout * item.product.price | numberFormat }} ₽
              </b>

              <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины" @click.prevent="deleteProduct(item.productId)">
                <svg width="20" height="20" fill="currentColor">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>
</template>

<script>

import numberFormat from "@/helpers/numberFormat";
import {mapMutations} from "vuex";

export default {
    filters: {numberFormat},
    props: ['item'],
    computed:{
        amout:{
            get(){
                return this.item.amout
            },
            set(value){
                this.$store.commit('updateCartProductAmout',{productId: this.item.productId, amout:value});
            }
        }
    },
    methods: {
        ...mapMutations({deleteProduct: 'deleteCartProduct', incProductAmout: 'incrementCartProductAmout', decProductAmout: 'decrementCartProductAmout'})
    }

}
</script>

<style>

</style>