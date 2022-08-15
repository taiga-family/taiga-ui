import {tuiArrayToggle} from '@taiga-ui/cdk';

describe(`tuiArrayToggle`, () => {
    it(`removes existing item`, () => {
        expect(tuiArrayToggle([1, 2, 3], 2)).toEqual([1, 3]);
    });

    it(`adds missing item`, () => {
        expect(tuiArrayToggle([1, 2, 3], 0)).toEqual([1, 2, 3, 0]);
    });

    it(`removes exact item`, () => {
        const item = {item: 1};

        expect(tuiArrayToggle([item, {item: 2}, {item: 3}], item)).toEqual([
            {item: 2},
            {item: 3},
        ]);
    });

    it(`adds copies of items`, () => {
        expect(tuiArrayToggle([{item: 1}, {item: 2}, {item: 3}], {item: 1})).toEqual([
            {item: 1},
            {item: 2},
            {item: 3},
            {item: 1},
        ]);
    });
});
