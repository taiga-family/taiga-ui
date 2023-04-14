import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'stackblitz-edit-button',
    template: `
        <button
            tuiButton
            size="s"
            type="button"
            appearance="flat"
            icon="assets/icons/stackblitz.svg"
        >
            Edit
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButtonComponent {}
