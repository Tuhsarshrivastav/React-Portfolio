import styled from 'styled-components';
export const Container = styled.div`
	width: 1200px;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 765px) {
		width: 100%;
		padding: 0 15px;
	}
`;
export const Link = styled.a`
	text-decoration: none;
	cursor: pointer;
	display: inline-block;
	height: 45px;
	line-height: 45px;
	padding: 0 15px;
	background: transparent;
	border: 2px solid #fff;
	color: #fff;
	text-transform: capitalize;
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const Message = styled.p`
	color: #fff;
	font-size: 14px;
	line-height: 20px;
	margin-top: ${(props) => props.marginTop}px;
	width: ${(props) => props.width}%;
`;
export const Heading = styled.h2`
	color: #fff;
	font-size: 20px;
	text-transform: capitalize;
	font-weight: normal;
	margin-bottom: 15px;
`;
