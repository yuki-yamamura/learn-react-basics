import Child from '@/components/Child';
import { useCallback, useState } from 'react';

const Parent = () => {
  const [isChecked, setIsChecked] = useState(false);

  // use useCallback hook to memorize the callback function because it is passed to children.
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };

  console.log('parent re-rendered!');

  return (
    <>
      <div>
        {`Have you read a book today?: ${isChecked ? 'Yes' : 'No'}`}
        <input type="checkbox" onClick={handleClick} />
      </div>
      <Child onChange={handleChange} />
    </>
  );
};

export default Parent;
