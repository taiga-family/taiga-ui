import type {TuiContext} from '@taiga-ui/cdk/types';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

import type {TuiTextfieldOptions} from './textfield.options';
import type {TuiTextfieldAppearanceDirective} from './textfield-appearance.directive';
import type {TuiTextfieldCleanerDirective} from './textfield-cleaner.directive';
import type {TuiTextfieldCustomContentDirective} from './textfield-custom-content.directive';
import type {TuiTextfieldFillerDirective} from './textfield-filler.directive';
import type {TuiTextfieldIconDirective} from './textfield-icon.directive';
import type {TuiTextfieldIconLeftDirective} from './textfield-icon-left.directive';
import type {TuiTextfieldLabelOutsideDirective} from './textfield-label-outside.directive';
import type {TuiTextfieldPostfixDirective} from './textfield-postfix.directive';
import type {TuiTextfieldPrefixDirective} from './textfield-prefix.directive';
import type {TuiTextfieldSizeDirective} from './textfield-size.directive';

export class TuiTextfieldController {
    // eslint-disable-next-line @typescript-eslint/max-params,max-params
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

    public get iconStart(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        return this.iconLeftDirective.iconStart;
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
