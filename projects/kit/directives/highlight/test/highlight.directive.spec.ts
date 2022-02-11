import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiHighlightModule} from '../highlight.module';

describe('TuiHighlight directive', () => {
    @Component({
        template: `
            <div id="ica" tuiHighlight="ica">HAPICA</div>
            <div id="dong" tuiHighlight="dong">ding</div>
            <div id="aaa" tuiHighlight="aaa" tuiHighlightColor="yellow">aaabbb</div>
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

    it('Highlight color is yellow', () => {
        expect(
            (document.querySelector('#aaa')!.firstElementChild as HTMLElement).style
                .background,
        ).toBe('yellow');
    });
});
