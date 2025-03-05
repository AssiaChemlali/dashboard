import React from 'react'
import { ChartComponent,SeriesDirective,SeriesCollectionDirective,Inject,DateTime,Legend, ColumnSeries, DataLabel, Category } from '@syncfusion/ej2-react-charts'

import { barChartData,barPrimaryXAxis,barPrimaryYAxis,barCustomSeries } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

import {Header} from'../../components'
import { Tooltip } from '@syncfusion/ej2-react-popups'
const Bar = () => {
  const {currentMode}=useStateContext()


  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category="Bar" title="Olympic Medal Counts - RIO"/>


    <ChartComponent
    id="bar-chart"
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    height='420px'
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
    background={currentMode==="Dark" ? "#33373E":"#fff"}
    legendSettings={{ background: 'white' }}
    >
    <Inject services={[ColumnSeries,DateTime,Legend,DataLabel,Tooltip,Category]}/>
    <SeriesCollectionDirective>
     {barCustomSeries.map((item,index)=>
        <SeriesDirective key={index} {...item} />
    )}
    </SeriesCollectionDirective>
    </ChartComponent>


 </div>
  )
}

export default Bar
