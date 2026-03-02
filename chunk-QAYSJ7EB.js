import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Radio"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <p>A radio component that is able to imitate native control on mobile platforms.</p>

        <div
            tuiNotification
            class="tui-space_bottom-4"
        >
            Use
            <code>--tui-background-accent-2</code>
            CSS variable to customize color of native control emulation
        </div>

        <div
            appearance="warning"
            tuiNotification
        >
            Due to internal Angular implementation of radio buttons, you are required to add
            <code>name</code>
            attribute to your
            <code>input</code>
            tag, unless you are using
            <code>formControlName</code>
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
`;export{t as default};
