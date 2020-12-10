`use strict`
let cl = arg => console.log(arg);

// properties and methods that are static to class itself not it's prototype is called a static properties and methods

class User{
  static staticCompare(){
    console.log(this===User);
  }
  nonStaticCompare(){
    console.log(this===User.prototype);
  }
}

User.staticCompare();
new User().nonStaticCompare();

class Article{
  static type = "text/article";

  constructor(title, date){
    this.title = title;
    this.date = date;
  }

  desc(){
    cl(`Type: ${Article.type}\nTitle: ${this.title}\nPublish Date: ${this.date}`)
  }

  static compare(articleA, articleB){
    return articleA.date - articleB.date;
  }

  static create(title){
    return new Article(title, new Date());
  }
}

Article.author = 'Hafizul Haque'; // static property of Article class


let articleList = [
  new Article('HTML', new Date('2019-06-17')),
  new Article('CSS', new Date('2020-05-10')),
  new Article('Javascript', new Date('2016-03-29')),
  new Article('Python', new Date('2011-01-09'))
]

articleList.sort(Article.compare);

articleList.push(Article.create('React'));

for(let article of articleList){
  cl(`-----------------------------`);
  article.desc();
}

cl(Article.author); // static property work

//static properties and methods are inherited

class Book extends Article{
  static type = 'text/book';
  static author = 'Mario Gotze';
  constructor(...args){
    super(...args);
  }
  static create(title){
    return new Book(title, new Date());
  }
  desc(){
    cl(`Type: ${Book.type}\nTitle: ${this.title}\nPublish Date: ${this.date}`)
  }
}

cl(Book.author); // static properties inherited
cl(Book.type);

let bookList = [
  new Book('Photosynthesis', new Date('2018-07-26')),
  new Book('Oxitosin', new Date('2014-01-19'))
];
bookList.push(Book.create('Genesis'));

bookList.sort(Book.compare);

for(let book of bookList){
  cl('-----------------------');
  book.desc();
}


