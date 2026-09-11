import"./chunk-LQ6M4NCU.js";var a=`<tui-doc-page
    header="Meter"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Native styled Meter tag, using the same attributes as native version.</p>

        @for (example of ['Increasing', 'Decreasing']; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
    <ng-template pageTab>
        <tui-doc-demo>
            <meter
                tuiMeter
                [high]="high()"
                [low]="low()"
                [max]="max()"
                [min]="min()"
                [optimum]="optimum()"
                [value]="value()"
            ></meter>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="number"
                [(value)]="min"
            >
                minimal value, lower bound
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [(value)]="max"
            >
                maximal value, upper bound
            </tr>
            <tr
                name="[low]"
                tuiDocAPIItem
                type="number"
                [(value)]="low"
            >
                first color point (yellow if optimum is at a lower end, red if it is at the higher end)
            </tr>
            <tr
                name="[high]"
                tuiDocAPIItem
                type="number"
                [(value)]="high"
            >
                second color point (red if optimum is at a lower end, yellow if it is at the higher end)
            </tr>
            <tr
                name="[optimum]"
                tuiDocAPIItem
                type="number"
                [(value)]="optimum"
            >
                third color point (green, representing preferred value)
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="number"
                [(value)]="value"
            >
                current value
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
