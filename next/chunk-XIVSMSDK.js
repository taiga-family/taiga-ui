import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="FloatingContainer"
    package="LAYOUT"
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
                [description]="description"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        Appearing on scroll and toggling of secondary action.
                    }
                    @case (1) {
                        Using inside a
                        <a
                            tuiLink
                            [routerLink]="routes.SheetDialog"
                        >
                            SheetDialog
                        </a>
                    }
                    @case (2) {
                        Text block can be used together with a single button.
                    }
                    @case (3) {
                        Any kind of content can be placed inside. Use
                        <code>animation: none</code>
                        to prevent pop-in animation.
                    }
                    @case (4) {
                        Overlay color can be customized.
                    }
                    @case (5) {
                        Using
                        <a
                            tuiLink
                            [routerLink]="routes.Slides"
                        >
                            Slides
                        </a>
                        to crossfade a button.
                    }
                }
            </ng-template>
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
                    <footer [tuiFloatingContainer]="color">
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
</tui-doc-page>
`;export{i as default};
