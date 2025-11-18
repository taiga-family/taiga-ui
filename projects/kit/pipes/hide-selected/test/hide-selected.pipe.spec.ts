import {signal} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
import {TUI_ITEMS_HANDLERS, TuiTextfieldComponent} from '@taiga-ui/core';
import {TuiHideSelectedPipe} from '@taiga-ui/kit';

describe('HideSelected pipe', () => {
    let handlers: any;
    let textfield: any;
    let pipe: TuiHideSelectedPipe;

    beforeEach(() => {
        textfield = {control: signal({value: []})};
        handlers = {identityMatcher: signal(TUI_FALSE_HANDLER)};

        TestBed.overrideProvider(TuiTextfieldComponent, {useValue: textfield})
            .overrideProvider(TUI_ITEMS_HANDLERS, {useValue: handlers})
            .runInInjectionContext(() => {
                pipe = new TuiHideSelectedPipe();
            });
    });

    it('works for flat arrays', () => {
        handlers.identityMatcher.set((a: any, b: any) => a === b);
        textfield.control.set({value: [1, 2, 3]});

        expect(pipe.transform([1, 4, 5])).toEqual([4, 5]);
    });

    it('works for 2d arrays', () => {
        handlers.identityMatcher.set((a: any, b: any) => a === b);
        textfield.control.set({value: [1, 2, 3]});

        expect(
            pipe.transform([
                [1, 4, 5],
                [2, 3, 6],
            ]),
        ).toEqual([[4, 5], [6]]);
    });

    it('works with flat array and custom matcher', () => {
        handlers.identityMatcher.set((a: any, b: any) => a.id === b.id);
        textfield.control.set({value: [{id: 1}, {id: 2}]});

        expect(pipe.transform([{id: 1}, {id: 3}])).toEqual([{id: 3}]);
    });

    it('works with 2d array and custom matcher', () => {
        handlers.identityMatcher.set((a: any, b: any) => a.id === b.id);
        textfield.control.set({value: [{id: 1}, {id: 2}]});

        expect(pipe.transform([[{id: 1}, {id: 3}], [{id: 2}]])).toEqual([[{id: 3}], []]);
    });
});
