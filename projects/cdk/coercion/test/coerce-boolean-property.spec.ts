import {tuiCoerceBooleanProperty} from '@taiga-ui/cdk';

describe(`tuiCoerceBooleanProperty`, () => {
    it(`should coerce undefined to false`, () => {
        expect(tuiCoerceBooleanProperty(undefined)).toBe(false);
    });

    it(`should coerce null to false`, () => {
        expect(tuiCoerceBooleanProperty(null)).toBe(false);
    });

    it(`should coerce the empty string to true`, () => {
        expect(tuiCoerceBooleanProperty(``)).toBe(true);
    });

    it(`should coerce zero to true`, () => {
        expect(tuiCoerceBooleanProperty(0)).toBe(true);
    });

    it(`should coerce the string "false" to false`, () => {
        expect(tuiCoerceBooleanProperty(`false`)).toBe(false);
    });

    it(`should coerce the boolean false to false`, () => {
        expect(tuiCoerceBooleanProperty(false)).toBe(false);
    });

    it(`should coerce the boolean true to true`, () => {
        expect(tuiCoerceBooleanProperty(true)).toBe(true);
    });

    it(`should coerce the string "true" to true`, () => {
        expect(tuiCoerceBooleanProperty(`true`)).toBe(true);
    });

    it(`should coerce an arbitrary string to true`, () => {
        expect(tuiCoerceBooleanProperty(`pink`)).toBe(true);
    });

    it(`should coerce an object to true`, () => {
        expect(tuiCoerceBooleanProperty({})).toBe(true);
    });

    it(`should coerce an array to true`, () => {
        expect(tuiCoerceBooleanProperty([])).toBe(true);
    });
});
