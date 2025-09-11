import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButton, TuiDialog, TuiRoot} from '@taiga-ui/core';
import {TuiPreviewDialogService} from '@taiga-ui/kit';

describe('TuiPreviewDialog Escape Key Behavior', () => {
    @Component({
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
        cy.get('#open-dialog').click();
        cy.get('#dialog-content').should('be.visible');

        cy.get('#open-preview').click();
        cy.get('tui-preview-dialog').should('exist');

        cy.wait(100);

        cy.get('body').trigger('keydown', {key: 'Escape', code: 'Escape'});

        cy.wait(200);

        cy.get('tui-preview-dialog').should('not.exist');
        cy.get('#dialog-content').should('be.visible');
    });

    it('should handle escape key events with proper propagation', () => {
        cy.get('#open-dialog').click();
        cy.get('#open-preview').click();

        cy.get('tui-preview-dialog').should('exist');

        cy.get('body').trigger('keydown', {key: 'Escape', code: 'Escape'});
        cy.wait(200);

        cy.get('tui-preview-dialog').should('not.exist');
        cy.get('tui-dialog').should('exist');
    });
});
