import"./chunk-HU6DUUP4.js";var a=`<p>
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
            [(ngModel)]="background"
        />
        Background visibility
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

<p>
    <tui-textfield [iconStart]="'@tui.paintbrush'">
        <label tuiLabel>Background color</label>
        <input
            placeholder="#00000000"
            tuiInputColor
            [(ngModel)]="color"
        />
    </tui-textfield>
    <label class="label">
        <span>0%</span>
        <span>Opacity</span>
        <span>100%</span>
    </label>
</p>

<div class="content">
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
        <footer [tuiFloatingContainer]="background ? color : 'transparent'">
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
`;export{a as default};
