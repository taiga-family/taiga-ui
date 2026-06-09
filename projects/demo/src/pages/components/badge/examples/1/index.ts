import {DOCUMENT} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiSlider} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiBadge, TuiPlatform, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly doc = inject(DOCUMENT);
    protected readonly value = signal(0);
    protected readonly sizes = ['s', 'm', 'l', 'xl'] as const;

    protected onValueChange(value: number): void {
        this.doc.documentElement.style.setProperty('--t-font-offset', `${value}`);
    }
}
