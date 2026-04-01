import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Slides"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        <div>
            A component for displaying dynamic content animated between states. Use negative value for
            <code>tuiSlides</code>
            to indicate backward direction, positive for forward direction and 0 for static crossfade.
            <p>
                <strong>Important:</strong>
                each child must be exactly one DOM element.
            </p>
        </div>

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
                            Static crossfading of slides with slight delay for smoother overlap.
                        }
                        @case (1) {
                            Navigating back and forth using
                            <a
                                tuiLink
                                [routerLink]="routes.Stepper"
                            >
                                Stepper
                            </a>
                            .
                        }
                        @case (2) {
                            Animating nested routes, adding
                            <a
                                tuiLink
                                [routerLink]="routes.Animated"
                            >
                                Animated
                            </a>
                            to host directives of route component is required.
                        }
                        @case (3) {
                            Using slides inside a dialog.
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-textfield [style.width.rem]="15">
                <label tuiLabel>Current slide</label>
                <input
                    tuiInputNumber
                    [max]="2"
                    [min]="0"
                    [step]="1"
                    [(ngModel)]="current"
                />
            </tui-textfield>
            <p [tuiSlides]="direction">
                @for (_ of '-'.repeat(3); track $index) {
                    @if ($index === current) {
                        <div>Slide #{{ $index }}</div>
                    }
                }
            </p>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiSlides]"
                tuiDocAPIItem
                type="number"
                [items]="directions"
                [(value)]="direction"
            >
                Transition direction
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
