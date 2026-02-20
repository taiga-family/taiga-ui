import"./chunk-HU6DUUP4.js";var i=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Show
</button>

<ng-template
    let-observer
    [tuiSheetDialogOptions]="{appearance: 'fullscreen'}"
    [(tuiSheetDialog)]="open"
>
    <header tuiHeader>
        <hgroup tuiTitle>
            <h2>Title</h2>
            <p tuiSubtitle>Subtitle</p>
            <p [style.margin-block]="'0.75rem 0'">
                <label tuiLabel>
                    <input
                        tuiSwitch
                        type="checkbox"
                        [(ngModel)]="floating"
                    />
                    Floating visibility
                </label>
            </p>
            <p>
                <label tuiLabel>
                    <input
                        tuiSwitch
                        type="checkbox"
                        [(ngModel)]="secondAction"
                    />
                    Second action visibility
                </label>
            </p>
            <p>
                <input
                    placeholder="Some search"
                    tuiSearch
                    type="search"
                    class="input"
                    [(ngModel)]="search"
                />
            </p>
        </hgroup>
    </header>
    <section class="content">
        @for (item of items | tuiFilter: filter : search; track item) {
            <div tuiCell>
                <div
                    appearance="primary"
                    tuiAvatar="@tui.star"
                ></div>
                <div tuiTitle>
                    {{ item.title }}
                    <div tuiSubtitle>{{ item.description }}</div>
                </div>
            </div>
        }
    </section>
    @if (floating) {
        <footer tuiFloatingContainer>
            <button
                tuiButton
                type="button"
                (click)="observer.complete()"
            >
                Main action
            </button>
            <tui-expand [expanded]="secondAction">
                <button
                    appearance="flat"
                    tuiButton
                    type="button"
                    (click)="observer.complete()"
                >
                    Secondary action
                </button>
            </tui-expand>
        </footer>
    }
</ng-template>
`;export{i as default};
