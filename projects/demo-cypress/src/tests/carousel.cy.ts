import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {TuiCarousel} from '@taiga-ui/core';

describe('TuiCarousel', () => {
    @Component({
        imports: [TuiCarousel],
        template: `
            <button
                type="button"
                (click)="index.set(index() ? 0 : 2)"
            >
                Toggle index
            </button>
            <tui-carousel
                [max]="3"
                [min]="0"
                [(index)]="index"
            >
                <ng-container *tuiItem="let index">{{ index }}</ng-container>
            </tui-carousel>
        `,
        styles: [
            `
                tui-carousel {
                    inline-size: 20rem;
                }
            `,
        ],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected readonly index = signal(0);
    }

    beforeEach(() => cy.mount(Test));

    it('syncs scroll position when index changes externally', () => {
        cy.get('tui-carousel').should(($carousel) => {
            expect($carousel.get(0)?.scrollLeft).to.equal(0);
        });

        cy.contains('button', 'Toggle index').click();

        cy.get('tui-carousel').should(($carousel) => {
            const carousel = $carousel.get(0);

            expect(carousel?.scrollLeft).to.equal(carousel?.clientWidth);
        });

        cy.contains('button', 'Toggle index').click();

        cy.get('tui-carousel').should(($carousel) => {
            expect($carousel.get(0)?.scrollLeft).to.equal(0);
        });
    });
});
