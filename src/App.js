import { useState } from "react";
import TextInput from "./components/TextInput";
import StatisticsPanel from "./components/StatisticsPanel";
import LetterDensity from "./components/LetterDensity";
import OptionsPanel from "./components/OptionsPanel";

function App() {
  const [text, setText] = useState("");
  const [isLimitEnabled, setIsLimitEnabled] = useState(false);
  const [maxLength, setMaxLength] = useState(100);

  return (
    <div className="App">
      <header className="App-header">
        <span>Character Counter</span>
        <h1>Analyze your text in real-time</h1>
      </header>
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
