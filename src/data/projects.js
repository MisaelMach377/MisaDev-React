import publitechLogo from "../assets/projects/LogoPublitechBlancoFondo.png";
import veconnectLogo from "../assets/projects/ConnectedLogo.png";
import resinandoLogo from "../assets/projects/ResinandoFoto.png";
import serviciosStsLogo from "../assets/projects/Logo_ServiciosSTS.jpg";
import SitioWebserviciosStsLogo from "../assets/projects/Logo_ServiciosSTS.jpg";


import publitech1 from "../assets/projects/publitech/Publitech1.jpg";
import publitech2 from "../assets/projects/publitech/Publitech2.jpg";
import publitech3 from "../assets/projects/publitech/Publitech3.jpg";
import publitech4 from "../assets/projects/publitech/Publitech4.jpg";
import publitech5 from "../assets/projects/publitech/Publitech5.jpg";

import resinando1 from "../assets/projects/resinando/Resinando1.jpg";
import resinando2 from "../assets/projects/resinando/Resinando2.jpg";
import resinando3 from "../assets/projects/resinando/Resinando3.jpg";
import resinando4 from "../assets/projects/resinando/Resinando4.jpg";
import resinando5 from "../assets/projects/resinando/Resinando5.jpg";
import resinando6 from "../assets/projects/resinando/Resinando6.jpg";
import resinando7 from "../assets/projects/resinando/Resinando7.jpg";
import resinando8 from "../assets/projects/resinando/Resinando8.jpg";
import resinando9 from "../assets/projects/resinando/Resinando9.jpg";
import resinando10 from "../assets/projects/resinando/Resinando10.jpg";
import resinando11 from "../assets/projects/resinando/Resinando11.jpg";
import resinando12 from "../assets/projects/resinando/Resinando12.jpg";

import veconnect1 from "../assets/projects/veconnect/VeConnect1.jpg";
import veconnect2 from "../assets/projects/veconnect/VeConnect2.jpg";
import veconnect3 from "../assets/projects/veconnect/VeConnect3.jpg";
import veconnect3salas from "../assets/projects/veconnect/VeConnect3_salas.jpg";
import veconnect4tickets from "../assets/projects/veconnect/VeConnect4_tickets.jpg";
import veconnect5auditorias from "../assets/projects/veconnect/VeConnect5_auditorias.jpg";
import veconnect6terrestre from "../assets/projects/veconnect/VeConnect6_TerrestreMonitoreo.jpg";
import veconnect7eventos from "../assets/projects/veconnect/VeConnect7_Eventos.jpg";
import veconnect8itinerario from "../assets/projects/veconnect/VeConnect8_Itinerario.jpg";
import veconnect9tracking from "../assets/projects/veconnect/VeConnect9_Tracking.jpg";
import veconnect9detalles from "../assets/projects/veconnect/VeConnect9_DetallesTracking.jpg";
import veconnect10dhl from "../assets/projects/veconnect/VeConnect10_EnvioDHL.jpg";
import veconnect11rastreo from "../assets/projects/veconnect/VeConnect11_RastreoDHL.jpg";
import veconnect12vebot from "../assets/projects/veconnect/VeConnect12_VEBOT.jpg";
import veconnect13wtsp from "../assets/projects/veconnect/VeConnect13_WTSPBOT.jpg";
import veconnect14manuales from "../assets/projects/veconnect/VeConnect14_Manuales.jpg";
import veconnect15cliente from "../assets/projects/veconnect/VeConnect15_CLIENTE.jpg";

import sts1 from "../assets/projects/portalserviciossts/PORTAL_Login.jpg";
import sts2 from "../assets/projects/portalserviciossts/Portal_Main.jpg";
import sts3 from "../assets/projects/portalserviciossts/PORTAL_GPS.jpg";
import sts4 from "../assets/projects/portalserviciossts/PORTAL_Historial.jpg";
import sts5 from "../assets/projects/portalserviciossts/PORTAL_GEOCERCAS.jpg";
import sts6 from "../assets/projects/portalserviciossts/PORTAL_ALARMAS.jpg";
import sts7 from "../assets/projects/portalserviciossts/GESTION_PERMISOS_PORTAL.jpg";


import np1 from "../assets/projects/sitiowebsts/Main1.jpg";
import np2 from "../assets/projects/sitiowebsts/YaeresCliente.jpg";
import np3 from "../assets/projects/sitiowebsts/TrabajarConNosotros.jpg";
import np4 from "../assets/projects/sitiowebsts/CentroControl360_1.jpg";
import np5 from "../assets/projects/sitiowebsts/CentroControl360_2.jpg";



export const projects = [
  {
    key: "publitech",
    category: "Web App",
    title: "Publitech",
    description:
      "Solución integral publicitaria con flujo de solicitud tipo e-commerce y cierre vía WhatsApp.",
    techs: ["React", "JavaScript"],
    thumbnail: publitechLogo,
    thumbnailBg: "bg-white",
    liveUrl: "https://corpublitech.com/index.html",
    gallery: [publitech1, publitech2, publitech3, publitech4, publitech5],
  },
  {
    key: "veconnect",
    category: "Sistema Logístico",
    badge: "Enterprise",
    title: "VeConnect",
    description:
      "Plataforma integral para el sector marítimo. Gestión operativa y administración de servicios diseñada para optimizar procesos en tiempo real.",
    techs: ["C#", "SQL Server", "Azure"],
    thumbnail: veconnectLogo,
thumbnailBg: "bg-[#31527a]",
    gallery: [
      veconnect1, veconnect2, veconnect3, veconnect3salas, veconnect4tickets,
      veconnect5auditorias, veconnect6terrestre, veconnect7eventos,
      veconnect8itinerario, veconnect9tracking, veconnect9detalles,
      veconnect10dhl, veconnect11rastreo, veconnect12vebot, veconnect13wtsp,
      veconnect14manuales, veconnect15cliente,
    ],
  },
  {
    key: "resinando",
    category: "ERP & E-commerce",
    badge: "Stock Control",
    title: "Resinando",
    description:
      "Solución integral para la gestión de productos y mantenimiento técnico, unificando el control administrativo con una plataforma de ventas digital escalable.",
    techs: ["Java", "MySQL"],
    thumbnail: resinandoLogo,
thumbnailBg: "bg-[#fdf0e2]",
    gallery: [
      resinando1, resinando2, resinando3, resinando4, resinando5, resinando6,
      resinando7, resinando8, resinando9, resinando10, resinando11, resinando12,
    ],
  },
  {
    key: "serviciossts",
    category: "Portal Terrestre",
    badge: "Enterprise",
    title: "Servicios STS",
    description:
      "Plataforma inteligente para la gestión y monitoreo terrestre en tiempo real, permitiendo controlar rutas, unidades, eventos y operaciones logísticas desde un único entorno centralizado.",
    techs: ["React", "C#", "Power Automate"],
    thumbnail: serviciosStsLogo,
    thumbnailBg: "bg-white",
   liveUrl: "https://sistemasts.netlify.app/",    gallery: [sts1, sts2, sts3,sts4,sts5,sts6,sts7],
  },
   {
    key: "sitiowebsts",
    category: "Web App",
    badge: "Enterprise",
    title: "Sitio Web Servicios STS",
    description:
      "Plataforma de monitoreo logístico en tiempo real que centraliza telemetría, GPS y eventos operativos, con visibilidad total sobre rutas y unidades las 24 horas.",
    techs: ["C#", "React", "Power Automate", "PostgreSQL"],
    thumbnail: SitioWebserviciosStsLogo,
    thumbnailBg: "bg-white",
    liveUrl: "https://servicios-sts.netlify.app/",
    gallery: [np1, np2, np3, np4, np5],
  },
];