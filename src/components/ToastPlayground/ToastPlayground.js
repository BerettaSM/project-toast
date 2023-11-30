import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [message, setMessage] = React.useState('');
    const [checkedVariant, setCheckedVariant] = React.useState(
        VARIANT_OPTIONS[0]
    );

    const [isShown, setIsShown] = React.useState(false);

    function submitHandler(event) {
        event.preventDefault();

        setIsShown(true);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            {isShown && (
                <Toast
                    variant="notice"
                    message={message}
                    onDismiss={() => setIsShown(false)}
                />
            )}

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
