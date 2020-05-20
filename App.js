import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import EChartComponent from './src/components/echarts/EChartComponent';
import Swiper from 'react-native-swiper';
// import {ECharts} from 'native-echarts';

// import Chart from './src/screens/NativeChartKit';

const seriesData = [
  {
    colors: ['#ff0000', '#fff'],
    data: [
      [820, 932, 901, 934, 1290, 1330, 1320, 789, 998],
      [232, 423, 533, 633, 123, 754, 1432, 345, 657],
    ],
  },
  {
    lowerYLimit: 300,
    upperYLimit: 700,
    colors: ['#ff0000'],
    data: [[232, 423, 533, 633, 123, 754, 1432, 345, 657]],
  },
  {
    colors: ['#ff0000', '#fff'],
    data: [
      [820, 932, 901, 256, 234, 333, 234, 633, 998],
      [232, 423, 533, 863, 123, 754, 1432, 345, 657],
    ],
  },
  {
    colors: ['#ff0000', '#fff'],
    data: [
      [820, 932, 901, 934, 111, 444, 666, 789, 998],
      [232, 423, 533, 633, 123, 754, 789, 345, 657],
    ],
  },
];

const xAxisArray = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
];

const App = () => {
  const [selectedX, setSelectedX] = useState(xAxisArray[0]);
  return (
    <ScrollView>
      <View style={styles.appView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Custom Chart Wrapper</Text>
        </View>
        <View style={styles.dateController}>
          {/* <DatePickerIOS
            mode="date"
            date={chosenDate}
            onDateChange={newDate => {
              setChosenDate(newDate);
              setSelectedX(xAxisArray[newDate.getMonth()]);
            }}
          /> */}
          <Swiper
            style={styles.swiper}
            title={selectedX}
            showsButtons={true}
            snapToAlignment="center"
            centerContent={true}
            onIndexChanged={index => setSelectedX(xAxisArray[index])}>
            {xAxisArray.map((x, idx) => (
              <View key={`swiper-${idx}`} style={styles.swiperText}>
                <Text>{x}</Text>
              </View>
            ))}
          </Swiper>
        </View>
        <View style={styles.chartContainer}>
          {seriesData.map((serieData, index) => (
            <View key={`serie-${index}`}>
              <EChartComponent {...serieData} selectedX={selectedX} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appView: {
    alignItems: 'center',
  },
  header: {
    marginTop: 100,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
  },
  swiper: {
    alignItems: 'center',
  },
  dateController: {
    height: 80,
    justifyContent: 'center',
    // width: '100%',
  },
  swiperText: {
    justifyContent: 'center',
    width: 100,
  },
  chartContainer: {
    width: '100%',
    backgroundColor: '#3a3a3a',
  },
});

module.exports = App;
