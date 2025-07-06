// Datos detallados de proyectos de Andrea Pujol
const projectData = [
    {
        id: 'identidad-visual-1',
        category: 'Identidad Visual',
        title: 'Cervecería Lúpulo Dorado',
        subtitle: 'Identidad de marca premium para cervecería artesanal',
        imageUrl: 'https://placehold.co/600x400/FFD166/073B4C?text=L%C3%BApulo+Dorado',
        intro: 'Desarrollo completo de identidad visual para una cervecería artesanal premium que busca destacar en el competitivo mercado de cervezas craft. El proyecto abarcó desde la conceptualización hasta la implementación en múltiples touchpoints.',
        challenge: 'Crear una identidad que transmita calidad premium, tradición cervecera y artesanía, diferenciándose de la competencia masiva y conectando con el público craft.',
        solution: 'Desarrollé una identidad basada en elementos tradicionales de la cervecería con un toque contemporáneo, utilizando iconografía del lúpulo y referencias doradas que evocan la calidad del producto.',
        process: [
            'Research de mercado y análisis de competencia',
            'Entrevistas con stakeholders y definición de valores de marca',
            'Desarrollo de conceptos y sketches iniciales',
            'Refinamiento digital en Adobe Illustrator',
            'Creación de manual de identidad corporativa',
            'Desarrollo de aplicaciones en packaging y merchandising'
        ],
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
        duration: '6 semanas',
        team: 'Proyecto individual',
        results: [
            'Incremento del 40% en reconocimiento de marca',
            'Mayor percepción de calidad premium',
            'Implementación exitosa en 15+ puntos de contacto'
        ],
        moodboardUrl: 'https://placehold.co/800x450/3d2f25/f2f0e6?text=Moodboard+Inspiracional',
        logosUrl: 'https://placehold.co/800x450/f2f0e6/2c2a29?text=Logotipo+%26+Versiones',
        mockupsUrl: 'https://placehold.co/800x450/4b7f3a/f2f0e6?text=Aplicaciones+de+Marca',
        guidelinesUrl: 'https://placehold.co/800x450/FFD166/073B4C?text=Manual+de+Identidad',
        colors: {
            labels: ['Dorado Lúpulo', 'Negro Robusto', 'Blanco Cebada', 'Verde Artesanal'],
            cmyk: ['C:10 M:25 Y:80 K:0', 'C:75 M:68 Y:67 K:90', 'C:0 M:0 Y:0 K:0', 'C:70 M:30 Y:90 K:20'],
            hex: ['#FFD166', '#073B4C', '#FFFFFF', '#06D6A0']
        },
        typography: { 
            primary: 'Playfair Display', 
            secondary: 'Inter',
            description: 'Combinación de elegancia clásica con modernidad funcional'
        },
        behanceUrl: 'AQUIE_TU_URL'
    },
    {
        id: 'editorial-1',
        category: 'Diseño Editorial',
        title: 'Revista Nómada',
        subtitle: 'Publicación digital de viajes y cultura',
        imageUrl: 'https://placehold.co/600x400/06D6A0/073B4C?text=N%C3%B3mada',
        intro: 'Diseño completo de una revista digital enfocada en viajes conscientes y experiencias culturales auténticas. El proyecto buscaba crear una experiencia de lectura inmersiva que inspire a explorar el mundo.',
        challenge: 'Diseñar una revista digital que compita con las grandes publicaciones de viajes, manteniendo una identidad única y mejorando la experiencia de lectura en dispositivos digitales.',
        solution: 'Desarrollé un sistema de diseño modular que permite flexibilidad editorial mientras mantiene consistencia visual. La tipografía y el uso del espacio blanco crean jerarquías claras que guían al lector.',
        process: [
            'Análisis de publicaciones competidoras',
            'Definición de audiencia objetivo y journey del lector',
            'Creación de sistema de grillas modulares',
            'Desarrollo de templates para diferentes tipos de contenido',
            'Prototipado de experiencia digital',
            'Testing con usuarios y refinamiento'
        ],
        tools: ['Adobe InDesign', 'Adobe Photoshop', 'Figma'],
        duration: '8 semanas',
        team: 'Andrea Pujol (Diseño), Editor Jefe, 2 Redactores',
        results: [
            'Aumento del 65% en tiempo de permanencia',
            'Reducción del 30% en tasa de rebote',
            'Feedback positivo en usabilidad (4.8/5)'
        ],
        layoutsUrl: 'https://placehold.co/800x450/06D6A0/FFFFFF?text=Layouts+Editoriales',
        gridSystemUrl: 'https://placehold.co/800x450/073B4C/06D6A0?text=Sistema+de+Grillas',
        mockupsUrl: 'https://placehold.co/800x450/F7F9FB/073B4C?text=Mockups+Digitales',
        colors: {
            labels: ['Turquesa Viajero', 'Azul Profundo', 'Gris Texto', 'Blanco Espacio'],
            cmyk: ['C:70 M:0 Y:30 K:0', 'C:100 M:70 Y:0 K:20', 'C:0 M:0 Y:0 K:60', 'C:0 M:0 Y:0 K:0'],
            hex: ['#06D6A0', '#073B4C', '#4B5563', '#FFFFFF']
        },
        typography: { 
            primary: 'Crimson Text', 
            secondary: 'Inter',
            description: 'Elegancia editorial con alta legibilidad digital'
        },
        behanceUrl: 'AQUIE_TU_URL'
    },
    {
        id: 'packaging-1',
        category: 'Packaging',
        title: 'Alma Lepic Cosméticos',
        subtitle: 'Línea de cosméticos veganos sustentables',
        imageUrl: 'https://placehold.co/600x400/FF6B6B/FFFFFF?text=Alma+Lepic',
        intro: 'Desarrollo integral de packaging para una nueva línea de cosméticos veganos que prioriza la sustentabilidad sin comprometer la elegancia y funcionalidad del diseño.',
        challenge: 'Crear un packaging que comunique lujo y calidad utilizando únicamente materiales sustentables, diferenciándose en un mercado saturado de productos de belleza.',
        solution: 'Diseñé un sistema de packaging minimalista con materiales reciclados y reciclables, utilizando una paleta natural que refuerza los valores de la marca y técnicas de impresión eco-friendly.',
        process: [
            'Research de tendencias en packaging sustentable',
            'Análisis de materiales eco-friendly disponibles',
            'Desarrollo de conceptos de diseño',
            'Prototipado con materiales reales',
            'Testing de funcionalidad y durabilidad',
            'Optimización para producción en masa'
        ],
        tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe Dimension'],
        duration: '10 semanas',
        team: 'Andrea Pujol (Diseño), Especialista en Sustentabilidad, Ingeniero de Packaging',
        results: [
            'Reducción del 70% en materiales no reciclables',
            'Reconocimiento en premios de packaging sustentable',
            'Incremento del 45% en percepción de marca premium'
        ],
        conceptsUrl: 'https://placehold.co/800x450/FF6B6B/FFFFFF?text=Conceptos+Iniciales',
        materialsUrl: 'https://placehold.co/800x450/E8F5E8/4A5D4A?text=Materiales+Sustentables',
        mockupsUrl: 'https://placehold.co/800x450/F5F5DC/8B4513?text=Mockups+3D',
        colors: {
            labels: ['Rosa Natural', 'Verde Bosque', 'Beige Orgánico', 'Marrón Tierra'],
            cmyk: ['C:0 M:40 Y:20 K:0', 'C:60 M:0 Y:80 K:30', 'C:10 M:10 Y:30 K:0', 'C:30 M:60 Y:100 K:20'],
            hex: ['#FF6B6B', '#2D5016', '#F5F5DC', '#8B4513']
        },
        typography: { 
            primary: 'Montserrat', 
            secondary: 'Open Sans',
            description: 'Modernidad limpia con toque humano'
        },
        behanceUrl: 'AQUIE_TU_URL'
    },
    {
        id: 'ui-ux-1',
        category: 'Diseño UI & UX',
        title: 'App de Fitness Manimal',
        subtitle: 'Aplicación de entrenamiento personalizado',
        imageUrl: 'https://placehold.co/600x400/118AB2/FFFFFF?text=Manimal',
        intro: 'Diseño UX/UI completo para una aplicación de fitness que personaliza rutinas de entrenamiento basándose en objetivos individuales, nivel de experiencia y disponibilidad de tiempo del usuario.',
        challenge: 'Crear una experiencia que motive a usuarios de diferentes niveles a mantener consistencia en sus entrenamientos, simplificando la complejidad de la planificación fitness.',
        solution: 'Desarrollé una interfaz intuitiva con gamificación sutil, onboarding personalizado y sistema de progreso visual que mantiene a los usuarios motivados y comprometidos con sus objetivos.',
        process: [
            'Research de usuarios y análisis de competencia',
            'Definición de user personas y journey maps',
            'Wireframing y arquitectura de información',
            'Prototipado interactivo en Figma',
            'Testing de usabilidad con usuarios reales',
            'Iteración basada en feedback y métricas'
        ],
        tools: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
        duration: '12 semanas',
        team: 'Andrea Pujol (UX/UI Lead), Product Manager, 2 Developers, UX Researcher',
        results: [
            'Tasa de retención del 78% en el primer mes',
            'Puntuación de 4.7/5 en tiendas de aplicaciones',
            'Incremento del 85% en completación de entrenamientos'
        ],
        userFlowUrl: 'https://placehold.co/800x450/118AB2/FFFFFF?text=User+Flow+%26+Journey',
        wireframesUrl: 'https://placehold.co/800x450/F0F8FF/118AB2?text=Wireframes+%26+Prototipos',
        uiScreensUrl: 'https://placehold.co/800x450/1E3A8A/FFFFFF?text=Pantallas+Finales',
        usabilityUrl: 'https://placehold.co/800x450/06D6A0/FFFFFF?text=Testing+%26+Resultados',
        colors: {
            labels: ['Azul Energía', 'Verde Progreso', 'Naranja Motivación', 'Gris Interface'],
            cmyk: ['C:80 M:30 Y:0 K:0', 'C:60 M:0 Y:80 K:0', 'C:0 M:60 Y:100 K:0', 'C:0 M:0 Y:0 K:40'],
            hex: ['#118AB2', '#06D6A0', '#FFD166', '#9CA3AF']
        },
        typography: { 
            primary: 'Nunito', 
            secondary: 'Inter',
            description: 'Friendly y energética para motivar el entrenamiento'
        },
        behanceUrl: 'AQUI_TU_URL'
    },
    {
        id: 'manimal',
        category: 'Diseño Gráfico',
        title: 'Creación de logo',
        subtitle: 'Identidad Visual y Diseño de Marca',
        imageUrl: 'img/Presentacion.jpg',
        intro: 'En este proyecto, llevé adelante el desarrollo integral de la identidad visual para Manimal, abarcando la definición de la paleta cromática, la selección tipográfica y la creación de lineamientos gráficos que transmiten los valores de la marca. Más allá del aspecto visual, me encargué de realizar la investigación UX necesaria para la creación de una aplicación móvil, enfocada en entender las necesidades de los usuarios y optimizar la experiencia dentro de la app.El proceso incluyó la identificación de los distintos perfiles de usuario, el análisis de sus recorridos y expectativas, así como la elaboración de wireframes y prototipos interactivos. Todo este trabajo permitió el diseño de una app intuitiva, funcional y alineada con la propuesta de valor de Manimal, conectando a los usuarios con centros veterinarios, pet shops y otros servicios para mascotas de manera simple y eficiente.',
        challenge: 'El principal desafío de la creación de Manimal fue acortar y modernizar el nombre original "Mundo Animal". Al unir ambas palabras, logramos una denominación única que sigue transmitiendo el concepto de mundo animal. Además, se diseñó una identidad visual acorde a la app, donde los usuarios pueden encontrar centros veterinarios, pet shops y mucho más, generando una experiencia amigable y coherente con el universo de las mascotas. una experiencia que motive a usuarios de diferentes niveles a mantener consistencia en sus entrenamientos, simplificando la complejidad de la planificación fitness.',
        solution: 'Desarrollé una interfaz intuitiva con gamificación sutil, onboarding personalizado y sistema de progreso visual que mantiene a los usuarios motivados y comprometidos con sus objetivos.',
        process: [
            'Brief y análisis del cliente: Relevamiento de información sobre la identidad, valores y objetivos de la marca para definir el enfoque visual adecuado',
            'Investigación y referencias: Búsqueda de referencias visuales y análisis de tendencias relacionadas con el sector para inspirar el desarrollo del logotipo y la identidad',
            'Bocetado y exploración de ideas: Realización de bocetos a mano alzada y exploraciones digitales para definir conceptos iniciales del logo y evaluar posibles direcciones creativas',
            'Selección y vectorización del logotipo: Elección del boceto final y digitalización/vectorización del logotipo para asegurar su correcta aplicación en distintos formatos y escalas',
            'Desarrollo de paleta de colores: Selección de una paleta cromática coherente con los valores de la marca, buscando transmitir las sensaciones y emociones deseadas',
            'Definición de tipografía: Elección de fuentes tipográficas que acompañen y refuercen la identidad visual, asegurando legibilidad y armonía en todas las piezas gráficas'
        ],
        tools: ['Photoshop', 'Illustrator'],
        duration: '12 semanas',
        team: 'Andrea Pujol (UX/UI Lead), Product Manager, 2 Developers, UX Researcher',
        results: [
            'Tasa de retención del 78% en el primer mes',
            'Puntuación de 4.7/5 en tiendas de aplicaciones',
            'Incremento del 85% en completación de entrenamientos'
        ],
        userFlowUrl: 'img/manimalLogo.jpg',
        wireframesUrl: 'https://placehold.co/800x450/F0F8FF/118AB2?text=Wireframes+%26+Prototipos',
        uiScreensUrl: 'img/PantallaFinalManimal.jpg',
        usabilityUrl: 'https://placehold.co/800x450/06D6A0/FFFFFF?text=Testing+%26+Resultados',
        colors: {
            labels: ['Verde Turquesa', 'Amarillo Vibrante', 'Marrón Tierra', 'Naranja Cálido'],
            cmyk: ['C:100 M:0 Y:35 K:32', 'C:0 M:35 Y:100 K:2', 'C:0 M:40 Y:75 K:38', 'C:0 M:50 Y:85 K:7'],
            hex: ['#00ada4', '#faba0d', '#9d5c25', '#ed7122']
        },
        typography: { 
            primary: 'Poppins', 
            secondary: 'Arista 2.0 alternate regular',
            description: 'Moderna y versátil para el mundo de las mascotas'
        },
        behanceUrl: 'https://www.behance.net/gallery/197723505/Presentacion_Logo_Manimal'
    }
];

// Variables globales
let chartInstance = null;
let currentFilter = 'Todos';

// Elementos DOM
const gallery = document.getElementById('project-gallery');
const filtersContainer = document.getElementById('project-filters');
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('modal-close-btn');

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando aplicación');
    
    initializeFilters();
    displayProjects();
    initializeScrollAnimations();
    initializeNavigation();
    
    // Nuevas funcionalidades móviles
    initializeMobileFeatures();
    enhanceMobileNavigation();
    optimizeMobileModal();
    improveMobileLoading();
    enhanceMobileAccessibility();
    
    // Debug para verificar elementos del menú móvil
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    console.log('Botón hamburguesa encontrado:', !!mobileMenuBtn);
    console.log('Menú móvil encontrado:', !!mobileMenu);
    if (mobileMenuBtn) {
        console.log('Dimensiones del botón:', mobileMenuBtn.getBoundingClientRect());
    }
});

// Inicializar filtros
function initializeFilters() {
    const categories = ['Todos', ...new Set(projectData.map(p => p.category))];
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300';
        button.textContent = category;
        button.dataset.filter = category;
        
        if (category === 'Todos') {
            button.classList.add('active', 'bg-gradient-to-r', 'from-[#073B4C]', 'to-[#118AB2]', 'text-white');
        } else {
            button.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
        }
        
        filtersContainer.appendChild(button);
    });

    // Event listeners para filtros
    const filterButtons = filtersContainer.querySelectorAll('button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            updateActiveFilter(button, filterButtons);
            displayProjects(button.dataset.filter);
        });
    });
}

// Actualizar filtro activo
function updateActiveFilter(activeButton, allButtons) {
    allButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-gradient-to-r', 'from-[#073B4C]', 'to-[#118AB2]', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
    });
    
    activeButton.classList.add('active', 'bg-gradient-to-r', 'from-[#073B4C]', 'to-[#118AB2]', 'text-white');
    activeButton.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
    
    currentFilter = activeButton.dataset.filter;
}

// Mostrar proyectos con animación
function displayProjects(filter = 'Todos') {
    gallery.innerHTML = '';
    const filteredProjects = filter === 'Todos' ? projectData : projectData.filter(p => p.category === filter);
    
    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card cursor-pointer group opacity-0 transform translate-y-8';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-image overflow-hidden rounded-t-lg">
                <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-56 object-cover transition-transform duration-300">
            </div>
            <div class="p-6">
                <div class="category-badge mb-3">${project.category}</div>
                <h3 class="text-xl font-bold text-[#073B4C] mb-2 group-hover:text-[#118AB2] transition-colors">${project.title}</h3>
                <p class="text-sm text-gray-600 mb-3">${project.subtitle}</p>
                <div class="flex items-center justify-between text-sm text-gray-500">
                    <span>${project.duration}</span>
                    <span class="text-[#118AB2] font-semibold">Ver proyecto →</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(project));
        gallery.appendChild(card);
        
        // Animación de entrada
        setTimeout(() => {
            card.classList.remove('opacity-0', 'translate-y-8');
            card.classList.add('opacity-100', 'translate-y-0');
        }, index * 100);
    });
}

// Abrir modal con información detallada
function openModal(project) {
    const content = generateModalContent(project);
    modalBody.innerHTML = content;
    
    // Mostrar modal con animación
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    document.body.style.overflow = 'hidden';

    // Crear gráfico de colores si existe
    if (project.colors) {
        setTimeout(() => createColorChart(project), 100);
    }
}

// Generar contenido completo del modal
function generateModalContent(project) {
    let content = `
        <div class="space-y-8">
            <!-- Header del proyecto -->
            <div class="text-center pb-6 border-b border-gray-200">
                <div class="category-badge mb-3">${project.category}</div>
                <h2 class="font-display text-4xl font-bold text-[#073B4C] mb-2">${project.title}</h2>
                <p class="text-xl text-[#118AB2] mb-4">${project.subtitle}</p>
                <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
                    <span><strong>Duración:</strong> ${project.duration}</span>
                    <span><strong>Equipo:</strong> ${project.team}</span>
                    <span><strong>Herramientas:</strong> ${project.tools.join(', ')}</span>
                </div>
                ${project.behanceUrl ? `
                    <div class="mt-4">
                        <a href="${project.behanceUrl}" target="_blank" rel="noopener noreferrer" 
                           class="inline-flex items-center px-6 py-3 bg-[#1769FF] hover:bg-[#0052CC] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                viewBox="0,0,256,256">
                                <g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <g transform="scale(5.12,5.12)">
                                        <path
                                            d="M9,4c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM12,18h6.73047c0.73,0 4.67969,-0.04969 4.67969,3.57031c0,1.92 -1.31039,2.56938 -1.90039,2.85938c0.88,0.28 2.49023,1.09031 2.49023,3.57031c0,3.83 -4.39047,4 -4.98047,4h-7.01953zM29,18h7v2h-7zM15,20.42969v3.28125h3.2207c0.44,0 1.89844,-0.24094 1.89844,-1.71094c0,-1.47 -1.89945,-1.57031 -2.18945,-1.57031zM32.73047,21c3.9,0 4.95914,3.03977 5.11914,3.75977c0.15,0.73 0.15039,1.37023 0.15039,2.24023h-7.90039c0,0.87 0.46102,2.83008 2.79102,2.83008c0.62,0 1.07883,-0.14945 1.54883,-0.43945c0.46,-0.29 0.62148,-0.57133 0.77148,-0.86133h2.62891c-0.46,1.15 -1.07977,2.02156 -2.00977,2.60156c-0.93,0.58 -2.01,0.86914 -3.25,0.86914c-0.78,0 -1.55008,-0.14945 -2.33008,-0.43945c-0.62,-0.29 -1.23922,-0.72039 -1.69922,-1.15039c-0.46,-0.44 -0.77008,-1.02023 -1.08008,-1.74023c-0.31,-0.58 -0.4707,-1.44992 -0.4707,-2.16992c0,-0.72 0.29047,-5.5 5.73047,-5.5zM32.73047,23.0293c-2.26,0 -2.63086,2.17055 -2.63086,2.31055h4.96094c-0.16,-0.72 -0.81008,-2.31055 -2.33008,-2.31055zM15,25.71094v3.85937h3.35156c0.289,0 2.32813,-0.08938 2.32813,-1.85937c0,-1.76 -1.60213,-2 -2.32813,-2z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                            Ver en Behance
                        </a>
                    </div>
                ` : ''}
            </div>

            <!-- Descripción e introducción -->
            <div class="project-section">
                <h3 class="font-bold text-2xl mb-4 text-[#073B4C]">Descripción del Proyecto</h3>
                <p class="text-gray-700 leading-relaxed">${project.intro}</p>
            </div>

            <!-- Desafío y Solución -->
            <div class="grid md:grid-cols-2 gap-6">
                <div class="project-section">
                    <h3 class="font-bold text-xl mb-4 text-[#FF6B6B]">🎯 Desafío</h3>
                    <p class="text-gray-700 leading-relaxed">${project.challenge}</p>
                </div>
                <div class="project-section">
                    <h3 class="font-bold text-xl mb-4 text-[#06D6A0]">💡 Solución</h3>
                    <p class="text-gray-700 leading-relaxed">${project.solution}</p>
                </div>
            </div>

            <!-- Proceso de trabajo -->
            <div class="project-section">
                <h3 class="font-bold text-2xl mb-4 text-[#073B4C]">Proceso de Trabajo</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    ${project.process.map((step, index) => `
                        <div class="flex items-start space-x-3">
                            <div class="bg-[#118AB2] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                                ${index + 1}
                            </div>
                            <p class="text-gray-700">${step}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
    `;

    // Agregar secciones específicas según el tipo de proyecto
    if (project.moodboardUrl) {
        content += `
            <div class="project-section">
                <h3 class="font-bold text-2xl mb-4 text-[#073B4C]">Moodboard e Inspiración</h3>
                <div class="project-image-gallery">
                    <img src="${project.moodboardUrl}" class="w-full rounded-lg shadow-lg" alt="Moodboard del proyecto">
                </div>
            </div>
        `;
    }

    if (project.logosUrl || project.layoutsUrl || project.userFlowUrl) {
        const imageUrl = project.logosUrl || project.layoutsUrl || project.userFlowUrl;
        const title = project.logosUrl ? 'Desarrollo de Logotipo' : 
                     project.layoutsUrl ? 'Layouts y Composición' : 
                     project.id === 'manimal' ? 'Logo' :
                     'Flujo de Usuario y Arquitectura';
        
        content += `
            <div class="project-section">
                <h3 class="font-bold text-2xl mb-4 text-[#073B4C]">${title}</h3>
                <div class="project-image-gallery">
                    <img src="${imageUrl}" class="w-full rounded-lg shadow-lg" alt="${title}">
                </div>
            </div>
        `;
    }

    // Paleta de colores y tipografía
    if (project.colors) {
        content += `
            <div class="project-section">
                <h3 class="font-bold text-2xl mb-4 text-[#073B4C]">Paleta de Colores y Tipografía</h3>
                <div class="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h4 class="font-semibold text-lg mb-3 text-[#118AB2]">Paleta Cromática</h4>
                        <div class="chart-container">
                            <canvas id="color-chart-canvas"></canvas>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-4 text-[#118AB2]">Tipografía</h4>
                        <div class="space-y-4">
                            <div class="p-4 bg-white rounded-lg border border-gray-200">
                                <p class="font-bold text-2xl" style="font-family: '${project.typography.primary}', serif;">${project.typography.primary}</p>
                                <p class="text-gray-600 text-sm mt-1">Títulos y destacados</p>
                            </div>
                            <div class="p-4 bg-white rounded-lg border border-gray-200">
                                <p class="font-semibold text-lg" style="font-family: '${project.typography.secondary}', sans-serif;">${project.typography.secondary}</p>
                                <p class="text-gray-600 text-sm mt-1">Cuerpo de texto</p>
                            </div>
                            <p class="text-sm text-gray-600 italic">${project.typography.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Aplicaciones y mockups finales
    if (project.mockupsUrl || project.uiScreensUrl) {
        const imageUrl = project.mockupsUrl || project.uiScreensUrl;
        const title = project.uiScreensUrl ? 'Pantallas Finales de la Aplicación' : 'Aplicaciones de Marca';
        
        content += `
            <div class="project-section">
                <h3 class="font-bold text-2xl mb-4 text-[#073B4C]">${title}</h3>
                <div class="project-image-gallery">
                    <img src="${imageUrl}" class="w-full rounded-lg shadow-lg" alt="${title}">
                </div>
            </div>
        `;
    }

    // Resultados y métricas
    if (project.results && project.results.length > 0) {
        content += `
            <div class="project-section">
                <h3 class="font-bold text-2xl mb-4 text-[#073B4C]">Resultados e Impacto</h3>
                <div class="grid md:grid-cols-3 gap-4">
                    ${project.results.map(result => `
                        <div class="bg-gradient-to-br from-[#118AB2] to-[#06D6A0] text-white p-4 rounded-lg text-center">
                            <p class="font-semibold">${result}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    content += `</div>`;
    return content;
}

// Cerrar modal
function closeModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    document.body.style.overflow = 'auto';
    
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
}

// Crear gráfico de colores interactivo
function createColorChart(project) {
    if (chartInstance) chartInstance.destroy();
    
    const canvas = document.getElementById('color-chart-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: project.colors.labels,
            datasets: [{
                label: 'Paleta de Colores',
                data: Array(project.colors.labels.length).fill(100),
                backgroundColor: project.colors.hex,
                borderColor: project.colors.hex.map(color => color + '80'),
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(7, 59, 76, 0.95)',
                    titleColor: '#FFFFFF',
                    bodyColor: '#FFFFFF',
                    titleFont: { weight: 'bold', size: 14 },
                    bodyFont: { size: 12 },
                    displayColors: true,
                    borderColor: '#118AB2',
                    borderWidth: 1,
                    cornerRadius: 8,
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            return item.chart.data.labels[item.dataIndex];
                        },
                        label: function(context) {
                            return [
                                `CMYK: ${project.colors.cmyk[context.dataIndex]}`,
                                `HEX: ${project.colors.hex[context.dataIndex]}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: { 
                    display: false, 
                    grid: { display: false } 
                },
                y: { 
                    grid: { display: false }, 
                    ticks: { 
                        font: { weight: '600', size: 12 },
                        color: '#073B4C'
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Animaciones de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar secciones para animaciones
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-fade-in');
        observer.observe(section);
    });
}

// Navegación suave y menú móvil
function initializeNavigation() {
    // Navegación suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            // Solo cerrar menú y hacer scroll si el enlace es válido y no es solo '#'
            if (target && this.getAttribute('href') !== '#') {
                e.preventDefault();
                // Cerrar menú móvil si está abierto (la animación y cierre real se gestiona en enhanceMobileNavigation)
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    // Esperar a que el menú se oculte antes de hacer scroll
                    setTimeout(() => {
                        scrollToSection(target);
                    }, 250); // Coincide con la duración de la animación de cierre
                } else {
                    scrollToSection(target);
                }
            }
        });
    });

    // Función para hacer scroll considerando la altura del header
    function scrollToSection(target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20; // 20px de margen extra
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Highlight del menú activo basado en scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function highlightActiveSection() {
        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-[#FFD166]', 'font-bold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-[#FFD166]', 'font-bold');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
}

// Funcionalidades específicas para móviles
function initializeMobileFeatures() {
    // Detectar si es dispositivo móvil
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Mejorar el rendimiento en móviles
        optimizeForMobile();
        
        // Manejar orientación
        handleOrientationChange();
        
        // Mejorar interacciones táctiles
        improveTouchInteractions();
        
        // Optimizar animaciones
        optimizeMobileAnimations();
    }
}

// Optimizaciones para móviles
function optimizeForMobile() {
    // Reducir la frecuencia de eventos scroll
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 16); // ~60fps
    };
    
    // Precargar menos imágenes en móviles
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        },
        { rootMargin: '50px' }
    );
    
    images.forEach(img => imageObserver.observe(img));
}

// Manejar cambios de orientación
function handleOrientationChange() {
    function adjustForOrientation() {
        const isLandscape = window.innerHeight < window.innerWidth;
        document.body.classList.toggle('landscape-mobile', isLandscape && window.innerWidth <= 768);
        
        // Reajustar modal si está abierto
        const modal = document.getElementById('project-modal');
        if (modal && !modal.classList.contains('pointer-events-none')) {
            setTimeout(() => {
                const modalContent = document.getElementById('modal-content');
                if (modalContent) {
                    modalContent.style.maxHeight = `${window.innerHeight * 0.9}px`;
                }
            }, 100);
        }
    }
    
    window.addEventListener('orientationchange', () => {
        setTimeout(adjustForOrientation, 100);
    });
    
    window.addEventListener('resize', adjustForOrientation);
    adjustForOrientation();
}

// Mejorar interacciones táctiles
function improveTouchInteractions() {
    // Mejorar el scroll en modales
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalBody) {
        // Prevenir scroll del body cuando el modal está abierto
        modal.addEventListener('touchstart', (e) => {
            if (e.target === modal) {
                e.preventDefault();
            }
        });
        
        // Mejorar el scroll dentro del modal
        let startY = 0;
        modalBody.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });
        
        modalBody.addEventListener('touchmove', (e) => {
            const currentY = e.touches[0].clientY;
            const scrollTop = modalBody.scrollTop;
            const scrollHeight = modalBody.scrollHeight;
            const clientHeight = modalBody.clientHeight;
            
            // Prevenir bounce scroll
            if ((scrollTop <= 0 && currentY > startY) || 
                (scrollTop >= scrollHeight - clientHeight && currentY < startY)) {
                e.preventDefault();
            }
        });
    }
    
    // Mejorar los filtros de proyectos para touch
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Hacer las tarjetas más responsivas al touch
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Optimizar animaciones para móviles
function optimizeMobileAnimations() {
    // Reducir animaciones en dispositivos de bajo rendimiento
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection && (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    
    if (isSlowConnection) {
        document.body.classList.add('reduce-animations');
        
        // Agregar CSS para reducir animaciones
        const style = document.createElement('style');
        style.textContent = `
            .reduce-animations *, 
            .reduce-animations *::before, 
            .reduce-animations *::after {
                animation-duration: 0.1s !important;
                transition-duration: 0.1s !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Mejorar la navegación móvil
function enhanceMobileNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuBtn || !mobileMenu) {
        console.error('No se encontraron elementos del menú móvil');
        return;
    }
    
    console.log('Inicializando menú hamburguesa para móvil');
    
    // Función simple para toggle del menú
    function toggleMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        console.log('Toggle menu - actualmente oculto:', isHidden);
        
        if (isHidden) {
            // Mostrar menú
            mobileMenu.classList.remove('hidden');
            mobileMenu.style.animation = 'slideDown 0.3s ease-out forwards';
            console.log('Mostrando menú');
        } else {
            // Ocultar menú
            mobileMenu.style.animation = 'slideUp 0.3s ease-out forwards';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.animation = '';
            }, 250);
            console.log('Ocultando menú');
        }
    }
    
    // Event listener principal para el botón
    mobileMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Botón hamburguesa clickeado');
        toggleMenu();
    });
    
    // Event listener para touch en móviles
    mobileMenuBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Botón hamburguesa tocado');
        toggleMenu();
    });
    
    // Cerrar menú al hacer clic en enlaces
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Link del menú clickeado');
            mobileMenu.style.animation = 'slideUp 0.3s ease-out forwards';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.animation = '';
            }, 250);
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!mobileMenu.classList.contains('hidden') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            console.log('Click fuera del menú, cerrando');
            mobileMenu.style.animation = 'slideUp 0.3s ease-out forwards';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.style.animation = '';
            }, 250);
        }
    });
    
    // Agregar estilos de animación si no existen
    if (!document.getElementById('mobile-menu-animations')) {
        const animationStyles = document.createElement('style');
        animationStyles.id = 'mobile-menu-animations';
        animationStyles.textContent = `
            @keyframes slideDown {
                from { 
                    opacity: 0; 
                    transform: translateY(-10px);
                    visibility: visible;
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0);
                    visibility: visible;
                }
            }
            
            @keyframes slideUp {
                from { 
                    opacity: 1; 
                    transform: translateY(0);
                    visibility: visible;
                }
                to { 
                    opacity: 0; 
                    transform: translateY(-10px);
                    visibility: hidden;
                }
            }
        `;
        document.head.appendChild(animationStyles);
    }
    
    console.log('Menú hamburguesa inicializado correctamente');
}

// Optimizar modal para móviles
function optimizeMobileModal() {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalContent && modalBody) {
        // Función para ajustar el modal al tamaño de pantalla
        function adjustModalForMobile() {
            if (window.innerWidth <= 768) {
                modalContent.style.margin = '0.5rem';
                modalContent.style.maxHeight = `${window.innerHeight - 16}px`;
                modalContent.style.width = 'calc(100% - 1rem)';
                modalBody.style.maxHeight = `${window.innerHeight - 120}px`;
            } else {
                modalContent.style.margin = '';
                modalContent.style.maxHeight = '';
                modalContent.style.width = '';
                modalBody.style.maxHeight = '';
            }
        }
        
        // Aplicar al redimensionar
        window.addEventListener('resize', adjustModalForMobile);
        
        // Observar cuando se abre el modal
        const modalObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (!modal.classList.contains('pointer-events-none')) {
                        setTimeout(adjustModalForMobile, 50);
                    }
                }
            });
        });
        
        modalObserver.observe(modal, { attributes: true });
    }
}

// Mejorar la experiencia de carga en móviles
function improveMobileLoading() {
    // Lazy loading para imágenes
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '100px'
        });
        
        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    }
    
    // Precargar recursos críticos
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // Precargar el primer proyecto
            if (projectData.length > 0) {
                const firstProject = projectData[0];
                const img = new Image();
                img.src = firstProject.imageUrl;
            }
        });
    }
}

// Mejorar accesibilidad en móviles
function enhanceMobileAccessibility() {
    // Mejorar navegación por teclado virtual
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        // Prevenir zoom en iOS
        if (parseFloat(getComputedStyle(input).fontSize) < 16) {
            input.style.fontSize = '16px';
        }
        
        // Mejorar el comportamiento del teclado virtual
        input.addEventListener('focus', () => {
            setTimeout(() => {
                if (window.innerWidth <= 768) {
                    input.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }, 300);
        });
    });
    
    // Mejorar los enlaces para touch
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const rect = link.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) {
            link.style.minWidth = '44px';
            link.style.minHeight = '44px';
            link.style.display = 'inline-flex';
            link.style.alignItems = 'center';
            link.style.justifyContent = 'center';
        }
    });
}

// Event listeners
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
        closeModal();
    }
});

// Preloader para imágenes
function preloadImages() {
    projectData.forEach(project => {
        const img = new Image();
        img.src = project.imageUrl;
    });
}

// Inicializar preloader
preloadImages();

// Mejorar la vista previa del CV con iframe
document.addEventListener('DOMContentLoaded', function() {
    const cvPreview = document.querySelector('.cv-preview');
    const cvIframe = cvPreview ? cvPreview.querySelector('iframe') : null;
    
    if (cvIframe) {
        // Manejar la carga del iframe
        cvIframe.addEventListener('load', function() {
            this.setAttribute('data-loaded', 'true');
            
            // Agregar una clase para indicar que está cargado
            cvPreview.classList.add('cv-loaded');
            
            // Ocultar cualquier indicador de carga
            const loadingIndicator = cvPreview.querySelector('.loading-indicator');
            if (loadingIndicator) {
                loadingIndicator.style.opacity = '0';
                setTimeout(() => loadingIndicator.remove(), 300);
            }
        });
        
        // Manejar errores de carga
        cvIframe.addEventListener('error', function() {
            console.log('Error cargando vista previa del CV');
        });
    }
});

// Función para descargar CV - solo PDF
function downloadCV() {
    const button = document.querySelector('button[onclick*="downloadCV"]');
    const originalText = button ? button.textContent : '';
    
    if (button) {
        button.innerHTML = `
            <svg class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Descargando PDF...
        `;
        button.disabled = true;
    }
    
    // Crear link de descarga para PDF
    const pdfLink = document.createElement('a');
    pdfLink.href = './CV.pdf';
    pdfLink.download = 'CV_Andrea_Pujol_Diseñadora_UXUI.pdf';
    pdfLink.target = '_blank';
    
    document.body.appendChild(pdfLink);
    pdfLink.click();
    document.body.removeChild(pdfLink);
    
    // Restaurar el botón
    setTimeout(() => {
        if (button) {
            button.innerHTML = '✓ CV Descargado';
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
            }, 1500);
        }
    }, 500);
}

// Manejo mejorado de la vista previa del PDF
document.addEventListener('DOMContentLoaded', function() {
    const cvPreview = document.querySelector('.cv-preview');
    const pdfObject = cvPreview ? cvPreview.querySelector('object[data*=".pdf"]') : null;
    
    if (cvPreview) {
        // Agregar clase de carga inicial
        cvPreview.classList.add('pdf-loading');
        
        // Manejar la carga del PDF
        if (pdfObject) {
            pdfObject.addEventListener('load', function() {
                cvPreview.classList.remove('pdf-loading');
                cvPreview.classList.add('pdf-loaded');
                console.log('PDF cargado correctamente');
            });
            
            pdfObject.addEventListener('error', function() {
                console.log('Error cargando PDF, usando fallback');
                showFallbackPreview();
            });
            
            // Verificar si el PDF existe después de un tiempo
            setTimeout(() => {
                if (!pdfObject.contentDocument && !pdfObject.contentWindow) {
                    console.log('PDF no disponible, usando fallback');
                    showFallbackPreview();
                }
            }, 3000);
        }
        
        // Controles de zoom para PDF
        const zoomInBtn = cvPreview.querySelector('.pdf-zoom-in');
        const zoomOutBtn = cvPreview.querySelector('.pdf-zoom-out');
        
        if (zoomInBtn && zoomOutBtn && pdfObject) {
            let currentZoom = 75;
            
            zoomInBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentZoom = Math.min(150, currentZoom + 25);
                updatePdfZoom();
            });
            
            zoomOutBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentZoom = Math.max(50, currentZoom - 25);
                updatePdfZoom();
            });
            
            function updatePdfZoom() {
                const newSrc = pdfObject.data.replace(/zoom=\d+/, `zoom=${currentZoom}`);
                pdfObject.data = newSrc;
            }
        }
        
        // Mejorar la detección de scroll en el PDF
        let scrollIndicatorTimeout;
        cvPreview.addEventListener('mouseenter', function() {
            clearTimeout(scrollIndicatorTimeout);
            scrollIndicatorTimeout = setTimeout(() => {
                this.style.setProperty('--show-scroll-hint', '1');
            }, 1000);
        });
        
        cvPreview.addEventListener('mouseleave', function() {
            clearTimeout(scrollIndicatorTimeout);
            this.style.setProperty('--show-scroll-hint', '0');
        });
    }
    
    // Función mejorada para fallback
    function showFallbackPreview() {
        if (cvPreview) {
            cvPreview.classList.remove('pdf-loading');
            cvPreview.classList.add('pdf-fallback');
            
            // Ocultar el object del PDF
            if (pdfObject) {
                pdfObject.style.display = 'none';
            }
            
            // Mostrar mensaje en la consola para debug
            console.log('Usando vista previa HTML como fallback del PDF');
        }
    }
});

// Función para abrir el CV en pantalla completa
function openCVFullscreen() {
    // Abrir PDF directamente en nueva ventana con tamaño completo
    const pdfWindow = window.open('./CV.pdf', '_blank', 'width=' + screen.width + ',height=' + screen.height + ',fullscreen=yes,resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes');
    
    if (!pdfWindow) {
        // Fallback si las ventanas emergentes están bloqueadas
        const link = document.createElement('a');
        link.href = './CV.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Event listeners básicos para la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase CSS group al hover del preview del CV
    const cvPreview = document.querySelector('.cv-preview');
    if (cvPreview) {
        cvPreview.classList.add('group');
    }
});
