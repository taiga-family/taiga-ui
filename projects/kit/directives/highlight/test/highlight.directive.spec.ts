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

    it('highlights the original text when lowercasing changes offsets', () => {
        @Component({
            imports: [TuiHighlight],
            template: `
                <div tuiHighlight="X">İx</div>
                <div tuiHighlight="i">İx</div>
                <div tuiHighlight="İ">i&#x0307;x</div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class UnicodeTest {}

        const fixture = TestBed.createComponent(UnicodeTest);
        const setEnd = jest.spyOn(Range.prototype, 'setEnd');

        try {
            fixture.detectChanges();

            expect(setEnd.mock.contexts.map((range) => range.toString())).toEqual([
                'x',
                'İ',
                'i\u0307',
            ]);
        } finally {
            setEnd.mockRestore();
        }
    });
});
