import React, { useEffect, useRef, useState } from "react";
import ListItem from "./ListItem";

const DebouncedListCountry = () => {
  const inputRef = useRef();
  const [input, setInput] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(false);

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Create a debounced version of fetchCountryList
  const debouncedFetchCountryList = useRef(debounce(fetchCountryList, 300));

  useEffect(() => {
    // Call the debounced function whenever input changes
    debouncedFetchCountryList.current();
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
    setInput(inputRef.current.value);
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

export default DebouncedListCountry;
