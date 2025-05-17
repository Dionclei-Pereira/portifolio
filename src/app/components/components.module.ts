import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ScrolledDirective } from './navbar/directives/navbar-scrolled.directive';
import { HomeComponent } from './home/home.component';
import { FloatingImageComponent } from './floating-image/floating-image.component';
import { SrcFormatPipe } from './floating-image/pipes/src-format.pipe';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { scrollObservableDirective } from './navbar/directives/scroll-observable.directive';

@NgModule({
    declarations: [
        NavbarComponent,
        CardComponent,
        HomeComponent,
        FloatingImageComponent,
        AboutComponent,
        SkillsComponent
    ],
    imports: [ 
        CommonModule,
        ScrolledDirective,
        SrcFormatPipe,
        scrollObservableDirective
    ],
    exports: [
        NavbarComponent,
        CardComponent,
        HomeComponent,
        FloatingImageComponent,
        AboutComponent,
        SkillsComponent
    ]
})
export class ComponentsModule {}