import url from '@/pages/api/global'

async function requestFuncGet(endpoint: string){
    try{
        const response = await fetch(url+endpoint , {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            },
            });
    
        const result = await response.json();
        return result;
    }catch(error){
      console.log(error);
    }
}

async function requestFuncPost(data: any,endpoint: string){
    try{
        const response = await fetch(url+endpoint , {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
           body: JSON.stringify(data)
            });
    
        const result = await response.json();
        return result;
    }catch(error){
      console.log(error);
    }
}


export { requestFuncGet, requestFuncPost };