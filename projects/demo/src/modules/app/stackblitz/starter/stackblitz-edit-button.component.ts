import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'stackblitz-edit-button',
    template: `
        <button
            icon="assets/icons/stackblitz.svg"
            iconAlign="left"
            tuiLink
            type="button"
        >
            Edit
        </button>
    `,
    styleUrls: ['./stackblitz-edit-button.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButtonComponent {}
