import React from 'react';
import {BarChart} from 'react-native-chart-kit';

const ChartWrapper = ({
  data,
  chartWidth,
  chartHeight,
  chartConfig,
  yAxisLabel,
  style,
  showGridLine,
}) => (
  <BarChart
    data={data}
    width={chartWidth}
    height={chartHeight}
    // yAxisLabel={yAxisLabel}
    chartConfig={chartConfig}
    style={style}
    // withInnerLines={showGridLine}
    withHorizontalLabels={true} // Hide y axis
    showBarTops={false}
    fromZero // y axis from 0
    yLabelsOffset={0}
    xLabelsOffset={0}
    // verticalLabelRotation={0}
    // horizontalLabelRotation={90}
    withOuterLines={false}
  />
);

export default ChartWrapper;
