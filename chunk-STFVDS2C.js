import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Notification"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>A notification message that can be displayed inline or as an alert</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Various sizes, visual options and content examples
                        }
                        @case (1) {
                            Using DI to set default values
                        }
                        @case (2) {
                            Interactive tags and visual customization
                        }
                        @case (3) {
                            Using directive to show a popover notification
                        }
                        @case (4) {
                            Using service to show a popover notification
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div
                tuiNotification
                [appearance]="appearance.appearance"
                [icon]="icon"
                [size]="size"
            >
                <div tuiTitle>
                    Title
                    <div tuiSubtitle>I'm a subtitle secondary text</div>
                    <footer>
                        <button
                            tuiButton
                            type="button"
                            (click)="notifications.open('I am content', this).subscribe()"
                        >
                            Show popover
                        </button>
                    </footer>
                </div>
            </div>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS | TuiSizeL"
                [items]="sizes"
                [(value)]="size"
            >
                Notification size
            </tr>
            <tr
                name="[icon]"
                tuiDocAPIItem
                type="TuiStringHandler<string> | string"
                [items]="icons"
                [(value)]="icon"
            >
                Icon
            </tr>
            <tbody
                #appearance
                [hiddenOptions]="['mode', 'state', 'focus']"
                [tuiDocAppearance]="['info', 'warning', 'negative', 'positive', 'neutral']"
            ></tbody>
            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            Popover options
                            <span tuiSubtitle>Used when shown with a directive or a service</span>
                        </span>
                    </td>
                </tr>
                <tr
                    name="[label]"
                    tuiDocAPIItem
                    type="string"
                    [(value)]="label"
                >
                    Heading
                </tr>
                <tr
                    name="[data]"
                    tuiDocAPIItem
                    type="I"
                >
                    Arbitrary input data for the notification
                </tr>
                <tr
                    name="[autoClose]"
                    tuiDocAPIItem
                    type="TuiNumberHandler<string> | number"
                    [items]="autoCloseVariants"
                    [(value)]="autoClose"
                >
                    Auto close timeout, 0 for no auto close
                </tr>
                <tr
                    name="[closable]"
                    tuiDocAPIItem
                    type="boolean"
                    [(value)]="closable"
                >
                    Has close button
                </tr>
                <tr
                    name="[block]"
                    tuiDocAPIItem
                    type="'start' | 'end'"
                    [items]="blockVariants"
                    [(value)]="block"
                >
                    Block position
                </tr>
                <tr
                    name="[inline]"
                    tuiDocAPIItem
                    type="'start' | 'center' | 'end'"
                    [items]="inlineVariants"
                    [(value)]="inline"
                >
                    Inline position
                </tr>
            </tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
