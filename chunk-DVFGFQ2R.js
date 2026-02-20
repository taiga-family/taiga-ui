import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    (click)="fullscreen = true"
>
    Show fullscreen
</button>
<br />
<br />
<button
    tuiButton
    type="button"
    (click)="scrollable = true"
>
    Show scrollable
</button>
<ng-template
    [tuiDialogOptions]="{appearance: 'fullscreen'}"
    [(tuiDialog)]="fullscreen"
>
    <header tuiHeader>
        <hgroup tuiTitle>
            <h2>Fullscreen heading</h2>
            <p>
                This is shown fullscreen regardless of content height, you can use
                <code>margin-top: auto</code>
                to make sure footer is at the bottom of the page.
            </p>
        </hgroup>
    </header>
    <footer
        tuiFloatingContainer
        [style.margin-block-start]="'auto'"
    >
        <button
            tuiButton
            type="button"
            (click)="fullscreen = false"
        >
            Got it
        </button>
        <button
            appearance="flat"
            tuiButton
            type="button"
            (click)="fullscreen = false"
        >
            Never mind
        </button>
    </footer>
</ng-template>

<ng-template
    [tuiDialogOptions]="{appearance: 'fullscreen'}"
    [(tuiDialog)]="scrollable"
>
    <tui-app-bar tuiAppBarSize>
        <button
            iconStart="@tui.chevron-left"
            tuiIconButton
            tuiSlot="start"
            type="button"
            (click)="scrollable = false"
        >
            Back
        </button>
        <progress
            size="s"
            tuiProgressBar
            [max]="100"
            [style.width.rem]="10"
            [value]="35"
        ></progress>
        <button
            tuiButton
            tuiSlot="end"
            type="button"
            (click)="scrollable = false"
        >
            Action
        </button>
    </tui-app-bar>
    <section [style.margin]="'0 -1rem'">
        @for (_ of '-'.repeat(50); track $index) {
            <div tuiCell>
                <div
                    appearance="primary"
                    tuiAvatar="@tui.star"
                ></div>
                <div tuiTitle>
                    Title
                    <div tuiSubtitle>Description</div>
                </div>
                <div tuiTitle>
                    Secondary title
                    <div tuiSubtitle>Another description</div>
                </div>
            </div>
        }
    </section>
    <footer tuiFloatingContainer>
        <button
            tuiButton
            type="button"
            (click)="scrollable = false"
        >
            Got it
        </button>
        <button
            appearance="flat"
            tuiButton
            type="button"
            (click)="scrollable = false"
        >
            Never mind
        </button>
    </footer>
</ng-template>
`;export{o as default};
