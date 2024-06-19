import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeM} from '@taiga-ui/core';
import {TuiHint, TuiNotificationComponent} from '@taiga-ui/core';
import {TuiTextareaModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiTextareaModule,
        ReactiveFormsModule,
        TuiHint,
        TuiTextfieldControllerModule,
        InheritedDocumentation,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiDocExcludeProperties([
            'tuiTextfieldPrefix',
            'tuiTextfieldPostfix',
            'tuiTextfieldFiller',
        ]),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly routes = DemoRoute;
    protected readonly iconVariants = ['', '@tui.search', '@tui.calendar'];
    protected icon = this.iconVariants[0];
    protected readonly rowsVariants: readonly number[] = [8, 15, 30];
    protected rows: number = this.rowsVariants[0];
    protected expandable = false;
    protected placeholder = 'Placeholder';

    public control = new FormControl('');
    public override readonly maxLengthVariants: readonly number[] = [50, 100, 500];
    public override maxLength: number | null = null;

    public override readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeM> = [
        'm',
        'l',
    ];

    public override size: TuiSizeL | TuiSizeM = this.sizeVariants[1];
}
