import {SummaryCardData} from "../data_class/SummaryCardData";

export function PostSummary(url:string,cardData?:SummaryCardData,summaryCardId?:string) {
    // const [fetchStatus, setFetchStatus] = useState(0);
    fetch(url,{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            id:cardData?.id,
            title:cardData?.title,
            summary:cardData?.summary
        })
    }).then(res=>{
        console.log(res.status);
    }).catch(err => {
        console.log("error:", err);
    })
}
