import {FC} from 'react'
import {IconProps} from "../IconProps.interface";

const Child: FC<IconProps> = (props) => {
    const {width = 36, height = 36, style} = props
    return (
        <svg style={style} width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3632 4.5C22.3632 3.30653 21.9037 2.16193 21.0857 1.31802C20.2677 0.474106 19.1582 0 18.0014 0C16.8446 0 15.7351 0.474106 14.9171 1.31802C14.0991 2.16193 13.6396 3.30653 13.6396 4.5C13.6396 5.69347 14.0991 6.83807 14.9171 7.68198C15.7351 8.52589 16.8446 9 18.0014 9C19.1582 9 20.2677 8.52589 21.0857 7.68198C21.9037 6.83807 22.3632 5.69347 22.3632 4.5ZM15.3366 11.9039C13.7214 11.3133 12.3038 10.1953 11.3292 8.68359L10.0002 6.62344C9.33226 5.58984 7.98282 5.31563 6.97414 6.00469C5.96547 6.69375 5.69967 8.09297 6.36758 9.12656L7.70339 11.1797C8.93697 13.0852 10.6204 14.5828 12.5491 15.5672V33.75C12.5491 34.9945 13.5237 36 14.73 36C15.9363 36 16.9109 34.9945 16.9109 33.75V27H19.0919V33.75C19.0919 34.9945 20.0665 36 21.2728 36C22.4791 36 23.4537 34.9945 23.4537 33.75V15.5813C25.437 14.5828 27.1613 13.0359 28.4085 11.0672L29.6489 9.10547C30.3031 8.06484 30.0169 6.67266 29.0082 5.99062C27.9995 5.30859 26.6501 5.60391 25.989 6.65156L24.7486 8.60625C23.2629 10.9547 20.7344 12.375 18.015 12.375C17.1563 12.375 16.318 12.2344 15.5206 11.9672C15.4593 11.9461 15.3979 11.918 15.3366 11.9039Z" fill="#2A6CB4"/>
        </svg>

    );
};

export default Child