import { axiosInstance } from '.'

const axiosGet = (url: string) => {
  return axiosInstance({
    method: 'get',
    url
  })
}

const axiosPost = (url: string, data: any) => {
  return axiosInstance({
    method: 'post',
    url,
    data
  })
}

const axiosPatch = (url: string, data: any) => {
  return axiosInstance({
    method: 'patch',
    url,
    data
  })
}

const axiosDelete = (url: string) => {
  return axiosInstance({ method: 'delete', url })
}

export { axiosGet, axiosPost, axiosPatch, axiosDelete }
