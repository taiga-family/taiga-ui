import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Drawer"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                size="m"
                tuiButton
                type="button"
                (click)="open.set(true)"
            >
                Open
            </button>

            <tui-drawer
                *tuiPopup="open()"
                [direction]="direction"
                [overlay]="overlay"
                (click.self)="onClose()"
            >
                <header>
                    <h2 tuiHeader>
                        <div tuiTitle>Header</div>
                        <div tuiAccessories>
                            <button
                                tuiButton
                                type="button"
                                (click)="onClose()"
                            >
                                Close
                            </button>
                        </div>
                    </h2>
                </header>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perspiciatis exercitationem
                    nemo velit aliquam voluptates non porro, vel, nihil laudantium sapiente ex omnis corrupti assumenda
                    voluptatibus, architecto sequi saepe consectetur ratione qui. Beatae, sapiente explicabo velit
                    facere repudiandae veniam et soluta quia qui expedita voluptate accusamus dolor adipisci. Illo quia
                    sint consequatur unde nulla fuga eum officiis, impedit dolorem? Vel itaque temporibus nihil quia?
                    Provident earum aperiam autem veritatis hic doloremque unde nesciunt accusantium nisi corrupti.
                </p>

                <footer>
                    <button
                        appearance="secondary"
                        tuiButton
                        type="button"
                        (click)="onClose()"
                    >
                        Close
                    </button>
                </footer>
            </tui-drawer>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[direction]"
                tuiDocAPIItem
                type="TuiHorizontalDirection"
                [items]="directionVariants"
                [(value)]="direction"
            >
                Drawer opening direction. Default is
                <code>'end'</code>
                .
            </tr>

            <tr
                name="[overlay]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="overlay"
            >
                Show overlay under the drawer.
            </tr>

            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <strong>Content projection</strong>
                            <span tuiSubtitle>Custom content slots using native tags</span>
                        </span>
                    </td>
                </tr>

                <tr
                    name="header"
                    tuiDocAPIItem
                    type="string"
                >
                    Custom drawer header. Use the
                    <code>&lt;header&gt;</code>
                    tag inside the drawer.
                </tr>

                <tr
                    name="footer"
                    tuiDocAPIItem
                    type="string"
                >
                    Custom drawer footer. Use the
                    <code>&lt;footer&gt;</code>
                    tag inside the drawer.
                </tr>
            </tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
