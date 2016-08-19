import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <p *ngIf="totalCarParts() > 0">There are {{totalCarParts()}} total parts in stock.</p>
    <p *ngIf="totalCarParts() === 0">It is out of stock in stock.</p>

    <ul *ngFor="let carPart of carParts">
        <li>
            <h2>{{carPart.name | uppercase}}</h2>
            <p>{{carPart.description}}</p>
            <p>{{carPart.price | currency:'CAD':true}}
            <p *ngIf="carPart.inStock > 0">{{carPart.inStock}} in Stock</p>
            <p *ngIf="carPart.inStock === 0">Out of stock</p>
        </li>
    </ul>`
})

class AppComponent {
    title = 'Ultra Racing';
    carParts = [
    {
        "id": 1,
        "name": "Super Tires",
        "description": "These tires are the very best",
        "inStock": 0,
        "price": 4.99
    },
    {
        "id": 2,
        "name": "Super * 2 Tires",
        "description": "22 is double the amount of 11",
        "inStock": 0,
        "price": 12.99
    },
    {
        "id": 3,
        "name": "3 * Super Tires",
        "description": "Three people walking around has my teacher",
        "inStock": 0,
        "price": 2.99
    }
    ];
    totalCarParts() {
        let sum = 0;
        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }

        return sum;
    }
    /*
    totalCarParts() {
        return this.carParts.reduce(function(prev, current){
            return prev + current.inStock;
        }, 0)
    }

    totalCarParts() {
        return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    }
    */

}

bootstrap(AppComponent);
