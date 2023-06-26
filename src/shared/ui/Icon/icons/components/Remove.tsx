import {FC} from 'react'
import {IconProps} from "../IconProps.interface";

const Remove: FC<IconProps> = (props) => {
  const {width = 34, height = 36, style} = props
  return (
      <svg width={width} height={height} viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="34" height="36" rx="17" fill="#EAF1F4"/>
        <path
            d="M25 11C25.2652 11 25.5196 11.1054 25.7071 11.2929C25.8946 11.4804 26 11.7348 26 12C26 12.2652 25.8946 12.5196 25.7071 12.7071C25.5196 12.8946 25.2652 13 25 13H24L23.997 13.071L23.064 26.142C23.0281 26.6466 22.8023 27.1188 22.4321 27.4636C22.0619 27.8083 21.5749 28 21.069 28H12.93C12.4241 28 11.9371 27.8083 11.5669 27.4636C11.1967 27.1188 10.9709 26.6466 10.935 26.142L10.002 13.072C10.0005 13.048 9.99982 13.024 10 13H9C8.73478 13 8.48043 12.8946 8.29289 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.29289 11.2929C8.48043 11.1054 8.73478 11 9 11H25ZM19 8C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10H15C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.1054 9.51957 14 9.26522 14 9C14 8.73478 14.1054 8.48043 14.2929 8.29289C14.4804 8.10536 14.7348 8 15 8H19Z"
            fill="black"/>
      </svg>

  );
};

export default Remove