import"./chunk-HU6DUUP4.js";var s=`<p>1. Display only the first line, in a popup display remaining lines.</p>

<div class="island">
    <tui-line-clamp
        [content]="userAdditionalInfo"
        [linesLimit]="1"
    />
</div>

<p>2. Do not use \`tui-line-clamp\`, use \`text-overflow: ellipsis\` instead.</p>

<div class="island">
    <p
        class="email"
        [tuiHint]="userAdditionalInfo"
    >
        {{ user.email }}
    </p>
</div>

<ng-template #userAdditionalInfo>
    <span>{{ user.email }}</span>

    <p>User ID: {{ user.id }}</p>
    <p>First Name: {{ user.firstName }}</p>
    <p>Last Name: {{ user.lastName }}</p>
</ng-template>
`;export{s as default};
