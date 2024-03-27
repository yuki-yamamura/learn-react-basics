import Child from './Child';
import { useState } from 'react';

const Parent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };

  console.log('parent re-rendered!');

  return (
    <div>
      {`Have you read a book today?: ${isChecked ? 'Yes' : 'No'}`}
      <input type="checkbox" onClick={handleOnClick} />
      <Child />
    </div>
  );
};

export default Parent;
