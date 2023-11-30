import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [shownToasts, setShownToasts] = React.useState([]);

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

    const dismissAllToasts = React.useCallback(() => {
        setShownToasts([]);
    }, []);

    return (
        <ToastContext.Provider
            value={{
                shownToasts,
                sendToast,
                dismissToast,
                dismissAllToasts,
            }}
        >
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
