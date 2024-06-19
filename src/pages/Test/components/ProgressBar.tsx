interface ProgressBarProps {
  progress: number
}

const status = {
  0: 'Đợi chờ là hạnh phúc',
  25: 'Bắt đầu tải...',
  50: 'Đang tải, xin chờ một chút...',
  75: 'Sắp hoàn tất...'
}

const getStatusMessage = (progress: number) => {
  if (progress >= 75) {
    return status[75]
  } else if (progress >= 50) {
    return status[50]
  } else if (progress >= 25) {
    return status[25]
  } else {
    return status[0]
  }
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div>
      <div className='mx-auto w-3/4 rounded-full bg-gray-200 dark:bg-gray-700'>
        <div
          className='flex flex items-center justify-center rounded-full bg-blue-600'
          style={{ width: `${progress}%` }}
        >
          <span className='text-sm text-white'>{progress}%</span>
        </div>
      </div>
      <span className='mt-2 block text-center'>{getStatusMessage(progress)}</span>
    </div>
  )
}

export default ProgressBar
