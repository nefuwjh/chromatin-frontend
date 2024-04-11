import { render } from 'vue'

export const createDelConfirmDialog = (index: number) => {
  const node = h(
    defineAsyncComponent(() => import('./DeleteView.vue')),
    { index }
  )
  render(node, document.body)
}
