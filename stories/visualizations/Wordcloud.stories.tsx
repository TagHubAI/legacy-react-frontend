import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ParentSize } from '@visx/responsive';
import Wordcloud, { wordFreq } from 'components/visualizations/Wordcloud';

const cantStopTheFeeling = `I got this feeling inside my bones
It goes electric, wavy when I turn it on
All through my city, all through my home
We're flying up, no ceiling, when we're in our zone

I got that sunshine in my pocket
Got that good soul in my feet
I feel that hot blood in my body when it drops
I can't take my eyes up off it
Moving so phenomenally
Room on lock the way we rock it
So don't stop

And under the lights when everything goes
Nowhere to hide when I'm getting you close
When we move, well, you already know
So just imagine, just imagine, just imagine

Nothing I can see but you
When you dance, dance, dance
Feeling good, good, creeping up on you
So just dance, dance, dance
Come on
All those things I shouldn't do
But you dance, dance, dance
And ain't nobody leaving soon
So keep dancing

I can't stop the feeling
So just dance, dance, dance
I can't stop the feeling
So just dance, dance, dance
Come on

Ooh, it's something magical
It's in the air, it's in my blood, it's rushing on
Don't need no reason, don't need control
I fly so high, no ceiling, when I'm in my zone

'Cause I got that sunshine in my pocket
Got that good soul in my feet
I feel that hot blood in my body when it drops
I can't take my eyes up off it
Moving so phenomenally
Room on lock the way we rock it
So don't stop

And under the lights when everything goes
Nowhere to hide when I'm getting you close
When we move, well, you already know
So just imagine, just imagine, just imagine

Nothing I can see but you
When you dance, dance, dance
Feeling good, good, creeping up on you
So just dance, dance, dance
Come on
All those things I shouldn't do
But you dance, dance, dance
And ain't nobody leaving soon
So keep dancing

I can't stop the feeling
So just dance, dance, dance
I can't stop the feeling
So just dance, dance, dance
I can't stop the feeling
So just dance, dance, dance
I can't stop the feeling
So keep dancing, come on

I can't stop the
I can't stop the
I can't stop the
I can't stop the
I can't stop the feeling

Nothing I can see but you
When you dance, dance, dance
(I can't stop the feeling)
Feeling good, good, creeping up on you
So just dance, dance, dance
Come on
(I can't stop the feeling)
All those things I shouldn't do
But you dance, dance, dance
(I can't stop the feeling)
And ain't nobody leaving soon
So keep dancing

Everybody sing
(I can't stop the feeling)
Got this feeling in my body
(I can't stop the feeling)
Got this feeling in my body
(I can't stop the feeling)
Wanna see you move your body
(I can't stop the feeling)
Got this feeling in my body

Break it down
Got this feeling in my body
Can't stop the feeling
Got this feeling in my body
Come on
`;

export default {
  title: 'Visualizations/Wordcloud',
  component: Wordcloud,
} as ComponentMeta<typeof Wordcloud>;

export const Primary: ComponentStory<typeof Wordcloud> = ({ words }) => {
  return (
    <ParentSize>
      {({ width, height }) => (
        <Wordcloud width={width} height={height} words={words} />
      )}
    </ParentSize>
  );
};

Primary.storyName = 'Array';
Primary.args = {
  words: wordFreq(cantStopTheFeeling),
};

export const Secondary: ComponentStory<typeof Wordcloud> = ({ text }) => {
  if (!text) return <></>;
  return (
    <ParentSize>
      {({ width, height }) => (
        <Wordcloud width={width} height={height} words={wordFreq(text)} />
      )}
    </ParentSize>
  );
};

Secondary.storyName = 'String';
Secondary.args = {
  text: cantStopTheFeeling,
};
