import type { PreMedicinalInfo } from './PreMedicinalInfo'

interface SearchedInfo {
  msg: string
  code: number
  data: PreMedicinalInfo
  recommend: PreMedicinalInfo[]
}

export type { SearchedInfo }
