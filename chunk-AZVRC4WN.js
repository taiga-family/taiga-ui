import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Carousel"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <p>Generic swipeable container to scroll through content</p>

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
                        Minimal implementation with limits.
                    }
                    @case (1) {
                        Infinite loop with seamless transitions.
                    }
                    @case (2) {
                        Scrolling to the next slide after timeout.
                    }
                    @case (3) {
                        Carousel automatically transitions height of the container.
                    }
                    @case (4) {
                        Multiple items per slide.
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <table tuiDocAPI>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="number"
            >
                min index
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
            >
                max index
            </tr>
            <tr
                name="[(index)]"
                tuiDocAPIItem
                type="number"
            >
                current index
            </tr>
            <tr
                name="*tuiItem='let index'"
                tuiDocAPIItem
                type="TemplateRef<TuiContext<number>>"
            >
                define template for items. Context
                <code>$implicit</code>
                is index of item in scroller.
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
