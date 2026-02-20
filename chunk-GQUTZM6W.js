import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="Math"
    package="CDK"
    path="cdk/utils/math"
    type="components/utils"
>
    <ng-template pageTab>
        <p>A set of utils to calculate math</p>

        <tui-doc-example
            description="round, floor and ceil with fixed common problems of the native implementation"
            heading="round"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            description="Checks if the value is in range"
            heading="inRange"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            description="Normalizes any number to an integer within inclusive range"
            heading="normalizeToIntNumber"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            description="Rounds a number to the closest value in a fixed discrete series"
            heading="quantize"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            description="Clamps a value between two inclusive limits"
            heading="clamp"
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
`;export{n as default};
