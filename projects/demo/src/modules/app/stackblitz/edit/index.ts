import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLink],
    template: `
        <button
            iconStart="assets/icons/stackblitz.svg"
            tuiLink
            type="button"
        >
            Edit
        </button>
    `,
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButton {}
