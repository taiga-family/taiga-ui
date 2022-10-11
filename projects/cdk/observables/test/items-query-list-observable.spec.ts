import {QueryList} from '@angular/core';
import {tuiItemsQueryListObservable} from '@taiga-ui/cdk';

describe(`tuiItemsQueryListObservable`, () => {
    let queryList: QueryList<number>;

    beforeEach(() => {
        queryList = new QueryList<number>();
        queryList.reset([1, 2]);
    });

    it(`emits current array on subscription`, () => {
        let result: readonly number[] | null = null;

        tuiItemsQueryListObservable<number>(queryList).subscribe(data => {
            result = data;
        });

        expect<readonly number[] | null>(result).toEqual([1, 2]);
    });

    it(`emits new array on changes`, () => {
        let result: readonly number[] | null = null;

        tuiItemsQueryListObservable<number>(queryList).subscribe(data => {
            result = data;
        });

        queryList.reset([1, 2, 3]);
        queryList.notifyOnChanges();

        expect<readonly number[] | null>(result).toEqual([1, 2, 3]);
    });
});
