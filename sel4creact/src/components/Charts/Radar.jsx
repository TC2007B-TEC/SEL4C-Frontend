import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, RadarSeries, LineSeries, AreaSeries, PolarSeries, StackingAreaSeries} from '@syncfusion/ej2-react-charts';
import { useTheme } from '@mui/material';
import {RadarChartData, RadarCustomSeries} from '../../data/mockData'


const Radar = ({height, width}) => {
    const primaryXAxis = { valueType: 'string', title: 'Month' };
    const primaryYAxis = {minimum: 0, maximum: 100, interval: 10}
    const theme = useTheme()
    const colors =  `${theme.palette.mode==='dark' ? theme.palette.grey[900]: theme.palette.grey[300]}`
    return(
    <ChartComponent 
    id = "Radar"
    width = {width} // Set an appropriate width
    height= {height} // Set an appropriate height
    background={colors}
    primaryxAxis={primaryXAxis}
    primaryYAxis={primaryYAxis}
    legendSettings={{ background: colors, position:'Bottom' }}>
        <Inject services={[PolarSeries, RadarSeries,LineSeries, AreaSeries, StackingAreaSeries]}/>
        <SeriesCollectionDirective>
            {RadarCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
};

export default Radar;
