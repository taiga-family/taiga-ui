import {DOCUMENT} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TuiButtonX, TuiNotificationService} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButtonX, TuiSearchBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {'[attr.data-platform]': '"ios"'},
})
export default class Example {
    private readonly alert = inject(TuiNotificationService);
    private readonly doc = inject(DOCUMENT);

    protected readonly query = signal<string | null>('');

    protected onSubmit(): void {
        this.alert.open(`Searching for ${this.query()}`).subscribe();
    }

    // `type="reset"` clears the field, but the bar stays open while anything inside it
    // keeps focus — the field on some platforms, the button itself on others
    protected onCancel(): void {
        const focused = this.doc.activeElement;

        if (focused instanceof HTMLElement) {
            focused.blur();
        }
    }
}
