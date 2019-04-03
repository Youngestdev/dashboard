import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { signIn, signOut } from '../Auth';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

const Profile = styled.span`
  margin-left: 15px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 30px;
  margin-right: 5px;
`;
export default ({ user }) => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      Product List
    </Link>
    <Link className="btn btn-secondary" to="/new-product">
      + Add New
    </Link>
    {!user && <Button onClick={signIn}>Login</Button>}
    {user && (
      <Fragment>
        <Button onClick={signOut} />
        <Profile>
          <ProfilePicture src={user.profile.picture} />
          {user.profile.email}
        </Profile>
      </Fragment>
    )}
  </NavigationBar>
);
