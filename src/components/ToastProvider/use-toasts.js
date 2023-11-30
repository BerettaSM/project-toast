import React from 'react';
import { ToastContext } from './ToastProvider';

export const useToasts = () => {
    return React.useContext(ToastContext);
};
