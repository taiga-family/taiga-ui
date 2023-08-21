import {tuiCreateToken} from '@taiga-ui/cdk';

/**
 * Array of arrays of related pages
 */
export const TUI_DOC_SEE_ALSO = tuiCreateToken<ReadonlyArray<readonly string[]>>([]);
