import"./chunk-HU6DUUP4.js";var e=`@if (currentQuestion < 2) {
    <p>{{ currentQuestion + 1 }}. {{ questionTitles[currentQuestion] }}</p>
    <form [formGroup]="form">
        @for (option of questions[currentQuestion]; track option) {
            <label>
                <input
                    size="s"
                    tuiCheckbox
                    type="checkbox"
                    [formControlName]="$index"
                />
                {{ option }}
            </label>
        }
    </form>
    <button
        size="s"
        tuiButton
        type="button"
        class="tui-space_top-4"
        (click)="nextQuestion()"
    >
        Next
    </button>
} @else {
    <p><b>Your answers</b></p>
    @for (options of results; track options; let i = $index) {
        <div class="tui-space_top-4">
            <p>{{ i + 1 }}. {{ questionTitles[i] }}</p>
            @for (question of questions[i]; track question; let j = $index) {
                <label>
                    <input
                        size="s"
                        tuiCheckbox
                        type="checkbox"
                        [checked]="options[j]"
                    />
                    {{ question }}
                </label>
            }
        </div>
    }
}
`;export{e as default};
