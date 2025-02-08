import { useState } from "react";
import { Header } from "./components/Header";
import {TextInput} from "./components/TextInput";
import {StatisticsPanel} from "./components/StatisticsPanel";
import {LetterDensity} from "./components/LetterDensity";
import {OptionsPanel} from "./components/OptionsPanel";

function App() {
  const [text, setText] = useState<string>("");
  const [isLimitEnabled, setIsLimitEnabled] = useState<boolean>(false);
  const [maxLength, setMaxLength] = useState<number>(100);

//handleTextInput osobno - funkcje osobno

  return (
    <div className="App">
      <Header />
      <main>
        <TextInput
          text={text}
          handleChange={(e) => setText(e.target.value)}
          isLimitEnabled={isLimitEnabled}
          maxLength={maxLength}
        />
        <OptionsPanel
          isLimitEnabled={isLimitEnabled}
          maxLength={maxLength}
          handleLimitToggle={() => setIsLimitEnabled(!isLimitEnabled)}
          handleMaxLengthChange={(e) =>
            setMaxLength(parseInt(e.target.value) || 100)
          }
          text={text}
        />
        <StatisticsPanel text={text} />
        <LetterDensity text={text} />
      </main>
    </div>
  );
}

export default App;
