import React, { FC } from 'react';
import BlueInfoIcon from '../Icons/BlueInfoIcon';
import GreenCheckIcon from '../Icons/GreenCheckIcon';
import RedAlertIcon from '../Icons/RedAlertIcon';
import YellowWarningIcon from '../Icons/YellowWarningIcon';

interface AlertProps {
  type?: 'success' | 'warning' | 'error' | 'info';
  message: string;
}

const Alert: FC<AlertProps> = ({ type = 'info', message }) => {
  return (
    <div
      className='flex items-center gap-4 p-4 text-white bg-gray-900 rounded'
      role='alert'
    >
      {type === 'success' ? (
        <GreenCheckIcon />
      ) : type === 'warning' ? (
        <YellowWarningIcon />
      ) : type === 'error' ? (
        <RedAlertIcon />
      ) : (
        <BlueInfoIcon />
      )}

      <strong className='text-sm font-normal'> {message}</strong>
    </div>
  );
};

export default Alert;
