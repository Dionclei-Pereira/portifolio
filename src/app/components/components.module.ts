import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ScrolledDirective } from './navbar/directives/navbar-scrolled.directive';
import { HomeComponent } from './home/home.component';
import { FloatingImageComponent } from './floating-image/floating-image.component';
import { SrcFormatPipe } from './floating-image/pipes/src-format.pipe';

@NgModule({
    declarations: [
        NavbarComponent,
        CardComponent,
        HomeComponent,
        FloatingImageComponent
    ],
    imports: [ 
        CommonModule,
        ScrolledDirective,
        SrcFormatPipe
    ],
    exports: [
        NavbarComponent,
        CardComponent,
        HomeComponent,
        FloatingImageComponent
    ]
})
export class ComponentsModule {}