/* https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada */
/* Uses SyntaxHiglighter to highlight code blocks */
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={hopscotch}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
