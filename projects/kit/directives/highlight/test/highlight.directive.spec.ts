import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {tuiAssertIsHTMLElement} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiHighlightModule} from '../highlight.module';

describe(`TuiHighlight directive`, () => {
    @Component({
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

    it(`Highlight is shown`, () => {
        const element = document.querySelector(`#ica`)?.firstElementChild;

        tuiAssertIsHTMLElement(element);

        expect(element.style.display).toBe(`block`);
    });

    it(`Highlight is not shown`, () => {
        const element = document.querySelector(`#dong`)?.firstElementChild;

        tuiAssertIsHTMLElement(element);

        expect(element.style.display).toBe(`none`);
    });

    it(`Highlight color is yellow`, () => {
        const element = document.querySelector(`#aaa`)?.firstElementChild;

        tuiAssertIsHTMLElement(element);

        expect(element.style.background).toBe(`yellow`);
    });
});
