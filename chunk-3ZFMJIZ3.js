import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="LineClamp"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Component cuts overflown text with "..." and shows it by hover</p>

        <tui-doc-example
            heading="Styles change"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Expanding"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Resize parent container"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Clamp inside dropdown"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="Custom content workaround"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        />

        <tui-doc-example
            heading="Virtual content"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
        />

        <tui-doc-example
            heading="Custom font-size and line-height"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-line-clamp
                [content]="content || defaultExampleContent"
                [lineHeight]="lineHeight"
                [linesLimit]="linesLimit"
                [style.maxWidth.px]="maxWidth"
                (overflownChange)="overflownChange.emitEvent($event)"
            />
            <ng-template #defaultExampleContent>
                Lorem ipsum
                <br />
                Gaudeamus igitur
                <br />
                <strong>Carpe diem</strong>
                <br />
                Veni, vidi, vici
            </ng-template>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[content]"
                tuiDocAPIItem
                type="PolymorpheusContent"
                [(value)]="content"
            >
                Content
            </tr>
            <tr
                name="[lineHeight]"
                tuiDocAPIItem
                type="number"
                [(value)]="lineHeight"
            >
                Height of single line. It used to limit component's height.
            </tr>
            <tr
                name="[linesLimit]"
                tuiDocAPIItem
                type="number"
                [(value)]="linesLimit"
            >
                Number of visible lines
            </tr>
            <tr
                name="[style.max-width.px]"
                tuiDocAPIItem
                type="number"
                [(value)]="maxWidth"
            >
                Value of max-width
            </tr>
            <tr
                #overflownChange
                name="(overflownChange)"
                tuiDocAPIItem
                type="boolean"
            >
                Emits
                <code>true</code>
                if there's extra content which isn't visible otherwise
                <code>false</code>
                when all content is visible.
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{n as default};
