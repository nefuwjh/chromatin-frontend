export interface PredictioInfo {
  id?: string
  sequence?: string
  count?: number
  desc?: string
  status?: number
}

export interface PredictionBed {
  id?: string
  name?: string
  part?: string
  desc?: string
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
