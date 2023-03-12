const getRowData = () => {

  return [
    {
      // 位置，左上角
      post: {
        x: 0,
        y:0,
        
      },
      // 整体的形状类型, 
      // 矩形 rect  圆形 circle
      type: 'rect',
      // 填充色
      fill: "",
      // 需要画的线条
      lines: [
        {
          // 直线 straight
          // 曲线 curve
          type: 'straight',
          name: 'door',
          points: [{ x: 0, y: 0 }, { x: 0, y: 0 }]
        }
      ],
      // 名称
      name: 'zl-202-bgs',
      // 中文名称
      label: '办公室1',
    }
  ]

}

export default getRowData