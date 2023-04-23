interface ReqTagsMsg {
  msg: string
  code: number
  data: TagsGroup
}

interface TagsGroup {
  xing: string[]
  jing: string[]
  wei: string[]
}

export type { ReqTagsMsg }
