import { Fragment, useState } from "react";
import MiniatureImageProduct from "./MiniatureImageProduct";
import { DataSectionProductsProduct } from "../../Data/DataSectionProductsProduct";
import Image from "../../General/Image";



export default function SectionProductPanel() {
  const [sell, setSell] = useState(false);
   console.log("hola mundo");
  const { filesData, leyend, aboutProduct, productPropsData } =
    DataSectionProductsProduct;
  const [selectImage, setSelectImage] = useState(filesData[0]);

  const files = filesData.map((file, index) => (
    <MiniatureImageProduct
      key={index}
      file={file}
      onMouseOver={() => {
        setSelectImage(file);
      }}
    ></MiniatureImageProduct>
  ));

  const productProps = productPropsData.map((productProp, index) => (
    <p key={index}  className="productPropItem">
      <span className="productPanelProp">{productProp[0]} </span>:{" "}
      {productProp[1]}
    </p>
  ));

  let sellProduct = sell ? <p>Gracias, por su compra.</p> : "";
  return (
    <Fragment>
      <section className="standardSection productSection">
        <div className="productPanel">
          <div className="imgPanel">
            <div  className="leftPanel">
              {files}
            </div>
            <div  className="rightPanel">
              <Image src={selectImage}></Image>
            </div>
          </div>

          <div className="informationPanel">
            <div className="topPanel">{leyend}</div>
            <input
              type="submit"
              value="COMPRAR"
              onClick={() => {
                setSell(true);
              }}
              className="submit"
            />
            {sellProduct}
            <div className="separatorPanel"></div>
            <div className="middlePanel">{productProps}</div>
            <div className="separatorPanel"></div>
            <div className="bottomPanel">{aboutProduct}</div>
          </div>
          <div className="othersPanel"></div>
        </div>
      </section>
    </Fragment>
  );
}
