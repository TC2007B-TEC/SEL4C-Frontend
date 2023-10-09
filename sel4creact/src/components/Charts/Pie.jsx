import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useTheme } from '@emotion/react';

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const theme = useTheme()
  const legendBackgroundColor = theme == 'dark' ? 'black' : 'white';
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: legendBackgroundColor, position:'Bottom' }}
      height={height}
      width='100%'
      background= 'transparent'
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Diagnóstico"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={288}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;

// {`${theme.palette.mode==='dark' ? 'black': ' white'}`}