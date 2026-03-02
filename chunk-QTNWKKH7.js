import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Carousel"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <div>Carousel allows you to rotate through arbitrary items. Multiple items can be shown simultaneously.</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-carousel
                class="carousel"
                [draggable]="draggable"
                [duration]="duration"
                [itemsCount]="itemsCount"
                [style.--tui-carousel-padding]="itemPadding"
                [(index)]="index"
                (touchstart.passive.stop)="(0)"
            >
                @for (_ of '-'.repeat(9); track $index) {
                    <div
                        *tuiItem
                        class="plate"
                    >
                        {{ $index }}
                        <button
                            size="s"
                            tuiButton
                            type="button"
                            class="button"
                        >
                            I'm focusable
                        </button>
                    </div>
                }
            </tui-carousel>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[draggable]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="draggable"
            >
                Whether or not slider can be dragged by clicking and holding
            </tr>
            <tr
                name="[duration]"
                tuiDocAPIItem
                type="number"
                [items]="durationVariants"
                [(value)]="duration"
            >
                Duration in milliseconds for each slide for automatic rotation (use 0 to disable automatic rotation)
            </tr>
            <tr
                name="[itemsCount]"
                tuiDocAPIItem
                type="number"
                [(value)]="itemsCount"
            >
                Number of slides shown at the same time
            </tr>
            <tr
                name="[(index)]"
                tuiDocAPIItem
                type="number"
                [(value)]="index"
            >
                Current index
            </tr>
        </table>
        <h3>CSS customization</h3>
        <table tuiDocAPI>
            <tr
                name="[style.--tui-carousel-padding]"
                tuiDocAPIItem
                type="string"
                [items]="itemPaddingVariants"
                [(value)]="itemPadding"
            >
                Custom color
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
