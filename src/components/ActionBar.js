import React from 'react';

const ActionBar = props => (
    <div className="actions--bar">
        <div className="bounds">
        <div className="grid-100">
            {props.children}
        </div>
        </div>
    </div>
);

export default ActionBar;