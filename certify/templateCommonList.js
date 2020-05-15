{
  "jsonrpc": "1.0",
  "id": 1,
  "result": [
    {
      "title": "毕业证书",
      "id": "001",
      "background": "1",
      "desc": "        学生 $name ，身份证 $id ，性别 $gender ，于$startTime到$endTime在$school学校$level年制$major专业学习。现已修完教学计划规定的全部课程，成绩合格，获得毕业证书。\n\n证书编号：$serialNumber。",
      "keys": {
        "name": {
          "type": "input",
          "frame": "位置大小",
          "desc": "姓名",
          "value": ""
        },
        "id": {
          "type": "input",
          "frame": "位置大小",
          "desc": "身份证号",
          "value": ""
        },
        "gender": {
          "type": "input",
          "frame": "位置大小",
          "desc": "性别",
          "value": ""
        },
        "startTime": {
          "type": "input",
          "frame": "位置大小",
          "desc": "升大学时间",
          "value": ""
        },
        "endTime": {
          "type": "input",
          "frame": "位置大小",
          "desc": "毕业时间",
          "value": ""
        },
        "level": {
          "type": "input",
          "frame": "位置大小",
          "desc": "年制",
          "value": ""
        },
        "major": {
          "type": "input",
          "frame": "位置大小",
          "desc": "专业",
          "value": ""
        },
        "serialNumber": {
          "type": "input",
          "frame": "位置大小",
          "desc": "证书编号",
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
