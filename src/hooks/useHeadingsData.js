import { useState, useEffect } from "react";
import getNestedHeadings from "../utils/getNestedHeadings";

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);
  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('h2, h3')
    );  // Array of h2, h3 text
    // console.log('headingElements', headingElements);
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
}

export default useHeadingsData;