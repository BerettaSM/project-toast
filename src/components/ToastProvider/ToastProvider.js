import React from 'react';

import { useEscapeKey } from '../../hooks';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [shownToasts, setShownToasts] = React.useState([]);

    useEscapeKey(() => {
        setShownToasts([]);
    });

    const sendToast = React.useCallback(
        ({ message, variant }) => {
            setShownToasts([
                ...shownToasts,
                {
                    id: crypto.randomUUID(),
                    variant,
                    message,
                },
            ]);
        },
        [shownToasts]
    );

    const dismissToast = React.useCallback(
        (id) => {
            const remainingToasts = shownToasts.filter(
                (toast) => toast.id !== id
            );
            setShownToasts(remainingToasts);
        },
        [shownToasts]
    );

    return (
        <ToastContext.Provider
            value={{
                shownToasts,
                sendToast,
                dismissToast,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
