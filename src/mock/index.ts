import { tableData } from '@/data'
import type { PredictioInfo, ResultVO } from '@/type'
import { createServer, Response } from 'miragejs'
const server = createServer({})
server.namespace = 'api'

server.get('results', () => {
  const resultVO: ResultVO<{ results: PredictioInfo[] }> = {
    code: 200,
    data: { results: tableData }
  }
  return resultVO
})

server.post('add', (_schema, request) => {
  const { prediction, file } = JSON.parse(request.requestBody)
  // console.log('prediction:', prediction, 'file:', file)
  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  if (file) {
    tableData.unshift(prediction)
    return new Response(
      200,
      {
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  resultVO.code = 401
  resultVO.message = '文件为空'
  return resultVO
})
