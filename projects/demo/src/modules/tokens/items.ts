import {InjectionToken} from '@angular/core';

export const ITEMS = new InjectionToken<readonly string[]>(ngDevMode ? 'Pythons' : '', {
    factory: () => [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Graham Chapman',
        'Terry Gilliam',
        'Terry Jones',
    ],
});
