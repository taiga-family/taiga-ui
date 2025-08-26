import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButton, TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiIcon],
    template: `
        <button
            appearance="flat"
            size="xs"
            tuiButton
            type="button"
        >
            <tui-icon
                background="@tui.square-filled"
                icon="@tui.zap-filled"
            />
            Edit
        </button>
    `,
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzEditButton {}
