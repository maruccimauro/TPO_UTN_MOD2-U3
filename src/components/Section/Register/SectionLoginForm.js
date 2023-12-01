import { Fragment } from "react";
import StandarFieldForm from "../../General/StandarFieldForm";
import { SectionLoginFormDataFields } from "../../Data/SectionLoginFormDataFields";
export default function SectionLoginForm() {
  const dataFields = SectionLoginFormDataFields;

  let fields = dataFields.map((field) => (
    <StandarFieldForm field={field}></StandarFieldForm>
  ));

  return (
    <Fragment>
      <div className="standardSection">
        <form className="form" name="miform" action="" method="post">
          <h1>No esperes para ingresar</h1>
          {fields}
          <input type="submit" value="ENVIAR" className="submit" />
        </form>
      </div>
    </Fragment>
  );
}
