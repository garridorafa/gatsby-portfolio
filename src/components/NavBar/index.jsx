import { Link } from "gatsby"
import React, { useState } from "react"
import { Button, List, Menu, Sidebar } from "semantic-ui-react"

export default () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button className="MenuMobile" onClick={() => setVisible(!visible)}>
        <List.Icon name="bars" size="big" />
      </Button>
      <Sidebar
        animation="overlay"
        as={Menu}
        className="SidebarContent"
        direction="top"
        icon="labeled"
        vertical
        visible={visible}
        width="wide"
      >
        <Button
          className="MenuMobileSidebar"
          onClick={() => setVisible(!visible)}
        >
          <List.Icon verticalAlign="middle" name="close" size="large" />
        </Button>
        <List>
          <List.Item>
            <Link to="/">Rafael Garrido</Link>
          </List.Item>
          {/* <List.Item>
            <Link to="#">Skills</Link>
          </List.Item>
          <List.Item>
            <Link to="#">Projects</Link>
          </List.Item>
          <List.Item>
            <Link to="#">Resume</Link>
          </List.Item>
          <List.Item>
            <Link to="#">Contact</Link>
          </List.Item> */}
        </List>
      </Sidebar>
    </>
  )
}
