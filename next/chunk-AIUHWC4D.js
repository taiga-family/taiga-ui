import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Checkbox"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <p>A checkbox component that is able to imitate native control on mobile platforms.</p>

        <div
            tuiNotification
            class="tui-space_bottom-4"
        >
            Use
            <code>--tui-background-accent-2</code>
            CSS variable to customize color of native control emulation
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
                        Add import of
                        <code>&#64;taiga-ui/addon-mobile/styles/taiga-ui-mobile.less</code>
                        to your encapsulated global styles to enable power of
                        <code>TuiPlatform</code>
                        directive.
                    }
                    @case (1) {
                        If you only want to show checkbox for decorative purpose, without it being interactive \u2014 use it
                        without Angular forms.
                    }
                    @case (2) {
                        Using with Angular forms:
                        <code>boolean</code>
                        is determinate and
                        <code>null</code>
                        is indeterminate state.
                    }
                }
            </ng-template>
        }
    </ng-template>
</tui-doc-page>
`;export{t as default};
