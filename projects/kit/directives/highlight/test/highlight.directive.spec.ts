import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiHighlightDirective} from '@taiga-ui/kit';

describe('TuiHighlight directive', () => {
    let fixture: ComponentFixture<unknown>;

    describe.each([
        {
            name: 'in single occurrence mode',
            isMulti: false,
        },
        {
            name: 'in multi occurrences mode',
            isMulti: true,
        },
    ])('$name', ({isMulti}) => {
        describe.each([
            {
                name: 'with one string variant',
                value: 'ng Ar',
            },
            {
                name: 'with several string variants',
                value: ['Ar', 'Ng'],
            },
            {
                name: 'with one regExp variant',
                value: /[ink]+/gi,
            },
            {
                name: 'with several regExp variants',
                value: [/a/gi, /[ink]+/gi],
            },
        ])('$name', ({value}) => {
            @Component({
                standalone: true,
                imports: [TuiHighlightDirective],
                template: `
                    <div
                        [tuiHighlight]="value"
                        [tuiHighlightMultiOccurrences]="isMulti"
                    >
                        <p>
                            <b>King</b>
                            Arthur
                        </p>
                        <p>King Arthur</p>
                        <p>King Arthur</p>
                        <p>
                            <b>King</b>
                            Arthur
                        </p>
                    </div>
                `,
            })
            class TestComponent {
                public readonly isMulti = isMulti;
                public readonly value = value;
            }

            beforeEach(() => {
                fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
            });

            it('Highlight should shown properly', () => {
                expect(fixture).toMatchSnapshot();
            });
        });
    });
});
