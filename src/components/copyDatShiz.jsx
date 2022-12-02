import { useState } from "react";
import { useLocation } from "react-router-dom";

const CopyDatShiz = ({ itemID }) => {
    const [copied, setCopied] = useState(false);
    const { REACT_APP_ENV } = process.env;
    const currURL = REACT_APP_ENV === 'dev' ? "http://localhost:3000" : "https://aman.monster";
    const { pathname } = useLocation();
    const panHandleCopy = () => {
      if (navigator.clipboard) {
        try {
          navigator.clipboard.writeText(currURL + pathname + '#' + itemID).then(() => setCopied(true));
          return setTimeout(() => setCopied(false), 1500);
        } catch (e) {
          return console.error('could not copy');
        }
      }
    };
  
    return <span onClick={panHandleCopy}>{copied ? "copy cap'n" : '#'}</span>;
  };
  
export default CopyDatShiz;