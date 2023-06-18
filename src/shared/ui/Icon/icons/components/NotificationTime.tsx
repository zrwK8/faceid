import {FC} from 'react'
import {IconProps} from "../IconProps.interface";

const NotificationTime: FC<IconProps> = (props) => {
  const {width = 36, height = 36, style} = props
  return (
      <svg style={style} width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_43_1570" maskUnits="userSpaceOnUse" x="1" y="1" width="34"
              height="34">
          <path
              d="M18 33C26.2845 33 33 26.2845 33 18C33 9.7155 26.2845 3 18 3C9.7155 3 3 9.7155 3 18C3 26.2845 9.7155 33 18 33Z"
              fill="white" stroke="white" stroke-width="4" stroke-linejoin="round"/>
          <path d="M18.0061 9V18.0075L24.3654 24.3675" stroke="black" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round"/>
        </mask>
        <g mask="url(#mask0_43_1570)">
          <path d="M0 0H36V36H0V0Z" fill="#2A6CB4"/>
        </g>
      </svg>
  );
};

export default NotificationTime