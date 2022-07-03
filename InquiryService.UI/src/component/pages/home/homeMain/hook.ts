import { useState } from "react";
import { Form } from 'antd';
import api from '../../../../controler/services/home/apiRequest'
import { Notification } from 'sanhab-components-library'

function HomeMainHook(props: any) {

    interface IdataToGetLink {
        PolicyUniqueCode: string
        NationalCode: string
    }

    const [form] = Form.useForm();
    const [isLoadingSubmitBtn, setIsLoadingSubmitBtn] = useState(false);
    const [mainUrl, setMainUrl] = useState("");

    const onFinish = (values: IdataToGetLink) => {
        setIsLoadingSubmitBtn(true);

        let dataToGetLink: IdataToGetLink = {
            PolicyUniqueCode: values.PolicyUniqueCode,
            NationalCode: values.NationalCode
        };


        api.GetByUniqIdInquery(dataToGetLink).then((response) => {

            if (response?.data?.Result?.PolicyInfoUrl && response?.data?.IsSucceed) {
                setMainUrl(response?.data?.Result?.PolicyInfoUrl)
            }
            // else {
            //     if(response?.data?.ErrorTypes){
            //         response?.data?.ErrorTypes.map((error:number)=> {
            //             Notification.danger({ message: error})
            //         })
            //     }
            //     else{
            //         Notification.danger({ message: response?.data?.Error?.ErrorTypes})
            //     }
                
            // }
        })
            .finally(() => {
                setIsLoadingSubmitBtn(false);
            })
    };


    const copyTextToClipboard = () => {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            Notification.info({ message: "لینک کپی شد." })
            return navigator.clipboard.writeText(mainUrl);
        } 
        else {
            // text area method
            let textArea = document.createElement("textarea");
            textArea.value = mainUrl;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            // here the magic happens
            document.execCommand('copy')
            textArea.remove();
            Notification.info({ message: "لینک کپی شد." })

        }

        

    }

    return {
        form,
        isLoadingSubmitBtn,
        mainUrl,
        onFinish,
        copyTextToClipboard
    }
}

export default HomeMainHook;