export interface PredictioInfo {
  spid?: string
  id?: string
  sequence?: string
  time?: string
  count?: number
  desc?: string
  status?: number
}

export interface PredictionBed {
  spid?: string
  id?: string
  sequence?: string
  count?: number
  desc?: string
  status?: number
  part?: string
  name?: string
}

export interface User {
  id?: string
  account?: string
  password?: string
}

export interface ResultVO<T> {
  code: number
  message?: string
  data: T
}
