import type {TuiStringHandler} from '@taiga-ui/cdk/types';

/**
 * Default method to turn arbitrary object into string
 */
export const TUI_DEFAULT_STRINGIFY: TuiStringHandler<unknown> = item => String(item);
