import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {tuiAssertIsHTMLElement} from '@taiga-ui/cdk/classes';
import {shouldCall} from '@tinkoff/ng-event-plugins';

// eslint-disable-next-line @typescript-eslint/naming-convention
export function movedOut({currentTarget, relatedTarget}: MouseEvent): boolean {
    if (!relatedTarget) {
        return true;
    }

    tuiAssertIsHTMLElement(currentTarget);
    tuiAssertIsHTMLElement(relatedTarget);

    return !currentTarget.contains(relatedTarget);
}

@Directive({
    selector: `[tuiHoveredChange]`,
})
export class TuiHoveredDirective {
    @Output()
    readonly tuiHoveredChange = new EventEmitter<boolean>();

    @HostListener(`mouseenter`)
    onHover(): void {
        this.tuiHoveredChange.emit(true);
    }

    @shouldCall(movedOut)
    @HostListener(`mouseout.init`, [`$event`])
    @HostListener(`mouseout.silent`, [`$event`])
    onOut(_: MouseEvent): void {
        this.tuiHoveredChange.emit(false);
    }
}
