import Accordion from 'react-bootstrap/Accordion';

function IssueTabs() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>General Questions about service?</Accordion.Header>
              <Accordion.Body>
                 Please email: test@test.com
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Reported issues with gameplay?</Accordion.Header>
        <Accordion.Body>
        Please email: test@test.com
        </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
        <Accordion.Header>Issues seeing your data or insights?</Accordion.Header>
        <Accordion.Body>
          Please call us a: 123.123.1234
        </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
              <Accordion.Header>
              Payment Issues?
        </Accordion.Header>
        <Accordion.Body>
        Please call us a: 123.123.1234
        </Accordion.Body>
      </Accordion.Item>
          <Accordion.Item eventKey="3">
              <Accordion.Header>
              Issue not listed here?
        </Accordion.Header>
        <Accordion.Body>
        Please call us a: 123.123.1234
        </Accordion.Body>
          </Accordion.Item>
        
    </Accordion>
  );
}

export default IssueTabs;