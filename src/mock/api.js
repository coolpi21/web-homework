import mock from 'mockjs'
// 这个一个获取URL参数的方法
import { getParams } from './utils'

// mock.mock('http://your.domain.com/test', {
//   'users|1-10': [{
//     'id|+1': 1,
//     'name': '@cname',
//     'city': '@city',
//     'image': '@image'
//   }]
// })


// 在这里编写你的逻辑代码
mock.mock(/\/api\/lists/, (options) => {
  const count = getParams(options.url, 'count')
  const data = {
    "status": 0,
    "msg": "返回 mock 数据"
  }
  data['brief|' + count] = [
    {
      "tid|+1": 1,
      "title": '@title(3)',
      "catalog": "index",
      "fav|1-100": 20,
      "created": '@date @time',
      "isEnd": 0,
      "answer|1-100": 32,
      "users": {
        "avatar": "@image",
        "name": "@cname",
        "isVip": "1",
        "level|1-10": 5
      }
    }
  ]

  return mock.mock(data)
})
