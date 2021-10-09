import {useSelector} from "react-redux";
import {State} from "../state";

export function useBooks(cardOrder:number){
    const info = useSelector((state: State) => state.articles["bookCards"]);
    const bookSummary = info[cardOrder].summary;
    const summary=bookSummary===""?"这里是书籍标题":bookSummary;
    const bookTitle = info[cardOrder].title;
    const title = bookTitle===""?"这里是你的总结":bookTitle;
    return {bookSummary,bookTitle,summary,title};
}