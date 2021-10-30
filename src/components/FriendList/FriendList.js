import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => (
    
<ul className={styles.friendlist}>
    {friends.map(friend =>(
        <li className={styles.item} key={friend.id}>
            <span className={friend.isOnline ? styles.statusOnline : styles.statusOffline}></span>
                <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
            <p className={styles.name}>{friend.name}</p>
        </li>
    ))}
</ul> 
)

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default FriendsList