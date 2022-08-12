import {Injectable} from '@angular/core';
import {DESCRIBED_BY} from '@taiga-ui/core/constants';
import {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {BehaviorSubject} from 'rxjs';

/**
 * Service for displaying hints/tooltips
 */
@Injectable({
    providedIn: `root`,
})
export class TuiHintService extends BehaviorSubject<readonly TuiPortalItem[]> {
    /**
     * TODO:
     * We need the following logic for desribedBy
     * move it into another service that can register hints and
     * manage it using TuiHintService inside
     */
    private directives: readonly TuiPortalItem[] = [];

    constructor() {
        super([]);
    }

    add(directive: TuiPortalItem): void {
        this.next(this.value.concat(directive));
    }

    remove(directive: TuiPortalItem): void {
        if (this.value.includes(directive)) {
            this.next(this.value.filter(hint => hint !== directive));
        }
    }

    register(directive: TuiPortalItem): void {
        this.directives = [...this.directives, directive];
    }

    unregister(directive: TuiPortalItem): void {
        this.remove(directive);
        this.directives = this.directives.filter(dir => dir !== directive);
    }

    showHintForId(id: string): void {
        const directive = this.findDirectiveWithHintId(id);

        if (directive) {
            this.add(directive);
        }
    }

    hideHintForId(id: string): void {
        const directive = this.findDirectiveWithHintId(id);

        if (directive) {
            this.remove(directive);
        }
    }

    private findDirectiveWithHintId(id: string): TuiPortalItem | undefined {
        return this.directives.find(directive => directive.id === id + DESCRIBED_BY);
    }
}
