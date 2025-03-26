import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton],
    template: `
        <button
            appearance="flat"
            iconStart="assets/icons/stackblitz.svg"
            size="xs"
            tuiButton
            type="button"
        >
            Edit
        </button>
    `,
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButton {}
