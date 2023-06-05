import { Component } from '@angular/core';
import { TodoItem } from './model/TodoItem';
import { TodoList } from './model/TodoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public apprenti: string = "Ange François";

  private list = new TodoList("Ange", [
    new TodoItem("Etudier", true),
    new TodoItem("Se reposer"),
    new TodoItem("Lire"),
    ]);


    get username(): string {
      return this.list.user;
      }
      get itemCount(): number {
      return this.list.items
      .filter(item => !item.complete).length;
      }
      get items(): readonly TodoItem[] {
        return this.list.items.filter(item => this.showComplete || !item.complete);
        }
        addItem(task: string){
          this.list.addItem(task);
      }
      showComplete: boolean = false;
}
