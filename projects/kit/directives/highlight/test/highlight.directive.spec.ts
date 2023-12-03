import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TuiHighlightModule, TuiToRegexpModule} from '@taiga-ui/kit';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`TuiHighlight directive`, () => {
    describe(`in single occurrence mode`, () => {
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
            const element = document
                .querySelector(`#ica`)
                ?.querySelector(`tui-highlight`) as HTMLElement | null;

            expect(element).toBeTruthy();
        });

        it(`Highlight is not shown`, () => {
            const element = document
                .querySelector(`#dong`)
                ?.querySelector(`tui-highlight`) as HTMLElement | null;

            expect(element).toBeFalsy();
        });

        it(`Highlight color is yellow`, () => {
            const element = document.querySelector(`#aaa`) as HTMLElement;

            expect(element.style.getPropertyValue(`--tui-highlight-color`)).toBe(
                `yellow`,
            );
        });
    });

    describe(`in multi occurrence mode`, () => {
        @Component({
            template: `
                <div
                    id="ica"
                    tuiHighlight="ica"
                    [tuiHighlightMultiOccurrences]="true"
                >
                    HAPICA HAPICA HAPICA
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

        it(`Highlights is shown`, () => {
            const elements = Array.from(
                document
                    .querySelector(`#ica`)
                    ?.querySelectorAll(`tui-highlight`) as ArrayLike<HTMLElement>,
            );

            expect(elements.length).toBe(3);
        });
    });

    describe(`in case sensitive mode`, () => {
        @Component({
            template: `
                <div
                    id="f"
                    [tuiHighlight]="'ica' | tuiToRegexp"
                >
                    HAPICA
                </div>
                <div
                    id="s"
                    [tuiHighlight]="'ICA' | tuiToRegexp"
                >
                    HAPICA
                </div>
            `,
        })
        class TestComponent {}

        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiHighlightModule, TuiToRegexpModule],
                declarations: [TestComponent],
            });
        });

        beforeEach(() => {
            const fixture = TestBed.createComponent(TestComponent);

            fixture.detectChanges();
        });

        it(`Highlights is not shown`, () => {
            const elements = Array.from(
                document
                    .querySelector(`#f`)
                    ?.querySelectorAll(`tui-highlight`) as ArrayLike<HTMLElement>,
            );

            expect(elements.length).toBe(0);
        });

        it(`Highlights is shown`, () => {
            const elements = Array.from(
                document
                    .querySelector(`#s`)
                    ?.querySelectorAll(`tui-highlight`) as ArrayLike<HTMLElement>,
            );

            expect(elements.length).toBe(1);
        });
    });
});
