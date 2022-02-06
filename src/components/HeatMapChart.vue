<template>
  <apexchart type="heatmap" height="110" :options="options" :series="series" />
</template>

<script>
import { UtilDate } from '../util/utilDate';

export default {
  name: 'HeatMapChart',
  props: ['workouts'],
  setup(props) {
    const options = {
      chart: {
        type: 'heatmap',
        height: 110,
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: UtilDate.monthOfYear(),
          data: props.workouts.map(workout => {
            return {
              x: workout.date.substring(5, 10),
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
