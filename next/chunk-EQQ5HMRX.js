import"./chunk-HU6DUUP4.js";var n=`<h2>Scroll to see the floating</h2>

<p>
    <label tuiLabel>
        <input
            tuiSwitch
            type="checkbox"
            [(ngModel)]="floating"
        />
        Floating visibility
    </label>
</p>
<p>
    <label tuiLabel>
        <input
            tuiSwitch
            type="checkbox"
            [(ngModel)]="secondAction"
        />
        Second action visibility
    </label>
</p>

<div
    #content
    class="content"
    (scroll)="onScroll(content)"
>
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

    @if (floating) {
        <footer [tuiFloatingContainer]="secondAction ? '' : 'transparent'">
            <button
                tuiButton
                type="button"
            >
                Main action
            </button>
            <tui-expand [expanded]="secondAction">
                <button
                    appearance="flat"
                    tuiButton
                    type="button"
                >
                    Secondary action
                </button>
            </tui-expand>
        </footer>
    }
</div>
`;export{n as default};
