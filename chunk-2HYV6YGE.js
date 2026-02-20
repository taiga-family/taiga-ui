import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Loader"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <tui-doc-example
            heading="With inherited background color"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="With content overlay"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Options"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Custom stroke width"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
            [description]="strokeWidthDescription"
        >
            <ng-template #strokeWidthDescription>
                Use css-variable
                <code>--tui-thickness</code>
                to customize width of the circle stroke. By default, it is 1/12 of diameter.
            </ng-template>
        </tui-doc-example>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div class="example">
                <tui-loader
                    [inheritColor]="inheritColor"
                    [loading]="showLoader"
                    [overlay]="overlay"
                    [size]="size"
                    [textContent]="template"
                >
                    <div>
                        <b>Colonel Trautman:</b>
                        It's over Johnny. It's over!
                    </div>
                    <div>
                        <b>Rambo:</b>
                        Nothing is over! Nothing! You just don't turn it off! It wasn't my war! You asked me I didn't
                        ask you! And I did what I had to do to win, for somebody who wouldn't let us win! Then I come
                        back to the world, and I see all those maggots at the airport, protestin' me, spittin', callin'
                        me a baby killer and all kinds of vile crap! Who are they to protest me?! Huh?! Who are they?!
                        Unless they been me and been there and know what the hell they yellin' about!
                    </div>
                </tui-loader>
                <ng-template #textTemplate>
                    <div>Loading</div>
                    <div>
                        You can use a template with
                        <a
                            tuiLink
                            [routerLink]="routes.Notification"
                        >
                            HTML
                        </a>
                        here
                    </div>
                </ng-template>
            </div>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[showLoader]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="showLoader"
            >
                Show/hide loader
            </tr>
            <tr
                name="[inheritColor]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="inheritColor"
            >
                Inherit parent color
            </tr>
            <tr
                name="[overlay]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="overlay"
            >
                Content overlay when loader is showed
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXS | TuiSizeXL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size
            </tr>
            <tr
                name="[textContent]"
                tuiDocAPIItem
                type="PolymorpheusContent"
                [items]="textVariants"
                [(value)]="selectedTemplate"
            >
                Custom content under loader
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
