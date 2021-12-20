<template>
  <ul class="catalog__list">
          <li class="catalog__item" v-for="(product) in products" :key="product.id">
            <ProductItem :image="product.image" :title="product.title" :price="product.price" :id="product.id" />
          </li>

        </ul>
</template>

<script>
    import ProductItem from './ProductItem.vue'

    export default {
      components: {ProductItem},
      props:['products']
    }
</script>

<style>

</style>