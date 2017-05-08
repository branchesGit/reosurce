export const data = {
    "status": "success",
    "code": 0,
    "result": {
        "totalCompleted": {
            "total": 464,
            "choose": 450
        },
        "statistics": [
            {
                "id": "1",
                "name": "化学",
                "shortName": "化",
                "num": 264
            },
            {
                "id": "2",
                "name": "物理",
                "shortName": "物",
                "num": 238
            }
        ],
        "combStatistics": [
            {
                "name":"物化史",
                "num":74,
                "percent":"0.36"
            },
            {
                "name":"物化地",
                "num":45,
                "percent":"0.15"
            },{
                "name":"物化地",
                "num":45,
                "percent":"0.15"
            },{
                "name":"物政史",
                "num":30,
                "percent":"0.136"
            },{
                "name":"化政史",
                "num":56,
                "percent":"0.30"
            },{
                "name":"化生史",
                "num":34,
                "percent":"0.15"
            }
        ],
        "hirarchyChooseInfos":[
            {
                "subjectID": 1,
                "subjectName": "物理",
                "hirarchyInfos": [
                    {
                        "name": "前30%",
                        "percent": 0.5
                    },
                    {
                        "name": "30%~50%",
                        "percent": 0.4
                    }
                ]
            },
            {
               "subjectID": 2,
                "subjectName": "化学",
                "hirarchyInfos": [
                    {
                        "name": "前30%",
                        "percent": 0.5
                    },
                    {
                        "name": "30%~50%",
                        "percent": 0.4
                    }
                ] 
            }
        ],
        "model": {
            "fixed": {
            	"recommendResource":{
            		"executiveClsNum":10,//分班之前行政班数量（或教室数量）
	                "stuClassNum": 12,//分班之后行政班数量
	                "classRoomNum": 12,//分班之后教室数量
	                "choiceSubjClassNum":32,
	                "examSubjClassNum":28,
	                 "rankExam": [
	                    {
	                        "subjId": 1,
	                        "subjName": "物理",
	                        "classNum": 5
	                    },
	                    {
	                        "subjId": 2,
	                        "subjName": "化学",
	                        "classNum": 5
	                    },
	                    {
	                        "subjId": 3,
	                        "subjName": "生",
	                        "classNum": 3
	                    }
	                ],
	                "qualifiedExam": [
	                    {
	                        "subjId": 1,
	                        "subjName": "物理",
	                        "classNum": 5
	                    },
	                    {
	                        "subjId": 2,
	                        "subjName": "化学",
	                        "classNum": 5
	                    },
	                    {
	                        "subjId": 3,
	                        "subjName": "生",
	                        "classNum": 3
	                    }
	                ]
            	},
                "classes": [
                       {
                            "className": "6班",
                            "combName": "物化X",
                            "classifyType": 1, // 1, 2, 3 
                            "stuNum": 32
                        },
                        {
                            "className": "6班",
                            "combName": "物化X",
                            "classifyType": 3, // 1, 2, 3 
                            "stuNum": 32
                        }
                 ]
            },
            "priority": {
            	"recommendResource":{
            		"executiveClsNum":10,
	               	"stuClassNum": 12,
		            "classRoomNum": 12,
		            "choiceSubjClassNum":32,
		            "examSubjClassNum":28,
	                 "rankExam": [
	                    {
	                        "subjId": 1,
	                        "subjName": "物理",
	                        "classNum": 5
	                    },
	                    {
	                        "subjId": 2,
	                        "subjName": "化学",
	                        "classNum": 5
	                    },
	                    {
	                        "subjId": 3,
	                        "subjName": "生",
	                        "classNum": 3
	                    }
	                ],
	                "qualifiedExam": [
	                    {
	                        "subjId": 1,
	                        "subjName": "物理",
	                        "classNum": 5
	                    },
	                    {
	                        "subjId": 2,
	                        "subjName": "化学",
	                        "classNum": 5
	                    },
	                    {
	                        "subjId": 3,
	                        "subjName": "生",
	                        "classNum": 3
	                    }
	                ]
            	},
               "classes": [
                       {
                            "className": "6班",
                            "combName": "物化X",
                            "classifyType": 1, // 1, 2, 3 
                            "stuNum": 32
                        },
                        {
                            "className": "6班",
                            "combName": "物化X",
                            "classifyType": 3, // 1, 2, 3 
                            "stuNum": 32
                        }
                 ]
            }
        },
        //各学科走班学生数量：
        "modleSubjsToStus": [
            {
                "subjectID": 1,
                "subjectName": "物理",
                "modules": [
                    {
                        "name": "定二走一",
                        "num": 100
                    },
                    {
                        "name": "三科优先",
                        "num": 120
                    },
                    {
                        "name": "大走班",
                        "num": 129
                    }
                ]
            },
            {
                "subjectID": 2,
                "subjectName": "化学",
                "modules": [
                    {
                        "name": "定二走一",
                        "num": 109
                    },
                    {
                        "name": "三科优先",
                        "num": 125
                    },
                    {
                        "name": "大走班",
                        "num": 124
                    }
                ]
            },
            {
                "subjectID": 3,
                "subjectName": "生物",
                "modules": [
                    {
                        "name": "定二走一",
                        "num": 107
                    },
                    {
                        "name": "三科优先",
                        "num": 124
                    },
                    {
                        "name": "大走班",
                        "num": 129
                    }
                ]
            },
            {
                "subjectID": 4,
                "subjectName": "政治",
                "modules": [
                    {
                        "name": "定二走一",
                        "num": 103
                    },
                    {
                        "name": "三科优先",
                        "num": 127
                    },
                    {
                        "name": "大走班",
                        "num": 128
                    }
                ]
            }
        ],
        "modleClsNumInfos": [
            {
                "name": "当前",
                "num": 10
            },
            {
                "name": "定二走一",
                "num": 12
            },
            {
                "name": "三科优先",
                "num": 12
            },
            {
                "name": "大走班",
                "num": 11
            }
        ],
        //各科目教学班变化情况：
        "TCNSubjs": [
            {
                "id": 1,
                "name": "物理",
                "infos": {
                    "optionExam": [
                        {
                            "name": "优先三科",
                            "num": 0
                        },
                        {
                            "name": "定二走一",
                            "num": 0
                        },
                        {
                            "name": "大走班",
                            "num": 0
                        }
                    ],
                    "exam": [
                        {
                            "name": "优先三科",
                            "num": 0
                        },
                        {
                            "name": "定二走一",
                            "num": 0
                        },
                        {
                            "name": "大走班",
                            "num": 0
                        }
                    ]
                }
            },
            {
                "id": 2,
                "name": "化学",
                "infos": {
                    "optionExam": [
                        {
                            "name": "优先三科",
                            "num": 0
                        },
                        {
                            "name": "定二走一",
                            "num": 0
                        },
                        {
                            "name": "大走班",
                            "num": 0
                        }
                    ],
                    "exam": [
                        {
                            "name": "优先三科",
                            "num": 0
                        },
                        {
                            "name": "定二走一",
                            "num": 0
                        },
                        {
                            "name": "大走班",
                            "num": 0
                        }
                    ]
                }
            }
        ],

        "modlesInfos": [
            {
                "name": "定二走一",
                "willings": [
                    {
                        "name": "第1志愿",
                        "percent": 0.2
                    },
                    {
                        "name": "第2志愿",
                        "percent": 0.2
                    }
                ],
                "takeClasses": [
                    {
                        "name": "一科走班",
                        "percent": 0.284
                    },
                    {
                        "name": "2/3科走班",
                        "percent": 0.716
                    }
                ],

                "increaseCN": 2,//增加教室数量
                "takeCSN": 349, //走班学生数量
                "stuTakeCANS": 1, //平均每个学生需走班科目数
                "threeSFC": 0, //三科固定行政班级数
                "fixedCN": 10, //两科固定行政班级数
                "threeTCN": 0 //一科固定行政班级数
            },
            {
                "name": "优先三科",
                "willings":[
                    {
                        "name": "第1志愿",
                        "percent": 0.2
                    },
                    {
                        "name": "第2志愿",
                        "percent": 0.2
                    }
                ],
                "takeClasses": [
                    {
                        "name": "一科走班",
                        "percent": 0.284
                    },
                    {
                        "name": "2/3科走班",
                        "percent": 0.716
                    }
                ],
                "increaseCN": 2,
                "takeCSN": 349,
                "stuTakeCANS": 1,
                "threeSFC": 0,
                "fixedCN": 10, //定二走一,
                "threeTCN": 0
            },
            {
                "name": "大走班",
                "willings": {
                    "first": 0.8,
                    "second": 0.2
                },
                "takeClasses": [
                    {
                        "name": "一科走班",
                        "percent": 0.284
                    },
                    {
                        "name": "2/3科走班",
                        "percent": 0.716
                    }
                ],
                "teachingClsNum": "大",
                "increaseCN": 2,
                "takeCSN": 349,
                "stuTakeCANS": 1,
                "threeSFC": 0,
                "fixedCN": 10, //定二走一,
                "threeTCN": 0
            }
        ],
        //不合理学生名单
        "irrationInfos": {
            "stus": [
                {
                    "name": "艾清瑶",
                    "className": "高一1班"
                },
                {
                    "name": "艾清瑶",
                    "className": "高一1班"
                },
                {
                    "name": "艾清瑶",
                    "className": "高一1班"
                },
                {
                    "name": "艾清瑶",
                    "className": "高一1班"
                }
            ],
            "percent": 0.034
        },
        "mbti": {
            "mbti":{
                "E": [
                    {
                        "name": "内向",
                        "percent": 0.48
                    },
                    {
                        "name": "外向",
                        "percent": 0.52
                    }
                ] ,
                "S": [
                    {
                        "name": "实感",
                        "percent": 0.48
                    },
                    {
                        "name": "直觉",
                        "percent": 0.52
                    }
                ],
                "T": [
                    {
                        "name": "思考",
                        "percent": 0.48
                    },
                    {
                        "name": "情感",
                        "percent": 0.52
                    }
                ],
                "J": [
                    {
                        "name": "判断",
                        "percent": 0.48
                    },
                    {
                        "name": "知觉",
                        "percent": 0.52
                    }
                ]
            }
        },
        "mbtidimensions": [
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISFJ",
                "num": 20,
                "chinese": "保护者",
                "english": "Protector",
                "character": "",
                "career": ""
            },
            {
                "name": "ESTJ",
                "num": 21,
                "chinese": "监督员",
                "english": "Supervisor",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            },
            {
                "name": "ISTJ",
                "num": 35,
                "chinese": "检查员",
                "english": "Inspector",
                "character": "",
                "career": ""
            }
        ],
        "holland":[
                {
                    "name": "艺术型A",
                    "num": 56,
                    "character": "",
                    "career": ""
                },
                {
                    "name": "社会型S",
                    "num": 206,
                    "character": "",
                    "career": ""
                },
                {
                    "name": "企业型E",
                    "num": 56,
                    "character": "",
                    "career": ""
                },
                {
                    "name": "常规型C",
                    "num": 67,
                    "character": "",
                    "career": ""
                }
            ],
        //排名变化信息
        "rankChangeAnalysisInfo": {
          //总体分析信息
          "totalRankChangeInfo": {
            "detailChangeInfo": [
                {
                    //下边界
                    "lowerLimit": 9,
                    //上边界
                    "upperLimit": 10,
                    //计数
                    "count": 15
                },
                {
                    //下边界
                    "lowerLimit": 10,
                    //上边界
                    "upperLimit": 11,
                    //计数
                    "count": 12
                }
            ],
            //标准差
            "stdDeviation": 0.258,
            //最大上升名次
            "maxRankUp": 23,
            //最大排名下降
            "maxRankDown": 15,
            //较大上升人数
            "largeChangeUp": {
              "num": 22,
              "percent": 0.1
            },
            //较大下降人数
            "largeChangeDown": {
              "num": 11,
              "percent": 0.05
            }
          },
          "levelRankChangeInfos": [
            {
              "levelName": "前20%",
              "detailChangeInfo": [
                  {
                      //下边界
                      "lowerLimit": 9,
                      //上边界
                      "upperLimit": 10,
                      //计数
                      "count": 15
                  },
                  {
                      //下边界
                      "lowerLimit": 10,
                      //上边界
                      "upperLimit": 11,
                      //计数
                      "count": 12
                  }
              ],
              //标准差
              "stdDeviation": 0.258,
              //最大上升名次
              "maxRankUp": 23,
              //最大排名下降
              "maxRankDown": 15,
              //较大上升人数
              "largeChangeUp": {
                "num": 22,
                "percent": 0.1
              },
              //较大下降人数
              "largeChangeDown": {
                "num": 11,
                "percent": 0.05
              }
            },
            {
              "levelName": "20%~60%",
              "detailChangeInfo": [
                  {
                      //下边界
                      "lowerLimit": 9,
                      //上边界
                      "upperLimit": 10,
                      //计数
                      "count": 15
                  },
                  {
                      //下边界
                      "lowerLimit": 10,
                      //上边界
                      "upperLimit": 11,
                      //计数
                      "count": 12
                  }
              ],
              //标准差
              "stdDeviation": 0.258,
              //最大上升名次
              "maxRankUp": 23,
              //最大排名下降
              "maxRankDown": 15,
              //较大上升人数
              "largeChangeUp": {
                "num": 22,
                "percent": 0.1
              },
              //较大下降人数
              "largeChangeDown": {
                "num": 11,
                "percent": 0.05
              }
            }
          ]
        },
      // 个人最高得分组合 与 选科组合 得分分差 直方图
      "maxCombAndChosenCombScoreDiff": [
        {
          "summary": {
            "averageScoreDiff": 3,
            "scopeName": "总体学生分析", //"年级前20%学生分析"、"年级前20%-年级前60%学生分析"、"年级后40%学生分析"
            "scopeType": "totalLevel", // "scoreLevel1"、"scoreLevel2"、"scoreLevel3"
            "lessThan7": {
              "count": 60,
              "percent": 0.89 // 表示89%
            },
            "greaterThan10": {
              "count": 15,
              "percent": 0.05
            }
          },
          "details": [
            {
              "lowerLimit": 0,
              "upperLimit": 1,
              "count": 10
            },
            {
              "lowerLimit": 1,
              "upperLimit": 2,
              "count": 12
            },
            {
              "lowerLimit": 2,
              "upperLimit": 3,
              "count": 14
            },
            {
              "lowerLimit": 3,
              "upperLimit": 4,
              "count": 20
            },
            {
              "lowerLimit": 4,
              "upperLimit": 5,
              "count": 10
            },
            {
              "lowerLimit": 5,
              "upperLimit": 6,
              "count": 20
            },
            {
              "lowerLimit": 6,
              "upperLimit": 7,
              "count": 30
            },
            {
              "lowerLimit": 7,
              "upperLimit": 8,
              "count": 20
            },
            {
              "lowerLimit": 8,
              "upperLimit": 9,
              "count": 22
            },
            {
              "lowerLimit": 9,
              "upperLimit": 10,
              "count": 15
            },
            {
              "lowerLimit": 10,
              "upperLimit": 11,
              "count": 10
            },
            {
              "lowerLimit": 11,
              "upperLimit": 12,
              "count": 5
            }
          ]
        },
        {
          "summary": {
            "averageScoreDiff": 3,
            "scopeName": "年级前20%学生分析", //"年级前20%学生分析"、"年级前20%-年级前60%学生分析"、"年级后40%学生分析"
            "scopeType": "scoreLevel1", // "scoreLevel1"、"scoreLevel2"、"scoreLevel3"
            "lessThan7": {
              "count": 60,
              "percent": 0.89
            },
            "greaterThan10": {
              "count": 15,
              "percent": 0.05
            }
          },
          "details": [
            {
              "lowerLimit": 0,
              "upperLimit": 1,
              "count": 10
            },
            {
              "lowerLimit": 1,
              "upperLimit": 2,
              "count": 12
            },
            {
              "lowerLimit": 2,
              "upperLimit": 3,
              "count": 14
            },
            {
              "lowerLimit": 3,
              "upperLimit": 4,
              "count": 20
            },
            {
              "lowerLimit": 4,
              "upperLimit": 5,
              "count": 10
            },
            {
              "lowerLimit": 5,
              "upperLimit": 6,
              "count": 20
            },
            {
              "lowerLimit": 6,
              "upperLimit": 7,
              "count": 30
            },
            {
              "lowerLimit": 7,
              "upperLimit": 8,
              "count": 20
            },
            {
              "lowerLimit": 8,
              "upperLimit": 9,
              "count": 22
            },
            {
              "lowerLimit": 9,
              "upperLimit": 10,
              "count": 15
            },
            {
              "lowerLimit": 10,
              "upperLimit": 11,
              "count": 10
            },
            {
              "lowerLimit": 11,
              "upperLimit": 12,
              "count": 5
            }
          ]
        }
      ]

    }
}