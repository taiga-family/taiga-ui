import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {TuiDropdown, tuiDropdownHoverOptionsProvider, TuiRoot} from '@taiga-ui/core';

@Component({
    imports: [TuiDropdown, TuiDropdownSheet, TuiRoot],
    template: `
        <tui-root>
            <button
                tuiDropdown="Content"
                tuiDropdownHover
                tuiDropdownSheet
                type="button"
            >
                Open
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class SheetSandbox {}

const PROVIDERS = [
    {provide: WA_IS_MOBILE, useValue: true},
    tuiDropdownHoverOptionsProvider({showDelay: 0, hideDelay: 0}),
];

// Unlike `trigger`, a real pointer makes the browser fire its own mouseover / mouseout,
// including the ones fired when content appears under a resting pointer
function movePointer(x: number, y: number): void {
    cy.then(async () =>
        Cypress.automation('remote:debugger:protocol', {
            command: 'Input.dispatchMouseEvent',
            params: {type: 'mouseMoved', x, y},
        }),
    );
}

function movePointerTo(selector: string): void {
    cy.get(selector).then(($element) => {
        const element = $element[0]!;
        const {left, top, width, height} = element.getBoundingClientRect();
        // Cypress hides `frameElement` from the app, so find its frame from the top window
        const frame = Array.from(
            window.top?.document.querySelectorAll('iframe') ?? [],
        ).find((iframe) => iframe.contentWindow === element.ownerDocument.defaultView);

        if (!frame) {
            throw new Error('Cannot find the frame of the component under test');
        }

        const rect = frame.getBoundingClientRect();
        const scale = rect.width / frame.offsetWidth;

        movePointer(
            rect.left + (left + width / 2) * scale,
            rect.top + (top + height / 2) * scale,
        );
    });
}

describe('DropdownHover', () => {
    beforeEach(() => {
        cy.viewport(400, 600);
        movePointer(0, 0);
    });

    // The real pointer stays put between specs, keep it off the next components
    afterEach(() => movePointer(0, 0));

    describe('with DropdownSheet', () => {
        it('keeps the sheet open under a resting pointer', () => {
            cy.mount(SheetSandbox, {providers: PROVIDERS});

            movePointerTo('button');

            cy.get('tui-sheet-dialog')
                .should('be.visible')
                .then(([sheet]) =>
                    cy.wait(2000).then(() => expect(sheet?.isConnected).to.equal(true)),
                );
        });

        it('keeps the sheet open while the pointer moves inside it', () => {
            cy.mount(SheetSandbox, {providers: PROVIDERS});

            movePointerTo('button');

            cy.get('tui-sheet-dialog')
                .should('be.visible')
                .then(([sheet]) => {
                    movePointerTo('tui-sheet-dialog .t-content');
                    movePointerTo('tui-sheet-dialog');
                    cy.wait(1000).then(() => expect(sheet?.isConnected).to.equal(true));
                });
        });
    });
});
