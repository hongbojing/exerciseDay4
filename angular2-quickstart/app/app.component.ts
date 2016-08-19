import { Component } from '@angular/core';
import { CarPartsComponent } from './car-parts.component';

@Component({
    selector: 'my-app',
    template: `<h1 class="description">{{title}}</h1>
    <car-parts></car-parts>`,
    directives: [CarPartsComponent],
    styles: [`
        .description {
            color: #759394;
        }
    `]
})

export class AppComponent {
    title = 'Ultra Racing';
}
