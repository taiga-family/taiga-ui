import"./chunk-LQ6M4NCU.js";var t=`<tui-doc-page
    header="Switch"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        A switch component that is able to imitate native control on mobile platforms.

        <p tuiNotification>
            Use
            <code>--tui-background-accent-2</code>
            CSS variable to customize color of native control emulation
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
                        Add import of
                        <code>&#64;taiga-ui/addon-mobile/styles/taiga-ui-mobile.less</code>
                        to your encapsulated global styles to enable power of
                        <code>TuiPlatform</code>
                        directive.
                    }
                    @case (2) {
                        Use
                        <code>tuiSwitchOptionsProvider</code>
                        to override the colors of the switch with appearance colors
                    }
                }
            </ng-template>
        }
    </ng-template>
</tui-doc-page>
`;export{t as default};
