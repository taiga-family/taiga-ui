import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

import type {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import type {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import type {TuiTextfieldIconDirective} from './textfield-icon.directive';
import type {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import type {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import type {TuiTextfieldSizeDirective} from './textfield-size.directive';

export class TuiTextfieldController {
    constructor(
        readonly change$: Observable<void>,
        private readonly cleanerDirective: TuiTextfieldCleanerDirective,
        private readonly customContentDirective: TuiTextfieldCustomContentDirective,
        private readonly iconDirective: TuiTextfieldIconDirective,
        private readonly iconLeftDirective: TuiTextfieldIconLeftDirective,
        private readonly labelOutsideDirective: TuiTextfieldLabelOutsideDirective,
        private readonly sizeDirective: TuiTextfieldSizeDirective,
    ) {}

    get cleaner(): boolean {
        return this.cleanerDirective.cleaner;
    }

    get customContent(): PolymorpheusContent {
        return this.customContentDirective.customContent || ``;
    }

    get icon(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>> {
        return this.iconDirective.icon;
    }

    get iconLeft(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>> {
        return this.iconLeftDirective.iconLeft;
    }

    get labelOutside(): boolean {
        return this.labelOutsideDirective.labelOutside;
    }

    get size(): TuiSizeS | TuiSizeL {
        return this.sizeDirective.size;
    }
}
