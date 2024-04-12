import {Component} from '@angular/core';
import {TuiTabsModule} from '@taiga-ui/kit';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('Tabs', () => {
    let component: TestComponent;

    @Component({
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
    })
    class TestComponent {
        public activeItemIndex = 0;
    }

    beforeEach(() =>
        cy
            .mount(TestComponent, {
                imports: [TuiTabsModule],
                providers: [NG_EVENT_PLUGINS],
            })
            .then(wrapper => {
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
