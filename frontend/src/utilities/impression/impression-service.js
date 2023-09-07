//populate all service modules to the backend. 
import * as impressionAPI from './impression-api'


export async function createImpression(newImpressionData){

    try {
        const data = await impressionAPI.create(newImpressionData)
        return data
    }catch(err){
        return err
    }
}
export async function showImpression(id){
    try{
       const data = await impressionAPI.detail(id)
       return data
    }catch(err){
        return err
    }
}

export async function editImpression(id){
    try {
        const data = await impressionAPI.edit(id)
        return data
    } catch(err){
        return err
    }
}

export async function updateImpression(id){
    try {
        const data = await impressionAPI.update(id)
        return data
    } catch(err){
        return err
    }
}


export async function deleteImpression(id){
    try{
       const data = await impressionAPI.destroy(id)
       return data
    }catch(err){
        return err
    }
}
