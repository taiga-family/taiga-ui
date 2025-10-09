import {AsyncPipe} from '@angular/common';
import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiButton, TuiNumberFormat, TuiPopupService} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiDialogService} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiElasticSticky,
        TuiNumberFormat,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly popups = inject(TuiPopupService);

    protected filters = false;

    protected onElastic(value: number, {style}: HTMLElement): void {
        const scale = tuiClamp(value, 0.7, 1);

        style.setProperty('transform', `scale(${scale})`);
        style.setProperty('width', `calc((100% + 3.5rem) / ${scale})`);
    }

    protected onFilterClick(): void {
        this.filters = true;
        this.dialogs.open('Dialog with filters').subscribe({
            complete: () => {
                this.filters = false;
            },
        });
    }

    protected showDialog(
        content: PolymorpheusContent,
        button: TemplateRef<Record<string, unknown>>,
    ): void {
        const ref = this.popups.add(button);

        this.dialogs.open(content).subscribe({complete: () => ref.destroy()});
    }
}
