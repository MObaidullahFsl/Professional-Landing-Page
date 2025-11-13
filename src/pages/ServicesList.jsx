import React from 'react';
import list from "../data/services.json";
import { useNavigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

function ServicesList() {
    const nav = useNavigate();
  return (
    <>
         <section className="listabt srvl">
                  <div className="titleabt">Services List</div>
                  <div className="listText">
                    <FadeIn>
                        {list.map((s,i)=>{
                            return <li className='srvList' onClick={()=>{nav(`/services/${i+1}`)}}>
                                {list[i].name}
                            </li>
                        })}
                    </FadeIn>
                  </div>
                </section>
    </>
  )
}

export default ServicesList