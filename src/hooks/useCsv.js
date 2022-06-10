import { useState, useEffect } from 'react';
import { csvParse } from 'd3-dsv';

const useCSV = file => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(file);
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value); // the csv text
      const results = csvParse(csv); // array of objects
      setData(results);
    }
    getData();
  }, [file]);

  return {
    data,
  };
};

export default useCSV;
