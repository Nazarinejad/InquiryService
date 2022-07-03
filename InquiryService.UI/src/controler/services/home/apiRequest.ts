import { HttpBaseService } from "sanhab-components-library";
import { IGetRequestBody } from "./models"
import HttpBaseConstant from "../HttpBaseConstant"

class HomeApiRequest extends HttpBaseService {

    GetAllErrorTypes = (): Promise<any> => {
        return this.send.get("/PolicyInquiry/GetAllError")
    }
    

    GetByUniqIdInquery = (requestBody: IGetRequestBody): Promise<any> => {
        let formData = new FormData();
        formData.append("PolicyUniqueCode", requestBody.PolicyUniqueCode);
        formData.append("NationalCode", requestBody.NationalCode);
        return this.send.post(`/PolicyInquiry/GetByUniqIdInquery`, formData)
    }

   

}

export default new HomeApiRequest({ url: HttpBaseConstant.url })