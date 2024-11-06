import type {TuiHintDirection} from '@taiga-ui/core';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

export abstract class AbstractExampleTuiHint {
    public readonly appearanceVariants = ['', 'error', 'dark'];

    public appearance = this.appearanceVariants[0]!;

    public readonly directionVariants = [
        ...TUI_HINT_DIRECTIONS,
        ['bottom', 'left'] satisfies TuiHintDirection[],
    ];

    public direction = this.directionVariants[0]!;
}
