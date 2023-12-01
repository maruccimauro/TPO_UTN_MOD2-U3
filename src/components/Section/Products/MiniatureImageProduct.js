import { Fragment } from "react";



export default function MiniatureImageProduct({file}){

    return (
      <Fragment>
        <a href=" #">
          <img
            alt=""
            className="itemPanel"
            src={file}
          ></img>
        </a>
      </Fragment>
    );
}