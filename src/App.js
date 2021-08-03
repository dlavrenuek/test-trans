import {useState} from "react";
import {Trans} from "react-i18next";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init();

function App() {
    const [text, setText] = useState('');
    return (
        <>
            <input
                placeholder="Enter some text with '{{ text }}' inside"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{display: 'inline-block', width: '95%'}}
            />
            <p><Trans>You entered: {{text}}</Trans></p>
        </>
    );
}

export default App;
