import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { TodoAddComponent } from "./todo/todo-add/todo-add.component";
import { TodoFooterComponent } from "./todo/todo-footer/todo-footer.component";
import { TodoItemComponent } from "./todo/todo-item/todo-item.component";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";
import { TodoComponent } from "./todo/todo.component";
import { todoReducer } from "./todo/todo.reducer";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        TodoComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoFooterComponent,
        TodoAddComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ todos: todoReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
