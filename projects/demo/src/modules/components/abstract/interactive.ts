export abstract class AbstractExampleTuiInteractive {
    public readonly pseudoVariants: readonly boolean[] = [false, true];

    public readonly textAlignVariants: readonly string[] = ['left', 'right'];

    public textAlign = this.textAlignVariants[0];

    public focusable = true;

    public pseudoFocused: boolean | null = null;

    public pseudoHovered: boolean | null = null;

    public pseudoPressed: boolean | null = null;
}
