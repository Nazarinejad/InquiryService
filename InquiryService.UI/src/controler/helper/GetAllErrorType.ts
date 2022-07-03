import { StorageName } from "sanhab-components-library"
import  api  from "../services/home/apiRequest";

interface IError {
    Key: number
    Value: string
}

const GetAllErrorType = () => {
    // let errorList: IErrorType[] = []
    api.GetAllErrorTypes()
    .then(response => {
        let newErrorObj = response?.data?.Result?.map((error:IError) => {
            return { Code: error.Key, PersianTitle: error.Value }
        })
        window?.sessionStorage?.setItem(StorageName.ERROR_TYPE, JSON.stringify(newErrorObj))
    })

    
}

export default GetAllErrorType
