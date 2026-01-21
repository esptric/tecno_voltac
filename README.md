# Tecnovoltac - Servicios Técnicos Especializados

Sitio web oficial de **Tecnovoltac**, una empresa líder en servicios técnicos de instalaciones eléctricas, gas y acabados con sede en Pereira, Colombia. Este proyecto presenta una interfaz moderna y profesional para mostrar los servicios, el equipo y la información de contacto de la empresa.

## 🚀 Descripción del Proyecto

Tecnovoltac se especializa en ofrecer soluciones confiables y seguras, cumpliendo con normativas como RETIE. Este sitio web ha sido diseñado para reflejar la calidad y profesionalismo de la empresa, proporcionando a los clientes una experiencia de usuario fluida y accesible desde cualquier dispositivo.

## ✨ Características Principales

- **Diseño Moderno y Responsivo:** Adaptado perfectamente a móviles, tablets y escritorio.
- **Animaciones Interactivas:** Uso de Framer Motion para transiciones suaves y elementos dinámicos (tarjetas en movimiento, efectos de fondo).
- **Modo Oscuro/Claro:** Soporte nativo para cambio de tema visual.
- **Optimización SEO:** Estructura optimizada para motores de búsqueda.
- **Navegación Intuitiva:** Acceso rápido a Servicios, Nosotros, Equipo y Contacto.
- **Componentes UI Avanzados:** Integración de componentes visuales atractivos como "Background Beams" y "Moving Borders".

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con un stack tecnológico moderno y robusto:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) & [Motion](https://motion.dev/)
- **Iconos:** [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **Componentes UI:** [Radix UI](https://www.radix-ui.com/) (primitivas accesibles)

## 📦 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd tecno_voltac
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    # o
    bun install
    ```

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    # o
    bun dev
    ```

4.  **Ver el sitio:**
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📂 Estructura del Proyecto

```
src/
├── app/              # Páginas y layout principal (App Router)
├── components/       # Componentes reutilizables
│   ├── global/       # Navbar, Footer, etc.
│   ├── sections/     # Secciones completas de páginas (Hero, CTA, etc.)
│   └── ui/           # Componentes de interfaz (botones, tarjetas, efectos)
├── lib/              # Utilidades y datos estáticos
│   └── data/         # Información de la empresa, servicios y equipo
```

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run start`: Inicia el servidor de producción.
- `npm run lint`: Ejecuta el linter para verificar la calidad del código.

## 📄 Licencia

Este proyecto es propiedad de **Tecnovoltac**. Todos los derechos reservados.