import {type WritableSignal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {WA_LOCAL_STORAGE, WA_WINDOW} from '@ng-web-apis/common';
import {TUI_DARK_MODE, TUI_DARK_MODE_DEFAULT_KEY} from '@taiga-ui/core';

const KEY = TUI_DARK_MODE_DEFAULT_KEY;

describe('TUI_DARK_MODE', () => {
    let storage: Map<string, string>;
    let systemDark: boolean;
    let listeners: Set<() => void>;
    const getStored = (): string | undefined => storage.get(KEY);

    const changeSystemTheme = (value: boolean): void => {
        systemDark = value;
        listeners.forEach((listener) => listener());
    };

    function setup({
        stored,
        system = false,
    }: {stored?: boolean; system?: boolean} = {}): WritableSignal<boolean> & {
        reset(): void;
    } {
        storage = new Map(stored === undefined ? [] : [[KEY, String(stored)]]);
        systemDark = system;
        listeners = new Set();

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WA_LOCAL_STORAGE,
                    useValue: {
                        getItem: (key: string) => storage.get(key) ?? null,
                        setItem: (key: string, value: string) => storage.set(key, value),
                        removeItem: (key: string) => storage.delete(key),
                    } as unknown as Storage,
                },
                {
                    provide: WA_WINDOW,
                    useValue: {
                        matchMedia: () => ({
                            get matches() {
                                return systemDark;
                            },
                            addEventListener: (_: string, listener: () => void) =>
                                listeners.add(listener),
                            removeEventListener: (_: string, listener: () => void) =>
                                listeners.delete(listener),
                        }),
                    } as unknown as Window,
                },
            ],
        });

        return TestBed.inject(TUI_DARK_MODE);
    }

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('uses system value when storage is empty without persisting it', () => {
        const mode = setup({system: true});

        expect(mode()).toBe(true);
        expect(getStored()).toBeUndefined();
    });

    it('uses stored value over system value', () => {
        const mode = setup({stored: true, system: false});

        expect(mode()).toBe(true);
    });

    it('pins explicit set even when value equals current system value', () => {
        const mode = setup({system: true});

        mode.set(true);
        changeSystemTheme(false);

        expect(getStored()).toBe('true');
        expect(mode()).toBe(true);
    });

    it('persists update', () => {
        const mode = setup();

        mode.update((value) => !value);

        expect(getStored()).toBe('true');
        expect(mode()).toBe(true);
    });

    it('follows system theme while not pinned and resumes after reset', () => {
        const mode = setup();

        changeSystemTheme(true);

        expect(mode()).toBe(true);
        expect(getStored()).toBeUndefined();

        mode.set(false);
        changeSystemTheme(true);

        expect(mode()).toBe(false);
        expect(getStored()).toBe('false');

        mode.reset();
        changeSystemTheme(false);

        expect(mode()).toBe(false);
        expect(getStored()).toBeUndefined();
    });
});
