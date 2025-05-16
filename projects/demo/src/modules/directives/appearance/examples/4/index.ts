import {ClipboardModule} from '@angular/cdk/clipboard';
import {KeyValuePipe, NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [ClipboardModule, KeyValuePipe, NgForOf, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly appearances = {
        Primary: ['primary', 'primary-destructive', 'primary-grayscale'],
        Secondary: ['secondary', 'secondary-destructive', 'secondary-grayscale'],
        Flat: ['flat', 'flat-destructive', 'flat-grayscale'],
        Outline: ['outline', 'outline-destructive', 'outline-grayscale'],
        Action: ['action', 'action-destructive', 'action-grayscale'],
        Status: ['neutral', 'negative', 'positive', 'warning', 'info'],
        Others: ['icon', 'floating', 'textfield', 'glass', 'accent'],
    };

    protected asIs(): number {
        return 0;
    }

    protected onCopy(name: string): void {
        this.alerts
            .open(`Appearance ${name} copied`, {appearance: 'positive'})
            .subscribe();
    }
}
