import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  //selector: ".my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
  // template: `
  //   <h1>{{ title }} works</h1>
  //   <p>a long inline template</p>
  // `,
  //styles: ["h1 { font-weight: bold; }"]
})
export class AppComponent {
  //title = "app";

  title = "Angular Property Binding Example";

  //Example 1
  isDisabled = true;

  firstName = "Sachin";
  lastName = "Tendulkar";
  nullItem = null;
  data = null;

  evilText = 'Template <script>alert("You are hacked")</script> Syntax';

  script = '<script>alert("You are hacked")</script>';
  div = "<div>this is a div</div>";

  value = "";
  clearValue() {
    this.value = "";
  }
}
