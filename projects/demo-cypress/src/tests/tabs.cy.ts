import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiTabs} from '@taiga-ui/kit';

describe('Tabs', () => {
    let component: Test;

    @Component({
        standalone: true,
        imports: [TuiTabs],
        template: `
            <tui-tabs [(activeItemIndex)]="activeItemIndex">
                <button
                    id="cards"
                    tuiTab
                >
                    Cards
                </button>
                <button
                    id="tariff"
                    tuiTab
                >
                    Rate
                </button>
                <button
                    id="calls"
                    disabled
                    tuiTab
                >
                    Challenges
                </button>
                <button
                    id="settings"
                    tuiTab
                >
                    Settings
                </button>
            </tui-tabs>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public activeItemIndex = 0;
    }

    beforeEach(() =>
        cy.mount(Test).then((wrapper) => {
            component = wrapper.component;
        }),
    );

    it('navigation by arrows works when going right', () => {
        cy.get('button').eq(0).focus();
        cy.get('body').type('{rightArrow}');
        cy.get('button').eq(1).focused();
    });

    it('navigation by arrows works when going left', () => {
        cy.get('button').eq(1).focus();
        cy.get('body').type('{leftArrow}');
        cy.get('button').eq(0).focused();
    });

    it('navigation by arrows skips disabled when going right', () => {
        cy.get('button').eq(1).focus();
        cy.get('body').type('{rightArrow}');
        cy.get('button').eq(2).focused();
    });

    it('navigation by arrows skips disabled when going left', () => {
        cy.get('button').eq(3).focus();
        cy.get('body').type('{leftArrow}');
        cy.get('button').eq(1).focused();
    });

    it('updates activeItemIndex', () => {
        cy.get('button')
            .eq(3)
            .click()
            .then(() => expect(component.activeItemIndex).to.equal(3));
    });
});
