
import React from "react";
import { WebView } from 'react-native-webview';


export default function DetailVideo(props) {
    const { vid } = props;
    return (

        <WebView
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            source={{ uri: vid }}
        />

    );
}