interface ManyPreMedicinalInfo {
  msg: string
  code: number
  data: PreMedicinalInfo[]
}

interface PreMedicinalInfo {
  id: string
  name: string
  distribution: string
  effect: string
  img?: string
}

export type { ManyPreMedicinalInfo, PreMedicinalInfo }
