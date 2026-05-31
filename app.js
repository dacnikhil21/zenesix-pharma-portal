/* ==========================================================================
   ZENESIX PREMIUM PHARMACEUTICALS - APPLICATION ENGINE
   ========================================================================== */

// 1. Core Formulation Specs & Data Repository
const FormulationRepository = {
    axogain: {
        id: "axogain",
        title: "Axogain",
        category: "Neurology",
        slogan: "Neurocare Support Formula",
        badge: "Neurocare Solutions",
        description: "Axogain is a balanced neurocare formulation designed to support nerve health. It combines Methylcobalamin, Alpha Lipoic Acid, Pyridoxine Hydrochloride, and Folic Acid to promote healthy peripheral nerve function and cellular metabolism.",
        image: "images/axogain.png",
        statBio: "98%",
        statStage: "Established",
        statRegulatory: "Quality Sourced",
        composition: [
            { name: "Methylcobalamin", desc: "The active form of Vitamin B12, crucial for peripheral nerve health, myelin sheath synthesis, and axonal integrity.", role: "Myelin Support" },
            { name: "Alpha Lipoic Acid", desc: "A powerful universal antioxidant that protects nerve tissues from oxidative stress and supports cellular energy production.", role: "Antioxidant Protection" },
            { name: "Pyridoxine Hydrochloride", desc: "Vitamin B6, essential for amino acid metabolism, nervous system health, and neurotransmitter synthesis.", role: "Nerve Function" },
            { name: "Folic Acid", desc: "Supports DNA synthesis, red blood cell formation, and works in tandem with B12 to promote healthy cellular growth.", role: "Cellular Health" }
        ],
        mechanismText: "Clinically balanced vitamins and antioxidants work in synergy to protect and maintain healthy nerve function.",
        mechanismSteps: [
            { num: 1, title: "Myelin Protection", desc: "Methylcobalamin supports the synthesis of key lipids that constitute the myelin sheath, protecting nerve fibers." },
            { num: 2, title: "Oxidative Stress Reduction", desc: "Alpha Lipoic Acid scavenges free radicals, reducing oxidative stress and protecting sensitive nerve cells." },
            { num: 3, title: "Co-Enzyme Synergy", desc: "Pyridoxine and Folic Acid act as co-enzymes in vital metabolic pathways, supporting overall nervous system vitality." }
        ],
        mechanismImage: "images/products-hero.png"
    },
    crandrop: {
        id: "crandrop",
        title: "Crandrop",
        category: "Urology",
        slogan: "Urinary Tract Care Formula",
        badge: "Urinary Tract Health",
        description: "A clinical formulation designed to deliver high-potency botanical defense. Crandrop promotes comprehensive urinary tract protection and metabolic equilibrium using glycemic-neutral premium elements.",
        image: "images/crandrop.png",
        statBio: "95%",
        statStage: "Established",
        statRegulatory: "Quality Sourced",
        composition: [
            { name: "Standardized Cranberry Extract", desc: "Highly concentrated PACs that prevent bacterial adhesion on mucosal surfaces.", role: "Bacterial Inhibition" },
            { name: "D-Mannose Complex", desc: "A naturally occurring monosaccharide that binds to impurities for smooth, natural clearance.", role: "Impurities Clearance" },
            { name: "Glycemic-Neutral Syrup base", desc: "Pure medical carrier formulated without active sugars, ensuring diabetic patient compatibility.", role: "Patient Safety" }
        ],
        mechanismText: "Multi-modal urinary defense targets impurities, repels cellular threats, and preserves system-wide flora.",
        mechanismSteps: [
            { num: 1, title: "Anti-Adhesion Action", desc: "Proanthocyanidins wrap around cell receptors, blocking impurities from binding with mucosal lining." },
            { num: 2, title: "Impurity Filtration", desc: "D-Mannose binds directly to existing foreign organisms, allowing fast, non-irritant clearance." },
            { num: 3, title: "Gastric Preservation", desc: "The sugar-free molecular structure bypasses gastric breakdown, arriving fully active at the urinary tract." }
        ],
        mechanismImage: "images/products-hero.png"
    },
    flexivora: {
        id: "flexivora",
        title: "Flexivora",
        category: "Orthopedic",
        slogan: "Clinical Strength Joint Support Formula",
        badge: "Orthopedic Solutions",
        description: "Clinical strength joint support tablets formulated with premium Sodium Hyaluronate, Boswellia Serrata Extract, Nano Curcumin, Undenatured Collagen Type II, and Astaxanthin to support joint mobility, cartilage health, and physical comfort.",
        image: "images/flexivora.png",
        statBio: "92%",
        statStage: "Established",
        statRegulatory: "Quality Sourced",
        composition: [
            { name: "Sodium Hyaluronate", desc: "A key component of synovial fluid that helps maintain joint lubrication and shock absorption.", role: "Joint Lubrication" },
            { name: "Boswellia Serrata Extract", desc: "Standardized herbal extract known for its natural support in easing joint discomfort and inflammation.", role: "Inflammatory Support" },
            { name: "Nano Curcumin", desc: "Highly bioavailable form of curcumin that supports cellular health and antioxidant defense in joints.", role: "Antioxidant Support" },
            { name: "Undenatured Collagen Type II", desc: "Supports healthy joint cartilage structure and physical mobility.", role: "Cartilage Support" },
            { name: "Astaxanthin", desc: "A potent carotenoid antioxidant that neutralizes free radicals in joint tissues.", role: "Oxidative Defense" }
        ],
        mechanismText: "Combining clinically studied natural extracts and key joint structural components to support mobility and joint comfort.",
        mechanismSteps: [
            { num: 1, title: "Joint Lubrication", desc: "Sodium Hyaluronate helps maintain the fluid density within joints, promoting smooth mechanical movement." },
            { num: 2, title: "Cartilage Structural Support", desc: "Undenatured Collagen Type II provides essential structural proteins to support natural cartilage health." },
            { num: 3, title: "Antioxidant Protection", desc: "Nano Curcumin and Astaxanthin work in synergy to defend joint cells against oxidative stressors." }
        ],
        mechanismImage: "images/products-hero.png"
    },
    histoheal: {
        id: "histoheal",
        title: "Histoheal",
        category: "Surgeons",
        slogan: "Systemic Enzyme Therapy Tablets",
        badge: "Surgical Recovery Solutions",
        description: "A professional systemic enzyme formulation. Histoheal features a high-activity blend of Trypsin and Chymotrypsin in a 6:1 ratio, providing 100,000 AU of proteolytic enzyme activity to support tissue recovery and natural resolution of swelling.",
        image: "images/histoheal.png",
        statBio: "94%",
        statStage: "Established",
        statRegulatory: "Quality Sourced",
        composition: [
            { name: "Trypsin", desc: "A crucial proteolytic enzyme that breaks down cellular debris at the recovery site, supporting healthy healing processes.", role: "Systemic Debridement" },
            { name: "Chymotrypsin", desc: "Proteolytic enzyme that works synergistically with Trypsin to help resolve local swelling and vascular congestion.", role: "Resolution of Edema" },
            { name: "6:1 Optimized Ratio", desc: "Strictly balanced ratio of Trypsin and Chymotrypsin for clinical efficacy and therapeutic outcome.", role: "Therapeutic Synergy" },
            { name: "100,000 AU Activity", desc: "Ensures standardized high potency and consistent systemic enzymatic action with every tablet.", role: "High Potency Standard" }
        ],
        mechanismText: "Standardized proteolytic enzymes promote systemic support for natural recovery, vascular flow, and resolution of edema.",
        mechanismSteps: [
            { num: 1, title: "Debris Resolution", desc: "Trypsin clears macro-proteins at the site of swelling, fostering a clean recovery environment." },
            { num: 2, title: "Edema Abatement", desc: "Chymotrypsin helps restore normal capillary permeability and fluid drainage, reducing localized congestion." },
            { num: 3, title: "Micro-Circulatory Support", desc: "Enzymatic action supports optimal blood flow and nutrient delivery to recovering tissues." }
        ],
        mechanismImage: "images/products-hero.png"
    },
    "velytra-gel": {
        id: "velytra-gel",
        title: "Velytra-Gel",
        category: "Orthopedic",
        slogan: "Topical Pain Relief Gel",
        badge: "Orthopedic Solutions",
        description: "Velytra-Gel is a highly effective, fast-acting topical pain relief gel. It combines the anti-inflammatory action of Diclofenac Diethylamine with Virgin Linseed Oil, Methyl Salicylate, Menthol, and Capsaicin Gel to target localized joint and muscle discomfort.",
        image: "images/velytra-gel.png",
        statBio: "96%",
        statStage: "Established",
        statRegulatory: "Quality Sourced",
        composition: [
            { name: "Diclofenac Diethylamine", desc: "A potent non-steroidal anti-inflammatory drug (NSAID) that targets localized pain and swelling at the source.", role: "Anti-Inflammatory" },
            { name: "Virgin Linseed Oil", desc: "Contains essential fatty acids that support tissue health and assist in the smooth absorption of active ingredients.", role: "Absorption & Tissue Support" },
            { name: "Methyl Salicylate", desc: "Acts as a counter-irritant, inducing mild local warmth to ease deep muscle and joint stiffness.", role: "Pain Relief" },
            { name: "Menthol & Capsaicin Gel", desc: "Provide a synergistic heating-cooling sensation to rapidly soothe pain receptors and stimulate local blood flow.", role: "Sensory Comfort & Relief" }
        ],
        mechanismText: "Synergistic formulation provides rapid localized relief by targeting inflammatory pathways and soothing painful tissues.",
        mechanismSteps: [
            { num: 1, title: "NSAID Action", desc: "Diclofenac Diethylamine penetrates deep to inhibit cyclooxygenase (COX) enzymes, reducing localized swelling." },
            { num: 2, title: "Counter-Irritant Warmth", desc: "Methyl Salicylate and Capsaicin stimulate local circulation, creating a warming sensation that relieves muscle tension." },
            { num: 3, title: "Sensation Cooling", desc: "Menthol provides a cooling sensation that works in tandem with the warmth to soothe local nerve endings." }
        ],
        mechanismImage: "images/products-hero.png"
    }
};

// 2. High-Performance Canvas Particle System (Molecular / Proteomics Background)
class ProteomicsBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext("2d");
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.init();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.resizeCanvas();
        this.particles = [];
        const particleCount = Math.min(60, Math.floor((this.canvas.width * this.canvas.height) / 18000));
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                radius: Math.random() * 2.5 + 1.5,
                color: i % 2 === 0 ? "#00a99d" : "#76c1ff" // Teal or soft blue
            });
        }
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener("resize", () => {
            this.resizeCanvas();
            this.init();
        });
        window.addEventListener("mousemove", (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        window.addEventListener("mouseout", () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw & Update Particles
        this.particles.forEach((p, idx) => {
            p.x += p.vx;
            p.y += p.vy;

            // Boundary collision
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Mouse interaction (Repel effect)
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    p.x += Math.cos(angle) * force * 2.5;
                    p.y += Math.sin(angle) * force * 2.5;
                }
            }

            // Render Particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = 0.25;
            this.ctx.fill();
            this.ctx.closePath();

            // Connect nearby nodes
            for (let j = idx + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = document.documentElement.classList.contains("dark") ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 27, 61, 0.04)";
                    this.ctx.lineWidth = 0.8;
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }
        });

        this.ctx.globalAlpha = 1.0;
        requestAnimationFrame(() => this.animate());
    }
}

// 3. Client-Side Hash Router
class PortalRouter {
    constructor() {
        this.navLinks = document.querySelectorAll(".nav-link");
        this.views = document.querySelectorAll(".view-pane");
        this.header = document.querySelector("header");
        this.bindEvents();
        this.handleRouting();
    }

    bindEvents() {
        window.addEventListener("hashchange", () => this.handleRouting());
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                this.header.classList.add("scrolled");
            } else {
                this.header.classList.remove("scrolled");
            }
        });
    }

    handleRouting() {
        const hash = window.location.hash || "#home";
        
        // Product detail check
        if (hash.startsWith("#product/")) {
            const productKey = hash.split("/")[1];
            if (FormulationRepository[productKey]) {
                this.renderProductDetail(productKey);
                this.activateView("view-detail", "products");
            } else {
                window.location.hash = "#products";
            }
            return;
        }

        const viewId = `view-${hash.slice(1)}`;
        const viewEl = document.getElementById(viewId);
        if (viewEl) {
            this.activateView(viewId, hash.slice(1));
        } else {
            window.location.hash = "#home";
        }
    }

    activateView(activeViewId, navKey) {
        this.views.forEach(view => {
            if (view.id === activeViewId) {
                view.classList.add("active");
            } else {
                view.classList.remove("active");
            }
        });

        // Set navigation highlight classes
        this.navLinks.forEach(link => {
            if (link.id === `link-${navKey}`) {
                link.classList.add("text-teal-premium", "border-b-2", "border-teal-premium", "font-bold", "pb-1");
                link.classList.remove("text-navy-deep/80", "dark:text-[#eff1f3]/80");
            } else {
                link.classList.remove("text-teal-premium", "border-b-2", "border-teal-premium", "font-bold", "pb-1");
                link.classList.add("text-navy-deep/80", "dark:text-[#eff1f3]/80");
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    renderProductDetail(key) {
        const data = FormulationRepository[key];
        const container = document.getElementById("detail-section");
        if (!container) return;

        // Use local product images — guaranteed to exist
        const productImg = `images/${key}.png`;
        const mechanismImg = `images/products-hero.png`;

        // Icon map — no broken 'text_analysis' icon
        const compositionIcons = ['science', 'shield_with_heart', 'bolt'];

        // Dynamic Product details generation
        container.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-24 py-8">
                <div class="lg:col-span-6 space-y-8">
                    <div>
                        <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-[#78f7e9]/20 text-teal-premium font-mono text-[10px] uppercase tracking-wider mb-6 border border-teal-premium/20 font-bold">
                            ${data.badge}
                        </span>
                        <h1 class="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-deep leading-tight text-gradient dark:text-white mb-6">
                            ${data.title}: ${data.slogan}
                        </h1>
                        <p class="text-base md:text-lg text-navy-deep/75 leading-relaxed dark:text-[#eff1f3]/70">
                            ${data.description}
                        </p>
                    </div>

                    <div class="flex flex-wrap items-center gap-4 md:gap-8 pt-6 border-t border-[#c4c6cf]/20 dark:border-white/5">
                        <div class="flex flex-col">
                            <span class="font-display text-2xl md:text-3xl font-extrabold text-navy-deep dark:text-white">${data.statBio}</span>
                            <span class="font-mono text-[10px] text-navy-deep/40 dark:text-[#eff1f3]/40 font-bold uppercase tracking-wider mt-1">Bio-Absorption</span>
                        </div>
                        <div class="w-px h-10 bg-[#c4c6cf]/20 dark:bg-white/5 hidden sm:block"></div>
                        <div class="flex flex-col">
                            <span class="font-display text-2xl md:text-3xl font-extrabold text-navy-deep dark:text-white">${data.statStage}</span>
                            <span class="font-mono text-[10px] text-navy-deep/40 dark:text-[#eff1f3]/40 font-bold uppercase tracking-wider mt-1">Status</span>
                        </div>
                        <div class="w-px h-10 bg-[#c4c6cf]/20 dark:bg-white/5 hidden sm:block"></div>
                        <div class="flex flex-col">
                            <span class="font-display text-2xl md:text-3xl font-extrabold text-navy-deep dark:text-white">${data.statRegulatory}</span>
                            <span class="font-mono text-[10px] text-navy-deep/40 dark:text-[#eff1f3]/40 font-bold uppercase tracking-wider mt-1">Compliance</span>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                        <a href="https://wa.me/919515436426?text=Hello%20Zenesix,%20I%20am%20a%20healthcare%20professional%20interested%20in%20${data.title}." target="_blank" rel="noopener" class="w-full sm:w-auto px-8 py-4 bg-navy-deep text-white rounded-xl font-bold font-display text-xs tracking-wider uppercase shadow-xl transition-all duration-300 hover:bg-[#1e3a5f] hover:translate-y-[-2px] active:scale-95 flex items-center justify-center gap-2 dark:bg-teal-premium dark:hover:bg-teal-hover">
                            Enquire on WhatsApp
                            <span class="material-symbols-outlined text-sm">chat</span>
                        </a>
                        <a href="#contact" class="w-full sm:w-auto px-8 py-4 border-2 border-teal-premium text-teal-premium rounded-xl font-bold font-display text-xs tracking-wider uppercase hover:bg-teal-premium/5 transition-all duration-300 flex items-center justify-center gap-2">
                            Contact Us
                            <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>

                <div class="lg:col-span-6 relative">
                    <div class="glass-panel p-4 md:p-6 rounded-[32px] md:rounded-[40px] shadow-2xl relative border border-white/50 bg-white">
                        <img src="${productImg}" alt="${data.title} Product" class="w-full h-auto rounded-[24px] md:rounded-[30px] shadow-lg transition-transform duration-700 hover:scale-[1.02] object-contain" onerror="this.style.minHeight='280px';this.style.background='#f0f4f8'"/>
                    </div>
                </div>
            </div>

            <!-- Product Composition -->
            <div class="py-16 border-t border-[#c4c6cf]/20 dark:border-white/5">
                <div class="text-center mb-12 space-y-4">
                    <span class="font-mono text-xs font-bold uppercase tracking-wider text-teal-premium">Formulation Details</span>
                    <h2 class="font-display text-3xl md:text-4xl font-extrabold text-navy-deep dark:text-white">Product Composition</h2>
                    <div class="w-16 h-1 bg-teal-premium mx-auto rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${data.composition.map((c, i) => `
                        <div class="glass-panel p-8 rounded-3xl flex flex-col justify-between gap-8 border-t-4 ${i === 1 ? 'border-t-navy-deep dark:border-t-teal-premium' : 'border-t-teal-premium'} glass-panel-hover shadow-sm">
                            <div class="space-y-6">
                                <div class="w-12 h-12 rounded-2xl ${i === 1 ? 'bg-navy-deep/5 text-navy-deep dark:bg-teal-premium/10 dark:text-teal-premium' : 'bg-teal-premium/10 text-teal-premium'} flex items-center justify-center shadow-inner">
                                    <span class="material-symbols-outlined text-2xl">${compositionIcons[i] || 'medication'}</span>
                                </div>
                                <h3 class="font-display text-xl font-bold text-navy-deep dark:text-white">${c.name}</h3>
                                <p class="text-sm text-navy-deep/70 dark:text-[#eff1f3]/70 leading-relaxed">${c.desc}</p>
                            </div>
                            <span class="font-mono text-[9px] font-bold ${i === 1 ? 'text-navy-deep/50 dark:text-teal-premium' : 'text-teal-premium'} uppercase tracking-widest block border-t border-[#c4c6cf]/20 pt-4 dark:border-white/5">${c.role}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- How It Works -->
            <div class="py-12 md:py-20 bg-navy-deep rounded-[32px] md:rounded-[40px] text-white p-6 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center shadow-xl dark:bg-[#001d31]/80">
                <div class="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-video shadow-2xl border border-white/10">
                    <img src="${mechanismImg}" alt="${data.title} pharmaceutical formulation" class="w-full h-full object-cover brightness-75"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 md:p-8">
                        <div>
                             <h4 class="font-display text-lg md:text-xl font-bold text-white mb-1">Quality Assured</h4>
                             <p class="text-xs text-white/60 font-mono tracking-wider uppercase">WHO-GMP · ISO · GMP-GLP Certified</p>
                        </div>
                    </div>
                </div>
                
                <div class="space-y-8">
                    <div>
                        <span class="font-mono text-xs font-semibold text-[#78f7e9] uppercase tracking-widest block mb-4">How It Works</span>
                        <h2 class="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight">Therapeutic Action</h2>
                        <p class="text-white/70 text-sm md:text-base leading-relaxed mt-4">${data.mechanismText}</p>
                    </div>
                    <div class="space-y-6">
                        ${data.mechanismSteps.map(step => `
                            <div class="flex gap-4">
                                <div class="w-8 h-8 rounded-full border border-teal-premium flex items-center justify-center text-teal-premium shrink-0 text-sm font-bold">${step.num}</div>
                                <div>
                                    <h5 class="font-display font-bold text-base text-[#78f7e9]">${step.title}</h5>
                                    <p class="text-sm text-white/70 leading-relaxed mt-1">${step.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- WhatsApp CTA Strip -->
            <div class="py-12 md:py-16 text-center">
                <p class="text-navy-deep/60 dark:text-[#eff1f3]/60 text-base mb-6">Interested in <strong class="text-navy-deep dark:text-white">${data.title}</strong>? Contact our team for product information and availability.</p>
                <a href="https://wa.me/919515436426?text=Hello%20Zenesix,%20I%20would%20like%20to%20know%20more%20about%20${data.title}." target="_blank" rel="noopener" class="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-2xl font-bold font-display text-sm tracking-wide shadow-lg hover:scale-105 active:scale-95 transition-all">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.389 9.805-9.788.002-2.615-1.01-5.074-2.853-6.918C16.381 2.054 13.916.993 11.3.993c-5.404 0-9.807 4.394-9.809 9.793-.001 1.572.43 3.111 1.246 4.478L1.776 22l6.871-1.782z"/></svg>
                    Chat on WhatsApp
                </a>
            </div>
        `;
    }

    handlePrescriberSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector("button[type='submit']");
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-sm align-middle">refresh</span> PROCESSING...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<span class="material-symbols-outlined text-sm align-middle">check_circle</span> VERIFIED & ENQUIRY FILED';
            btn.style.backgroundColor = "#25D366";
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = "";
                btn.disabled = false;
            }, 3000);
        }, 1800);
    }
}

// 4. Form Validation & Submissions Handler
class ValidationEngine {
    constructor() {
        this.newsletterForm = document.getElementById("home-newsletter-form");
        this.contactForm = document.getElementById("clinical-enquiry-form");
        this.bindEvents();
    }

    bindEvents() {
        if (this.newsletterForm) {
            this.newsletterForm.addEventListener("submit", (e) => this.handleNewsletter(e));
        }
        if (this.contactForm) {
            this.contactForm.addEventListener("submit", (e) => this.handleContact(e));
        }
    }

    handleNewsletter(e) {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector("button[type='submit']");
        const email = form.querySelector("input[type='email']").value;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-sm align-middle">refresh</span>';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<span class="material-symbols-outlined text-sm align-middle">check_circle</span> SUBSCRIBED';
            btn.style.backgroundColor = "#00a99d";
            form.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = "";
                btn.disabled = false;
            }, 3000);
        }, 1200);
    }

    handleContact(e) {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector("button[type='submit']");
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin text-sm align-middle">refresh</span> PROCESSING...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<span class="material-symbols-outlined text-sm align-middle">check_circle</span> CLINICAL ENQUIRY FILED';
            btn.style.backgroundColor = "#25D366";
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = "";
                btn.disabled = false;
            }, 3000);
        }, 1800);
    }
}

// 5. Product Catalog Controller
class CatalogController {
    constructor() {
        this.filters = document.querySelectorAll("#catalog-filters .filter-btn");
        this.searchInput = document.getElementById("catalog-search");
        this.cards = document.querySelectorAll("#catalog-grid article");
        this.bindEvents();
    }

    bindEvents() {
        this.filters.forEach(btn => {
            btn.addEventListener("click", () => {
                this.filters.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.filterCatalog();
            });
        });

        if (this.searchInput) {
            this.searchInput.addEventListener("input", () => this.filterCatalog());
        }
    }

    filterCatalog() {
        const activeFilter = document.querySelector("#catalog-filters .filter-btn.active").getAttribute("data-category");
        const query = this.searchInput.value.toLowerCase().trim();

        this.cards.forEach(card => {
            const cardCat = card.getAttribute("data-category");
            const cardName = card.getAttribute("data-name");
            const matchFilter = (activeFilter === "all" || cardCat === activeFilter);
            const matchQuery = (cardName.includes(query) || card.textContent.toLowerCase().includes(query));

            if (matchFilter && matchQuery) {
                card.style.display = "flex";
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
            } else {
                card.style.opacity = "0";
                card.style.transform = "scale(0.95)";
                setTimeout(() => {
                    if (card.style.opacity === "0") {
                        card.style.display = "none";
                    }
                }, 300);
            }
        });
    }
}

// 6. Navigation Controls & Interface Polish
class InterfacePolish {
    constructor() {
        this.menuToggle = document.getElementById("menu-toggle");
        this.closeDrawer = document.getElementById("close-drawer");
        this.drawer = document.getElementById("mobile-drawer");
        this.overlay = document.getElementById("mobile-menu-overlay");
        this.drawerLinks = document.querySelectorAll("#mobile-drawer nav a");
        this.themeToggles = [document.getElementById("theme-toggle"), document.getElementById("theme-toggle-mobile")];
        
        this.initTheme();
        this.bindEvents();
    }

    initTheme() {
        // Respect localStorage parameters
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    toggleTheme() {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }

    bindEvents() {
        this.menuToggle.addEventListener("click", () => {
            this.drawer.classList.remove("translate-x-full");
            this.overlay.classList.remove("hidden");
        });

        const hideDrawer = () => {
            this.drawer.classList.add("translate-x-full");
            this.overlay.classList.add("hidden");
        };

        this.closeDrawer.addEventListener("click", hideDrawer);
        this.overlay.addEventListener("click", hideDrawer);
        this.drawerLinks.forEach(link => link.addEventListener("click", hideDrawer));

        this.themeToggles.forEach(btn => {
            if (btn) btn.addEventListener("click", () => this.toggleTheme());
        });
    }
}

// 6.5 Premium Count-Up Animation Engine
class CountUpController {
    constructor() {
        this.elements = document.querySelectorAll(".count-up");
        if (this.elements.length > 0) {
            this.initObserver();
        }
    }

    initObserver() {
        const options = {
            root: null,
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCount(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, options);

        this.elements.forEach(el => observer.observe(el));
    }

    animateCount(el) {
        const target = parseInt(el.getAttribute("data-target"), 10) || 5;
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1500; // ms transition duration for premium feel
        const start = parseInt(el.getAttribute("data-start") || "1", 10);
        const startTime = performance.now();

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out quad formula for smooth decelerating counting speed
            const easeProgress = progress * (2 - progress);
            const current = Math.floor(easeProgress * (target - start) + start);
            el.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target + suffix;
            }
        };

        requestAnimationFrame(step);
    }
}

// 7. System Initialization
document.addEventListener("DOMContentLoaded", () => {
    new ProteomicsBackground("molecular-canvas");
    new PortalRouter();
    new ValidationEngine();
    new CatalogController();
    new InterfacePolish();
    new CountUpController();
});

