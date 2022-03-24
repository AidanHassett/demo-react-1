import {useEffect} from 'react';

const HeadBar = ({value}) => {

  let changeCount = 0;

  useEffect(() => {
    document.title = value;
    changeCount += 1;
  }, [value]);

  return (
    <header>
      {changeCount} changes made
    </header>
  )
}

export default HeadBar;
