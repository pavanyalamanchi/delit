import {Button, Modal} from 'react-bootstrap'
import {useState} from 'react'
import {setEircode} from '../../../actions'
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

const LocationModal = () => {
  const [show, setShow] = useState(false);
  const [currEircode, setCurrEircode] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const coordinates = useSelector((s) => s);
  const dispatch = useDispatch();

  return(
    <>
    <Button variant="light" onClick={handleShow}>
        Set Location
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter Eircode</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type='text' placeholder='eircode' onChange={(e)=>{
          setCurrEircode(e.target.value)
        }}></input></Modal.Body>
        {console.log(currEircode)}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch(setEircode(currEircode))
            handleShow()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default withRouter(LocationModal)