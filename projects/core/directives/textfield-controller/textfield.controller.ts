import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiTextfieldAppearanceDirective} from './textfield-appearance.directive';
import {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import {TuiTextfieldFillerDirective} from './textfield-filler.directive';
import {TuiTextfieldIconDirective} from './textfield-icon.directive';
import {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import {TuiTextfieldOptions} from './textfield-options';
import {TuiTextfieldPostfixDirective} from './textfield-postfix.directive';
import {TuiTextfieldPrefixDirective} from './textfield-prefix.directive';
import {TuiTextfieldSizeDirective} from './textfield-size.directive';

export class TuiTextfieldController {
    constructor(
        readonly change$: Observable<void>,
        readonly options: TuiTextfieldOptions,
        private readonly legacyAppearance: string,
        private readonly appearanceDirective: TuiTextfieldAppearanceDirective,
        private readonly cleanerDirective: TuiTextfieldCleanerDirective,
        private readonly customContentDirective: TuiTextfieldCustomContentDirective,
        private readonly iconDirective: TuiTextfieldIconDirective,
        private readonly iconLeftDirective: TuiTextfieldIconLeftDirective,
        private readonly labelOutsideDirective: TuiTextfieldLabelOutsideDirective,
        private readonly sizeDirective: TuiTextfieldSizeDirective,
        private readonly prefixDirective: TuiTextfieldPrefixDirective,
        private readonly postfixDirective: TuiTextfieldPostfixDirective,
        private readonly fillerDirective: TuiTextfieldFillerDirective,
    ) {}

    get appearance(): string {
        return this.appearanceDirective.appearance || this.legacyAppearance;
    }

    get cleaner(): boolean {
        return this.cleanerDirective.cleaner;
    }

    get customContent(): PolymorpheusContent {
        return this.customContentDirective.customContent ?? ``;
    }

    get icon(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>> {
        return this.iconDirective.icon;
    }

    get iconLeft(): PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>> {
        return this.iconLeftDirective.iconLeft;
    }

    get labelOutside(): boolean {
        return this.labelOutsideDirective.labelOutside;
    }

    get size(): TuiSizeL | TuiSizeS {
        return this.sizeDirective.size;
    }

    get prefix(): string {
        return this.prefixDirective.prefix;
    }

    get postfix(): string {
        return this.postfixDirective.postfix;
    }

    get filler(): string {
        return this.fillerDirective.filler;
    }
}
