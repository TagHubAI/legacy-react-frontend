import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';

import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisBottom } from '@visx/axis';

export interface BarChartData {
  name: string;
  color?: string;
  value: number;
}

const verticalMargin = 120;

// accessors
const getName = (d: BarChartData) => d.name;
const getNameFrequency = (d: BarChartData) => Number(d.value) * 100;

export type BarsChartProps = {
  width: number;
  height: number;
  data: BarChartData[];
  events?: boolean;
};

export default function BarChart({
  width,
  height,
  data,
  events = true,
}: BarsChartProps) {
  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getName),
        padding: 0.4,
      }),
    [xMax, data]
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getNameFrequency))],
      }),
    [yMax, data]
  );

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="white" />
      <Group top={verticalMargin / 2}>
        {data.map((d) => {
          const valueName = getName(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getNameFrequency(d)) ?? 0);
          const barX = xScale(valueName);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${valueName}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill={d.color}
              onClick={() => {
                if (events)
                  alert(`clicked: ${JSON.stringify(Object.values(d))}`);
              }}
            />
          );
        })}
      </Group>
      <AxisBottom
        top={yMax + 60}
        scale={xScale}
        stroke="black"
        tickStroke="black"
        tickLabelProps={() => ({
          fill: 'black',
          fontSize: 12,
          textAnchor: 'middle',
        })}
      />
    </svg>
  );
}
