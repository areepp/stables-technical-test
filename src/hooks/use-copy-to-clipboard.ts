import { useCallback, useState } from 'react'

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.error('Clipboard API not supported')
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 5000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }, [])

  return { isCopied, copyToClipboard: copy }
}

export default useCopyToClipboard
