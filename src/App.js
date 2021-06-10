import { useState } from "react";
import ReactMarkdown from "react-markdown";
import marked from "marked";
import "./styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# sup");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />
      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      <ReactMarkdown className="preview" children={markdown} />
    </div>
  );
}
