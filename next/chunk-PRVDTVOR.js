import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Confirm"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            Confirm is a ready to use
            <a
                tuiLink
                [routerLink]="routes.Dialog"
            >
                Dialog
            </a>
            to ask user to confirm an action
        </p>

        <div tuiNotification>
            See
            <a
                fragment="confirmation"
                tuiLink
                [routerLink]="routes.Dialog"
            >
                this example
            </a>
            to learn how to use confirm to prevent data loss on forms inside other modals
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="null"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                tuiButton
                type="button"
                (click)="onClick()"
            >
                Show
            </button>
        </tui-doc-demo>
        <p>
            You can pass
            <code>data: TuiConfirmData</code>
            when opening a dialog to customize it
        </p>
        <table tuiDocAPI>
            <tr
                name="content"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                Content of the confirm
            </tr>
            <tr
                name="[appearance]"
                tuiDocAPIItem
                type="string"
                [items]="appearances"
                [(value)]="appearance"
            >
                Appearance of the confirming button
            </tr>
            <tr
                name="[no]"
                tuiDocAPIItem
                type="string"
                [(value)]="no"
            >
                Text on
                <code>false</code>
                button
            </tr>
            <tr
                name="[yes]"
                tuiDocAPIItem
                type="string"
                [(value)]="yes"
            >
                Text on
                <code>true</code>
                button
            </tr>
        </table>
    </ng-template>
    <ng-template pageTab>
        <ol class="tui-list tui-list_ordered">
            <li class="tui-list__item">
                <p>
                    Open with
                    <code>DialogService</code>
                </p>

                <tui-doc-code
                    filename="my.component.ts"
                    [code]="exampleService"
                />
            </li>
        </ol>
    </ng-template>
</tui-doc-page>
`;export{o as default};
