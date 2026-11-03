import {TestBed} from '@angular/core/testing';
import {tuiValue} from '@taiga-ui/cdk';

describe('tuiValue', () => {
    let input: HTMLInputElement;
    let raw: string;

    beforeEach(() => {
        raw = '1';
        input = document.createElement('input');
        input.type = 'number';
        Object.defineProperty(input, 'value', {
            configurable: true,
            get: () => (Number.isNaN(Number(raw)) ? '' : raw),
            set: (value: string) => {
                raw = value;
            },
        });
        document.body.append(input);
    });

    afterEach(() => {
        input.remove();
    });

    it('keeps unparsed text of a number input, such as E notation in progress', () => {
        const value = TestBed.runInInjectionContext(() => tuiValue(input));

        TestBed.flushEffects();
        raw = '1e';
        input.dispatchEvent(new Event('input'));
        TestBed.flushEffects();

        expect(value()).toBe('');
        expect(raw).toBe('1e');
    });

    it('writes a programmatic value to the element', () => {
        const value = TestBed.runInInjectionContext(() => tuiValue(input));

        TestBed.flushEffects();
        value.set('42');
        TestBed.flushEffects();

        expect(raw).toBe('42');
    });
});
