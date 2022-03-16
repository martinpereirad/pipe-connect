import DealsItem from './dealsItem';
import axios from 'axios';
import { useState, useEffect} from "react";


export default function DealsList (props) {
    const [deals, setDeals] = useState([]); //array vacio
    const [data, setData] = useState(null);
    const [url, setUrl] = useState("https://vates3.pipedrive.com/api/v1/deals?api_token=4fbaa143fa595f5118f153a277b8d47f62277699");
    const [message, setMessage] = useState(null);
    useEffect( () => {

        (async () => {

            const Response = await axios.get(`${url}`)
                .catch(e => {
                  setDeals([]);
                });


            if (Response && Response.status === 200) {
                const {data} = Response.data;
                setData(data);
                setDeals([
                  ...data
                ])
                setMessage("Conexion Exitosa");
                console.log("conexion: ",message);
                console.log("datos que trae la url: ", deals)


            } else {
                setData(null);
                setDeals([]);
                setMessage("Fallo la conexion")
                console.log("conexion: ", message)
            }
        })();


    }, [url]);


      return <div>
       <table border={5}>
         <thead>
           <tr>
             <th>Id</th>
             <th>Nombre</th>
             <th>Estado de trato</th>
             <th>Nombre Empresa</th>
           </tr>
         </thead>
         {deals.map(p => < DealsItem key={p.id} deals={p}/>)}
       </table>

    </div>



}