import React from 'react'
import { employeesData,employeesGrid } from '../data/dummy'
import {GridComponent,ColumnsDirective, ColumnDirective,Page,Search, Inject,Toolbar} from '@syncfusion/ej2-react-grids'

import {Header} from '../components'
const Employees = () => {
  return (
    <div className='bg-white p-2 md:m-10 md:p-10 rounded-3xl m-2'>
    <Header 
    category="Page" 
    title="Employees"/>

    <GridComponent 
    id="gridcomp"
    dataSource={employeesData}
    allowPaging
   toolbar={['Search']}
   width="auto"
    >
      <ColumnsDirective>
        {employeesGrid.map((item,index)=> <ColumnDirective key={index} {...item}/>
        )}
      </ColumnsDirective>
      <Inject services={[Page,Toolbar,Search]}/>
    </GridComponent>
 


   
  </div>
  )
}

export default Employees
