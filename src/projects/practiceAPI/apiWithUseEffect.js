import React, { useState, useEffect } from "react";


const ApiUseEffectFirst =  () => {
  const [personName, setPersonName] = useState(null);
    useEffect(() => {
    async function fetchAPI(url) {
        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.results;
        setPersonName(item.name);
    }
    fetchAPI('https://api.randomuser.me/');
}, [])

  return (
    <div>
      <p>person name :  {personName==null ? "........" : personName.first + " " + personName.last }</p>
    </div>
  );
};

export default ApiUseEffectFirst;