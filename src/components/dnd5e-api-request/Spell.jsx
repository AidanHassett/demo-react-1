import {useEffect, useState} from 'react';
import axios from "axios";

import SpellCard from "./SpellCard";

const Spell = ({spellId}) => {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co" + spellId.url)
      .then((response) => {
        setData(response.data);
      })
  }, [spellId]);

  return (
    <SpellCard spell={data} />
  )
}

export default Spell;
