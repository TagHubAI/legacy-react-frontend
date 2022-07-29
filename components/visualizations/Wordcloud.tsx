import React, { useMemo, useState } from 'react';
import { Text } from '@visx/text';
import { scaleLog } from '@visx/scale';
import { Wordcloud } from '@visx/wordcloud';

interface WordcloudChartProps {
  width: number;
  height: number;
  showControls?: boolean;
  words: WordData[];
  text?: string;
}

export interface WordData {
  text: string;
  value: number;
}

const colors = ['#38BDF8', '#0EA5E9', '#0284C7'];

export function wordFreq(text: string): WordData[] {
  const words: string[] = text.replace(/\./g, '').split(/\s/);
  const freqMap: Record<string, number> = {};

  for (const w of words) {
    if (!freqMap[w]) freqMap[w] = 0;
    freqMap[w] += 1;
  }
  return Object.keys(freqMap).map((word) => ({
    text: word,
    value: freqMap[word],
  }));
}

function getRotationDegree() {
  const rand = Math.random();
  const degree = rand > 0.5 ? 60 : -60;
  return rand * degree;
}

const fixedValueGenerator = () => 0.5;

type SpiralType = 'archimedean' | 'rectangular';

export default function WordcloudChart({
  width,
  height,
  showControls,
  words,
}: WordcloudChartProps) {
  const [spiralType, setSpiralType] = useState<SpiralType>('rectangular');
  const [withRotation, setWithRotation] = useState(false);
  const fontScale = useMemo(
    () =>
      scaleLog({
        domain: [
          Math.min(...words.map((w) => w.value)),
          Math.max(...words.map((w) => w.value)),
        ],
        range: [15, 80],
      }),
    [words]
  );

  const fontSizeSetter = useMemo(
    () => (datum: WordData) => fontScale(datum.value),
    [fontScale]
  );

  return (
    <>
      <Wordcloud
        words={words}
        width={width}
        height={height}
        fontSize={fontSizeSetter}
        font={'IBM Plex Sans Condensed'}
        padding={5}
        spiral={spiralType}
        rotate={withRotation ? getRotationDegree : 0}
        random={fixedValueGenerator}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={'middle'}
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
              fontWeight={'500'}
            >
              {w.text}
            </Text>
          ))
        }
      </Wordcloud>
      {showControls && (
        <div>
          <label>
            Spiral type &nbsp;
            <select
              onChange={(e) => setSpiralType(e.target.value as SpiralType)}
              value={spiralType}
            >
              <option key={'archimedean'} value={'archimedean'}>
                archimedean
              </option>
              <option key={'rectangular'} value={'rectangular'}>
                rectangular
              </option>
            </select>
          </label>
          <label>
            With rotation &nbsp;
            <input
              type="checkbox"
              checked={withRotation}
              onChange={() => setWithRotation(!withRotation)}
            />
          </label>
          <br />
        </div>
      )}
    </>
  );
}
