import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {
    TUI_DROPDOWN_COMPONENT,
    TuiDropdown,
    TuiDropdownDirective,
    tuiDropdownHoverOptionsProvider,
    TuiRoot,
} from '@taiga-ui/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

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
            <p class="outside">Outside</p>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class SheetSandbox {}

@Component({
    imports: [TuiDropdown, TuiRoot],
    template: `
        <tui-root>
            <button
                tuiDropdown="Content"
                tuiDropdownHover
                type="button"
            >
                Open
            </button>
            <p class="outside">Outside</p>
        </tui-root>
    `,
    styles: '.outside { margin-block-start: 20rem; }',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class HoverSandbox {}

@Component({
    selector: 'tui-test-wrapper',
    imports: [TuiDropdown],
    template: '<tui-dropdown />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Wrapper {}

@Component({
    selector: 'tui-test-text',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="dropdown.content() as text">
            {{ text }}
        </ng-container>
    `,
    styles: ':host { position: fixed; inset-block-start: 10rem; inset-inline-start: 10rem; }',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiActiveZone],
})
class Text {
    protected readonly dropdown = inject(TuiDropdownDirective);
}

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
            cy.mount(SheetSandbox, {
                providers: [{provide: WA_IS_MOBILE, useValue: true}],
            });

            movePointerTo('button');

            cy.get('tui-sheet-dialog')
                .should('be.visible')
                .then(([sheet]) =>
                    cy.wait(2000).then(() => expect(sheet?.isConnected).to.equal(true)),
                );
        });

        it('does not open the sheet when the pointer only brushes past', () => {
            cy.mount(SheetSandbox, {
                providers: [
                    {provide: WA_IS_MOBILE, useValue: true},
                    tuiDropdownHoverOptionsProvider({showDelay: 1000}),
                ],
            });

            movePointerTo('button');
            movePointerTo('.outside');

            cy.wait(1500);
            cy.get('tui-sheet-dialog').should('not.exist');
        });
    });

    describe('with a custom dropdown component', () => {
        it('closes a wrapper around tui-dropdown when the pointer leaves', () => {
            cy.mount(HoverSandbox, {
                providers: [{provide: TUI_DROPDOWN_COMPONENT, useValue: Wrapper}],
            });

            movePointerTo('button');
            cy.get('tui-dropdown').should('be.visible');

            movePointerTo('tui-dropdown');
            cy.wait(1000);
            cy.get('tui-dropdown').should('be.visible');

            movePointerTo('.outside');
            cy.get('tui-dropdown').should('not.exist');
        });

        it('closes a text-only dropdown with its own zone when the pointer leaves', () => {
            cy.mount(HoverSandbox, {
                providers: [{provide: TUI_DROPDOWN_COMPONENT, useValue: Text}],
            });

            movePointerTo('button');
            cy.get('tui-test-text').should('be.visible');

            movePointerTo('tui-test-text');
            cy.wait(1000);
            cy.get('tui-test-text').should('be.visible');

            movePointerTo('.outside');
            cy.get('tui-test-text').should('not.exist');
        });
    });
});
