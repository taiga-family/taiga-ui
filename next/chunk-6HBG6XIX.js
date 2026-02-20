import"./chunk-HU6DUUP4.js";var i=`<div
    appearance="positive"
    size="l"
    tuiAvatar="AI"
>
    @if (step()) {
        <tui-pulse
            tuiHintAppearance="floating"
            class="step-2"
            [tuiHint]="step2"
            [tuiHintManual]="step() === 2"
        >
            <ng-template #step2>
                <button
                    appearance="icon"
                    iconStart="@tui.x"
                    size="xs"
                    tuiIconButton
                    type="button"
                    (click)="step.set(0)"
                >
                    Close
                </button>
                <h3 tuiTitle>
                    You can have images!
                    <div tuiSubtitle>Or any content really</div>
                </h3>
                <img
                    alt="Alex Inkin"
                    src="https://avatars.githubusercontent.com/u/11832552"
                    class="avatar"
                />
                <footer>
                    <button
                        appearance="secondary-grayscale"
                        tuiButton
                        type="button"
                        (click)="step.set(1)"
                    >
                        Back
                    </button>
                    <button
                        tuiButton
                        type="button"
                        (click)="step.set(0)"
                    >
                        Got it!
                    </button>
                </footer>
            </ng-template>
        </tui-pulse>
    }
</div>
<button
    appearance="outline"
    size="m"
    tuiButton
    type="button"
    (click)="step.set(1)"
>
    Start tutorial
    @if (step()) {
        <tui-pulse
            tuiHintAppearance="accent"
            tuiHintDirection="end"
            tuiTheme="dark"
            class="step-1"
            [tuiHint]="step1"
            [tuiHintManual]="step() === 1"
        >
            <ng-template #step1>
                <button
                    appearance="icon"
                    iconStart="@tui.x"
                    size="xs"
                    tuiIconButton
                    type="button"
                    (click)="step.set(0)"
                >
                    Close
                </button>
                <h3 tuiTitle>
                    Welcome to the tutorial!
                    <div tuiSubtitle>This is the first step.</div>
                </h3>
                <footer>
                    <button
                        appearance="secondary-grayscale"
                        tuiButton
                        type="button"
                        (click)="step.set(0)"
                    >
                        Close
                    </button>
                    <button
                        tuiButton
                        type="button"
                        (click)="step.set(2)"
                    >
                        Next
                    </button>
                </footer>
            </ng-template>
        </tui-pulse>
    }
</button>
`;export{i as default};
