import { Component } from "@angular/core";

@Component({
    selector: 'app-myapp-l',
    template: `
    <article>
        <h2>Using below angular CLI commend we created this Lazy Loaded Module !!</h2>
        <p>ng generate module lazyLoading --module app.module --routing true --route lazy-loading-path. <br>
            <b>1. ng generate module lazyLoading:</b> It will generate a module with name lazyLoadingModule. <br>
            <b>2. --module app.module:</b> The newly created module will be added into the app.module. <br>
            <b>3. --routing true:</b> Generate routing and a default component to be Lazy loded. <br>
            <b>4. --route lazy-loading-path:</b> lazy-loading-path will be added as a router in the app-module routing.
        </p>
    </article>
    `
})
export class LazyLoadingComponent{}