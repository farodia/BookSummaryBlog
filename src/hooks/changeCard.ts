import {SummaryCardData} from "../data_class/SummaryCardData";

export function changeCard(url:string,cardData:SummaryCardData,method:string) {
    fetch(url,{
        method: method,
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            id:cardData.id,
            title:cardData.title,
            summary:cardData.summary
        })
    }).then(res=>{
        console.log(res.status);
    }).catch(err => {
        console.log("error:", err);
    })

}