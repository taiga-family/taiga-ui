import"./chunk-42JZD6NG.js";var i=`import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiButton, TuiNumberFormat, TuiPopup} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiDialogService} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiElasticSticky,
        TuiNumberFormat,
        TuiPopup,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected readonly filters = signal(false);

    protected onElastic(value: number, {style}: HTMLElement): void {
        const scale = tuiClamp(value, 0.7, 1);

        style.setProperty('transform', \`scale(\${scale})\`);
        style.setProperty('width', \`calc((100% + 3.5rem) / \${scale})\`);
    }

    protected onFilterClick(): void {
        this.filters.set(true);
        this.dialogs.open('Dialog with filters').subscribe({
            complete: () => this.filters.set(false),
        });
    }

    protected showDialog(content: PolymorpheusContent): void {
        this.dialogs.open(content).subscribe();
    }
}
`;export{i as default};
