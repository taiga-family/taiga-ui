import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Switch"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <div>
            A switch component that is able to imitate native control on mobile platforms.

            <div
                tuiNotification
                class="tui-space_vertical-4"
            >
                Use
                <code>--tui-background-accent-2</code>
                CSS variable to customize color of native control emulation
            </div>
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="$index ? null : platformDescription"
                [heading]="example"
            >
                <ng-template #platformDescription>
                    Add import of
                    <code>&#64;taiga-ui/addon-mobile/styles/taiga-ui-mobile.less</code>
                    to your encapsulated global styles to enable power of
                    <code>TuiPlatform</code>
                    directive.
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>
</tui-doc-page>
`;export{o as default};
