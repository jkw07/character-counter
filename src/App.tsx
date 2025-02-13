import { ChangeEvent, useState } from "react";
import { Header } from "./components/Header";
import {TextInput} from "./components/TextInput";
import {StatisticsPanel} from "./components/StatisticsPanel";
import {LetterDensity} from "./components/LetterDensity";
import {OptionsPanel} from "./components/OptionsPanel";

function App() {
  const [text, setText] = useState<string>("");
  const [isLimitEnabled, setIsLimitEnabled] = useState<boolean>(false);
  const [maxLength, setMaxLength] = useState<number>(100);

  const handleLimitToggle = () => {
    setIsLimitEnabled(!isLimitEnabled)
  }

  const handleMaxLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxLength(parseInt(e.target.value) || 100)
  }

  const handleTextInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <TextInput
          text={text}
          handleChange={handleTextInput}
          isLimitEnabled={isLimitEnabled}
          maxLength={maxLength}
        />
        <OptionsPanel
          isLimitEnabled={isLimitEnabled}
          maxLength={maxLength}
          handleLimitToggle={handleLimitToggle}
          handleMaxLengthChange={handleMaxLengthChange}
          text={text}
        />
        <StatisticsPanel text={text} />
        <LetterDensity text={text} />
      </main>
    </div>
  );
}

export default App;
