import React from "react";
import { useNetworkInfo } from "../src"; // replace with 'react-network-info' after publishing

const App: React.FC = () => {
    const {
        isOnline,
        effectiveType,
        downlink,
        rtt,
        saveData,
        type,
    } = useNetworkInfo();

    return (
        <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
            <h1>🌐 Network Information</h1>
            <ul>
                <li><strong>Status:</strong> {isOnline ? "✅ Online" : "❌ Offline"}</li>
                <li><strong>Connection Type:</strong> {type || "Unknown"}</li>
                <li><strong>Effective Type:</strong> {effectiveType || "Unknown"}</li>
                <li><strong>Downlink Speed:</strong> {downlink ?? "?"} Mbps</li>
                <li><strong>RTT:</strong> {rtt ?? "?"} ms</li>
                <li><strong>Save Data Enabled:</strong> {saveData ? "Yes" : "No"}</li>
            </ul>
        </div>
    );
};

export default App;
