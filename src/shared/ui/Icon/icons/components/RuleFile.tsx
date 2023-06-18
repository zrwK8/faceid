import {FC} from 'react'
import {IconProps} from "../IconProps.interface";

const RuleFile: FC<IconProps> = (props) => {
  const {width = 36, height = 36, style} = props
  return (
      <svg style={style} width={width} height={height} viewBox="0 0 36 36" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_67_1312)">
          <path
              d="M27 0H9C7.80653 0 6.66193 0.474106 5.81802 1.31802C4.97411 2.16193 4.5 3.30653 4.5 4.5V13.5H31.5V4.5C31.5 3.30653 31.0259 2.16193 30.182 1.31802C29.3381 0.474106 28.1935 0 27 0ZM31.5 15.75H13.5V20.25H31.5V15.75ZM31.5 22.5H13.5V27H31.5V22.5ZM31.5 29.25H13.5V36H27C28.1935 36 29.3381 35.5259 30.182 34.682C31.0259 33.8381 31.5 32.6935 31.5 31.5V29.25ZM11.25 36V29.25H4.5V31.5C4.5 32.6935 4.97411 33.8381 5.81802 34.682C6.66193 35.5259 7.80653 36 9 36H11.25ZM4.5 27H11.25V22.5H4.5V27ZM4.5 20.25H11.25V15.75H4.5V20.25Z"
              fill="#2A6CB4"/>
        </g>
        <defs>
          <clipPath id="clip0_67_1312">
            <rect width="36" height="36" fill="white"/>
          </clipPath>
        </defs>
      </svg>


  );
};

export default RuleFile