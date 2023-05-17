import {tuiGenerateRoutes} from '@taiga-ui/addon-doc';

describe(`tuiGenerateRoutes`, () => {
    it(`returns an array of Routes with a default path and child route`, () => {
        const type = class TestComponent {};

        expect(tuiGenerateRoutes(type)).toEqual([
            {
                path: ``,
                component: type,
                children: [
                    {
                        path: `:tab`,
                        component: type,
                    },
                ],
            },
        ]);
    });
});
