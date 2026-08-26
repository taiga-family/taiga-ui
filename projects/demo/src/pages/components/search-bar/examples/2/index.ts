import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchbar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButtonX} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiActiveZone, TuiButtonX, TuiSearchbar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_PLATFORM, useValue: 'android'}],
    host: {'[attr.data-platform]': '"android"'},
})
export default class Example {
    protected readonly query = new FormControl('');
    protected readonly active = signal(false);

    protected onCancel(): void {
        this.query.reset();
        this.active.set(false);
    }
}
