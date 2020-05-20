export const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  datasets: [
    {
      data: [50, 20, 26, 86, 71, 55],
      color: (opacity = 1) => `rgba(255, 0, 244, ${opacity})`, // optional
      // color: '#ff00ff',
      strokeWidth: 1,
    },
    {
      data: [20, 10, 4, 56, 87, 90],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // optional
      strokeWidth: 1,
    },
  ],
  legend: ['Rainy Days', 'Sunny Days'], // optional
};

// export const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       data: [60, 45, 28, 80, 99, 43],
//       strokeWidth: 2, // optional
//     },
//   ],
//   legend: ['aebsfe'],
// };

export const contributionData = [
  {date: '2016-01-02', count: 1},
  {date: '2016-01-03', count: 2},
  {date: '2016-01-04', count: 3},
  {date: '2016-01-05', count: 4},
  {date: '2016-01-06', count: 5},
  {date: '2016-01-30', count: 2},
  {date: '2016-01-31', count: 3},
  {date: '2016-03-01', count: 2},
  {date: '2016-04-02', count: 4},
  {date: '2016-03-05', count: 2},
  {date: '2016-02-30', count: 4},
];
