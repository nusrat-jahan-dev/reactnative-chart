import React from 'react';
import {Dimensions} from 'react-native';
import NativeChart from '../components/nativeChartKit/NativeChartKit';
import {lineData} from '../../data';

const screenWidth = Dimensions.get('window').width - 16;

const Chart = () => (
  <NativeChart
    data={lineData}
    chartWidth={screenWidth}
    chartHeight={220}
    // yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#8c8c8c',
      backgroundGradientFrom: '#8c8c8c',
      backgroundGradientTo: '#8c8c8c',
      backgroundGradientFromOpacity: 1,
      backgroundGradientToOpacity: 1,
      decimalPlaces: 2,
      color: () => 'rgba(255, 0, 0, 255)',
      labelColor: () => '#fff',
      style: {
        borderRadius: 4,
        paddingLeft: -10,
        marginLeft: 0,
      },
    }}
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      marginVertical: 8,
      borderRadius: 4,
      paddingLeft: 0,
      margin: 0,
    }}
    showGridLine={false}
  />
);

export default Chart;
