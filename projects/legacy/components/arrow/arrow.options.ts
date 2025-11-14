import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
export interface TuiArrowOptions {
    readonly iconLarge: PolymorpheusContent;
    readonly iconSmall: PolymorpheusContent;
}

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
export const TUI_ARROW_DEFAULT_OPTIONS: TuiArrowOptions = {
    iconSmall: '@tui.chevron-down',
    iconLarge: '@tui.chevron-down',
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for arrow component
 */
export const [TUI_ARROW_OPTIONS, tuiArrowOptionsProvider] = tuiCreateOptions(
    TUI_ARROW_DEFAULT_OPTIONS,
);
