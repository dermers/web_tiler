import { useState, useEffect } from "react";
import { useFetcher } from "remix";

const Page = ({ page }) => {
  const [content, setContent] = useState("<div>Loading...</div>");
  const fetcher = useFetcher();
  
  useEffect(() => {
    const fetchPage = async () => {
      const response = await fetch(`r/${encodeURIComponent(page)}`);
      const text = await response.text();
      console.log(text);
      setContent(text);
    };
    fetchPage();
  }, [page]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />; 
}

export default Page;