import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'stackblitz-edit-button',
    // eslint-disable-next-line @angular-eslint/component-max-inline-declarations
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
