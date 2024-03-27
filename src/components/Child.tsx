import { memo } from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// use React.memo api to stop re-rendering unless it's parent is re-rendered.
// eslint-disable-next-line react/display-name
const Child = memo(({ onChange }: Props) => {
  console.log('child re-rendered!');

  return <input type="text" onChange={onChange} />;
});

export default Child;
