import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrolledDirective } from './navbar/directives/navbar-scrolled.directive';
import { HomeComponent } from './home/home.component';
import { FloatingImageComponent } from './floating-image/floating-image.component';
import { SrcFormatPipe } from './floating-image/pipes/src-format.pipe';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { scrollObservableDirective } from './navbar/directives/scroll-observable.directive';
import { ProjectsComponent } from './projects/projects.component';
import { BlurDirective } from '../directives/blur.directive';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { ContactComponent } from './contact/contact.component';
import { ImgFloatDirective } from '../directives/floating-img.directive';

@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        FloatingImageComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        TerminalComponent,
        GameComponent,
        ContactComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ScrolledDirective,
        SrcFormatPipe,
        scrollObservableDirective,
        BlurDirective,
        ImgFloatDirective,
        DecimalPipe
    ],
    exports: [
        NavbarComponent,
        HomeComponent,
        FloatingImageComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        TerminalComponent,
        GameComponent,
        ContactComponent
    ]
})
export class ComponentsModule {}