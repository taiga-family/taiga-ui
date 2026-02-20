import"./chunk-HU6DUUP4.js";var p=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Show/Hide
</button>
<ng-template #label>
    <label tuiTitle>
        <span tuiSubtitle>Monty Python</span>
        <b>And the Holy Grail</b>
    </label>
</ng-template>
<ng-template
    [tuiSheetDialogOptions]="{stops: ['5.75rem', '13.875rem']}"
    [(tuiSheetDialog)]="open"
>
    <header tuiHeader="body-m">
        <hgroup tuiTitle>
            <p tuiSubtitle>Monty Python</p>
            <h2>And the Holy Grail</h2>
        </hgroup>
    </header>
    <p class="buttons">
        <button
            appearance="secondary"
            size="m"
            tuiButton
            type="button"
        >
            Buy {{ 12.99 | tuiAmount: 'USD' }}
        </button>
        <button
            appearance="secondary"
            size="m"
            tuiButton
            type="button"
        >
            Rent {{ 4.99 | tuiAmount: 'USD' }}
        </button>
    </p>
    <div>
        <h3>Cast:</h3>
        <p>John Cleese</p>
        <p>Eric Idle</p>
        <p>Michael Palin</p>
        <p>Graham Chapman</p>
        <p>Terry Gilliam</p>
        <p>Terry Jones</p>
        <p>Carol Cleveland</p>
        <hr />
        <h3>Directed by:</h3>
        <p>Terry Gilliam</p>
        <p>Terry Jones</p>
        <hr />
        <h3>Produced by:</h3>
        <p>Mark Forstater</p>
        <p>Michael White</p>
        <hr />
        <h3>Written by:</h3>
        <p>John Cleese</p>
        <p>Eric Idle</p>
        <p>Michael Palin</p>
        <p>Graham Chapman</p>
        <p>Terry Gilliam</p>
        <p>Terry Jones</p>
        <hr />
        <h3>Budget:</h3>
        <p>{{ 400000 | tuiAmount: 'USD' }}</p>
        <hr />
        <h3>Box office:</h3>
        <p>{{ 5000000 | tuiAmount: 'USD' }}</p>
        <hr />
        <h3>Release date</h3>
        <p>April 3, 1975</p>
        <hr />
        <h3>Running time</h3>
        <p>92 minutes</p>
        <footer class="footer">\xA9 EMI Films</footer>
        <div
            tuiFloatingContainer
            class="floating"
        >
            <button
                size="m"
                tuiButton
                type="button"
            >
                Add to Watch List
            </button>
        </div>
    </div>
</ng-template>
`;export{p as default};
