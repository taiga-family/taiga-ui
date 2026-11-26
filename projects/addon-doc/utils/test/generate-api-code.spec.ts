import {tuiGenerateApiCode} from '../generate-api-code';

describe('tuiGenerateApiCode', () => {
    it('builds markup from API table values', () => {
        expect(
            tuiGenerateApiCode(
                'button',
                [
                    {name: '[size]', type: 'TuiSizeXS | TuiSizeL', value: 'm'},
                    {name: '[loading]', type: 'boolean', value: true},
                    {name: '(click)', type: 'string', value: 'noop'},
                    {name: '[hidden]', type: 'boolean', value: false},
                ],
                'Button',
                'tuiButton type="button"',
            ),
        ).toBe(
            `<button
    tuiButton type="button"
    [size]="'m'"
    [loading]="true"
>
    Button
</button>`,
        );
    });
});
