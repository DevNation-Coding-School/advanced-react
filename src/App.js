import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {

  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  
  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  console.log('App Running')

  // const toggleParagraph = () => {
  //   setShowParagraph(preShowParagraph => !preShowParagraph)
  // }

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(preShowParagraph => !preShowParagraph)
    }
  }, [allowToggle])

  

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is a paragraph</p>}
      <DemoOutput onShow={showParagraph} />
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </div>
  );
}

export default App;


// Important Concepts
// React.memo & useCallback
// Primitive vs. Reference Type
// Closures