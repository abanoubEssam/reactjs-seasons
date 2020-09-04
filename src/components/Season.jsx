import React from 'react';
import classes from './Season.module.css'

const seasonConfig = {
    summer: {
        text: "Let's Hit The Beach",
        iconName: "massive sun icon",
        iconColor: "red",
    },
    winter: {
        text: "Burr it is cold",
        iconName: "massive snowflake icon",
        iconColor: "blue",
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
    } else {
        return lat > 0 ? "winter" : "summer"
    }
}

const SeasonDisplay = ({ lat, long }) => {
    const season = getSeason(lat, new Date().getMonth())
    const { text, iconName, iconColor } = seasonConfig[season]
    return (
        <div className={`${classes.seasonDisplay} ${classes[season]}`}>
            <i className={`${classes.iconLeft} ${iconName}`} style={{ color: iconColor }} />
            <h1>
                {text}
            </h1>
            <i className={`${classes.iconRight} ${iconName}`} style={{ color: iconColor }} />
        </div>
    )
}

export default SeasonDisplay