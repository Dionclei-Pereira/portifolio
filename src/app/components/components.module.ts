import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ScrolledDirective } from './navbar/directives/navbar-scrolled.directive';

@NgModule({
    declarations: [
        NavbarComponent,
        CardComponent
    ],
    imports: [ 
        CommonModule,
        ScrolledDirective
    ],
    exports: [
        NavbarComponent,
        CardComponent
    ]
})
export class ComponentsModule {}