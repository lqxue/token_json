{
  "jsonrpc": "1.0",
  "id": 1,
  "result": [
    {
      "title": "身份证",
      "id": "001",
      "background": "1",
      "desc": "姓名:$name \n性别:$gender \n民族$nation \n身份证号码$id \n户籍所在地$nativePlace \n现居住地址$currentPlace \n有效期限$startTime至$endTime",
      "keys": {
        "name": {
          "type": "input",
          "frame": "位置大小",
          "desc": "姓名",
          "value": ""
        },
        "gender": {
          "type": "input",
          "frame": "位置大小",
          "desc": "性别",
          "value": ""
        },
        "nation": {
          "type": "input",
          "frame": "位置大小",
          "desc": "民族",
          "value": ""
        },
        "id": {
          "type": "input",
          "frame": "位置大小",
          "desc": "身份证号码",
          "value": ""
        },
        "nativePlace": {
          "type": "input",
          "frame": "位置大小",
          "desc": "户籍所在地",
          "value": ""
        },
        "currentPlace": {
          "type": "input",
          "frame": "位置大小",
          "desc": "现居住地址",
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