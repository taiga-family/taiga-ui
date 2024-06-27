import {TestBed} from '@angular/core/testing';
import {TuiHideSelectedPipe, TuiMultiSelectComponent} from '@taiga-ui/legacy';

describe('tuiHideSelected pipe', () => {
    let multiSelect: any;
    let pipe: TuiHideSelectedPipe;

    beforeEach(() => {
        multiSelect = {
            value: [1, 2, 3],
            identityMatcher: (a: unknown, b: unknown) => a === b,
        };

        TestBed.overrideProvider(TuiMultiSelectComponent, {
            useValue: multiSelect,
        }).runInInjectionContext(() => {
            pipe = new TuiHideSelectedPipe();
        });
    });

    it('works for flat arrays', () => {
        expect(pipe.transform([1, 4, 5])).toEqual([4, 5]);
    });

    it('works for 2d arrays', () => {
        expect(
            pipe.transform([
                [1, 4, 5],
                [2, 3, 6],
            ]),
        ).toEqual([[4, 5], [6]]);
    });

    it('works with flat array and custom matcher', () => {
        multiSelect.identityMatcher = (a: any, b: any) => a.id === b.id;
        multiSelect.value = [{id: 1}, {id: 2}];

        expect(pipe.transform([{id: 1}, {id: 3}])).toEqual([{id: 3}]);
    });

    it('works with 2d array and custom matcher', () => {
        multiSelect.identityMatcher = (a: any, b: any) => a.id === b.id;
        multiSelect.value = [{id: 1}, {id: 2}];

        expect(pipe.transform([[{id: 1}, {id: 3}], [{id: 2}]])).toEqual([[{id: 3}], []]);
    });
});
