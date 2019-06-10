import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import IconEnvelope from '../icons/IconEnvelope';
import IconGithub from '../icons/IconGithub';
import IconLinkedin from '../icons/IconLinkedin';
import IconMapMarker from '../icons/IconMapMarker';
import IconPhone from '../icons/IconPhone';

const Container = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 4px solid #e6e6e6;
`;

const Title = styled.div`
  > h1, p {
    margin: 0;
  }
`;

const Profile = styled.ul`
  margin: 0;
  list-style: none;
  text-align: right;
`;

const ProfileItem = styled.li`
  margin: 0;
  font-size: 0.85em;
`;

const IconWrapper = styled.span`
  color: #cecece;
  margin-left: 0.5rem;
`;

const Header = ({
  name,
  tagline,
  description,
  email,
  phone,
  location,
  linkedin,
  github,
}) => (
  <Container>
    <Title>
      <h1>{name}</h1>
      <p>{tagline}</p>
    </Title>
    <Profile>
      {email && (
        <ProfileItem>
          <a rel="noopener noreferrer" href={`mailto:${email}`} target="_blank">{email}</a>
          <IconWrapper>
            <IconEnvelope />
          </IconWrapper>
        </ProfileItem>
      )}
      {phone && (
        <ProfileItem>
          <a rel="noopener noreferrer" href={`tel:${phone}`} target="_blank">{phone}</a>
          <IconWrapper>
            <IconPhone />
          </IconWrapper>
        </ProfileItem>
      )}
      {location && (
        <ProfileItem>
          <a rel="noopener noreferrer" href={`https://www.google.com.br/maps/place/${location}`} target="_blank">{location}</a>
          <IconWrapper>
            <IconMapMarker />
          </IconWrapper>
        </ProfileItem>
      )}
      {linkedin && (
        <ProfileItem>
          <a rel="noopener noreferrer" href={`https://linkedin.com/in/${linkedin}`} target="_blank">linkedin.com/in/{linkedin}</a>
          <IconWrapper>
            <IconLinkedin />
          </IconWrapper>
        </ProfileItem>
      )}
      {github && (
        <ProfileItem>
          <a rel="noopener noreferrer" href={`https://github.com/${github}`} target="_blank">github.com/{github}</a>
          <IconWrapper>
            <IconGithub />
          </IconWrapper>
        </ProfileItem>
      )}
    </Profile>
  </Container>
)

Header.propTypes = {
  name: PropTypes.node.isRequired,
  tagline: PropTypes.node,
  description: PropTypes.node,
  email: PropTypes.node,
  phone: PropTypes.node,
  location: PropTypes.node,
  linkedin: PropTypes.node,
  github: PropTypes.node,
}

export default Header
