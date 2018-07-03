import fetch from './fetch.js'


/**
 * list->活动管理
 * @param {*} params 
 */
const getWeather =  params=>{
  return fetch({
    url:'weatherApi',
    method:'get',
    params
  })
}


/**
 * list->活动管理
 * @param {*} params 
 */
const getList =  params=>{
  return fetch({
    url:'meituApi',
    method:'get',
    params
  })
}




 
const apiList = {
  getWeather,
  getList
}

export default apiList
