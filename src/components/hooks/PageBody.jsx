import {useEffect, useState} from 'react';

import HeadBar from "./HeadBar";

const PageBody = () => {

  const [value, setValue] = useState("");

  const call = (input) => {
    setValue(input);
    console.log("changed");
  }

  return (
    <>
      <input type="text" name="box" id="box" onChange={(event) => call(event.target.value)}/>
      <HeadBar value={value}/>
    </>
  )
}

export default PageBody;
