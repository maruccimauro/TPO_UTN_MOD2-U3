import { Fragment, useState } from "react";
import MiniatureImageProduct from "./MiniatureImageProduct";



export default function SectionProductPanel(){
  const[sell,setSell] = useState(false);
    const filesData = [
      "images/products/product1_1.jpg",
      "images/products/product1_2.jpg",
      "images/products/product1_3.jpg",
    ];

    const leyend =
      "JOYYPOP Orange Balloons 130 Pcs Orange Balloon Garland Kit Different Sizes 5 10 12 18 Inch Orange Balloons for autumn harvest Halloween Thanksgiving birthday";


    const aboutProduct = `About this item :
Orange Balloons- Elevate your party decorations with these stunning orange balloons. Made with high-quality latex, these balloons are thicker and less prone to popping or exploding, ensuring they last for days in the air.
130 Pcs Garland Kit- This kit includes a total of 130 orange balloons in different sizes (5", 10", 12", and 18"), along with balloon garland accessories. A sufficient quantity and four different sizes will meet your needs for different themed parties.
Suitable for Any Occasion- These orange balloons are perfect for autumn harvest, Halloween, Thanksgiving, birthday, baby showerparty decorations.
Easy to Use- We provide ribbon to help you decorate your party in a short time. It is recommended to inflate them with an electric balloon pump, saving you a lot of time to enjoy the party.
Warm and Sweet Reminders- There may be some latex odor when the balloon is removed. You can dry it in a cool and ventilated place. Please do not inflate the balloons more than 90%, or rub against overheated and sharp objects to avoid sudden popping. If you have any questions about your product, please feel free to contact us at any time.`;
   
    const productPropsData = [
      ["Occasion", "Baby ,Shower, Birthday ,HalloweenThanksgiving"],
      ["Color", "Orange"],
      ["Included Components", "Balloon Arch"],
      ["Material", "Rubber"],
      ["Unit Count", 1.0],
      ["Brand", "JOYYPOP"],
    ];

    const files = filesData.map(
        (file)=> (<MiniatureImageProduct file={file}></MiniatureImageProduct>)
    )

    const productProps = productPropsData.map((productProp) => (
      <p class="productPropItem">
        <span class="productPanelProp">{productProp[0]} </span>:{" "} {productProp[1]}
      </p>
    ));
  

    
    

    let sellProduct = sell?<p>Gracias, por su compra.</p>:"";
    return (
      <Fragment>
        <div className="standardSection productSection">
          <div className="productPanel">
            <div className="imgPanel">
              <div className="leftPanel">{files}</div>
              <div className="rightPanel">
                <img alt="" src="images/products/product1_1.jpg"></img>
              </div>
            </div>

            <div className="informationPanel">
              <div className="topPanel">{leyend}</div>
              <input type="submit" value="COMPRAR" onClick={()=>{setSell(true)}} className="submit" />
              {sellProduct}
              <div className="separatorPanel"></div>
              <div className="middlePanel">{productProps}</div>
              <div className="separatorPanel"></div>
              <div className="bottomPanel">{aboutProduct}</div>
            </div>
            <div className="othersPanel"></div>
          </div>
        </div>
      </Fragment>
    );

}