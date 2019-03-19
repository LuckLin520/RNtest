import { createStackNavigator, createAppContainer } from "react-navigation";
import Scroll from "./pages/scroll"
import Testpage from "./pages/testpage"

const AppNavigator = createStackNavigator({
    Scroll: {
        screen: Scroll,
        navigationOptions:{
            title:'Scroll页',
        },
    },
    Testpage: {
        screen: Testpage,
    }
},{
    initialRouteName: "Scroll",
    defaultNavigationOptions:{//配置全局标题样式
        headerStyle: {
            backgroundColor: '#f4511e',//标题背景颜色
        },
        headerTintColor: '#fff',//标题文字颜色
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf:'center'
        },
    }
});
export default  createAppContainer(AppNavigator);

