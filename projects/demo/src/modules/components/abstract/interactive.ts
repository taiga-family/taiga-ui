export abstract class AbstractExampleTuiInteractive {
    readonly pseudoVariants: readonly boolean[] = [false, true];

    readonly textAlignVariants: readonly string[] = [`left`, `right`];

    textAlign = this.textAlignVariants[0];

    focusable = true;

    pseudoFocused: boolean | null = null;

    pseudoHovered: boolean | null = null;

    pseudoPressed: boolean | null = null;
}
