import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css'
import noAvatar from '../../images/transparent.png';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <>
        <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
    </>
);

FriendListItem.defaultProps = {
    avatar: noAvatar,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;

