import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Miscellaneous"
    package="CDK"
    type="components/utils"
>
    <ng-template pageTab>
        <p>Some utils to simplify the development process</p>

        <tui-doc-example
            description="Logs assert into console in dev mode"
            heading="assert"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            description="Card number to its payment system"
            heading="getPaymentSystem"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            description="Checks value not to be null or undefined"
            heading="isPresent"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            description="Recursively marks form control as touched and triggers validation"
            heading="markControlAsTouchedAndValidate"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab="Setup">
        <ol class="tui-list tui-list_ordered">
            <li class="tui-list__item">
                <p>Import into component and use:</p>

                <tui-doc-code
                    filename="my.component.ts"
                    [code]="component"
                />
            </li>
        </ol>
    </ng-template>
</tui-doc-page>
`;export{o as default};
