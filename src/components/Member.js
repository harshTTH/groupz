import React from 'react';
import PropTypes from 'prop-types';
import {Card,Image,Label,Icon} from 'semantic-ui-react';
import gravatar from 'gravatar';

const Member = ({name,email,status}) => {
  const message = status ? "Online" : "Offline";
  const color = status ? "green" : "red";
  return(
    <Card>
        <Card.Content>
          <Card.Header>
            <Image avatar style={{"marginRight":"5px"}} src={gravatar.url(email,{d:'mm'})}/>
            <span>{name}</span>
            <Label size="large" className="right floated">
              <Icon name="circle" style={{"color":color}}/>
              {message}
            </Label>
          </Card.Header>
        </Card.Content>
    </Card>
  );
};

Member.propTypes = {
  name:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  status:PropTypes.bool.isRequired
}
export default Member;
