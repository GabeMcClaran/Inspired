import store from "../store.js";
import quoteService from "../services/quote-service.js";

function _drawQuotes() {
  let template = "";
  let displayedQuote = store.State.quote;
  console.log("quote draw function", displayedQuote);
  document.getElementById(
    "quote"
  ).innerHTML = template += `<h4>${displayedQuote.quote}</h4>
  <p>${displayedQuote.author}</p>
  <p>${displayedQuote.fav}</p>`;
}
//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuotes);
    quoteService.getQuote();
    console.log("hello from the quote controller");
  }
}
