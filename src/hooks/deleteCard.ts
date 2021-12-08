export function deleteCard(url:string,id:string) {
    fetch(url,{
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            id: id
        })
    }).then(res=>{
        console.log(res.status);
    }).catch(err => {
        console.log("error:", err);
    })

}