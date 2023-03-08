import React, { FC } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div className={'Hello'}>
    <Tooltip>
      <TooltipTrigger>hover me</TooltipTrigger>
      <TooltipContent>tooltip</TooltipContent>
    </Tooltip>
  </div>;
}
