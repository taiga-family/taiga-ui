import {Injectable, signal} from '@angular/core';

type ExampleId = string | null;

@Injectable({providedIn: 'root'})
export class TuiExampleFullscreenService {
    public readonly state = signal<ExampleId>(null);

    public expand(exampleId: ExampleId): void {
        this.state.set(exampleId);
    }

    public shrink(): void {
        this.state.set(null);
    }
}
