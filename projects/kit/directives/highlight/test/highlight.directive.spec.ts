import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiHighlightDirective} from '@taiga-ui/kit';

describe('TuiHighlight directive', () => {
    @Component({
        standalone: true,
        imports: [TuiHighlightDirective],
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

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        const fixture = TestBed.createComponent(TestComponent);

        fixture.detectChanges();
    });

    it('Highlight is shown', () => {
        const element = document.querySelector('#ica')?.firstElementChild as HTMLElement;

        expect(element.style.display).toBe('block');
    });

    it('Highlight is not shown', () => {
        const element = document.querySelector('#dong')?.firstElementChild as HTMLElement;

        expect(element.style.display).toBe('none');
    });

    it('Highlight color is yellow', () => {
        const element = document.querySelector('#aaa')?.firstElementChild as HTMLElement;

        expect(element.style.background).toBe('yellow');
    });
});
