import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state";

export function ShowAllCards(url: string) {
    const dispatch = useDispatch();
    const {showCards} = bindActionCreators(actionCreators,dispatch);
    const result = fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then(res =>
        res.json()
    ).then(data => {
        // console.log(data);
        showCards(data);
        return data
    })
        .catch(err => {
            console.log("error:", err);
        })
    console.log(result);
    return result;
}