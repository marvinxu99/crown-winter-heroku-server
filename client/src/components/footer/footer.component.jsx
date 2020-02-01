import React from 'react';

import ww_logo from '../../assets/images/ww_logo2.png';

import {
  FooterContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
  LogoImg
} from './footer.styles';

const Footer = () => (
  <div>
	  <hr />
	  <FooterContainer>
		<LogoContainer to='/contact'>
		  <LogoImg src={ww_logo} />
		  <div>
			<span>© Winter WinnPy 2020</span>
		  </div>
		</LogoContainer>
		<OptionDiv>
		  Place Holder
		</OptionDiv>
		<OptionDiv>
		  Place Holder
		</OptionDiv>
		<OptionDiv>
		  Place Holder
		</OptionDiv>
		<OptionDiv>
		  Place Holder
		</OptionDiv>
		<OptionDiv>
		  Place Holder
		</OptionDiv>
		<OptionDiv>
		  Place Holder
		</OptionDiv>
		<OptionDiv>
		  Place Holder
		</OptionDiv>
		<OptionsContainer>
		  <OptionLink to='/crypto'>
			CRYPTOGRAPHY
		  </OptionLink>
		</OptionsContainer>

	  </FooterContainer>
  </div>
);

export default Footer;