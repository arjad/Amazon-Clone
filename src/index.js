import React from 'react'
import ReactDom from 'react-dom'
import App from './app/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";

i18next.init({    //initializing
    lng: 'en',      // set language to use
    resources: {    //resources obj has all languages that we have
        en: {
            common: common_en              
        },
        de: {
            common: common_de
        },
    },
});


ReactDom.render(
 
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>

    ,document.getElementById("root")
)