// import { useState } from 'react';
import { Modal, Spinner, Stack } from 'react-bootstrap';
const Loading = (props) => {
  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>

      <Modal
        show={props.show}
        // onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="sm"
        centered
        animation={false}
      >

        <Modal.Body>
          <Stack direction="horizontal" gap={3}>

            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <div className="me-auto h3">Wait...</div>
          </Stack>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default Loading;
