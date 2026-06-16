import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Cell"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (10) {
                        Open this example on the phone with OS font size increased by 150% to see cell rearrange for
                        better readability.
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div
                [tuiCell]="size"
                [tuiCellHeight]="height"
            >
                @if (height !== 'compact') {
                    <div
                        appearance="primary"
                        tuiAvatar="@tui.star"
                    ></div>
                }
                <div tuiTitle>
                    Title
                    @if (height !== 'compact') {
                        <div tuiSubtitle>Description</div>
                    }
                </div>
                <div tuiTitle>
                    Secondary title
                    @if (height !== 'compact') {
                        <div tuiSubtitle>Another description</div>
                    }
                </div>
            </div>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[tuiCell]"
                tuiDocAPIItem
                type="'l' | 'm' | 's'"
                [items]="sizes"
                [(value)]="size"
            >
                layout size
            </tr>
            <tr
                name="[tuiCellHeight]"
                tuiDocAPIItem
                type="'normal' | 'compact' | 'spacious'"
                [items]="heights"
                [(value)]="height"
            >
                height mode
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
