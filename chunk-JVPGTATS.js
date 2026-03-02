import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Form"
    package="LAYOUT"
    type="components"
>
    <p
        appearance="warning"
        tuiNotification
    >
        Size sets DI options, therefore it only works for static values like
        <code>tuiForm="m"</code>
        . If you need dynamic binding for the size, you would have to set it for buttons, segmented control and header
        manually as well.
    </p>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [fullsize]="true"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        Using
                        <code>
                            <a
                                tuiLink
                                [routerLink]="routes.ElasticContainer"
                            >
                                ElasticContainer
                            </a>
                        </code>
                        to animate dynamic content
                    }
                    @case (1) {
                        Using multiple different components inside a big form.
                    }
                    @case (2) {
                        Using multiple forms in several steps. See
                        <code>
                            <a
                                fragment="stepper"
                                tuiLink
                                [routerLink]="routes.Slides"
                            >
                                Slides
                            </a>
                        </code>
                        for animating similar scenario.
                    }
                }
            </ng-template>
        }
    </ng-template>
</tui-doc-page>
`;export{i as default};
