import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'stackblitz-edit-button',
    template: `
        <button
            tuiLink
            type="button"
        >
            <span class="t-content">
                <tui-svg src="assets/icons/stackblitz.svg"></tui-svg>
                Edit
            </span>
        </button>
    `,
    styleUrls: ['./stackblitz-edit-button.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButtonComponent {}
