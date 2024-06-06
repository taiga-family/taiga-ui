import type {ElementRef, EnvironmentInjector} from '@angular/core';
import {createComponent} from '@angular/core';
import {Observable} from 'rxjs';

import {TuiHighlightComponent} from './highlight.component';

export class TuiHighlight extends Observable<Node> {
    constructor(environmentInjector: EnvironmentInjector, range: Range) {
        super(observer => {
            const component = createComponent(TuiHighlightComponent, {
                environmentInjector,
            });
            const {nativeElement} = component.location as ElementRef<Node>;

            range.surroundContents(nativeElement);
            observer.next(nativeElement.firstChild!);

            return () => {
                const parentNode = nativeElement.parentNode;

                if (parentNode) {
                    while (nativeElement.firstChild) {
                        parentNode.insertBefore(nativeElement.firstChild, nativeElement);
                    }

                    parentNode.removeChild(nativeElement);

                    const firstNode = parentNode.firstChild;

                    if (firstNode instanceof Text) {
                        while (firstNode.nextSibling) {
                            if (firstNode.nextSibling instanceof Text) {
                                firstNode.data += firstNode.nextSibling.data;
                                parentNode.removeChild(firstNode.nextSibling);
                            } else {
                                break;
                            }
                        }
                    }
                }

                component.destroy();
            };
        });
    }
}
