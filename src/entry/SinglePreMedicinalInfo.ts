import type { PreMedicinalInfo } from './PreMedicinalInfo'

interface SinglePreMedicinalInfo {
  msg: string
  code: number
  data: PreMedicinalInfo
  recommend: PreMedicinalInfo[]
}

export type { SinglePreMedicinalInfo }
