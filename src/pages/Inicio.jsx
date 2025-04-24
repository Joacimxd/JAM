import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Inicio() {
  const numero = "5259-8123";
  const correo = "correo@gmail.com";
  const facebook = "https://www.facebook.com/";

  const copiar = (texto) => {
    navigator.clipboard
      .writeText(texto)
      .then(() => alert(`${texto} copiado al portapapeles`))
      .catch((err) => console.error("Error al copiar", err));
  };
  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen bg-cover bg-center flex flex-row"
        style={{ backgroundImage: "url('./fondo1.jpeg')" }}
      >
        <div className="sm:basis-1/2 basis-full flex flex-col items-center justify-center">
          <h1 className="font-serif sm:text-8xl text-7xl max-w-100 text-center">
            Jabón Artesanal Mexicano
          </h1>
          <Button text={"Explora nuestra colección."} color={"#a78971"} />
        </div>
        <div className="sm:basis-1/2"></div>
      </div>
      <div
        className="h-screen w-screen bg-cover bg-center flex flex-row"
        style={{ backgroundImage: "url('./fondo2.jpeg')" }}
      >
        <div className="sm:basis-1/2"></div>
        <div className="sm:basis-1/2 basis-full flex flex-col items-center justify-center">
          <div className="max-w-170">
            <h1 className="font-semibold font-[cursive] md:text-5xl text-4xl m-10">
              Productos de calidad.
            </h1>
            <p className="leading-relaxed text-lg font-mono m-10">
              Disfruta de los beneficios de toda clase de jabones cien por
              ciento mexicanos para toda clase de usos.
            </p>
          </div>

          <Button text={"Explora nuestra colección."} color={"#4d623c"} />
        </div>
      </div>

      <section className="min-h-screen bg-[#bbb59f] flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl font-semibold font-[cursive]">
              Todo tipo de productos.
            </h1>
            <p className="leading-relaxed text-lg font-mono">
              Amplia variedad de jabones y productos de limpieza diseñados para
              cubrir todas tus necesidades, desde el cuidado personal hasta la
              limpieza profunda del hogar. Encuentra soluciones eficaces para
              cada superficie, tipo de piel y espacio, con fórmulas de alta
              calidad que garantizan higiene, frescura y protección.
            </p>
          </div>
          <div className="w-full h-[700px] overflow-hidden rounded-xl">
            <img
              src="/fotoPerro.png" // reemplaza con la ruta real
              alt="Artisanal Soaps"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-h-screen flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-[400px] md:h-auto overflow-hidden">
          <img
            src="/fotoBotella.png" // cambia por tu imagen
            alt="Soap"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 w-full bg-[#92755f] flex items-center justify-center p-10">
          <div className="max-w-lg text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-[cursive] font-semibold">
              Para ocasiones especiales.
            </h2>
            <p className="font-mono leading-relaxed">
              Solicita tus jabones hechos a medida, ideales para bodas, baby
              showers, cumpleaños, eventos corporativos y más. Contamos con una
              amplia variedad de figuras, colores y fragancias que se adaptan a
              tu estilo y temática. ¡Sorprende a tus invitados con un detalle
              único, original y totalmente personalizado!
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#ede2d5] min-h-[50vh] flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-[cursive] text-[#5a4638] font-semibold">
            Contactanos
          </h2>
          <p className="text-gray-700 font-mono leading-relaxed">
            Nos encantaria escucharte! Ya sea una orden personalizada o una duda
            de nuestros servicios.
          </p>

          <div className="space-y-4 font-mono text-gray-700">
            <div className="flex items-center justify-center gap-3">
              <FaFacebookF className="text-[#5a4638]" />
              <a
                href="https://facebook.com/tuPagina"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                facebook.com/tuPagina
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-[#5a4638]" />
              <a
                href="mailto:contacto@tusjabones.com"
                className="hover:underline"
              >
                contacto@tusjabones.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaPhoneAlt className="text-[#5a4638]" />
              <span>+52 55 1234 5678</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
