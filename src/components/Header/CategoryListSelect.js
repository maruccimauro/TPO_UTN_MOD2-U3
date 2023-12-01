import { Fragment } from "react";


export default function CatergoryListSelect(){
const departmentOptions = [
  "Todos",
  "Artes y Manualidades",
  "Automotriz",
  "Bebé",
  "Belleza y Cuidado Personal",
  "Libros",
  "Moda Niños",
  "Computadoras",
  "Ofertas",
  "Música Digital",
  "Electrónicos",
  "Moda Niñas",
  "Salud y Hogar",
  "Hogar y Cocina",
  "Industrial y Científico",
  "Tienda Kindle",
  "Equipaje",
  "Moda Hombres",
  "Películas y TV",
  "Música, CDs y Vinilos",
  "Suministros para Mascotas",
  "Prime Video",
  "Software",
  "Deportes y Aire Libre",
  "Herramientas y Mejoras para el Hogar",
  "Juguetes y Juegos",
  "Videojuegos",
  "Moda Mujeres",
];

const items = departmentOptions.map((item) => <option className="departmentOptions"> ➡️{item} </option>);

return(
    <Fragment>
        {items}
    </Fragment>
)

}

