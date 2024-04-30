import { useGet } from '@/fetch'
import type { PredictioInfo } from '@/type'

export const getResultsService = async () => {
  const { data } = await useGet<{ results: PredictioInfo[] }>(`results`)
  console.log('1001', data.value?.data.results ?? [])
  return data.value?.data.results ?? []
}
