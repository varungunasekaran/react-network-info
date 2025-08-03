import { useEffect, useState } from 'react';

export interface NetworkInfo {
    isOnline: boolean;
    type?: string;
    effectiveType?: string;
    downlink?: number;
    rtt?: number;
    saveData?: boolean;
}

type RealNetworkInformation = EventTarget & {
    type?: string;
    effectiveType?: string;
    downlink?: number;
    rtt?: number;
    saveData?: boolean;
    addEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
    removeEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
};

export function useNetworkInfo(): NetworkInfo {
    const getConnection = (): RealNetworkInformation | undefined => {
        if (typeof navigator === 'undefined') return undefined;
        return (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    };

    const getState = (): NetworkInfo => {
        const conn = getConnection();
        return {
            isOnline: navigator.onLine,
            type: conn?.type,
            effectiveType: conn?.effectiveType,
            downlink: conn?.downlink,
            rtt: conn?.rtt,
            saveData: conn?.saveData,
        };
    };

    const [networkState, setNetworkState] = useState<NetworkInfo>(getState);

    useEffect(() => {
        const updateNetworkState = () => setNetworkState(getState());

        const conn = getConnection();

        window.addEventListener('online', updateNetworkState);
        window.addEventListener('offline', updateNetworkState);
        conn?.addEventListener?.('change', updateNetworkState);

        return () => {
            window.removeEventListener('online', updateNetworkState);
            window.removeEventListener('offline', updateNetworkState);
            conn?.removeEventListener?.('change', updateNetworkState);
        };
    }, []);

    return networkState;
}
