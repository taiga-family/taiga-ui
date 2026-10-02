import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiButtonClose, TuiSearchBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    host: {'[attr.data-platform]': '"ios"'},
})
export default class Example {
    private readonly alert = inject(TuiAlertService);

    protected query: string | null = '';

    protected onSubmit(): void {
        this.alert.open(`Searching for ${this.query}`).subscribe();
    }
}
