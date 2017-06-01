import React from 'react';
import Loading from 'react-loading';

const LoadingComponent = ({ type, color }) => (
	<Loading type={type} color={color} height='667' width='375' />
);

export default LoadingComponent;