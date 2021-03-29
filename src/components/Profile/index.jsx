import React from "react"
import { Grid } from "semantic-ui-react"

import { ProfileAvatar, SocialIcon } from "./styles"
import ProfileImage from "../../assets/images/profile-avatar.jpg"

export default () => {
  return (
    <Grid centered>
      <Grid.Row>
        <ProfileAvatar alt="Rafa Garrido" src={ProfileImage} />
      </Grid.Row>
      <Grid.Row>
        <h2>Rafa Garrido </h2>
      </Grid.Row>
      <Grid.Row>
        <p>Sotfware developer</p>
      </Grid.Row>
      <Grid.Row className="socialIcons">
        <SocialIcon name="mail" />
        <SocialIcon name="facebook official" />
        <SocialIcon name="github" />
        <SocialIcon name="linkedin" />
        <SocialIcon name="instagram" />
      </Grid.Row>
    </Grid>
  )
}
