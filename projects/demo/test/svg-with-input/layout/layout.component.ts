import {Component} from '@angular/core';

@Component({
    selector: `layout-test`,
    template: `
        <div class="layout-form">
            <button
                tuiIconButton
                icon="tuiIconCloseLarge"
                appearance="icon"
                size="xs"
            ></button>
            <img
                src="https://upload.wikimedia.org/wikipedia/fr/archive/7/74/20210714043526%21Rick_et_Morty_Logo_FR.png"
                alt="logo"
            />
            <div class="form-container">
                <ng-content select="[layoutForm]"></ng-content>
            </div>

            <div class="copyright">
                <ng-content select="[layoutCopyright]"></ng-content>
            </div>
        </div>
    `,
})
export class TuiLayoutTestComponent {}
