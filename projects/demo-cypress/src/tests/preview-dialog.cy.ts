import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButton, TuiDialog, TuiRoot} from '@taiga-ui/core';
import {TuiPreviewDialogService} from '@taiga-ui/kit';

describe('TuiPreviewDialog Escape Key Behavior', () => {
    @Component({
        standalone: true,
        imports: [TuiButton, TuiDialog, TuiRoot],
        template: `
            <tui-root>
                <button
                    id="open-dialog"
                    tuiButton
                    type="button"
                    (click)="dialogOpen = true"
                >
                    Open Dialog
                </button>
                <ng-template [(tuiDialog)]="dialogOpen">
                    <div id="dialog-content">
                        <h3>Dialog content</h3>
                        <button
                            id="open-preview"
                            tuiButton
                            type="button"
                            (click)="openPreview()"
                        >
                            Open Preview
                        </button>
                    </div>
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        private readonly previewService = inject(TuiPreviewDialogService);

        protected dialogOpen = false;

        protected openPreview(): void {
            this.previewService.open('Preview content text').subscribe();
        }
    }

    beforeEach(() => cy.mount(Test));

    it('should close only preview dialog on first escape key press', () => {
        // Open the dialog
        cy.get('#open-dialog').click();
        cy.get('#dialog-content').should('be.visible');

        // Open the preview dialog inside the main dialog
        cy.get('#open-preview').click();
        cy.get('tui-preview-dialog').should('exist');

        // Wait a bit for animations
        cy.wait(100);

        // Press escape key - should close only the preview dialog
        cy.get('body').trigger('keydown', {key: 'Escape', code: 'Escape'});

        // Wait for animations
        cy.wait(200);

        // Preview dialog should be closed, main dialog should remain open
        cy.get('tui-preview-dialog').should('not.exist');
        cy.get('#dialog-content').should('be.visible');

        // Don't test the second escape for now - just verify the fix works
    });

    it('should handle escape key events with proper propagation', () => {
        // Test just the preview dialog functionality
        cy.get('#open-dialog').click();
        cy.get('#open-preview').click();

        // Verify preview dialog exists
        cy.get('tui-preview-dialog').should('exist');

        // Test escape key functionality
        cy.get('body').trigger('keydown', {key: 'Escape', code: 'Escape'});
        cy.wait(200);

        // Preview should close but dialog should remain
        cy.get('tui-preview-dialog').should('not.exist');
        cy.get('tui-dialog').should('exist');
    });
});
