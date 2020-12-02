import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiHighlightModule} from '../highlight.module';

describe('TuiHighlight directive', () => {
    @Component({
        template: `
            <div id="ica" tuiHighlight="ica">HAPICA</div>
            <div id="dong" tuiHighlight="dong">ding</div>
        `,
    })
    class TestComponent {}

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiHighlightModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        const fixture = TestBed.createComponent(TestComponent);

        fixture.detectChanges();
    });

    it('Highlight is shown', () => {
        expect(
            (document.querySelector('#ica')!.firstElementChild as HTMLElement).style
                .display,
        ).toBe('block');
    });

    it('Highlight is not shown', () => {
        expect(
            (document.querySelector('#dong')!.firstElementChild as HTMLElement).style
                .display,
        ).toBe('none');
    });
});
