import url from '@/pages/api/global'

async function requestFormDataFunc(formdata: any,endpoint: string) {
    try{
            const response = await fetch(url+endpoint , {
                method:'POST',
                body:formdata
              })
    
            const result = await response.json();
            return result;
    }catch(error){
        console.log(error);
    }
}

export { requestFormDataFunc };