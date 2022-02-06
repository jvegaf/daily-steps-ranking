<template>
  <apexchart
    type="bar"
    height="400"
    :options="options"
    :series="options.series"
  />
</template>

<script>
export default {
  name: 'BarChart',
  props: ['workouts', 'horizontal'],
  setup(props) {
    const options = {
      chart: {
        horizontal: props.horizontal,
        type: props.horizontal ? 'bar' : 'line',
        height: 400,
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Workouts',
          data: props.workouts.map(workout => {
            return {
              x: workout.date.substring(8, 10),
              y: workout.steps,
            };
          }),
        },
      ],
    };

    return { options: options, series: options.series };
  },
};
</script>
