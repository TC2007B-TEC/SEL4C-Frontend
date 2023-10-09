import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, RadarSeries, LineSeries, AreaSeries, PolarSeries, StackingAreaSeries} from '@syncfusion/ej2-react-charts';
import { useTheme } from '@mui/material';


const Radar = ({ id, data, legendVisiblity }) => {
    const primaryxAxis = { valueType: 'string', title: 'Month' };
    const theme = useTheme()
    const colors =  `${theme.palette.mode==='dark' ? theme.palette.grey[900]: theme.palette.grey[300]}`
    return(
    <ChartComponent 
    id = {id}
    width='100%' // Set an appropriate width
    height='100%' // Set an appropriate height
    background={colors}
    primaryxAxis={primaryxAxis}
    legendSettings={{ visible: legendVisiblity, background: colors, position:'Bottom' }}>
        <Inject services={[PolarSeries, RadarSeries,LineSeries, AreaSeries, StackingAreaSeries]}/>
        <SeriesCollectionDirective>
            <SeriesDirective 
                dataSource={data} 
                xName="x" 
                yName="y" 
                type='Radar' 
                fill='red'
                drawType='Area'
                dataLabel={{
                    visible: true,
                    name: 'text',
                    position: 'Inside',
                    font: {
                        fontWeight: '600',
                        color: '#fff',
                    },
                }}>
            </SeriesDirective>
        </SeriesCollectionDirective>
    </ChartComponent>
  )
};

export default Radar;
