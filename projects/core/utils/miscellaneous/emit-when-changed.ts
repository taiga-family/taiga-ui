import type {EventEmitter} from '@angular/core';

export function tuiEmitWhenChanged<T>(
    newValue: T,
    lastEmittedValue: T,
    emitter: EventEmitter<T>,
): T {
    if (lastEmittedValue !== newValue) {
        emitter.emit(newValue);

        return newValue;
    }

    return lastEmittedValue;
}
