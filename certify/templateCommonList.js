{
  "jsonrpc": "1.0",
  "id": 1,
  "result": [
    {
      "title": "毕业证书",
      "id": "001",
      "background": "1",
      "desc": "学生$name年齢$age学校$school",
      "keys": {
        "name": {
          "type": "input",
          "frame": "位置大小",
          "desc": "姓名",
          "value": ""
        },
        "age": {
          "type": "input",
          "frame": "位置大小",
          "desc": "年齡",
          "value": ""
        },
        "school": {
          "type": "input",
          "frame": "位置大小",
          "desc": "学校",
          "value": ""
        }
      }
    },
    {
      "title": "荣誉证书",
      "id": "002",
      "background": "2",
      "desc": "$name同志：\n        在$year年度工作中，勤奋努力，专业技能或业务水平优秀，荣获公司优秀员工。\n        特发此证，以兹鼓励！\n        有效期自$startTime至$endTime",
      "keys": {
        "name": {
          "type": "input",
          "frame": "位置大小",
          "desc": "姓名",
          "value": ""
        },
        "year": {
          "type": "input",
          "frame": "位置大小",
          "desc": "年份",
          "value": ""
        },
        "startTime": {
          "type": "date",
          "frame": "位置大小",
          "desc": "起始时间",
          "value": ""
        },
        "endTime": {
          "type": "date",
          "frame": "位置大小",
          "desc": "结束时间",
          "value": ""
        }
      }
    }
  ]
}