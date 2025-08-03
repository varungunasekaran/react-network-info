# 🌐 react-network-info

A lightweight and efficient React hook to get real-time network connection details and online status using the [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation).

---

## 🚀 Features

- ✅ Online/offline status tracking
- 📶 Connection type (e.g., `wifi`, `cellular`)
- ⚡ Effective connection type (`4g`, `3g`, etc.)
- 📉 Real-time `downlink`, `rtt`, and `saveData` preferences
- ♻️ Automatic updates on network change
- 💡 Graceful fallback in unsupported browsers

---

## 📦 Installation

```bash
npm install react-network-info
# or
yarn add react-network-info
```

---

## 🛠️ Usage

```typescript
import { useNetworkInfo } from 'react-network-info';

const MyComponent = () => {
  const {
    isOnline,
    type,
    effectiveType,
    downlink,
    rtt,
    saveData,
  } = useNetworkInfo();

  return (
    <div>
      <h2>Network Info</h2>
      <p><strong>Online:</strong> {isOnline ? 'Yes' : 'No'}</p>
      <p><strong>Connection Type:</strong> {type || 'Unknown'}</p>
      <p><strong>Effective Type:</strong> {effectiveType || 'Unknown'}</p>
      <p><strong>Downlink:</strong> {downlink ? `${downlink} Mbps` : 'N/A'}</p>
      <p><strong>RTT:</strong> {rtt ? `${rtt} ms` : 'N/A'}</p>
      <p><strong>Save Data Enabled:</strong> {saveData ? 'Yes' : 'No'}</p>
    </div>
  );
};
```

---

## 📝 API

The `useNetworkInfo` hook returns the following properties:

| Property       | Type      | Description                                      |
| -------------- | --------- | ------------------------------------------------ |
| `isOnline`     | `boolean` | Whether the browser is online                    |
| `type`         | `string`  | Connection type (e.g., `wifi`, `cellular`)       |
| `effectiveType`| `string`  | Effective connection type (`4g`, `3g`, etc.)     |
| `downlink`     | `number`  | Estimated downlink speed in Mbps                 |
| `rtt`          | `number`  | Estimated effective round-trip time in ms        |
| `saveData`     | `boolean` | User's data-saver preference                     |

---

## 🧑‍💻 Browser Support

- Fully supports browsers with the [Network Information API](https://caniuse.com/netinfo).
- Provides graceful fallback for unsupported browsers (returns only `isOnline`).

---

## 📄 License

MIT