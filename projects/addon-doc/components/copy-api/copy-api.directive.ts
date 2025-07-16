import type {AfterViewInit, QueryList} from '@angular/core';
import {
    ContentChildren,
    Directive,
    ElementRef,
    Input,
    ViewContainerRef,
} from '@angular/core';

import {TuiDocAPIItem} from '../api/api-item.component';
import type {TuiApiItemConfig} from '../../services/code-generator.service';
import {TuiDocCopyApi} from './copy-api.component';

@Directive({
    standalone: true,
    selector: 'table[tuiDocAPI][tuiDocCopyApi]',
})
export class TuiDocCopyApiDirective implements AfterViewInit {
    @ContentChildren(TuiDocAPIItem, {descendants: true})
    private readonly apiItems?: QueryList<TuiDocAPIItem<unknown>>;

    @Input('tuiDocCopyApi')
    public selector = '';

    @Input()
    public content = '';

    constructor(
        private readonly el: ElementRef<HTMLTableElement>,
        private readonly vcr: ViewContainerRef,
    ) {}

    public ngAfterViewInit(): void {
        this.createCopyButton();
    }

    private createCopyButton(): void {
        if (!this.apiItems || !this.selector) {
            return;
        }

        // Create a container for the copy button after the table
        const container = document.createElement('div');
        container.style.cssText = 'margin-top: 1rem; display: flex; justify-content: flex-end;';
        
        this.el.nativeElement.parentNode?.insertBefore(
            container,
            this.el.nativeElement.nextSibling,
        );

        // Create the copy component
        const componentRef = this.vcr.createComponent(TuiDocCopyApi);
        componentRef.instance.selector = this.selector;
        componentRef.instance.content = this.content;
        
        // Update API items when they change
        this.updateApiItems(componentRef.instance);
        this.apiItems.changes.subscribe(() => {
            this.updateApiItems(componentRef.instance);
        });

        // Append to container
        container.appendChild(componentRef.location.nativeElement);
    }

    private updateApiItems(copyComponent: TuiDocCopyApi): void {
        if (!this.apiItems) {
            return;
        }

        const apiConfig: TuiApiItemConfig[] = this.apiItems.map(item => ({
            name: item.name,
            type: item.type,
            value: item.value,
        }));

        copyComponent.apiItems = apiConfig;
    }
}