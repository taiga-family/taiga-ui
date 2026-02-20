import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Navigation"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        <div>
            Taiga UI is a low level component library with many atomic components that provide great flexibility when
            combined together. An exception to the general rule is the
            <b>Navigation</b>
            component \u2013 an opinionated global wrapping navigation that exposes less customization options developed
            specifically to target data-heavy dashboards with minimal space lost and compact controls.
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                class="sticky-example"
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [fullsize]="true"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        Full fledged example showcasing every section of the navigation filled with content, links,
                        menus etc.
                    }
                    @case (1) {
                        Navigation with page header in a compact mode.
                    }
                    @case (2) {
                        Navigation with expanded page header including description and other page details.
                    }
                    @case (3) {
                        Changing colors and mode.
                    }
                    @case (4) {
                        Using dedicated search component in a header for a spotlight global portal search pattern.
                    }
                }
            </ng-template>
        }
    </ng-template>
</tui-doc-page>
`;export{t as default};
