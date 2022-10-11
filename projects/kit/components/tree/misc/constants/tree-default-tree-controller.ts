import {ALWAYS_TRUE_HANDLER, EMPTY_FUNCTION} from '@taiga-ui/cdk';

import type {TuiTreeController} from '../tree.interfaces';

export const TUI_DEFAULT_TREE_CONTROLLER: TuiTreeController = {
    isExpanded: ALWAYS_TRUE_HANDLER,
    toggle: EMPTY_FUNCTION as () => void,
};
