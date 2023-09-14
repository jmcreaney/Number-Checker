const numCheck = (str,org) =>{
    const s = str.split("");
    let err = false;
    let dcpt = false;
    s.map((e,k) =>{
        if(k === 0){
            if((e >= "0" && e <= "9") || e === "-" ||((e === ".") && (dcpt === false))){
                if(e === ".") {dcpt =true}
                err=false;
            } else {
                //alert(e)
                err=true;
            }
        }else{
            if((e >= "0" && e <= "9") || ((e === ".") && (dcpt === false))){
                if(e === ".") {dcpt =true}
                err=false;
            } else {
                //alert(e)
                err=true;
            }
        }
    })
    if(err){return org}else{
        return str
    }
}
