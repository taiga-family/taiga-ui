import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({name: `tuiFilterAnchors`})
export class TuiFilterAnchorsPipe implements PipeTransform {
    transform(anchors: string[], prefix: string, currentUrl: string): string[] {
        return prefix === `#` ? anchors.filter(anchor => anchor !== currentUrl) : anchors;
    }
}
