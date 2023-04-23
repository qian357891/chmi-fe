import type { PreMedicinalInfo } from './PreMedicinalInfo'

interface ReqMedicinalInfo {
  msg: string
  code: number
  data: MedicinalInfo
  recommend: PreMedicinalInfo[]
}

interface MedicinalInfo {
  id: string
  name: string
  alias: string
  morphology: string
  distribution: string
  processing: string
  properties: string
  type: string
  effect: string
  usage: string
  constituent: string
  formula: string
  pharmacology: string
  taboo: string
  img: string[]
}

export type { ReqMedicinalInfo }
