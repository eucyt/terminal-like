import React from 'react';

interface Props {
  className: string;
}

const TypingCommand: React.VFC<Props> = (props) => {
  return <div className={props.className} />;
};

export default TypingCommand;
