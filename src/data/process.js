import imageAutomatizacion from '../assets/images/img-automatizacion.svg';
import imagePersonalizacion from '../assets/images/img-personalizacion.svg';
import imageInforme from '../assets/images/img-informe.svg';
import imageSoporte from '../assets/images/img-soporte.svg';

export const processes = [
    {
        id: 1,
        icon: "fa-solid fa-code-branch",
        title: "Automatización",
        text: "Automatiza tus procesos contables para ahorrar tiempo y recursos.",
        image: imageAutomatizacion
    },
    {
        id: 2,
        icon: "fa-solid fa-paintbrush",
        title: "Personalización",
        text: "Personaliza tu experiencia con funciones adaptadas a las necesidades de tu empresa.",
        image: imagePersonalizacion
    },
    {
        id: 3,
        icon: "fa-solid fa-folder-open",
        title: "Informes",
        text: "Accede a informes financieros detallados y en tiempo real para tomar decisiones informadas.",
        image: imageInforme
    },
    {
        id: 4,
        icon: "fa-solid fa-headset",
        title: "Soporte",
        text: "Recibe soporte dedicado y actualizaciones regulares para mantener tu sistema al día.",
        image: imageSoporte
    }
]