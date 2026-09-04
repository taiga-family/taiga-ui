import"./chunk-LQ6M4NCU.js";var e=`<div class="content">
    <tui-textfield class="field">
        <label tuiLabel>Name</label>
        <input
            placeholder="Tap to open the keyboard"
            tuiInput
            [(ngModel)]="value"
        />
    </tui-textfield>

    @for (_ of '-'.repeat(30); track $index) {
        <div tuiCell>
            <div
                appearance="primary"
                tuiAvatar="@tui.star"
            ></div>
            <div tuiTitle>
                Title
                <div tuiSubtitle>Description</div>
            </div>
        </div>
    }

    <footer tuiFloatingContainer="transparent">
        <button
            size="m"
            tuiButton
            type="button"
            class="action"
        >
            Next
        </button>
    </footer>
</div>
`;export{e as default};
