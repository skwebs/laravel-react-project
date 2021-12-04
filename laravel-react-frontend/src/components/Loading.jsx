import { Spinner, Stack } from 'react-bootstrap';

const Loading = (props) => {
  const loadingWrapper = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    zIndex: 1028,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const loadingInner = {
    padding: '10px',
    borderRadius: '0.25rem',
    background: '#fff'
  }
  return (
    <>{props.show && (
      <div style={loadingWrapper} className={`loading-container`}>
        <div style={loadingInner} className="loading-inner">
          <Stack direction="horizontal" gap={3}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <div className="me-auto h3">Wait ...</div>
          </Stack>
        </div>
      </div>
    )}
    </>
  );
};
export default Loading;
