import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items = [];
  newTask;

  public addToList() {
    if (this.newTask == "") {
    } else {
      this.items.push(this.newTask);
      this.newTask = "";
    }
  }

  public deleteTask(index) {
    this.items.splice(index, 1);
  }
}
