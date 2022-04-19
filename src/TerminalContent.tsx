import React from 'react';
import TypingCommand from './components/TypingCommand';
import CommandResponse from './components/CommandResponse';

type Props = {
  className: string;
};

const TerminalContent: React.VFC<Props> = (props) => {
  return (
    <div>
      <TypingCommand className={props.className} />
      <CommandResponse className={props.className} />
    </div>
  );
};

export default TerminalContent;
