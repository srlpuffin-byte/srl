import flyerPuffinUlm from "@/assets/flyer-puffin-ulm.jpeg";
import flyerCamc from "@/assets/flyer-camc.jpeg";
import flyerServicios from "@/assets/flyer-servicios.jpeg";
import flyerHyundai from "@/assets/flyer-hyundai-r220.jpeg";
import flyerCat320d2 from "@/assets/flyer-cat-320d2.jpeg";
import flyerHelicopteroExec90 from "@/assets/flyer-helicoptero-exec90.jpeg";
import liugong856h from "@/assets/liugong-856h.jpg";
import flyerDjiAgrasT50 from "@/assets/flyer-dji-agras-t50.png";

export type CatalogoItem = {
  id: string;
  nombre: string;
  imagen: string;
  ano?: string;
  estado: string;
  origen?: string;
  medida?: string;
  motor?: string;
  detalles?: string[];
  categoria: "Maquinaria Agrícola" | "Maquinaria Vial" | "Cubiertas" | "Aeronaves" | "Repuestos" | "Servicios";
};

export const catalogo: CatalogoItem[] = [
  {
    id: "dji-agras-t50",
    nombre: "DJI AGRAS T50",
    imagen: flyerDjiAgrasT50,
    estado: "Nuevo",
    origen: "Importación",
    detalles: [
      "Drone agrícola de fumigación de alta eficiencia",
      "Fumigá más hectáreas con tecnología avanzada",
      "Millas ilimitadas — Maximizá tu producción",
      "Servicio personalizado y financiación disponible",
    ],
    categoria: "Aeronaves",
  },
  {
    id: "helicoptero-exec-90",
    nombre: "Helicóptero EXEC 90",
    imagen: flyerHelicopteroExec90,
    estado: "Excelente estado",
    origen: "Importación",
    motor: "Experimental monoplaza/biplaza",
    detalles: [
      "Capacidad: 1 ó 2 personas",
      "Tipo: experimental, monoplaza/biplaza",
      "Listo para volar",
      "Mantenimiento al día",
      "Unidad disponible para importación",
    ],
    categoria: "Aeronaves",
  },
  {
    id: "puffin-ulm",
    nombre: "PUFFIN ULM",
    imagen: flyerPuffinUlm,
    ano: "2023",
    estado: "Operativo",
    origen: "Argentina",
    motor: "Vanguard 35 HP",
    detalles: [
      "Consumo 7 L/H",
      "Crucero 55 KTS (100 Km/H)",
      "50 HR total",
      "Instrumental: velocímetro, altímetro, RPM, horas",
      "Luz pres. aceite, toma 12V y USB",
    ],
    categoria: "Aeronaves",
  },
  {
    id: "camiones-camc",
    nombre: "Camiones CAMC 0KM",
    imagen: flyerCamc,
    estado: "0KM",
    origen: "Importación",
    motor: "MAN · Transmisión ZF",
    detalles: ["Configuraciones 4x2, 6x2, 6x4, 8x4 y 8x4 Volcador"],
    categoria: "Maquinaria Vial",
  },
  {
    id: "servicios-superficies",
    nombre: "Servicios Especializados",
    imagen: flyerServicios,
    estado: "Disponible",
    detalles: [
      "Limpieza y desmalezado de amplias superficies",
      "Movimiento de suelos con maquinaria pesada",
      "Nivelación y preparación para uso productivo",
    ],
    categoria: "Servicios",
  },
  {
    id: "hyundai-r220lc-9s",
    nombre: "Hyundai R220LC-9S",
    imagen: flyerHyundai,
    estado: "Disponible",
    origen: "Importación",
    motor: "Cummins QSB 6.7 / 6BT (150-170 HP)",
    detalles: [
      "Peso operativo: 21.9 - 22.3 t",
      "Capacidad de balde: 1.4 m³",
      "Profundidad máx. de excavación: 6.7 - 6.73 m",
      "Alcance máx.: 9.9 - 10 m",
      "Fuerza de excavación del balde: hasta 145 kN",
    ],
    categoria: "Maquinaria Vial",
  },
  {
    id: "cat-320d2",
    nombre: "CAT 320D2",
    imagen: flyerCat320d2,
    estado: "Excelente estado",
    motor: "Cat C7.1 inyección directa",
    detalles: [
      "Peso: 21.200 - 21.500 kg",
      "Cucharón: 1.0 - 1.4 m³",
      "Modo Eco y gran rendimiento en obra",
    ],
    categoria: "Maquinaria Vial",
  },
  {
    id: "liugong-clg856h",
    nombre: "LIUGONG CLG856H",
    imagen: liugong856h,
    ano: "2024",
    estado: "Muy poco uso",
    detalles: [
      "Cargadora Frontal",
      "Balde 3mts cubico",
      "En venta",
    ],
    categoria: "Maquinaria Vial",
  },
];
