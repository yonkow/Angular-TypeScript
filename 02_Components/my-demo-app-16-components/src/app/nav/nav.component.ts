import { Component } from "@angular/core";

@Component({
    selector: 'app-nav',
    template: `<div style="border: 1px solid red">
    <div id="nav- wrapper">Hello navigation</div>
    <div id="nav- wrapper">Hello navigation</div>
    <div id="nav- wrapper">Hello navigation</div>
    <div>{{ title }}</div>
    </div>`,
    styles: ['#nav-wrapper: {background-color: pink;}'],
})
export class NavComponent {
    title = 'zdr title';
}