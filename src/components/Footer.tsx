import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
const logo = "/images/findolor-logo.webp";

export function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Findolor"
            className="w-auto mb-6 brightness-200"
            style={{ height: '100px', width: '143px' }}
            />
            <p className="text-white/80 leading-relaxed max-w-md mb-6">
              Centro médico especializado en el manejo del dolor crónico y
              cuidados paliativos. Más de 20 años de experiencia brindando
              atención integral y personalizada en Bogotá.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/FinDolorSAS/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fin.dolor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/findolor-s-a-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+573186912799"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>318 691 2799</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+576016736707"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>601 673 6707</span>
                </a>
              </li>
              <li>
              <a
                  href="mailto:administracion@findolor.com"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>administracion@findolor.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p>Carrera 16 # 97-46</p>
                    <p>Edificio Torre 97, Torre 2</p>
                    <p>Consultorios 705-706</p>
                    <p className="mt-1">Bogotá, Colombia</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col items-center gap-4 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Findolor. Todos los derechos reservados.
          </p>
          <p className="text-white/50 text-xs max-w-md">
            Los resultados del tratamiento pueden variar según las condiciones individuales de cada paciente.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://www.findolor.com/politica-de-uso-de-contenidos-pagina-web/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              Política de uso de contenidos
            </a>
            <a
              href="https://www.findolor.com/manual-de-politicas-de-tratamiento/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              Políticas de tratamiento
            </a>
          </div>
        </div>
      </div>
      <script>
function sendHeight() {
  const height = document.documentElement.scrollHeight;
  window.parent.postMessage(
    { height: height },
    "*"
  );
}

window.addEventListener("load", sendHeight);
window.addEventListener("resize", sendHeight);
setInterval(sendHeight, 500);
</script>
    </footer>
  );
}
