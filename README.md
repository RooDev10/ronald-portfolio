<div align="center">

# 🚀 RoniDev · Portafolio

**Portafolio personal de Ronald Peralta, estudiante de Ingeniería de Software y desarrollador.**

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
[![CI](https://github.com/RooDev10/ronald-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/RooDev10/ronald-portfolio/actions/workflows/ci.yml)

</div>

---

## 📌 Acerca del proyecto

RoniDev es una landing page de una sola vista que presenta mi perfil, habilidades, proyectos y medios de contacto. Está construida con React y Vite, es responsiva y tiene animaciones de aparición al hacer scroll.

El contenido vive separado de los componentes, así que actualizar información (proyectos, habilidades, enlaces) no requiere tocar la interfaz.

## ✨ Características

- **Inicio** con montañas en capas, tarjeta de perfil y botones de contacto y CV.
- **Navbar fija** que resalta la sección activa, con menú hamburguesa en móvil.
- **Sobre mí** con efecto 3D sobre la foto al mover el mouse.
- **Habilidades** en tarjetas interactivas agrupadas por categoría.
- **Proyectos** con imagen, tecnologías y enlaces a GitHub y demo.
- **Contacto** por WhatsApp, correo y Discord.
- **Animaciones al hacer scroll** con `IntersectionObserver`.
- **Diseño responsivo** para móvil, tablet y escritorio.
- **SEO y redes sociales**: meta description, Open Graph y Twitter Cards.

## 🧰 Tecnologías

| Área | Tecnología |
|---|---|
| Interfaz | React 19 |
| Build y servidor de desarrollo | Vite 7 |
| Estilos | CSS Modules por componente |
| Iconos | react-icons |
| Pruebas | Vitest + Testing Library + jsdom |
| Calidad de código | ESLint 9 |
| Gestor de paquetes | pnpm |
| Integración continua | GitHub Actions |
| Hosting | Firebase Hosting |

## 🗂️ Estructura del proyecto

```
ronald-portfolio/
├── .github/workflows/ci.yml   # CI: lint + test + build en cada push/PR a main
├── public/                    # Archivos estáticos (favicon)
├── src/
│   ├── main.jsx               # Punto de entrada
│   ├── App.jsx                # Ensambla la Navbar y las secciones
│   ├── index.css              # Estilos globales
│   ├── assets/                # Imágenes en WebP
│   ├── components/            # Un componente por sección, cada uno con su CSS Module
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── UI/Button/         # Componentes reutilizables
│   ├── data/                  # Contenido: perfil, habilidades y proyectos
│   ├── hooks/useInView.js     # Lógica de animación al hacer scroll
│   └── test/setup.js          # Configuración de las pruebas
├── .env.example               # Variables opcionales (base, host, puerto)
└── vite.config.js
```

### Buenas prácticas aplicadas

- **Contenido separado de la interfaz.** Los textos, enlaces y proyectos están en `src/data/`. Los componentes solo se encargan de mostrarlos.
- **Una sola fuente de verdad.** Los datos de contacto se definen una vez en `profile.js` y de ahí salen las URLs de WhatsApp, correo y Discord.
- **Componentes por sección** con su propio CSS Module, sin choques de estilos entre ellos.
- **Lógica reutilizable en hooks.** `useInView` evita repetir el código de `IntersectionObserver` en cada sección.
- **Accesibilidad.** HTML semántico, `alt` descriptivos, `aria-label` en iconos y menú, `lang="es"`.
- **Enlaces seguros.** Los enlaces externos abren con `target="_blank"` y `rel="noopener noreferrer"`.
- **Rendimiento.** Imágenes en WebP e iconos empaquetados, sin CDN externo.
- **Sin secretos en el cliente.** Todo lo que usa una app de frontend es público. El `.env` solo guarda configuración del entorno, nunca claves.
- **Calidad automatizada.** Cada push corre lint, pruebas y build en GitHub Actions.

## ▶️ Ejecutar en local

Requisitos: Node.js 20.19+ o 22.12+ y pnpm.

```bash
git clone https://github.com/RooDev10/ronald-portfolio.git
cd ronald-portfolio
pnpm install
pnpm dev
```

Luego abre [http://localhost:5173](http://localhost:5173).

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción en `dist/` |
| `pnpm preview` | Previsualiza el build |
| `pnpm lint` | Revisa el código con ESLint |
| `pnpm test` | Ejecuta las pruebas |

## ☁️ Despliegue en Firebase Hosting

El sitio se publica en Firebase Hosting a partir de la carpeta `dist/`.

**Primera vez:**

```bash
pnpm add -g firebase-tools   # Instala la CLI de Firebase
firebase login
firebase init hosting
```

Durante `firebase init hosting` responde:

- **Public directory:** `dist`
- **Configure as a single-page app:** `Yes`
- **Set up automatic builds with GitHub:** opcional
- **Overwrite dist/index.html:** `No`

Esto crea `firebase.json` y `.firebaserc`, que sí se suben al repositorio.

**Cada despliegue:**

```bash
pnpm build
firebase deploy --only hosting
```

> Antes de desplegar conviene correr `pnpm lint && pnpm test` para no publicar errores.

## 📄 Licencia

Uso personal. Todos los derechos reservados a Ronald Peralta.
