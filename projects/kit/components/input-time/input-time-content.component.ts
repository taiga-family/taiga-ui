import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {maskitoParseTime} from '@maskito/kit';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiTime} from '@taiga-ui/cdk/date-time';

import {TuiInputTimeComponent} from './input-time.component';
import {TuiInputTimeDirective} from './input-time.directive';

@Component({
    selector: 'tui-input-time-content',
    template: `
        @if (host.native) {
            <input
                type="time"
                [attr.list]="component.list"
                [step]="step()"
                [value]="value()"
                (change)="setValue($any($event.target).value)"
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
    protected readonly host = inject(TuiInputTimeDirective);

    protected readonly value = computed(() =>
        this.component.toISOString(this.host.value()),
    );

    protected readonly step = computed(() =>
        this.component.getStep(this.host.timeMode()),
    );

    protected setValue(value: string): void {
        this.host.setValue(
            TuiTime.fromAbsoluteMilliseconds(
                maskitoParseTime(value, {mode: 'HH:MM:SS.MSS'}),
            ),
        );
    }
}
