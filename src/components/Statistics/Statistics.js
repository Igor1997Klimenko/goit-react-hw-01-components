import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import backColor from './bgccolor';

const Statistics = (props) => {
    const { title, stats } = props;
    return (
        <section className={style.statistics}>
            <h2 className={style.title}>{title}</h2>
            <ul className={style.statlist}>
                {stats.map(stat => (
                    <li className={style.item} style={{
                        backgroundColor: backColor(),
                    }} key={stat.id}>
                        <span className={style.label}>{stat.label}</span>
                        <span className={style.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
 }

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
export default Statistics;
