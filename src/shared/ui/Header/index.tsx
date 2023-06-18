import {FC} from 'react'
import c from 'classnames'
import Icon from "@/shared/ui/Icon";
import styles from './index.module.scss'
import {HeaderProps} from "@/shared/ui/Header/model/types";

const Header: FC<HeaderProps> = (props) => {
  const {isMain = false} = props
  let title = c(styles.title, {[styles.titleMain]: isMain})

    return (
        <header className={styles.header}>
            <Icon name={isMain ? "alabuga-white" : "alabuga-black"} />
            <p className={title}>РЕСТОРАН</p>
        </header>
    );
};

export default Header