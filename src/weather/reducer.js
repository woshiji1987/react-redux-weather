import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';
import * as Status from './status.js';

//设置默认的status 为loading
export default (state = {status: Status.LOADING}, action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return {status: Status.LOADING};
    }
    case FETCH_SUCCESS: {
      return {...state, status: Status.SUCCESS, ...action.result};
      //展开旧的state将新的status覆盖默认的loading,同时将从api获取的天气数据展开后合并入生成新的state
      //这种写法的目的是不修改原先的state,reducer的本质是不能修改state 要生成新的state 所以是不能用数组的concat等方法来添加数据
    }
    case FETCH_FAILURE: {
      return {status: Status.FAILURE};
    }
    default: {
      return state;
    }
  }
}
