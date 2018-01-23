import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import {reducer as weatherReducer} from './weather/';


const reducer = combineReducers({
  weather: weatherReducer
});
//store状态树中设置weather属性 对应weatherReducer来更新
export default createStore(
  reducer,
  applyMiddleware(thunk)
);

//创建store 引入异步中间件thunk 如果dispatch过来的是正常action则正常传递到reducer  
//如果dispatch过来的是异步函数，则按照action中的函数来根据情况来dispatch新的action