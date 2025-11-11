import {EMPTY_FUNCTION, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';

import {type TuiTreeController} from './tree.interfaces';

export const TUI_DEFAULT_TREE_CONTROLLER: TuiTreeController = {
    isExpanded: TUI_TRUE_HANDLER,
    toggle: EMPTY_FUNCTION,
};
