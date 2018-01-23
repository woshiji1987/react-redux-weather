import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {actions as weatherActions} from '../weather/';

const CITY_CODES = {
  '杭州': 101210101,
  '温州': 101210701,
  '台州': 101210601,
  '北京': 101010100,
  '上海': 101020100, 
};



class CitySelector extends React.Component {
  constructor() {
    super(...arguments);
    //展开从父组件传入的props
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const cityCode = ev.target.value; //获取表单中对应的城市code
    this.props.onSelectCity(cityCode)//调取传入的dispatch函数
  }

  componentDidMount() {
    const defaultCity = Object.keys(CITY_CODES)[0];
    this.props.onSelectCity(CITY_CODES[defaultCity]);
    //设置初始化默认的城市数据为CITY_CODES数组第一个
  }
//Object.keys方法 返回数组形式的对象的属性名称
  render() {
    return (
      <select onChange={this.onChange}>
        {
          Object.keys(CITY_CODES).map(
            cityName => <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
          )
        }
      </select>
    );
  }
}

CitySelector.propTypes = {
  onSelectCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCity: (cityCode) => {
      dispatch(weatherActions.fetchWeather(cityCode)); //调用异步action，传入用户新选择的城市代码 并dispatch给reducer
    }
  }
};

export default connect(null, mapDispatchToProps)(CitySelector);

