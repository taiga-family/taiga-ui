import"./chunk-HU6DUUP4.js";var t=`import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService extends Subject<void> {
    public logout(): void {
        this.next();
    }
}
`;export{t as default};
