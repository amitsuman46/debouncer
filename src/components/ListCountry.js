import React, { useEffect, useRef, useState } from "react";
import ListItem from "./ListItem";

const ListCountry = () => {
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchCountryList();
  }, [input]);

  const fetchCountryList = async () => {
    try {
        const data = await fetch("http://localhost:3000/countries?q=" + input);
        if (!data.ok) {
          setError(true); 
          return;
        }
        const jsonData = await data.json();
        setFetchedData(jsonData);
        setError(false); 
      } catch (error) {
        setError(true); 
      }
  };

  const handleInputChange = () => {
    setInput((prevInput) => {
      const newInput = inputRef.current.value;
      // console.log(newInput);
      return newInput;
    });
  };
  return (
    <div className="">
      <div>
        <input
          className={`p-2 m-2 border w-96 ${error ? 'border-red-500' : 'border-black'}`} 
          type="text"
          placeholder="start entering country name"
          ref={inputRef}
          onChange={handleInputChange}
        />
      </div>
      <div className="p-2 m-2 font-bold border border-purple-700">
        {fetchedData.length > 0 &&
          fetchedData.map((country) => (
            <ListItem key={country.code} name={country.name} />
          ))}
      </div>
    </div>
  );
};

export default ListCountry;
