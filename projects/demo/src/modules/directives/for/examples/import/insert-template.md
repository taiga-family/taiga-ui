```html
<div *ngFor="let item of items$ | async else loading empty blank">{{item}}</div>
<ng-template #loading>Loading...</ng-template>
<ng-template #blank>The list is empty</ng-template>
```
