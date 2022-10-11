import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeM, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiArrowOptions {
    readonly iconSmall: PolymorpheusContent;
    readonly iconLarge: PolymorpheusContent;
}

export interface TuiArrowMode {
    readonly interactive: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeS | TuiSizeM | TuiSizeL>
    >;
    readonly disabled: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeS | TuiSizeM | TuiSizeL>
    >;
}
