import type {TemplateRef} from '@angular/core';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiComponentPipe, TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLabelComponent, TuiTooltipModule} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiAddonDocModule,
        TuiComponentPipe,
        TuiExamplePipe,
        TuiLabelComponent,
        TuiTooltipModule,
        TuiSetupComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly labelVariants = ['No default value', 'Template'];

    protected label = this.labelVariants[0];

    protected getLabel(
        directive: TemplateRef<Record<string, unknown>>,
    ): PolymorpheusContent {
        return this.label === this.labelVariants[1] ? directive : this.label;
    }
}
