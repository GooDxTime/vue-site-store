<template>
  <ul class="catalog__pagination pagination">
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow " href="#" :class="{'pagination__link--disabled':1 === page}" aria-label="Предыдущая страница" @click.prevent="paginate(page-1)">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
            </a>
          </li>
          <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
            <a href="#" class="pagination__link" :class="{'pagination__link--current':pageNumber === page}" @click.prevent="paginate(pageNumber)">
              {{ pageNumber }}
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled':pages === page}" href="#" aria-label="Следующая страница"  @click.prevent="paginate(page+1)">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-right" ></use>
              </svg>
            </a>
          </li>
        </ul>
</template>

<script>
export default {
    model: {
        prop: 'page',
        event: 'paginate',
    },
    props: ['page','count','perPage'],
    computed: {
        pages(){
            return Math.ceil(this.count / this.perPage);
        }
    },
    methods: {
        paginate(page){
          console.log()
          if(!(page>0&&page<=this.count / this.perPage)){
            return
          }
            this.$emit('paginate',page)
        }
    }
}
</script>

<style>

</style>