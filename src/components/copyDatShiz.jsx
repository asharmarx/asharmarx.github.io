import { useState } from "react";

const CopyDatShiz = () => {
    const [copied, setCopied] = useState(false);
    const panHandleCopy = () => {
      if (navigator.clipboard) {
        try {
          navigator.clipboard.writeText(window.location.href).then(() => setCopied(true));
          return setTimeout(() => setCopied(false), 1500);
        } catch (e) {
          return console.error('could not copy');
        }
      }
    };
  
    return <span onClick={panHandleCopy}>{copied ? "copy cap'n" : '#'}</span>;
  };
  
export default CopyDatShiz;