import { useState } from "react";
import PageHelp from "./components/PageHelp";
import Background from "./components/Background";
import GenSignatureContainer from "./components/GenSignatureContainer";

function App() {
  const [isStart, setIsStart] = useState(true);

  return (
    <Background>
      {isStart ? (
        <GenSignatureContainer setIsStart={setIsStart} />
      ) : (
        <PageHelp setIsStart={setIsStart} />
      )}
    </Background>
  );
}

export default App;
