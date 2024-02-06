```html
<tui-root>
  <!-- content of your app -->

  <!--
     If you need, you can add something between Taiga portal layers:
    -->
  <ng-container ngProjectAs="tuiOverContent">
    <!-- Content over app content -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverDialogs">
    <!-- Content over dialogs -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverAlerts">
    <!-- Content over alerts -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverDropdowns">
    <!-- Content over dropdowns -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverHints">
    <!-- Content over hints -->
  </ng-container>
</tui-root>
```
