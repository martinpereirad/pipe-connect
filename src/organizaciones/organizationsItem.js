import React from "react";

export default function OrganizationsItem({ organizations }) {


  return <React.Fragment>

            <tbody>
              <tr>
              <td>{organizations.company_id}</td>
              <td>{organizations.name}</td>
              <td>{organizations.people_count}</td>
              </tr>
            </tbody>

        </React.Fragment>

}