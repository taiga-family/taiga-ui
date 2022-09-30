import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

export abstract class AbstractExampleTuiHint {
    readonly appearanceVariants = [``, `error`, `onDark`];

    appearance = this.appearanceVariants[0];

    readonly directionVariants = TUI_HINT_DIRECTIONS;

    direction = this.directionVariants[0];
}
