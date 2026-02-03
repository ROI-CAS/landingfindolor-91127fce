import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import drGarzonImage from "@/assets/dr-garzon.png";

const doctors = [
  {
    name: "Dr. Luis A. Garzón",
    specialty: "Anestesiología, Medicina del Dolor y Cuidados Paliativos",
    image: drGarzonImage,
    experience: "20+ años",
    education: "Especialista Certificado",
    certifications: ["ASRA", "IASP", "ACED"],
    rating: 4.9,
    reviews: 456,
    bio: "Médico Anestesiólogo especialista en medicina del dolor y cuidados paliativos. Director médico de Findolor.",
  },
  {
    name: "Dra. María Elena Ruiz",
    specialty: "Neurología y Cefaleas",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    experience: "18 años",
    education: "Universidad del Rosario",
    certifications: ["AAN", "IHS", "ACN"],
    rating: 4.8,
    reviews: 287,
    bio: "Experta en migrañas crónicas y dolor neuropático facial. Pionera en toxina botulínica.",
  },
  {
    name: "Dr. Andrés Jiménez",
    specialty: "Medicina Física y Rehabilitación",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    experience: "15 años",
    education: "Pontificia Universidad Javeriana",
    certifications: ["AAPMR", "ISPRM"],
    rating: 4.9,
    reviews: 198,
    bio: "Especializado en rehabilitación post-quirúrgica y manejo de dolor musculoesquelético.",
  },
];

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
            Equipo Médico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Especialistas de Clase Mundial
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestro equipo está conformado por los mejores profesionales en medicina 
            del dolor de Colombia, con formación internacional y años de experiencia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className={`w-full h-64 object-cover ${index === 0 ? 'object-[center_15%]' : 'object-top'}`}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                    <span className="text-xs text-muted-foreground">({doctor.reviews})</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{doctor.name}</h3>
                      <p className="text-primary text-sm font-medium">{doctor.specialty}</p>
                    </div>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{doctor.bio}</p>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{doctor.experience} de experiencia</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{doctor.education}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {doctor.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
