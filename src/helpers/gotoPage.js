import eventBus from '@/EventBus'

export default function gotoPage(pageName, pageParams){
    eventBus.$emit('gotoPage', pageName, pageParams)
  }