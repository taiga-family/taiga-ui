import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiBlockStatus],
    template: `
        <div data-platform="web">
            <tui-block-status size="m">
                <tui-avatar
                    size="xl"
                    src="assets/images/avatar.jpg"
                    tuiSlot="top"
                />
            </tui-block-status>
            <tui-block-status>
                <img
                    alt="Camping"
                    src="assets/images/camping.svg"
                    tuiSlot="top"
                    class="image"
                />
            </tui-block-status>
        </div>
    `,
    styles: [
        `
            .image {
                inline-size: 88px;
                block-size: 88px;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestBlockStatus {}

describe('BlockStatus', () => {
    beforeEach(() => cy.mount(TestBlockStatus));

    it('keeps the avatar image size', () => {
        cy.get('tui-avatar img').should('have.css', 'inline-size', '80px');
        cy.get('tui-avatar img').should('have.css', 'block-size', '80px');
    });

    it('allows overriding the illustration size', () => {
        cy.get('.image').should('have.css', 'inline-size', '88px');
        cy.get('.image').should('have.css', 'block-size', '88px');
    });
});
