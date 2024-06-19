import { useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'
import axios, { AxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'

const fetchVideo = () => {
  return axios.get(
    'https://res.cloudinary.com/dswainylr/video/upload/v1718816194/default/gear_5_ng%E1%BA%A7u_b%C3%A1_ch%C3%A1y_flmzmk.mp4'
  )
}

function Test() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const options: AxiosRequestConfig = {
      responseType: 'blob',
      onDownloadProgress: (progressEvent) => {
        const percentComplete = Math.floor((progressEvent.loaded / (progressEvent.total ?? 1)) * 100)
        setProgress(percentComplete)
      }
    }

    axios
      .get(
        'https://res.cloudinary.com/dswainylr/video/upload/v1718818432/default/Y2meta.app-ANH_TH%C3%94I_NH%C3%82N_NH%C6%AF%E1%BB%A2NG_-_AN_CLOCK_KI%E1%BB%80U_CHI_COVER_-_720p_mxhlcn.mp4',
        options
      )
      .then((res) => {
        const videoUrl = URL.createObjectURL(res.data)
        const videoElement = document.getElementById('video')

        if (videoElement) {
          const html = `<video src="${videoUrl}" controls autoplay style='width: '100%'></video>`
          videoElement.insertAdjacentHTML('beforeend', html)
          toast.success('Lấy dữ liệu video thành công!')
        }
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div id='video' className='mx-auto w-3/4 py-5'></div>
      {progress !== 100 && <ProgressBar progress={progress} />}
    </>
  )
}

export default Test
