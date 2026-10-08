import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';

describe('TuiBottomSheet', () => {
    @Component({
        imports: [TuiBottomSheet],
        template: `
            <button
                type="button"
                (click)="expanded = false"
            >
                Reduce content
            </button>
            <div class="wrapper">
                <tui-bottom-sheet [stops]="['5rem', '10rem', '100%']">
                    @if (expanded) {
                        @for (_ of '-'.repeat(50); track $index) {
                            <p>Content</p>
                        }
                    }
                </tui-bottom-sheet>
            </div>
        `,
        styles: `
            .wrapper {
                position: relative;
                block-size: 20rem;
                overflow: hidden;
            }
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected expanded = true;
    }

    beforeEach(() => {
        cy.viewport(400, 500);
        cy.mount(Test);
    });

    it('updates scroll range when content shrinks', () => {
        cy.get('tui-bottom-sheet')
            .scrollTo('bottom')
            .should(($el) => {
                expect($el[0]!.scrollTop).to.be.greaterThan(0);
            });

        cy.contains('button', 'Reduce content').click();

        cy.get('tui-bottom-sheet').should(($el) => {
            const el = $el[0]!;

            expect(el.scrollHeight).to.equal(el.clientHeight);
            expect(el.scrollTop).to.equal(0);
        });
    });
});
