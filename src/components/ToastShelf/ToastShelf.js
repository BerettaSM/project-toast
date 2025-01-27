import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToasts } from '../ToastProvider';

function ToastShelf() {
    const { shownToasts, dismissToast } = useToasts();

    return (
        <ol
            className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification"
        >
            {shownToasts.map(({ id, message, variant }) => (
                <li className={styles.toastWrapper} key={id}>
                    <Toast variant={variant} onDismiss={() => dismissToast(id)}>
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
