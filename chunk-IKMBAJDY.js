import"./chunk-HU6DUUP4.js";var o=`import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiToast, TuiToastService} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiIcon, TuiToast],
    template: \`
        <div tuiToast>
            <tui-icon
                icon="@tui.triangle-alert"
                [style.color]="'var(--tui-status-negative)'"
            />
            Lost connection.
            <br />
            Restore your internet to continue
        </div>
    \`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {}

@Component({
    imports: [TuiButton, TuiToast],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly toast = inject(TuiToastService);
    protected readonly template = signal(false);

    protected primitive(): void {
        this.toast
            .open('Alarm saved', {autoClose: 0, data: '@tui.alarm-clock'})
            .subscribe();
    }

    protected component(): void {
        this.toast.open(new PolymorpheusComponent(Toast), {closable: false}).subscribe();
    }
}
`;export{o as default};
