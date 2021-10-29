import React from 'react';
import classes from './index.scss';

const CustomButton = () => {
    return (
        <div className={classes.root}>
            <button className={classes.button}>New button</button>
        </div>
    );
};

export default CustomButton;
