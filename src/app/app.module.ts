import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { ItemComponent } from './item/item.component';
import { WordComponent } from './word/word.component';
import { NgClassPracticeComponent } from './ng-class-practice/ng-class-practice.component';
import { ShortenNamePipe } from './shorten-name.pipe';
import { FormatStatusPipe } from './format-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    WordComponent,
    NgClassPracticeComponent,
    ShortenNamePipe,
    FormatStatusPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

