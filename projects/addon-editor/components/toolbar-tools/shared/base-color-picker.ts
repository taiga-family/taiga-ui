import {Directive} from '@angular/core';

@Directive()
export abstract class AbstractTuiBaseColorPicker {
    selectedColor = ``;

    abstract setColor(): void;

    onValueChange(color: string): void {
        this.selectedColor = color;
    }

    autoSave(opened: boolean): void {
        if (opened) {
            return;
        }

        this.setColor();
    }
}
