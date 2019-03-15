import React from 'react';

const BoxHeader = ({title, subtitle}) => {
    return <div className="box-header">
        <div className="box-header-text">
            <div className="box-header-title"><span>{title}</span></div>
            <div className="box-header-subtitle"><span>{subtitle}</span></div>
        </div>
    </div>
};

export default BoxHeader;