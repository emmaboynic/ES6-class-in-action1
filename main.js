/*CHALLENGE
QUESTION;Build a Library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need
of your help. They’re still using index cards to organize their content! Yikes.But no matter, you know some JavaScript,
so let’s get to work modernizing your new digs.Books-‘N-Stuff carries three different types of media: books, CDs, and 
movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD.
These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and
ratings(array,initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and 
ratings(array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
*/

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    get ratings() {
      return this._array;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {   
       let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this._ratings.length;
        return ratingsSum/lengthOfArray;
    }
    addRating(value2) {
      this._ratings.push(value2);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runtime) {
      super(title);
      this._director = director;
      this._runtime = runtime;
    }
    get director() {
      return this._director;
    }
    get runtime() {
      return this._runtime;
    }
  }
  
  const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
  );
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont','speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  class CD extends Media {
    constructor(artist, title) {
      super(title);
      this._artist = artist;
    }
    get artist() {
      return this._artist;
    }
  }
  