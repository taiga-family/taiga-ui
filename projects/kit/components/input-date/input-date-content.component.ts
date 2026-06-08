import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiDay} from '@taiga-ui/cdk/date-time';

import {TuiInputDateComponent} from './input-date.component';
import {TuiInputDateDirective} from './input-date.directive';

@Component({
    selector: 'tui-input-date-content',
    template: `
        @if (host.native) {
            <input
                type="date"
                [attr.list]="component.list()"
                [max]="host.max().toJSON()"
                [min]="host.min().toJSON()"
                [value]="host.value()?.toJSON()"
                (click.stop.zoneless)="(0)"
                (input)="onInput($any($event.target).value)"
                (pointerdown.stop.zoneless)="(0)"
            />
        }
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-date.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputDateContent {
    protected readonly component = inject(TuiInputDateComponent);
    protected readonly host = inject(TuiInputDateDirective);

    protected onInput(value: string): void {
        if (!value) {
            return this.host.onChange(null);
        }

        const [year = 0, month = 0, day = 0] = value.split('-').map(Number);

        this.host.onChange(new TuiDay(year, month - 1, day));
    }
}
