

import { ConfigProvider } from 'antd';
import classes from './home.module.css'
import HomeMain from './homeMain/index'


const Home = () => {


    return (
        <div className={classes.home_wrapper}>
            <ConfigProvider direction="rtl">
                <HomeMain />
            </ConfigProvider>
        </div>
    )
}
export default Home 