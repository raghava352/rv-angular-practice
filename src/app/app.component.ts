import { Component, VERSION } from "@angular/core";
import { FormsModule } from "@angular/forms";

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

  // title = "Angular Property Binding Example";

  // //Example 1
  // isDisabled = true;

  // firstName = "Sachin";
  // lastName = "Tendulkar";
  // nullItem = null;
  // data = null;

  // evilText = 'Template <script>alert("You are hacked")</script> Syntax';

  // script = '<script>alert("You are hacked")</script>';
  // div = "<div>this is a div</div>";

  // value = "";
  // clearValue() {
  //   this.value = "";
  // }

  title: string = "Top 5 Movies";

  movies: Movie[] = [
    {
      title: "Zootopia",
      director: "Byron Howard, Rich Moore",
      cast: "Idris Elba, Ginnifer Goodwin, Jason Bateman",
      releaseDate: "March 4, 2016"
    },
    {
      title: "Batman v Superman: Dawn of Justice",
      director: "Zack Snyder",
      cast: "Ben Affleck, Henry Cavill, Amy Adams",
      releaseDate: "March 25, 2016"
    },
    {
      title: "Captain American: Civil War",
      director: "Anthony Russo, Joe Russo",
      cast: "Scarlett Johansson, Elizabeth Olsen, Chris Evans",
      releaseDate: "May 6, 2016"
    },
    {
      title: "X-Men: Apocalypse",
      director: "Bryan Singer",
      cast: "Jennifer Lawrence, Olivia Munn, Oscar Isaac",
      releaseDate: "May 27, 2016"
    },
    {
      title: "Warcraft",
      director: "Duncan Jones",
      cast: "Travis Fimmel, Robert Kazinsky, Ben Foster",
      releaseDate: "June 10, 2016"
    }
  ];

  CompositeKey(index, item) {
    return item.title + item.director;
  }
}

class Movie {
  title: string;
  director: string;
  cast: string;
  releaseDate: string;
}
