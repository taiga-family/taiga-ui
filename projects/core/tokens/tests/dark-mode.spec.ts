import {TestBed} from '@angular/core/testing';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {TUI_DARK_MODE, TUI_DARK_MODE_DEFAULT_KEY, type TuiDarkMode} from '@taiga-ui/core';

const KEY = TUI_DARK_MODE_DEFAULT_KEY;

describe('TUI_DARK_MODE', () => {
    let store: Record<string, string>;
    let matches: boolean;
    let listeners: Array<() => void>;

    function changeSystem(value: boolean): void {
        matches = value;
        listeners.forEach((listener) => listener());
    }

    function setup(): TuiDarkMode {
        const storage = {
            getItem: (key: string) => store[key] ?? null,
            setItem: (key: string, value: string) => {
                store[key] = value;
            },
            removeItem: (key: string) => {
                store = Object.fromEntries(
                    Object.entries(store).filter(([stored]) => stored !== key),
                );
            },
        } as unknown as Storage;

        const windowRef = {
            matchMedia: () => ({
                get matches() {
                    return matches;
                },
                addEventListener: (_type: string, listener: () => void) => {
                    listeners.push(listener);
                },
                removeEventListener: (_type: string, listener: () => void) => {
                    listeners = listeners.filter((item) => item !== listener);
                },
            }),
        } as unknown as Window;

        TestBed.configureTestingModule({
            providers: [
                {provide: WA_LOCAL_STORAGE, useValue: storage},
                {provide: WA_WINDOW, useValue: windowRef},
            ],
        });

        return TestBed.inject(TUI_DARK_MODE);
    }

    beforeEach(() => {
        store = {};
        matches = false;
        listeners = [];
    });

    describe('initialization', () => {
        it('starts from the system value when storage is empty', () => {
            matches = true;

            expect(setup()()).toBe(true);
        });

        it('does not write the system value to storage on init', () => {
            matches = true;

            setup();

            expect(store[KEY]).toBeUndefined();
        });

        it('starts from the stored value when present', () => {
            store[KEY] = 'true';
            matches = false;

            expect(setup()()).toBe(true);
        });
    });

    describe('explicit set', () => {
        it('persists the change to storage', () => {
            const mode = setup();

            mode.set(true);

            expect(store[KEY]).toBe('true');
            expect(mode()).toBe(true);
        });

        it('persists even when the value equals the current system value', () => {
            matches = true; // system is dark, auto resolves to dark

            const mode = setup();

            mode.set(true); // explicitly picking dark must still pin

            expect(store[KEY]).toBe('true');
        });

        it('stops following the system once set', () => {
            matches = true;

            const mode = setup();

            mode.set(true); // pin dark while system is dark

            changeSystem(false);

            expect(mode()).toBe(true);
        });
    });

    describe('following the system', () => {
        it('tracks system changes while not pinned', () => {
            const mode = setup();

            expect(mode()).toBe(false);

            changeSystem(true);
            expect(mode()).toBe(true);

            changeSystem(false);
            expect(mode()).toBe(false);
        });

        it('does not persist values received from the system', () => {
            setup();

            changeSystem(true);

            expect(store[KEY]).toBeUndefined();
        });
    });

    describe('reset', () => {
        it('clears the stored value', () => {
            const mode = setup();

            mode.set(true);
            expect(store[KEY]).toBe('true');

            mode.reset();

            expect(store[KEY]).toBeUndefined();
        });

        it('returns to the current system value', () => {
            matches = false;

            const mode = setup();

            mode.set(true);
            mode.reset();

            expect(mode()).toBe(false);
        });

        it('resumes following the system', () => {
            const mode = setup();

            mode.set(true);
            mode.reset();

            changeSystem(true);

            expect(mode()).toBe(true);
            expect(store[KEY]).toBeUndefined();
        });
    });
});
