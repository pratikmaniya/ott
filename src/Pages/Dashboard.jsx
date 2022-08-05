import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { Container, Table } from "react-bootstrap";

function Dashboard() {
    const alert = useAlert(),
        [user, setUser] = useState({
            id: "",
            firstName: "",
            lastName: "",
            email: ""
        })
    useEffect(() => {
        fetch(`http://localhost:5000/users/${sessionStorage.getItem("id")}`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setUser(json.body[0]);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
    }, [])
    return (
        <div className="UserDetails">
            <Container className="my-3">
                {
                    user
                        ?
                        <Table borderless variant="dark" className="text-left">
                            <tr>
                                <td className="border-right">First Name</td>
                                <td>{user.firstName}</td>
                            </tr>
                            <tr>
                                <td className="border-right">Last Name</td>
                                <td>{user.lastName}</td>
                            </tr>
                            <tr>
                                <td className="border-right">Email</td>
                                <td>{user.email}</td>
                            </tr>
                        </Table>
                        :
                        <h5 className='text-secondary bg-light p-3'>No Content Found</h5>
                }
            </Container>
        </div>
    );
}

export default Dashboard;
