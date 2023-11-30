import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
    const [message, setMessage] = React.useState('');
    const [checkedVariant, setCheckedVariant] = React.useState(DEFAULT_VARIANT);
    const [shownToasts, setShownToasts] = React.useState([]);

    function submitHandler(event) {
        event.preventDefault();
        setShownToasts([
            ...shownToasts,
            {
                id: crypto.randomUUID(),
                variant: checkedVariant,
                message,
            },
        ]);
        resetInputs();
    }

    function dismissToast(id) {
        const remainingToasts = shownToasts.filter((toast) => toast.id !== id);
        setShownToasts(remainingToasts);
    }

    function resetInputs() {
        setMessage('');
        setCheckedVariant(DEFAULT_VARIANT);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf toasts={shownToasts} dismissToast={dismissToast} />

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: 'baseline' }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(event) => {
                                setMessage(event.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((variant) => (
                            <label htmlFor={`variant-${variant}`} key={variant}>
                                <input
                                    id={`variant-${variant}`}
                                    type="radio"
                                    name="variant"
                                    value={variant}
                                    checked={variant === checkedVariant}
                                    onChange={() => setCheckedVariant(variant)}
                                />
                                {variant}
                            </label>
                        ))}
                    </div>
                </div>

                <form className={styles.row} onSubmit={submitHandler}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ToastPlayground;
