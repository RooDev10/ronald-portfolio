import profileImage from "../assets/avatarPNG.webp";
import profilePhoto from "../assets/photo.webp";

// Datos de contacto públicos: se muestran en la web, no son secretos.
// Se definen una sola vez y las URLs se construyen a partir de ellos.
const phone = "51953091144";
const email = "ronald.peraltac29@gmail.com";
const discordUserId = "757391452413231154";

const whatsappMessage = "Hola!! Te escribo desde tu web porque tengo un proyecto en mente y me gustaría conversar contigo. ¡Gracias!";
const emailSubject = "Consulta por proyecto";
const emailBody = "Hola,\n\nMe pongo en contacto para consultar sobre un posible proyecto y conocer la forma de trabajo.\nQuedo atento(a) a tu respuesta.\n\nGracias por tu tiempo.";

const profile = {
    name: "Ronald Peralta",
    age: 22,
    rol: "Estudiante - Ingeniería de Software",
    image_profile: profileImage,
    profile_photo: profilePhoto,
    description: "Desarrollador de software apasionado, enfocado en soluciones escalables, ciclo de vida y automatizaciones",
    bio: "Soy estudiante de Ingeniería de Software, disciplinado y enfocado en crear soluciones innovadoras y bien estructuradas. Trabajo con tecnologías como .NET, React, Vue y Flutter para desarrollar aplicaciones web y móviles escalables, cuidando la arquitectura y la mantenibilidad. Aplico principios de diseño y buenas prácticas para construir soluciones robustas, pensadas para evolucionar con el tiempo. Complemento el desarrollo con prácticas DevOps, utilizando Docker para contenerizar aplicaciones y facilitar despliegues confiables. Me interesan la inteligencia artificial y el aprendizaje automático, y busco mejorar constantemente para afrontar los retos actuales del desarrollo de software.",
    location: "Lima - Peru",
    phone_display: "+51 953 091 144",
    email,
    discord_user: "☆Ronald☆",
    git_url: "https://github.com/RooDev10",
    linkedin_url: "https://www.linkedin.com/in/ronald-joel-peralta-chipa-068b033a8",
    ig_url: "https://www.instagram.com/ronaldperalta29/",
    cv_url: "https://drive.google.com/file/d/1_nY8NoidQdPClTD3PcKyCGq_ouYYm1c8/view?usp=sharing",
    whatsapp_url: `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`,
    email_url: `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
    discord_url: `https://discord.com/users/${discordUserId}`,
};

export default profile;
