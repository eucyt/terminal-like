import React, { useEffect } from 'react'

interface Props {
  commandText: string
  typingDelay?: number
  className?: string
  cursor?: boolean
}

const TypingCommand: React.VFC<Props> = ({
  commandText,
  className,
  typingDelay = 50,
  cursor = false,
}) => {
  const [typed, setTyped] = React.useState(false)
  const [typingText, setTypingText] = React.useState('')
  const charIterator = commandText[Symbol.iterator]()

  const typeNextChar: () => void = () => {
    const nextChar = charIterator.next()
    if (nextChar.done) {
      setTyped(true)
      return
    }
    setTypingText((current) => current + nextChar.value)
  }

  useEffect(() => {
    while (!typed) {
      const timerId = setInterval(typeNextChar, typingDelay)
      clearInterval(timerId)
    }
  }, [])

  return (
    <div
      className={className + (cursor ? ' cursor-blink' : '')}
      style={{ whiteSpace: 'pre-line' }}
    >
      {typingText}
    </div>
  )
}

export default TypingCommand
