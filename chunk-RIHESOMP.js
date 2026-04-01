import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Link"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>
            Link component. It has focus highlight and can be customized with an icon
            <div
                tuiNotification
                [style.clear]="'both'"
            >
                Use
                <code>textContent</code>
                binding or wrapping entire content with a
                <code>span</code>
                to avoid extra whitespace introduced by browser to
                <code>a</code>
                tag when closing tag wraps to a new line \u2014 otherwise distance to the icons will be bigger than it should
                be
            </div>
        </div>

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
                        Can be used on native
                        <code>a</code>
                        tag with
                        <code>routerLink</code>
                        or
                        <code>href</code>
                    }
                    @case (1) {
                        Can also be used on buttons as well as with icons on either side.
                    }
                    @case (2) {
                        Different color and underline styles.
                    }
                    @case (3) {
                        Multi line wrapping also works with icons.
                    }
                }
            </ng-template>
        }
    </ng-template>
</tui-doc-page>
`;export{o as default};
