import {TUI_HINT_DIRECTIONS, TuiHintDirection} from '@taiga-ui/core';

export abstract class AbstractExampleTuiHint {
    public readonly appearanceVariants = ['', 'error', 'dark'];

    public appearance = this.appearanceVariants[0];

    public readonly directionVariants = TUI_HINT_DIRECTIONS;

    public direction: TuiHintDirection = this.directionVariants[0];
}
