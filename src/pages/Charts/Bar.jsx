import React from 'react'
import { ChartComponent,SeriesDirective,SeriesCollectionDirective,Inject,DateTime,Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'

import { areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

import {Header} from'../../components'
const Bar = () => {
  const {currentMode}=useStateContext()
  return (
    <div className=''>
    <Header category="Chart" title="Bar"/>


    <ChartComponent
    id="bar-chart"
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width:0}}}
    background={currentMode==="Dark" ? "#33373E":"#fff"}
    legendSettings={{ background: 'white' }}
    >
    <Inject services={[SplineAreaSeries,DateTime,Legend]}/>
    <SeriesCollectionDirective>
      {areaCustomSeries.map((item,index)=>
        <SeriesDirective key={index} {...item}/>
      )}
    </SeriesCollectionDirective>
    </ChartComponent>


 </div>
  )
}

export default Bar
