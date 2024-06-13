import type {TemplateRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiIconComponent} from '@taiga-ui/core';
import type {TuiStatus} from '@taiga-ui/legacy';
import {TuiTagModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiTagModule, TuiIconComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    @ViewChild('errorIcon')
    protected errorTemplate?: TemplateRef<Record<string, unknown>>;

    protected removable = false;

    protected disabled = false;

    protected editable = false;

    protected autoColor = false;

    protected hoverable = false;

    protected showLoader = false;

    protected value = 'John Cleese';

    protected maxLengthVariants: number[] = [10, 20];

    protected maxLength: number | null = null;

    protected readonly statusVariants: readonly TuiStatus[] = [
        'default',
        'primary',
        'custom',
        'success',
        'error',
        'warning',
    ];

    protected status = this.statusVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size: TuiSizeL | TuiSizeS = this.sizeVariants[1];

    protected readonly leftContentVariants = ['', 'Error icon'];

    protected leftContentSelected = '';

    protected get leftContent(): PolymorpheusContent {
        return this.leftContentSelected && this.errorTemplate;
    }

    protected editTag(value: string): void {
        this.value = value;
    }
}
