import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 100vh;
	background: url('/assets/bg.svg');
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	background-color: rgba(0, 0, 0, 0.7);
	background-blend-mode: overlay;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;
export const HeaderHeading = styled.h1`
	font-size: 60px;
	font-weight: 700;
	color: #fff;
	@media (max-width: 765px) {
		font-size: 35px;
	}
`;
export const SubHeading = styled.p`
	font-size: 15px;
	color: #fff;
	margin-top: 30px;
	margin-bottom: 15px;
	@media (max-width: 765px) {
		margin-top: 15px;
		margin-bottom: 10px;
	}
`;
