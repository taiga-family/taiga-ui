import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {TuiRoot} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

let created = 0;

@Component({
    selector: 'child',
    template: 'child-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Child {
    constructor() {
        created++;
    }
}

@Component({
    imports: [Child, TuiAccordion, TuiRoot],
    template: `
        <tui-root>
            <tui-accordion>
                <button [(tuiAccordion)]="open">press</button>
                <tui-expand>
                    <child *tuiItem />
                </tui-expand>
            </tui-accordion>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Sandbox {
    public readonly open = model(false);
}

describe('Accordion with *tuiItem inside (lazy instantiated content)', () => {
    beforeEach(() => {
        created = 0;
    });

    it('does not instantiate [tuiItem] content until it is expanded', () => {
        cy.mount(Sandbox);

        cy.get('child')
            .should('not.exist')
            .then(() => {
                expect(created).to.equal(0);
            });
    });

    // https://github.com/taiga-family/taiga-ui/issues/11477
    it('instantiates [tuiItem] content only once on expand', () => {
        cy.mount(Sandbox);

        cy.get('button[tuiAccordion]').click();

        cy.get('child')
            .should('have.length', 1)
            .then(() => {
                expect(created).to.equal(1);
            });
    });

    it('instantiates [tuiItem] content only once when initially expanded', () => {
        cy.mount(Sandbox, {componentProperties: {open: true}});

        cy.get('child')
            .should('have.length', 1)
            .then(() => {
                expect(created).to.equal(1);
            });
    });
});
