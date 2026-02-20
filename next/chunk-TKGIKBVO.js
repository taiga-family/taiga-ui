import"./chunk-HU6DUUP4.js";var e=`<p>
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
            [(ngModel)]="additional"
        />
        Additional content
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
        <footer tuiFloatingContainer>
            <button
                tuiButton
                type="button"
            >
                Main action
            </button>
            <tui-elastic-container>
                <div tuiSlides>
                    @if (additional) {
                        <button
                            appearance="flat"
                            tuiButton
                            type="button"
                        >
                            Secondary action
                        </button>
                    } @else {
                        <div class="clamp">
                            <tui-icon
                                icon="@tui.settings"
                                [style.font-size.rem]="1"
                            />
                            Legal text, max 3 lines
                        </div>
                    }
                </div>
            </tui-elastic-container>
        </footer>
    }
</div>
`;export{e as default};
