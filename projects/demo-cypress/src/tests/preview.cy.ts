import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {By} from '@angular/platform-browser';
import {TuiRoot} from '@taiga-ui/core';
import {TuiPreview} from '@taiga-ui/kit';

describe('TuiPreview content mutations', () => {
    @Component({
        imports: [TuiPreview, TuiRoot],
        template: `
            <tui-root>
                <div style="inline-size: 400px; block-size: 400px">
                    <tui-preview [rotatable]="true">
                        <div
                            id="page"
                            style="inline-size: 200px; block-size: 200px"
                        >
                            <div
                                id="content"
                                style="inline-size: 100px; block-size: 100px; overflow: hidden"
                            >
                                {{ text() }}
                            </div>
                        </div>
                        @if (pageTwo()) {
                            <div id="page-2">second page</div>
                        }
                    </tui-preview>
                </div>
                <button
                    id="change-deep"
                    type="button"
                    (click)="changeDeep()"
                >
                    Change deep
                </button>
                <button
                    id="flip"
                    type="button"
                    (click)="flip()"
                >
                    Flip
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected readonly text = signal('test1');
        protected readonly pageTwo = signal(false);

        protected changeDeep(): void {
            this.text.update((value) => (value === 'test1' ? 'test2' : 'test1'));
        }

        protected flip(): void {
            this.pageTwo.update((value) => !value);
        }
    }

    beforeEach(() => {
        cy.mount(Test).then((wrapper) => {
            const preview = wrapper.fixture.debugElement.query(By.css('tui-preview'))
                .componentInstance as {onResize(): void};

            cy.get('#page').should('exist');
            cy.then(() => cy.spy(preview, 'onResize').as('onResize'));
        });
    });

    it('does not reset when nested content changes deep inside a page', () => {
        cy.get('#change-deep').click({force: true});
        cy.get('#content').should('contain.text', 'test2');

        // Give the mutation observer time to (wrongly) fire before asserting.
        cy.wait(300);

        cy.get('@onResize').should('not.have.been.called');
    });

    it('resets when a direct child changes (page flip)', () => {
        cy.get('#flip').click({force: true});
        cy.get('#page-2').should('exist');

        cy.get('@onResize').should('have.been.called');
    });
});
