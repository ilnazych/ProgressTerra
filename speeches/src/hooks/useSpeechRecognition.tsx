import { useEffect, useState } from "react";


let recognition: SpeechRecognition | null = null;
if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "ru-RU";
}


const useSpeechRecognition = () => {
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            setText(`${event.results[0][0].transcript} ${Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}`);
            recognition!.stop();
            setIsListening(false);
        };
    }, []);

    const startListening = () => {
        setText('');
        setIsListening(true);
        recognition!.start();
    }

    const stopListening = () => {
        setIsListening(false);
        recognition!.stop();
    };

    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition
    };

};


export default useSpeechRecognition;