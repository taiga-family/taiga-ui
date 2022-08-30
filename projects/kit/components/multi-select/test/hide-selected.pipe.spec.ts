import {TuiHideSelectedPipe, TuiMultiSelectComponent} from '@taiga-ui/kit';

describe(`tuiHideSelected pipe`, () => {
    let multiSelect: any;
    let pipe: TuiHideSelectedPipe;

    beforeEach(() => {
        multiSelect = {
            value: [1, 2, 3],
            identityMatcher: (a: unknown, b: unknown) => a === b,
        };
        pipe = new TuiHideSelectedPipe(
            multiSelect as unknown as TuiMultiSelectComponent<unknown>,
        );
    });

    it(`Works for flat arrays`, () => {
        expect(pipe.transform([1, 4, 5])).toEqual([4, 5]);
    });

    it(`Works for 2d arrays`, () => {
        expect(
            pipe.transform([
                [1, 4, 5],
                [2, 3, 6],
            ]),
        ).toEqual([[4, 5], [6]]);
    });

    it(`Works with flat array and custom matcher`, () => {
        multiSelect.identityMatcher = (a: any, b: any) => a.id === b.id;
        multiSelect.value = [{id: 1}, {id: 2}];

        expect(pipe.transform([{id: 1}, {id: 3}])).toEqual([{id: 3}]);
    });

    it(`Works with 2d array and custom matcher`, () => {
        multiSelect.identityMatcher = (a: any, b: any) => a.id === b.id;
        multiSelect.value = [{id: 1}, {id: 2}];

        expect(pipe.transform([[{id: 1}, {id: 3}], [{id: 2}]])).toEqual([[{id: 3}], []]);
    });
});
