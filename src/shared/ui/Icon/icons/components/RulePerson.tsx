import {FC} from 'react'
import {IconProps} from "../IconProps.interface";

const RulePerson: FC<IconProps> = (props) => {
  const {width = 36, height = 36, style} = props
  return (
      <svg style={style} width={width} height={height} viewBox="0 0 36 36" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M28.5 3H7.5C6.70435 3 5.94129 3.31607 5.37868 3.87868C4.81607 4.44129 4.5 5.20435 4.5 6V27C4.5 28.65 5.85 30 7.5 30H13.5L16.935 33.435C17.52 34.02 18.465 34.02 19.05 33.435L22.5 30H28.5C30.15 30 31.5 28.65 31.5 27V6C31.5 4.35 30.15 3 28.5 3ZM18 7.95C20.235 7.95 22.05 9.765 22.05 12C22.05 14.235 20.235 16.05 18 16.05C15.765 16.05 13.95 14.235 13.95 12C13.95 9.765 15.765 7.95 18 7.95ZM27 24H9V22.65C9 19.65 15 18 18 18C21 18 27 19.65 27 22.65V24Z"
            fill="#2A6CB4"/>
      </svg>


  );
};

export default RulePerson