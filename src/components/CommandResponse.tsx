import React from 'react';

interface Props {
  className: string;
}

const CommandResponse: React.VFC<Props> = (props) => {
  return <div className={props.className} />;
};

export default CommandResponse;
