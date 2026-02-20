import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
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

        <tui-doc-example
            heading="Platforms"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
            [description]="platformDescription"
        >
            <ng-template #platformDescription>
                Add import of
                <code>&#64;taiga-ui/addon-mobile/styles/taiga-ui-mobile.less</code>
                to your encapsulated global styles to enable power of
                <code>TuiPlatform</code>
                directive.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            description="If you only want to show checkbox for decorative purpose, without it being interactive \u2014 use it without Angular forms"
            heading="Decorative"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Form"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />
    </ng-template>
</tui-doc-page>
`;export{o as default};
