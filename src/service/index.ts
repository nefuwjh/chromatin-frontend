import { useGet, usePost } from '@/fetch'
import type { PredictioInfo, AddMessage } from '@/type'

export const getResultsService = async () => {
  const { data } = await useGet<{ results: PredictioInfo[] }>(`results`)
  console.log('1001', data.value?.data.results ?? [])
  return data.value?.data.results ?? []
}

export const addService = async (addMessage: AddMessage) => {
  const resp = await usePost<{ addMessage: AddMessage }>('file/upload/predict', addMessage)
  const token = resp.response.value?.headers.get('token')
  token && sessionStorage.setItem('token', token)
}
