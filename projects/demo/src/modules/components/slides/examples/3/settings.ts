import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCell, TuiSwitch, TuiTitle],
    template: `
        <label tuiCell>
            <span tuiTitle>Do not disturb</span>
            <input
                tuiSwitch
                type="checkbox"
                [(ngModel)]="dnd"
            />
        </label>
        <label tuiCell>
            <span tuiTitle>Silent mode</span>
            <input
                tuiSwitch
                type="checkbox"
                [(ngModel)]="silent"
            />
        </label>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
})
export class Settings {
    protected dnd = false;
    protected silent = false;
}
