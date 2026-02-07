import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import drGarzonImage from "@/assets/dr-garzon.png";

const doctor = {
  name: "Dr. Luis A. Garzón",
  specialty: "Anestesiología, Medicina del Dolor y Cuidados Paliativos",
  image: drGarzonImage,
  experience: "20+ años",
  education: "Especialista Certificado",
  certifications: ["ASRA", "IASP", "ACED"],
  rating: 4.9,
  reviews: 456,
  bio: "Médico Anestesiólogo especialista en medicina del dolor y cuidados paliativos. Director médico de Findolor.",
};

export function DoctorsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Director Médico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Especialista de Clase Mundial
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Con más de 20 años de experiencia y formación internacional en las mejores instituciones
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 md:h-auto">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-[center_15%]"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{doctor.rating}</span>
                  <span className="text-xs text-muted-foreground">({doctor.reviews} reseñas)</span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                  </div>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-muted-foreground mb-6">{doctor.bio}</p>

                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold">{doctor.experience}</span>
                      <p className="text-sm text-muted-foreground">de experiencia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold">{doctor.education}</span>
                      <p className="text-sm text-muted-foreground">Formación profesional</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {doctor.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-full font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
