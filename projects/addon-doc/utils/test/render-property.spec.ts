import {TuiDocumentationPropertyType} from '@taiga-ui/addon-doc';

describe(`tuiRenderProperty`, () => {
    const types: TuiDocumentationPropertyType[] = [
        `input`,
        `input-output`,
        `output`,
        null,
    ];

    const values = [`value`, undefined];

    beforeEach(() => {
        jest.spyOn(console, `error`);
    });

    describe.each(types)(`with type %s`, type => {
        it.each(values)(`with value %s, should render correct code`, async value => {
            jest.resetModules();
            const {tuiRenderProperty} = await import(`../render-property`);

            expect(
                tuiRenderProperty(`name`, {
                    type,
                    value,
                }),
            ).toMatchSnapshot();
        });
    });

    it(`should rethrow uncaught exception`, async () => {
        jest.mock<typeof import('../attr-name')>(`../attr-name`, () => ({
            tuiGetAttrName(): string {
                throw new Error(`Uncaught error`);
            },
        }));
        jest.resetModules();
        const {tuiRenderProperty} = await import(`../render-property`);

        expect(() =>
            tuiRenderProperty(`name`, {
                type: `input`,
                value: `test`,
            }),
        ).toThrow(`Uncaught error`);
    });
});
