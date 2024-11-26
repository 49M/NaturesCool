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

  const MenuItem = () => {
    const navigateToPage = (url: string) => {
      window.open(url, "_blank"); // Opens the URL in a new tab
      setVisibility(false); // Hide the menu if necessary
    };

  return (
    <>
      <CustomNavLinkSmall onClick={() => navigateToPage("/about")}>
        <Span>{t("About")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => navigateToPage("/mission")}>
        <Span>{t("Mission")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => navigateToPage("/product")}>
        <Span>{t("Product")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall
        style={{ width: "180px" }}
        onClick={() => navigateToPage("/index.html")} // Navigate to calculate.html
      >
        <Span>
          <Button>{t("Contact")}</Button>
        </Span>
      </CustomNavLinkSmall>
    </>
  );
};


  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
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
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
