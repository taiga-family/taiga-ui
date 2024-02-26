import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

export abstract class AbstractExampleTuiHint {
    public readonly appearanceVariants = ['', 'error', 'onDark'];

    public appearance = this.appearanceVariants[0];

    public readonly directionVariants = TUI_HINT_DIRECTIONS;

    public direction = this.directionVariants[0];
}
