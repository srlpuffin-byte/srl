export type ServiceItem = {
  title: string;
  description: string;
  items: string[];
};

export const servicesAmbiental: ServiceItem = {
  title: "Ingeniería Ambiental y Gestión del Territorio",
  description:
    "Brindamos soluciones integrales para la intervención y acondicionamiento de terrenos, bajo criterios de eficiencia operativa y cumplimiento normativo ambiental.",
  items: [
    "Desmonte controlado con criterios de sostenibilidad",
    "Servicios post-desmonte y tratamiento de superficie",
    "Limpieza y mantenimiento de perímetros en zonas de monte",
    "Desmalezado de grandes extensiones",
    "Gestión de biomasa residual",
    "Apertura y acondicionamiento de caminos rurales",
    "Rolado selectivo y desarrollo de sistemas silvopastoriles mediante implantación de pasturas",
  ],
};

export const servicesMovimiento: ServiceItem = {
  title: "Movimiento de Suelo y Desarrollo de Infraestructura",
  description:
    "Ejecutamos obras de movimiento de suelo y preparación de terrenos para desarrollos productivos, urbanos e industriales.",
  items: [
    "Operación con maquinaria pesada de última generación",
    "Nivelación y compactación de suelos",
    "Desarrollo urbanístico y preparación de lotes",
    "Trazado y apertura de calles",
    "Logística y traslado de áridos (arena, piedra)",
    "Logística de tierra y rellenos",
  ],
};

export const servicesTecnicos: ServiceItem = {
  title: "Servicios Técnicos Especializados",
  description:
    "Intervenciones en entornos de alta complejidad técnica y operativa.",
  items: [
    "Perforación en roca",
    "Voladuras controladas y servicio con explosivos",
    "Obras en condiciones exigentes",
    "Servicios tercerizados para empresas (ej: LEVSA)",
  ],
};

export const servicesAerea: ServiceItem = {
  title: "Seguridad Operativa y Tecnología Aérea",
  description:
    "Incorporación de tecnología aérea para optimizar control, seguridad y monitoreo de grandes extensiones.",
  items: [
    "Supervisión aérea de campos y obras",
    "Control perimetral",
    "Integración de aeronaves en operaciones",
  ],
};

export const allServices: ServiceItem[] = [
  servicesAmbiental,
  servicesMovimiento,
  servicesTecnicos,
  servicesAerea,
];

export type Producto = {
  nombre: string;
  origen: string;
  estado: string;
  aplicacion: string;
  disponibilidad: string;
  categoria: "Maquinaria" | "Repuestos e Insumos" | "Cubiertas";
};

export const productosImportacion: Producto[] = [
  {
    nombre: "Tractor John Deere 6110D",
    origen: "USA",
    estado: "Nuevo / Usado certificado",
    aplicacion: "Agricultura intensiva",
    disponibilidad: "Bajo pedido",
    categoria: "Maquinaria",
  },
  {
    nombre: "Cosechadora Case IH Axial-Flow",
    origen: "USA",
    estado: "Usado certificado",
    aplicacion: "Cosecha de granos",
    disponibilidad: "Bajo pedido",
    categoria: "Maquinaria",
  },
  {
    nombre: "Motoniveladora Caterpillar 140K",
    origen: "USA",
    estado: "Usado certificado",
    aplicacion: "Obras viales y nivelación",
    disponibilidad: "Bajo pedido",
    categoria: "Maquinaria",
  },
  {
    nombre: "Retroexcavadora JCB 3CX",
    origen: "Reino Unido",
    estado: "Nueva",
    aplicacion: "Construcción y movimiento de suelos",
    disponibilidad: "Bajo pedido",
    categoria: "Maquinaria",
  },
  {
    nombre: "Componentes hidráulicos para maquinaria agrícola",
    origen: "Italia / Alemania",
    estado: "Nuevo (OEM)",
    aplicacion: "Repuestos para tractores y cosechadoras",
    disponibilidad: "Stock rotativo",
    categoria: "Repuestos e Insumos",
  },
  {
    nombre: "Repuestos industriales — línea automotriz",
    origen: "Brasil / China",
    estado: "Nuevo",
    aplicacion: "Industria automotriz y vial",
    disponibilidad: "Bajo pedido",
    categoria: "Repuestos e Insumos",
  },
  {
    nombre: "Cubiertas agrícolas radiales",
    origen: "India / Brasil",
    estado: "Nueva",
    aplicacion: "Tractores y maquinaria agrícola",
    disponibilidad: "Bajo pedido",
    categoria: "Cubiertas",
  },
  {
    nombre: "Cubiertas viales — maquinaria pesada",
    origen: "China",
    estado: "Nueva",
    aplicacion: "Motoniveladoras, cargadoras frontales",
    disponibilidad: "Bajo pedido",
    categoria: "Cubiertas",
  },
  {
    nombre: "Cubiertas para transporte pesado (camiones)",
    origen: "Brasil / Tailandia",
    estado: "Nueva",
    aplicacion: "Camiones de carga y logística",
    disponibilidad: "Stock rotativo",
    categoria: "Cubiertas",
  },
];

export type Exportacion = {
  tipo: string;
  aplicacion: string;
  capacidad: string;
  mercados: string;
  categoria: "Productos" | "Servicios";
};

export const exportaciones: Exportacion[] = [
  {
    tipo: "Materias primas agroindustriales",
    aplicacion: "Industria alimenticia y procesamiento",
    capacidad: "Volúmenes contenedorizados y a granel",
    mercados: "Latinoamérica, Europa, Asia",
    categoria: "Productos",
  },
  {
    tipo: "Equipos usados reacondicionados",
    aplicacion: "Sector agrícola y vial",
    capacidad: "Bajo demanda — preparación bajo estándares internacionales",
    mercados: "Latinoamérica y África",
    categoria: "Productos",
  },
  {
    tipo: "Insumos agroindustriales",
    aplicacion: "Producción primaria y agroindustria",
    capacidad: "Provisión continua bajo contrato",
    mercados: "Mercosur y Latinoamérica",
    categoria: "Productos",
  },
  {
    tipo: "Servicios técnicos especializados",
    aplicacion: "Perforación, obras en roca, intervenciones complejas",
    capacidad: "Equipos itinerantes con personal calificado",
    mercados: "Latinoamérica",
    categoria: "Servicios",
  },
  {
    tipo: "Movimiento de suelo y operación",
    aplicacion: "Obras viales, mineras y de infraestructura",
    capacidad: "Maquinaria pesada y logística asociada",
    mercados: "Región andina y Cono Sur",
    categoria: "Servicios",
  },
  {
    tipo: "Asistencia operativa internacional",
    aplicacion: "Soporte a empresas en proyectos en el exterior",
    capacidad: "Equipos técnicos desplazables",
    mercados: "Latinoamérica",
    categoria: "Servicios",
  },
];

export const sectores = [
  "Agroindustrial",
  "Construcción y Vial",
  "Logística",
  "Industria",
];
