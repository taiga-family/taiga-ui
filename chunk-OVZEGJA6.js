import"./chunk-42JZD6NG.js";var e=`<p>
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
    <div
        *tuiRepeatTimes="let i of 30"
        tuiCell
    >
        <div
            appearance="primary"
            tuiAvatar="@tui.star"
        ></div>
        <div tuiTitle>
            Title
            <div tuiSubtitle>Description</div>
        </div>
    </div>

    @if (floating) {
        <footer
            @tuiSlideInTop
            [tuiFloatingContainer]="background ? color : 'transparent'"
        >
            <button
                tuiButton
                type="button"
            >
                Main action
            </button>
            @if (secondAction) {
                <button
                    appearance="flat"
                    tuiButton
                    type="button"
                    @tuiHeightCollapse
                >
                    Secondary action
                </button>
            }
        </footer>
    }
</div>
`;export{e as default};
