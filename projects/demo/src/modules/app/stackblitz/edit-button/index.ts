import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButtonDirective, TuiLinkDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLinkDirective, TuiButtonDirective],
    template: `
        <button
            iconLeft="assets/icons/stackblitz.svg"
            tuiLink
            type="button"
        >
            Edit
        </button>
    `,
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButtonComponent {}
