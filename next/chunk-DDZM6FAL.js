import"./chunk-HU6DUUP4.js";var a=`<p>
    <label tuiLabel>
        <input
            name="test"
            tuiRadio
            type="radio"
            value="primary"
            [(ngModel)]="value"
        />
        Show primary
    </label>
</p>
<p>
    <label tuiLabel>
        <input
            name="test"
            tuiRadio
            type="radio"
            value="card"
            [(ngModel)]="value"
        />
        Show card
    </label>
</p>
<p>
    <label tuiLabel>
        <input
            name="test"
            tuiRadio
            type="radio"
            value="actions"
            [(ngModel)]="value"
        />
        Show actions
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

    @if (value === 'primary') {
        <footer
            tuiFloatingContainer="transparent"
            class="static"
        >
            <button
                appearance="accent"
                tuiButton
                type="button"
            >
                Main action
            </button>
        </footer>
    }

    @if (value === 'card') {
        <footer tuiFloatingContainer="transparent">
            <div
                appearance="floating"
                tuiCardLarge="compact"
                [style.margin-block-end.rem]="0.5"
            >
                <header tuiHeader>
                    <div tuiTitle>
                        1000 $
                        <div tuiSubtitle>With price</div>
                    </div>
                    <aside tuiAccessories>
                        <button
                            tuiButton
                            type="button"
                        >
                            Continue
                        </button>
                    </aside>
                </header>
            </div>
        </footer>
    }

    @if (value === 'actions') {
        <footer tuiFloatingContainer>
            <button
                tuiButton
                type="button"
            >
                Main action
            </button>
            <button
                appearance="flat"
                tuiButton
                type="button"
            >
                Secondary action
            </button>
        </footer>
    }
</div>
`;export{a as default};
