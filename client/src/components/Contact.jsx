import React from "react";
import { Col, Container, Row, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { BiMobile } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Techinfo YT Pizza Shop</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning">--- Contact Details ---</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-457894</td>
                </tr>
                <tr>
                  <td>
                    <BiMobile />
                  </td>
                  <td>Call</td>
                  <td>1245635835</td>
                </tr>
                <tr>
                  <td>
                    <MdEmail />
                  </td>
                  <td>E-mail</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src="images/farmhouse.jpg" style={{width:'100%', height:'100%'}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
