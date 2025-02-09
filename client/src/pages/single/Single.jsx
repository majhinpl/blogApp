import React from "react";
import { RiDeleteBin5Line, RiEditBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://media.istockphoto.com/id/1345912457/photo/financial-stock-market-graph-selective-focus.jpg?s=612x612&w=is&k=20&c=dCnoMBxvdHQT9aUhVxiApN6w7BgGer6uXZe3LdPlnNg="
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/create?edit=2`}>
              <img src={<RiEditBoxLine />} alt="" />
            </Link>
            <img src={<RiDeleteBin5Line />} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque veniam
          ex cumque fugit optio eaque.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsum!
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus autem adipisci quod odit, repellat hic beatae nemo
            totam velit, tenetur optio cumque vitae obcaecati accusantium?
            Ipsum, praesentium aliquam sint sunt ad itaque non modi quam.
            Praesentium cumque tenetur quasi voluptatem doloribus, ad vel
            repellat quae enim officiis nulla repellendus possimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deleniti eveniet reprehenderit modi eaque eum sint inventore odio
            ullam, iure quod qui assumenda illum recusandae, quaerat incidunt
            similique repudiandae esse pariatur, hic voluptatem. Nulla,
            temporibus! Harum dolores quisquam a sunt similique officiis
            voluptates unde dicta quo sed consectetur tempora pariatur
            doloremque ad blanditiis voluptatibus, quasi perferendis nisi rem
            quaerat ullam cupiditate aut dignissimos assumenda. Nemo, dolores
            qui? Dicta veniam quis fuga expedita, earum ipsum vel aspernatur
            labore exercitationem iusto consequuntur debitis officia neque porro
            a eaque repudiandae, deserunt necessitatibus ipsa quos et? Aliquam
            excepturi odio ratione atque iusto, commodi inventore?
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
