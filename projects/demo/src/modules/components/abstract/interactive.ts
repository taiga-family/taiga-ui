export abstract class AbstractExampleTuiInteractive {
    readonly pseudoVariants: readonly boolean[] = [false, true];

    focusable = true;

    pseudoFocused: boolean | null = null;

    pseudoHovered: boolean | null = null;

    pseudoPressed: boolean | null = null;
}
