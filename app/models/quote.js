export default class Quote {
  constructor(data) {
    this.author = data.quote.author;
    this.quote = data.quote.body;
    this.fav = data.quote.favorites_count;
    console.log("quote MODEL Data");
  }
}
