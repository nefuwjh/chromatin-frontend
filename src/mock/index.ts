import { tableData } from '@/data'
import type { PredictioInfo, ResultVO } from '@/type'
import { createServer } from 'miragejs'
const server = createServer({})
server.namespace = 'api'

server.get('results', () => {
  const resultVO: ResultVO<{ results: PredictioInfo[] }> = {
    code: 200,
    data: { results: tableData }
  }
  return resultVO
})
