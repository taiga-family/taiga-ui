import type {TemplateRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeS} from '@taiga-ui/core';
import {TuiIcon} from '@taiga-ui/core';
import {TuiPager} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiIcon, TuiPager],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    @ViewChild('templateRef')
    protected templateRef?: TemplateRef<unknown>;

    protected readonly examples = ['Basic', 'Icons', 'Dynamic width'];

    protected index = 0;

    protected max = 6;

    protected sizes: TuiSizeS[] = ['m', 's'];

    protected size = this.sizes[0]!;

    protected countVariants = [10, 15, 1, 2, 3, 4, 5, 6, 8, 100];

    protected count = this.countVariants[0]!;

    protected templateVariants = ['', 'Template'];
    protected selectedTemplate = this.templateVariants[0]!;

    protected get valueContent(): TemplateRef<unknown> | undefined {
        return this.templateRef && this.selectedTemplate ? this.templateRef : undefined;
    }
}
