import ajax from '@/utils/ajax'
import apis from './apis'


/**
 * 获取单元楼
 * @param {Object} params
 * @param {String} params.communityID
 * **/
export function fetchUnits (params) {
  return ajax({
    url: apis.fetchUnits,
    params
  })
}
