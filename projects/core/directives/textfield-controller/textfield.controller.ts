import {TuiContext} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiTextfieldOptions} from './textfield.options';
import {TuiTextfieldAppearanceDirective} from './textfield-appearance.directive';
import {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import {TuiTextfieldFillerDirective} from './textfield-filler.directive';
import {TuiTextfieldIconDirective} from './textfield-icon.directive';
import {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import {TuiTextfieldPostfixDirective} from './textfield-postfix.directive';
import {TuiTextfieldPrefixDirective} from './textfield-prefix.directive';
import {TuiTextfieldSizeDirective} from './textfield-size.directive';

export class TuiTextfieldController {
    constructor(
        public readonly change$: Observable<void>,
        public readonly options: TuiTextfieldOptions,
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

    public get appearance(): string {
        return this.appearanceDirective.appearance || this.legacyAppearance;
    }

    public get cleaner(): boolean {
        return this.cleanerDirective.cleaner;
    }

    public get customContent(): PolymorpheusContent {
        return this.customContentDirective.customContent || '';
    }

    public get icon(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.iconDirective.icon;
    }

    public get iconLeft(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.iconLeftDirective.iconLeft;
    }

    public get labelOutside(): boolean {
        return this.labelOutsideDirective.labelOutside;
    }

    public get size(): TuiSizeL | TuiSizeS {
        return this.sizeDirective.size;
    }

    public get prefix(): string {
        return this.prefixDirective.prefix;
    }

    public get postfix(): string {
        return this.postfixDirective.postfix;
    }

    public get filler(): string {
        return this.fillerDirective.filler;
    }
}
