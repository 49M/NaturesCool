import React, { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const [inputValue, setInputValue] = useState<number | string>(""); // Store user input
  const [result, setResult] = useState<number | null>(null); // Store calculated result

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setInputValue(value);
    }
  };

  const handleButtonClick = () => {
    if (inputValue) {
      setResult(Number(inputValue) * 20);
    }
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              
              {/* Input field */}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a number"
                style={{
                  display: "block",
                  marginBottom: "1rem",
                  padding: "0.5rem",
                  width: "100%",
                  maxWidth: "300px",
                }}
              />
              
              {/* Button */}
              {button && (
                <Button name="submit" onClick={handleButtonClick}>
                  {t(button)}
                </Button>
              )}

              {/* Result label */}
              {result !== null && (
                <div style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#18216d" }}>
                  Result: {result}
                </div>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);