import React, { useState } from 'react'
import TypingCommand from './components/TypingCommand'
import CommandResponse from './components/CommandResponse'

type Props = {
  className: string
}

const TerminalContent: React.VFC<Props> = (props) => {
  return (
    <div>
      <TypingCommand className={props.className} commandText={'test'} />
      <CommandResponse className={props.className} />
    </div>
  )
}

export default TerminalContent
