import React from 'react';

export const useEscapeKey = (callback) => {
    React.useEffect(() => {
        function handleEscape(event) {
            if (event.key !== 'Escape') return;
            callback();
        }

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
