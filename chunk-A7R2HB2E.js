import"./chunk-HU6DUUP4.js";var i=`<table
    tuiTable
    [style.width.%]="100"
    [tuiTextfieldCleaner]="false"
>
    <thead>
        <tr>
            <th
                tuiTh
                [style.width.%]="50"
            >
                Growing height
            </th>
            <th
                tuiTh
                [style.width.%]="50"
            >
                Static height
            </th>
        </tr>
    </thead>
    <tbody tuiTbody>
        <tr>
            <td tuiTd>
                <tui-textfield>
                    <textarea
                        placeholder="Textarea"
                        tuiTextarea
                        [(ngModel)]="textarea"
                    ></textarea>
                </tui-textfield>
            </td>
            <td tuiTd>
                <tui-textfield>
                    <input
                        placeholder="Default table style"
                        tuiInput
                        [(ngModel)]="input"
                    />
                </tui-textfield>
            </td>
        </tr>
        <tr>
            <td tuiTd>
                <tui-textfield multi>
                    <input
                        placeholder="InputChip"
                        tuiInputChip
                        [(ngModel)]="chip"
                    />
                </tui-textfield>
            </td>
            <td tuiTd>
                <tui-textfield tuiChevron>
                    @if (isMobile) {
                        <select
                            aria-label="Select"
                            placeholder="Select"
                            tuiSelect
                            [items]="items"
                            [(ngModel)]="select"
                        ></select>
                    }

                    @if (!isMobile) {
                        <input
                            placeholder="Select"
                            tuiSelect
                            [(ngModel)]="select"
                        />
                    }

                    @if (!isMobile) {
                        <tui-data-list-wrapper
                            *tuiDropdown
                            [items]="items"
                        />
                    }
                </tui-textfield>
            </td>
        </tr>
        <tr>
            <td tuiTd>
                <tui-textfield
                    multi
                    tuiChevron
                >
                    <select
                        aria-label="MultiSelect"
                        placeholder="MultiSelect"
                        tuiMultiSelect
                        [items]="items"
                        [(ngModel)]="multiselect"
                    ></select>
                    <tui-input-chip *tuiItem />
                </tui-textfield>
            </td>
            <td
                tuiTd
                [style.z-index]="2"
            >
                <tui-textfield>
                    <input
                        placeholder="InputSlider"
                        tuiInputSlider
                        [max]="1000"
                        [min]="0"
                        [(ngModel)]="slider"
                    />
                    <input
                        tuiSlider
                        type="range"
                    />
                </tui-textfield>
            </td>
        </tr>
        <tr>
            <td tuiTd>
                <tui-textfield multi>
                    <input
                        placeholder="InputDateMulti"
                        tuiInputDateMulti
                        [(ngModel)]="date"
                    />
                    <tui-calendar *tuiDropdown />
                </tui-textfield>
            </td>
            <td
                tuiTd
                [style.z-index]="1"
            >
                <tui-input-range
                    [max]="1000"
                    [min]="0"
                    [(ngModel)]="range"
                />
            </td>
        </tr>
        <tr>
            <td
                colspan="2"
                tuiTd
            >
                <tui-input-card-group [(ngModel)]="card">
                    @if (!card) {
                        InputCardGroup
                    }
                </tui-input-card-group>
            </td>
        </tr>
        <tr>
            <td tuiTd>
                <tui-textfield [style.margin.rem]="0.5">
                    <input
                        placeholder="Default textfield style"
                        tuiInput
                        tuiTextfieldAppearance="textfield"
                        [(ngModel)]="input"
                    />
                </tui-textfield>
            </td>
            <td tuiTd>
                <tui-textfield
                    multi
                    tuiChevron
                    [style.margin.rem]="0.5"
                >
                    <select
                        aria-label="MultiSelect"
                        placeholder="MultiSelect"
                        tuiMultiSelect
                        tuiTextfieldAppearance="textfield"
                        [items]="items"
                        [(ngModel)]="multiselect"
                    ></select>
                    <tui-input-chip *tuiItem />
                </tui-textfield>
            </td>
        </tr>
    </tbody>
</table>
`;export{i as default};
