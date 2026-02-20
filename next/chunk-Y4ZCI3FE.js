import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="NotificationMiddle"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <div>A modal component to indicate an ongoing blocking action</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Basic empty loader.
                        }
                        @case (1) {
                            Changing content and adding text to the card.
                        }
                        @case (2) {
                            Dynamically updating content and closing with timeout. Don't forget
                            <a
                                tuiLink
                                [routerLink]="routes.Animated"
                            >
                                Animated
                            </a>
                            directive!
                        }
                        @case (3) {
                            Design specs require notification to be shown for a minimum of 600ms to prevent visual
                            flickering for short requests.
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                tuiButton
                type="button"
                (click)="open.set(true)"
            >
                Show
            </button>
            <ng-template
                [tuiNotificationMiddle]="open()"
                [tuiNotificationMiddleOptions]="{closable: closable}"
                (tuiNotificationMiddleChange)="open.set($event)"
            >
                Notification example
                <button
                    size="s"
                    tuiButton
                    type="button"
                    (click)="open.set(false)"
                >
                    Close
                </button>
            </ng-template>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[closable]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="closable"
            >
                Whether the notification can be closed by the user taping outside or pressing Escape
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
