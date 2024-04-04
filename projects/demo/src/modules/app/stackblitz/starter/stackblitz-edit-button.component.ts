import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'stackblitz-edit-button',
    template: `
        <button
            iconLeft="assets/icons/stackblitz.svg"
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
