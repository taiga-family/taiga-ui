export abstract class AbstractExampleTuiInteractive {
    protected readonly pseudoVariants: readonly boolean[] = [false, true];

    protected readonly textAlignVariants: readonly string[] = ['left', 'right'];

    protected textAlign = this.textAlignVariants[0];

    public focusable = true;

    public pseudoFocused: boolean | null = null;

    public pseudoHovered: boolean | null = null;

    public pseudoPressed: boolean | null = null;
}
