import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="SheetDialog"
    package="ADDON-MOBILE"
    type="components"
>
    <ng-template pageTab>
        <div>A mobile draggable sheet dialog</div>

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
                tuiButton
                type="button"
                (click)="showDialog(sheetTemplate)"
            >
                Click
            </button>
            <button
                tuiButton
                type="button"
                class="tui-space_left-4"
                (longtap)="showDialog(sheetTemplate)"
            >
                Long tap
            </button>
            <button
                tuiButton
                type="button"
                (click)="navigate()"
            >
                Navigate to Examples
            </button>
            <ng-template
                #sheetTemplate
                let-completeWith="completeWith"
                let-observer
            >
                <p [style.flex-grow]="1">
                    Karl Gambolputty de von
                    Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xFCrnburger-bratwustle-gerspurten-mitzweimache-luber
                    von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von.
                </p>
                <footer tuiFloatingContainer>
                    <button
                        tuiButton
                        type="button"
                        (click)="observer.next('Hi')"
                    >
                        Say "Hi"
                    </button>
                    <button
                        tuiButton
                        type="button"
                        (click)="completeWith('Hi and bye!')"
                    >
                        Say "Hi and bye!"
                    </button>
                </footer>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[appearance]"
                tuiDocAPIItem
                type="string"
                [items]="appearanceVariants"
                [(value)]="appearance"
            >
                Custom data-appearance attribute value
            </tr>
            <tr
                name="[closable]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="closable"
            >
                Whether or not a sheet can be closed by user.
            </tr>
            <tr
                name="[bar]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="bar"
            >
                Show bar
            </tr>
            <tr
                name="[data]"
                tuiDocAPIItem
                type="I"
            >
                Optional data to be passed to the sheet.
            </tr>
            <tr
                name="[label]"
                tuiDocAPIItem
                type="string"
                [(value)]="label"
            >
                Sheet label.
            </tr>
            <tr
                name="[stops]"
                tuiDocAPIItem
                type="string[]"
                [items]="stopsVariants"
                [(value)]="stops"
            >
                An array of stop points in any units for the sheet.
            </tr>
            <tr
                name="[initial]"
                tuiDocAPIItem
                type="number"
                [(value)]="initial"
            >
                Initial stop index to open on. Index exceeding
                <code>stops</code>
                means to stop on top of the sheet's content.
            </tr>
            <tr
                name="[offset]"
                tuiDocAPIItem
                type="number"
                [(value)]="offset"
            >
                Top offset px (
                <code>--tui-offset</code>
                )
            </tr>
            <tr
                name="[required]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="required"
            >
                Dismissing dialog emits an error into
                <code>Observable</code>
                (you can catch it with "catch" operator or onError handler)
            </tr>
        </table>
    </ng-template>

    <ng-template pageTab>
        <ol class="tui-list tui-list_ordered">
            <li class="tui-list__item">
                Inject service and show dialog:

                <tui-doc-code
                    filename="my.component.html"
                    [code]="exampleComponent"
                />
            </li>
        </ol>
    </ng-template>
</tui-doc-page>
`;export{a as default};
