import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiInputInlineTextarea} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, NgIf, TuiAutoFocus, TuiButton, TuiInputInlineTextarea],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected description = 'This is a multiline description\nthat can span multiple lines\nand be edited inline.';
    protected editing = false;

    protected toggle(): void {
        this.editing = !this.editing;
    }

    protected onBlur(): void {
        this.editing = false;
        this.saveDescription(this.description);
    }

    private saveDescription(newDescription: string): void {
        this.alerts.open(newDescription, {label: 'New description'}).subscribe();
    }
}