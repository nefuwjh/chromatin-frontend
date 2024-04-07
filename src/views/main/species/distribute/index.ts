import { render } from 'vue'

export const showDistributeDialog = () => {
  const node = h(defineAsyncComponent(() => import('./Dialog.vue')))
  render(node, document.body)
}
