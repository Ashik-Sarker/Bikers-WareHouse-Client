import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../../hooks/useItems';

const StockUpdate = () => {
    
    const { id } = useParams();
    return (
        <div>
            <h2>This is stock update:  {id}</h2>
        </div>
    );
};

export default StockUpdate;