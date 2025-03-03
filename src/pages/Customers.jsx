import React from 'react'
import { customersData,customersGrid } from '../data/dummy'
import {GridComponent,ColumnsDirective, ColumnDirective,Page,Selection,Edit,Filter,Toolbar, Inject,Sort} from '@syncfusion/ej2-react-grids'

import {Header} from '../components'
const Customers = () => {
  return (
    <div className='bg-white p-2 md:m-10 md:p-10 rounded-3xl m-2'>
    <Header 
    category="Page" 
    title="Customers"/>

    <GridComponent 
    id="gridcomp"
    dataSource={customersData}
    allowPaging
    allowSorting
    toolbar={['Delete']}
    editSettings={{allowDeleting:true,allowEditing:true}}
    width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((item,index)=> <ColumnDirective key={index} {...item}/>
        )}
      </ColumnsDirective>
      <Inject services={[Page,Toolbar,Edit,Filter,Sort,Selection]}/>
    </GridComponent>
 


   
  </div>
  )
}

export default Customers
