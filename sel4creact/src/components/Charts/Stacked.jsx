import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import {stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/mockData';

import {useTheme} from '@mui/material'

const Stacked = ({ width, height, data}) => {
    const theme = useTheme()
    const stackedCustomSeries = [

        { dataSource: data[0],
            xName: 'x',
            yName: 'y',
            name: 'Actividades',
            type: 'StackingColumn',
            background: 'blue',
        },
        { dataSource: data[1],
            xName: 'x',
            yName: 'y',
            name: 'Usuarios',
            type: 'StackingColumn',
            background: 'black',
    
        },
    ];

    const stackedPrimaryXAxis = {
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        lineStyle: { width: 0 },
        labelIntersectAction: 'Rotate45',
        valueType: 'Category',
    };

    const stackedPrimaryYAxis = {
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: data[0][0].length,
        interval: 2,
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}',
    };

    return (
    <ChartComponent
        id="charts"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        width={width}
        height={height}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: false }}
        background="transparent"
        legendSettings={{ background: 'white' }}
    >
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
    );
};

export default Stacked;