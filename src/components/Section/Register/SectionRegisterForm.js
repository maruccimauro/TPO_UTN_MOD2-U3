import { Fragment } from "react"
import StandarFieldForm from "../../General/StandarFieldForm";
import { SectionRegisterFormDataFields } from "../../Data/SectionRegisterFormDataFields";

export default function SectionRegisterForm(){
 const dataFields = SectionRegisterFormDataFields;

  let fields = dataFields.map((field) => (
    <StandarFieldForm field={field}></StandarFieldForm>
  ));

  return (
    <Fragment>
      <div className="standardSection">
        <form className="form" name="miform" action="" method="post">
          <h1>¡Registrate ahora!</h1>
          {fields}
          <input type="submit" value="ENVIAR" className="submit" />
        </form>
      </div>
    </Fragment>
  );
}