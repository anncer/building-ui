const getRowData = () => {

  return {
    name: "数据中心一层分布图",
    data: [
      {
        pos: {
          x: 0,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [100, 100, 0, 100, 0, 0 , 100, 0]
          }
        ],
        name: 'sjzx-1-menting',
        room: '',
        label: '门厅',
      },
      {
        pos: {
          x: 100,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [200, 100, 100, 100, 100, 0, 200, 0]
          }
        ],
        name: 'sjzx-1-dianti',
        room: 'dianti',
        label: '电梯',
      },
      {
        pos: {
          x: 200,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [300, 100, 200, 100, 200, 0, 300, 0]
          }
        ],
        name: 'sjzx-1-102',
        room: '102',
        label: '空调',
      },
      {
        pos: {
          x: 300,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [400, 100, 300, 100, 300, 0, 400, 0]
          }
        ],
        name: 'sjzx-1-104',
        room: '104',
        label: '卫生间',
      },
      {
        pos: {
          x: 400,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [500, 100, 400, 100, 400, 0, 500, 0]
          }
        ],
        name: 'sjzx-1-106',
        room: '106-108',
        label: '消防气瓶间',
      },
      {
        pos: {
          x: 500,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [600, 100, 500, 100, 500, 0, 600, 0]
          }
        ],
        name: 'sjzx-1-110',
        room: '110',
        label: '备品备件',
      },
      {
        pos: {
          x: 600,
          y: 0,
          fill: "#fff",
          width: 50,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [650, 100, 550, 100, 550, 0, 650, 0]
          }
        ],
        name: 'sjzx-1-112',
        room: '112',
        label: '备品备件',
      },
      {
        pos: {
          x: 650,
          y: 0,
          fill: "#fff",
          width: 50,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [700, 100, 600, 100, 600, 0, 700, 0]
          }
        ],
        name: 'sjzx-1-114',
        room: '114',
        label: '备品备件',
      },
      {
        pos: {
          x: 700,
          y: 0,
          fill: "#fff",
          width: 50,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [750, 100, 650, 100, 650, 0, 750, 0]
          }
        ],
        name: 'sjzx-1-116',
        room: '116',
        label: '备品备件',
      },
      {
        pos: {
          x: 750,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [850, 100, 750, 100, 750, 0, 850, 0]
          }
        ],
        name: 'sjzx-1-118',
        room: '118-120',
        label: '用户操作间',
      },
      {
        pos: {
          x: 850,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [950, 100, 850, 100, 850, 0, 950, 0]
          }
        ],
        name: 'sjzx-1-122',
        room: '122-124',
        label: '数据中心接入间',
      },
      {
        pos: {
          x: 950,
          y: 0,
          fill: "#fff",
          width: 50,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [1000, 100, 900, 100, 900, 0, 1000, 0]
          }
        ],
        name: 'sjzx-1-126',
        room: '126',
        label: '备品备件',
      },
      {
        pos: {
          x: 1000,
          y: 0,
          fill: "#fff",
          width: 50,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [1050, 100, 950, 100, 950, 0, 1050, 0]
          }
        ],
        name: 'sjzx-1-128',
        room: '128',
        label: '新风机房',
      },
      {
        pos: {
          x: 1050,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [1150, 100, 1050, 100, 1050, 0, 1150, 0]
          }
        ],
        name: 'sjzx-1-129',
        room: 'dianti',
        label: '电梯',
      },
      {
        pos: {
          x: 1150,
          y: 0,
          fill: "#fff",
          width: 100,
          height: 100,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            closed: true,
            points: [1250, 100, 1150, 100, 1150, 0, 1250, 0]
          }
        ],
        name: 'sjzx-1-130',
        room: '130',
        label: '卫生间',
      },
      // 楼道
      {
        pos: {
          x: 0,
          y: 0,
          fill: "#fff",
          width: 1250,
          height: 50,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            points: [0, 100, 0, 150]
          },
          {
            type: 'straight',
            points: [1250, 100, 1250, 150]
          }
        ],
        // 楼道
        name: 'sjzx-1-loudao',
        room: 'loudao',
        label: '楼道',
      },
      {
        pos: {
          x: 0,
          y: 150,
          fill: "#fff",
          width: 100,
          height: 250,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [100, 400, 0, 400, 0, 150, 100, 150]
          }
        ],
        name: 'sjzx-1-101',
        room: '101',
        label: '保安监控',
      },
      {
        pos: {
          x: 0,
          y: 150,
          fill: "#fff",
          width: 100,
          height: 250,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [100, 400, 0, 400, 0, 150, 100, 150]
          }
        ],
        name: 'sjzx-1-101',
        room: '101',
        label: '保安监控',
      },
      {
        pos: {
          x: 100,
          y: 150,
          fill: "#fff",
          width: 400,
          height: 300,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [500, 450, 100, 450, 100, 150, 500, 150]
          }
        ],
        name: 'sjzx-1-103-109',
        room: '103-109',
        label: '档案处资料库',
      },
      {
        pos: {
          x: 500,
          y: 150,
          fill: "#fff",
          width: 350,
          height: 250,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [850, 400, 500, 400, 500, 150, 850, 150]
          }
        ],
        name: 'sjzx-1-111-115',
        room: '111-115',
        label: '数据机房A',
      },
      {
        pos: {
          x: 850,
          y: 150,
          fill: "#fff",
          width: 300,
          height: 250,
        },
        type: 'rect',
        lines: [
          {
            type: 'straight',
            name: 'door',
            points: [1150, 400, 850, 400, 850, 150, 1150, 150]
          }
        ],
        name: 'sjzx-1-117-121',
        room: '117-121',
        label: '数据机房B',
      }
    ]
  }

}

export default getRowData

// {
//   // 位置，左上角
//   post: {
//     x: 0,
//       y: 0,
        
//       },
//   // 整体的形状类型, 
//   // 矩形 rect  圆形 circle
//   type: 'rect',
//     // 填充色
//     fill: "",
//       // 需要画的线条
//       lines: [
//         {
//           // 直线 straight
//           // 曲线 curve
//           type: 'straight',
//           name: 'door',
//           points: [{ x: 0, y: 0 }, { x: 0, y: 0 }]
//         }
//       ],
//         // 名称
//         name: 'zl-202-bgs',
//           room: '',
//             // 中文名称
//             label: '办公室1',
//     }