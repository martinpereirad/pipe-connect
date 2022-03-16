import React from "react";

export default function DealsItem({ deals }) {


  return <React.Fragment>

            <tbody>
              <tr>
              <td>{deals.id}</td>
              <td>{deals.title}</td>
              <td>{deals.stage_id}</td>
              <td>{deals.org_id.name}</td>
              </tr>
            </tbody>

        </React.Fragment>

}