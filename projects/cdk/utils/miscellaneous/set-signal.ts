import {
    type InputSignal,
    type InputSignalWithTransform,
    type WritableSignal,
} from '@angular/core';
import {SIGNAL} from '@angular/core/primitives/signals';

export function tuiSetSignal<T>(
    signal: InputSignal<T> | InputSignalWithTransform<T, T | null> | WritableSignal<T>,
    value: T,
): void {
    if ('set' in signal) {
        signal.set(value);
    } else if ('applyValueToInputSignal' in signal[SIGNAL]) {
        signal[SIGNAL].applyValueToInputSignal(signal[SIGNAL], value);
    } else {
        ngDevMode && console.assert(false, 'tuiSetSignal was called on read-only signal');
    }
}
