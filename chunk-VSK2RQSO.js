import"./chunk-42JZD6NG.js";var i=`<tui-doc-page
    header="FloatingContainer"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>FloatingContainer</code>
            is a special container for creating different animated sticky footers
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
                [id]="example | tuiKebab"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
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
                    <footer
                        @tuiSlideInTop
                        [tuiFloatingContainer]="color"
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
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiFloatingContainer]"
                tuiDocAPIItem
                type="string"
                [items]="colors"
                [(value)]="color"
            >
                Background
            </tr>
        </table>
    </ng-template>

    <tui-setup *pageTab />
</tui-doc-page>
`;export{i as default};
