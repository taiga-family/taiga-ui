import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {provideTaiga} from '@taiga-ui/core';
import {TuiHighlight} from '@taiga-ui/kit';

describe('TuiHighlight directive', () => {
    @Component({
        imports: [TuiHighlight],
        template: `
            <div
                id="ica"
                tuiHighlight="ica"
            >
                HAPICA
            </div>
            <div
                id="dong"
                tuiHighlight="dong"
            >
                ding
            </div>
            <div
                id="aaa"
                tuiHighlight="aaa"
                tuiHighlightColor="yellow"
            >
                aaabbb
            </div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();
    });

    it('highlight is shown', () => {
        const element = document.querySelector('#ica')?.firstElementChild as HTMLElement;

        expect(element.style.display).toBe('block');
    });

    it('highlight is not shown', () => {
        const element = document.querySelector('#dong')?.firstElementChild as HTMLElement;

        expect(element.style.display).toBe('none');
    });

    it('highlight color is yellow', () => {
        const element = document.querySelector('#aaa')?.firstElementChild as HTMLElement;

        expect(element.style.background).toBe('yellow');
    });

    it.each([
        {source: 'İx', query: 'X', expected: 'x'},
        {source: 'İx', query: 'i', expected: 'İ'},
        {source: 'i\u0307x', query: 'İ', expected: 'i\u0307'},
    ])('highlights $expected in $source for $query', ({source, query, expected}) => {
        @Component({
            imports: [TuiHighlight],
            template: `
                <div tuiHighlight="${query}">${source}</div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class UnicodeTest {}

        const fixture = TestBed.createComponent(UnicodeTest);
        const setEnd = jest.spyOn(Range.prototype, 'setEnd');

        try {
            fixture.detectChanges();

            expect(setEnd.mock.contexts[0]?.toString()).toBe(expected);
        } finally {
            setEnd.mockRestore();
        }
    });
});
