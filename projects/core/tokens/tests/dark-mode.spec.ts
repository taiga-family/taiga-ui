import {TestBed} from '@angular/core/testing';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {TUI_DARK_MODE, TUI_DARK_MODE_DEFAULT_KEY, type TuiDarkMode} from '@taiga-ui/core';

describe('TUI_DARK_MODE', () => {
    let store: Record<string, string>;
    let matches: boolean;

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
                addEventListener: () => {},
                removeEventListener: () => {},
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
    });

    it('persists the first user change when storage is empty', () => {
        const mode = setup();

        // The change happens before the effect has flushed its initial run.
        mode.set(true);
        TestBed.flushEffects();

        expect(store[TUI_DARK_MODE_DEFAULT_KEY]).toBe('true');
    });

    it('does not write back the value loaded on init', () => {
        matches = true;

        setup();
        TestBed.flushEffects();

        expect(store[TUI_DARK_MODE_DEFAULT_KEY]).toBeUndefined();
    });

    it('does not persist the system value on reset', () => {
        const mode = setup();

        mode.set(true);
        TestBed.flushEffects();
        expect(store[TUI_DARK_MODE_DEFAULT_KEY]).toBe('true');

        mode.reset();
        TestBed.flushEffects();
        expect(store[TUI_DARK_MODE_DEFAULT_KEY]).toBeUndefined();
    });

    it('persists a user change made right after a no-op reset', () => {
        const mode = setup();

        // System is light and value already matches, so reset changes nothing.
        mode.reset();
        TestBed.flushEffects();

        mode.set(true);
        TestBed.flushEffects();

        expect(store[TUI_DARK_MODE_DEFAULT_KEY]).toBe('true');
    });
});
