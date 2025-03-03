import React from 'react'
import { ordersData,ordersGrid,contextMenuItems } from '../data/dummy'
import {GridComponent,ColumnsDirective, ColumnDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids'

import {Header} from '../components'

const Orders = () => {
  return (
    <div className='bg-white p-2 md:m-10 md:p-10 rounded-3xl m-2'>
      <Header 
      category="Page" 
      title="Orders"/>

      <GridComponent 
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item,index)=> <ColumnDirective key={index} {...item}/>
          )}
        </ColumnsDirective>
        <Inject services={[Resize,Sort, ContextMenu,Filter,Page,Edit,ExcelExport,PdfExport]}/>
      </GridComponent>
   


     
    </div>
  )
}

export default Orders
