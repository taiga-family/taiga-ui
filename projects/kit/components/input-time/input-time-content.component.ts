import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

import {TuiInputTimeComponent} from './input-time.component';

@Component({
    selector: 'tui-input-time-content',
    template: `
        @if (component.host.native) {
            <input
                type="time"
                [attr.list]="component.list"
                [step]="component.step()"
                [value]="component.value()"
                (change)="component.setValue($any($event.target).value)"
            />
        }
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-time.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputTimeContent {
    protected readonly component = inject(TuiInputTimeComponent);
}
