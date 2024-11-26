import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  // Function for navigating to other pages
  const navigateToPage = (url: string) => {
    window.location.href = url; // Navigates to the specified URL
    setVisibility(false); // Hide the menu if necessary
  };

  // Function for opening index.html in a new window
  const openInNewWindow = (url: string) => {
    window.open(url, "_blank", "width=800,height=600"); // Opens in new window/tab with specific size
    setVisibility(false); // Close the menu
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <CustomNavLinkSmall onClick={() => navigateToPage("/about")}>
              <Span>{t("About")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => navigateToPage("/mission")}>
              <Span>{t("Mission")}</Span>
            </CustomNavLinkSmall>
            <CustomNavLinkSmall onClick={() => navigateToPage("/product")}>
              <Span>{t("Product")}</Span>
            </CustomNavLinkSmall>
            {/* Link to open index.html in a new window */}
            <CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => openInNewWindow("/data_slider.html")}
            >
              <Span>
                <Button>{t("Contact")}</Button>
              </Span>
            </CustomNavLinkSmall>
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          {/* Drawer menu items */}
          <CustomNavLinkSmall onClick={() => navigateToPage("/about")}>
            <Span>{t("About")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => navigateToPage("/mission")}>
            <Span>{t("Mission")}</Span>
          </CustomNavLinkSmall>
          <CustomNavLinkSmall onClick={() => navigateToPage("/product")}>
            <Span>{t("Product")}</Span>
          </CustomNavLinkSmall>
          {/* Special link to open index.html in a new window */}
          <CustomNavLinkSmall
            style={{ width: "180px" }}
            onClick={() => openInNewWindow("/data_slider.html")}
          >
            <Span>
              <Button>{t("Contact")}</Button>
            </Span>
          </CustomNavLinkSmall>
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
