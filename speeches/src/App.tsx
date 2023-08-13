import useSpeechRecognition from "./hooks/useSpeechRecognition"
import './App.css'
function App() {

  const { text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport } = useSpeechRecognition();

  return (
    <div className="wrapper">
      {hasRecognitionSupport ? (
        <>
          {isListening ? (
            <p>Ваш браузер слушает текст</p>
          ) : null}
          <p>{text}</p>
          <div className="buttons">
            <button className="start-btn" onClick={startListening}>start</button>
            <button className="stop-btn" onClick={stopListening}>stop</button>
          </div>

        </>
      ) : (
        <p>В вашем браузере нет поддержки распознования речи</p>
      )}
    </div>
  )
}

export default App
