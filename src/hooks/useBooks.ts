import {useSelector} from "react-redux";
import {State} from "../state";

export function useBooks(cardOrder: number) {
    const info = useSelector((state: State) => state.articles["bookCards"]);
    const bookSummary = info[cardOrder].summary;
    const summary = bookSummary === "" ? "Please add your summary here" : bookSummary;
    const bookTitle = info[cardOrder].title;
    const title = bookTitle === "" ? "This is the book title" : bookTitle;
    return {bookSummary, bookTitle, summary, title};
}