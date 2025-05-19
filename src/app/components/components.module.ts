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
import { ProjectsComponent } from './projects/projects.component';
import { CardHeaderDirective } from './card/directives/base/card-header.directive';
import { CardBodyDirective } from './card/directives/base/card-body.directive';
import { CardTitleDirective } from './card/directives/content/card-title.directive';
import { BlurDirective } from '../directives/blur.directive';
import { BgColorDirective } from './card/directives/base/card-bg-color.directive';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';

@NgModule({
    declarations: [
        NavbarComponent,
        CardComponent,
        HomeComponent,
        FloatingImageComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        TerminalComponent,
        GameComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ScrolledDirective,
        SrcFormatPipe,
        scrollObservableDirective,
        CardHeaderDirective,
        CardBodyDirective,
        CardTitleDirective,
        BlurDirective,
        BgColorDirective
    ],
    exports: [
        NavbarComponent,
        CardComponent,
        HomeComponent,
        FloatingImageComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        TerminalComponent,
        GameComponent
    ]
})
export class ComponentsModule {}