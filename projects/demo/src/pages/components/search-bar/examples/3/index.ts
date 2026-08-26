import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchbar} from '@taiga-ui/addon-mobile';
import {TuiActiveZone, TuiAnimated} from '@taiga-ui/cdk';
import {TuiButtonX, TuiNotificationService} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiActiveZone, TuiAnimated, TuiButtonX, TuiSearchbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {'[attr.data-platform]': '"ios"'},
})
export default class Example {
    private readonly alert = inject(TuiNotificationService);

    protected readonly query = signal<string | null>('');
    protected readonly active = signal(false);

    protected onSubmit(): void {
        this.alert.open(`Searching for ${this.query()}`).subscribe();
    }
}
