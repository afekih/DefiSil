import { EnseignantAppComponent } from './enseignant-app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent}from '../shared/header/header.component';
import {SideBarComponent} from '../shared/side-bar/side-bar.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from '@angular/material';
import { EnsSaisieAbsComponent } from './ens-saisie-abs/ens-saisie-abs.component';
import { Md2Module } from 'md2';
import { EnsSaisieNotesComponent } from './ens-saisie-notes/ens-saisie-notes.component';
import { AddEvalComponent } from './ens-gest-eval/add-eval/add-eval.component';
import { DelEvalComponent } from './ens-gest-eval/del-eval/del-eval.component';
import { ModifEvalComponent } from './ens-gest-eval/modif-eval/modif-eval.component';





@NgModule({
  imports: [
    CommonModule,
     MaterialModule,
     Md2Module
  ],
  declarations: [
    SideBarComponent,
    HeaderComponent,
    EnseignantAppComponent,
    CardsComponent,
    EnsSaisieAbsComponent,
    EnsSaisieNotesComponent,
    AddEvalComponent,
    DelEvalComponent,
    ModifEvalComponent

  ]
})
export class EnseignantAppModule { }
