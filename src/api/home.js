import request from '../utlis/request'

//获取健康指标数组
export function getHealthIndicators(params) {
    return request({
      url: 'Nutrition/simplitied_indicators/select_healthy_indicators',
      method: 'GET',
      params
    })
}
//获取具体查询名称数组
export function getDetailedNames(params) {
    return request({
      url: 'Nutrition/simplitied_indicators/select_specific_name',
      method: 'GET',
      params
    })
}
//点击搜索：非血压情况
export function selectIndicatorLimit(params) {
    return request({
      url: 'Nutrition/simplitied_indicators/select_indicator_limit',
      method: 'GET',
      params
    })
}
  