import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'stackblitz-edit-button',
    template: `
        <button
            appearance="flat"
            icon="assets/icons/stackblitz.svg"
            size="s"
            tuiButton
            type="button"
        >
            Edit
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButtonComponent {}
