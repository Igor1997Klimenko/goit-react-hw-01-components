import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendsList = ({ friends }) => (
    <ul className={styles.friendlist}>      
            
            {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
            ))}
           
    </ul>
);

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({id: PropTypes.number.isRequired}),
    ).isRequired,
};

export default FriendsList
