import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #fff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    height: auto;
	margin: 1rem 0;
	padding: 1.5rem;
    position: relative;
	width: 100%;
	
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	  
	img {
		object-fit: contain;
	}
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;

	h3 {
		margin-bottom: 0;
		width: 500px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	span {
		font-size: .7rem;
		font-weight: bold;
		min-width: 200px;
		text-align: right;
	}
`;

const Footer = ({
	title = '',
	text = '',
	date = '',
	src = '',
}) => (
    <Wrapper>
		<Title>
			<h3>{title}</h3>
			<span>{date}</span>
		</Title>
		<img
			src={`https://upply-interview.herokuapp.com/images/${src}`}
			alt={title}
		/>
		<p>{text}</p>
    </Wrapper>
);

export default Footer;
