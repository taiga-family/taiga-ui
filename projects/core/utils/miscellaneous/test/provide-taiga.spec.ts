import {TestBed} from '@angular/core/testing';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import type {TuiProviderOptions} from '../provide-taiga';
import {provideTaiga} from '../provide-taiga';

describe('provideTaiga', () => {
    it('should always include NG_EVENT_PLUGINS', () => {
        const providers = provideTaiga();

        expect(providers).toContain(NG_EVENT_PLUGINS);
    });

    it('should include font scaling provider when fontScaling is enabled', () => {
        const providers = provideTaiga({fontScaling: true});

        expect(providers).toContain(NG_EVENT_PLUGINS);
        expect(
            providers.some(
                (provider) =>
                    typeof provider === 'object' &&
                    provider !== null &&
                    'provide' in provider,
            ),
        ).toBe(true);
    });

    it('should not include additional providers when no options are enabled', () => {
        const providers = provideTaiga({
            automaticDarkMode: false,
            fontScaling: false,
            customGlobalScrollbar: false,
        });

        expect(providers).toEqual([NG_EVENT_PLUGINS]);
    });

    it('should work with empty options object', () => {
        const providers = provideTaiga({});

        expect(providers).toEqual([NG_EVENT_PLUGINS]);
    });

    it('should work with no options parameter', () => {
        const providers = provideTaiga();

        expect(providers).toEqual([NG_EVENT_PLUGINS]);
    });

    it('should include scrollbar provider when customGlobalScrollbar is enabled', () => {
        const providers = provideTaiga({customGlobalScrollbar: true});

        expect(providers).toContain(NG_EVENT_PLUGINS);
        expect(providers.length).toBe(2);
        expect(
            providers.some(
                (provider) =>
                    typeof provider === 'object' &&
                    provider !== null &&
                    'provide' in provider,
            ),
        ).toBe(true);
    });

    it('should include all providers when all options are enabled', () => {
        const providers = provideTaiga({
            automaticDarkMode: true,
            fontScaling: true,
            customGlobalScrollbar: true,
        });

        expect(providers).toContain(NG_EVENT_PLUGINS);
        expect(providers.length).toBeGreaterThanOrEqual(3);
    });

    it('should be configurable in TestBed', () => {
        const options: TuiProviderOptions = {
            fontScaling: true,
            customGlobalScrollbar: true,
        };

        expect(() => {
            TestBed.configureTestingModule({
                providers: provideTaiga(options),
            });
        }).not.toThrow();
    });
});
