import { Typography } from 'antd';
import { Button, Form, Row, Col, Input, Icon } from "sanhab-components-library";
import HomeMainHook from './hook'
import classes from './home.module.css'

const { Title } = Typography;


const Home = (props: any) => {
    const homeMainHook = HomeMainHook(props);

    return (
        <>
            <div className="form_wrapper">

                <Form className="form"
                    form={homeMainHook.form}
                    onFinish={homeMainHook.onFinish}
                >
                    <Row>
                        <Col xl={4} sm={0} ></Col>
                        <Col xl={7} sm={24} md={12} className="p-x-8">
                            <Form.Item
                                label="کد یکتای بیمه نامه"
                                name="PolicyUniqueCode"
                                rules={[
                                    {
                                        required: true,
                                        message: "لطفا کد یکتای بیمه نامه را وارد نمایید",
                                    }
                                ]}>
                                <Input name="PolicyUniqueCode" />
                            </Form.Item>
                        </Col>

                        <Col xl={7} sm={24} md={12} className="p-x-8">
                            <Form.Item
                                label="شناسه/ کد ملی"
                                name="NationalCode"
                                rules={[
                                    {
                                        required: true,
                                        message: "لطفا شناسه/ کد ملی را وارد نمایید",
                                    },
                                ]}>
                                <Input name="NationalCode" />
                            </Form.Item>
                        </Col>
                        <Col style={{ display: 'flex', flexFlow: 'row-reverse' }} xl={2} sm={24}>
                            <Button type="primary" htmlType="submit" loading={homeMainHook.isLoadingSubmitBtn}>
                                دریافت لینک
                        </Button>
                        </Col>
                    </Row>



                </Form >

            </div >

            {homeMainHook.mainUrl.length > 0 ? (
                <>
                    <Row style={{ marginTop: '8%' }}>
                        <Col span={4}></Col>
                        <Col span={16}>
                            <div className={classes.linkWrapper}>
                                <div className={classes.icon}>
                                    <Icon iconType="link"></Icon>
                                </div>
                                <div className={classes.textWrapper}>
                                    <div>{homeMainHook.mainUrl}</div>
                                </div>
                                <div className={classes.btn} onClick={homeMainHook.copyTextToClipboard}>
                                    <div className={classes.rounded_btn}
                                        

                                    >کپی لینک</div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <Row>

                    </Row>
                </>
            ) : null}

        </>
    )
}
export default Home;