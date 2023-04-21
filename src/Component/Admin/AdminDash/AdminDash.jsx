import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
// import Sonnet from '../../components/Sonnet';
import './AdminDashcss.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVendor } from '../../redux/Vendor/Action';
import { getUsers } from '../../redux/Login/Action';
function AdminDash() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getVendor());
    dispatch(getUsers());
  },[])
          // userInfo
  const userdata = useSelector(state =>state.user)
  console.log(userdata);
  const uservalue = userdata.users.data;
          //vendorInfo
  const vendordata = useSelector(state =>state.vendor)
  const vendorvalue = vendordata.vendors.data;
  console.log(vendordata);
  return (
    <>
    <div className='container py-3 dashwrapper'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Vendors</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four">Tab 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="five">Tab 5</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
             <div className='userwrapper'>
              <h1>USERS</h1>
              <table className="table">
                <thead className='thead-dark'>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                
                </tr>
                </thead>
                <tbody>
                {
                  uservalue?.map((val,ind)=>{
                    return (
                      <tr>
                        <td>{++ind}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
             </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div className='vendorwrapper'>
              <h1>VENDORS</h1>
              <table className="table">
                <thead className='thead-dark'>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
              
                </tr>
                </thead>
                <tbody>
                {
                  vendorvalue?.map((val,ind)=>{
                    return (
                      <tr>
                        <td>{++ind}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                     
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
             </div>
            </Tab.Pane>
              <Tab.Pane eventKey="third">
              <h2>Two</h2>
            </Tab.Pane>  
             <Tab.Pane eventKey="four">
              <h2>Two</h2>
            </Tab.Pane> 
              <Tab.Pane eventKey="five">
              <h2>Two</h2>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>    </div>
    </>
  );
}

export default AdminDash;