/* ==========================================================================
   ZENESIX PREMIUM PHARMACEUTICALS - APPLICATION ENGINE
   ========================================================================== */

// 1. Core Formulation Specs & Data Repository
const FormulationRepository = {
    axogain: {
        id: "axogain",
        title: "Axogain",
        category: "Neurology",
        slogan: "Restoring the Pathways of Thought",
        badge: "Neuro-Regenerative Science",
        description: "A breakthrough in clinical neurobiology. Axogain facilitates targeted myelin sheath restoration and nerve health through a high-bioavailability formulation of Methylcobalamin and Alpha-Lipoic Acid.",
        image: "https://lh3.googleusercontent.com/aida/ADBb0ugC1pchncINZIXUvp5Ibi4OSbH6OH2ja9gXlo019qKAjMCQR5zrEc4QO647WkTjPsQca6Ys0TF3W6pbijXUjoW-0ctaNIs4_bIW55Gwn3KBTnWCdsqBrriaw7T9-ZNBLOoA4VoLWoyzlcMbWK5vOm6FTqVCvRQLS6C3fj06hA7nj4tyzwVdB7H4JhwYO8NffBSmj03cau2gBponv1emnvOMwzDwUMrheZs-2G2e-rHKSd7wrHX1Z8Zq9t8",
        statBio: "98%",
        statStage: "Phase III",
        statRegulatory: "FDA Track 1",
        composition: [
            { name: "Methylcobalamin (B12)", desc: "A neurologically active form of Vitamin B12 that crosses the blood-brain barrier effectively, essential for myelin maintenance.", role: "Neural Sheath Repair" },
            { name: "Alpha-Lipoic Acid (ALA)", desc: "Universal antioxidant that neutralizes oxidative stress in both water and fat-soluble neural environments.", role: "Neuroprotection" },
            { name: "Bio-Availability Complex", desc: "Proprietary transport matrix that optimizes absorption rates within the gastric environment for maximum neural delivery.", role: "Optimized Delivery" }
        ],
        mechanismText: "Precision-engineered molecular components work in synergy to protect and repair neural pathways at a cellular level.",
        mechanismSteps: [
            { num: 1, title: "Myelin Sheath Repair", desc: "Active methylcobalamin molecules initiate the synthesis of lecithin and sphingomyelin, patching damaged neural insulation." },
            { num: 2, title: "Oxidative Stress Abatement", desc: "ALA scavenges free radicals that cause neuropathic and age-related neural degradation, preserving synaptic integrity." },
            { num: 3, title: "Glutathione Restoration", desc: "Supports the body's natural defense by recycling Vitamin C and E, fostering a sustainable healing environment." }
        ],
        mechanismImage: "https://lh3.googleusercontent.com/aida/ADBb0uiC1YhZCkkZC1tVQowYU99m7b4veg3PmTCvXk_3Xj5Q-9CaCokdq9t7u5sVwbqTm9zFUgu3mCYWuIOIbWtXfRtdddyAOEAQpV8Owsuayw0vuWA5LV2zjmz97nLFOC9On9qppd3hm0L1JBUyutH65NtV6xtf68pGWcONIyyI2piwdTo2tx12Z0MvDcv2PgcuQzNP9XF6N9_ib2Rc8FKV5uLy39i8zajm7v1iZ3AQB-Vp0GzVaK3l4ONk-yY"
    },
    crandrop: {
        id: "crandrop",
        title: "Crandrop",
        category: "Urology",
        slogan: "Advanced Cellular Protection System",
        badge: "Urinary Tract Health",
        description: "A clinical formulation designed to deliver high-potency botanical defense. Crandrop promotes comprehensive urinary tract protection and metabolic equilibrium using glycemic-neutral premium elements.",
        image: "https://lh3.googleusercontent.com/aida/ADBb0uigmwFuKA3WXnNDztRx6D1XsBsQ0gg1gsVLU4LFzctYj2aGM9r82IIe2qAvqDzq5dlQBvtCOX4g8rLibtfDPEl2bv0UNlayrHdNpqBZutN-8Dp7aoqzn45wNZ_sAdII9oCsuYz5CUscoP_oXarz7ANFZ4eX-U-8b7XjHlHr3U8I6FCxBG9D2x3MGCOSC8TgpTEjX-QwvmWQys1s-IiQAjyWLZrUTtJQyWAQgPGSRLd4swyTChhibcev_fU",
        statBio: "95%",
        statStage: "Established",
        statRegulatory: "WHO Compliant",
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
        mechanismImage: "https://lh3.googleusercontent.com/aida/ADBb0uiC1YhZCkkZC1tVQowYU99m7b4veg3PmTCvXk_3Xj5Q-9CaCokdq9t7u5sVwbqTm9zFUgu3mCYWuIOIbWtXfRtdddyAOEAQpV8Owsuayw0vuWA5LV2zjmz97nLFOC9On9qppd3hm0L1JBUyutH65NtV6xtf68pGWcONIyyI2piwdTo2tx12Z0MvDcv2PgcuQzNP9XF6N9_ib2Rc8FKV5uLy39i8zajm7v1iZ3AQB-Vp0GzVaK3l4ONk-yY"
    },
    flexivora: {
        id: "flexivora",
        title: "Flexivora",
        category: "Orthopedic",
        slogan: "Next-Gen Joint Restoration Matrix",
        badge: "Orthopedic Solutions",
        description: "Clinical strength joint support capsules utilizing advanced bio-available collagen and micro-mineral complexes to accelerate mobility recovery and cartilage tissue health.",
        image: "https://lh3.googleusercontent.com/aida/ADBb0uhvFCTp-FkRZtDzEBusBvYNtxd0FRFZA8aRgwsCbzQf7qSPMCXMpptbngVuCCePld6NjUFYVV0fI3gOosthclt56CezHQAyYr8N5epgB3O5EnY3Y4lPvf-0mHH6ElSZhSCrlccJKdUM_hpEohRj4vTzOt-Ig_AGYg68HLCUE-1lM2MEs90cU2LC9RnMGiawK-sSpjES0Lsys4m0MS2yBcRqOCiS8U30t_MTcDzVqltkcfKsjwS9Pj2DMw",
        statBio: "92%",
        statStage: "Phase II",
        statRegulatory: "EMA Listed",
        composition: [
            { name: "Bio-Available Type II Collagen", desc: "Provides structural building blocks required to replenish worn joint cushions naturally.", role: "Cartilage Synthesis" },
            { name: "Micro-Mineral Complex", desc: "High-grade synergy of Manganese and Boron essential for bone matrix density.", role: "Density Enrichment" },
            { name: "Hyaluronic Acid Booster", desc: "Restores joint fluid viscosity, reducing friction and localized mechanical wear.", role: "Synovial Lubrication" }
        ],
        mechanismText: "Rebuilding mechanical integrity through enzymatic triggers and deep structural supplementation.",
        mechanismSteps: [
            { num: 1, title: "Synovial Hydration", desc: "Active agents stimulate fluid synthesis within the joint pocket, easing friction instantly." },
            { num: 2, title: "Chondrocyte Activation", desc: "Peptides act as messenger molecules, signaling specialized cells to produce new cartilage matrix." },
            { num: 3, title: "Matrix Stabilization", desc: "Trace micro-minerals cross-link collagen strands, solidifying structural stability." }
        ],
        mechanismImage: "https://lh3.googleusercontent.com/aida/ADBb0uiC1YhZCkkZC1tVQowYU99m7b4veg3PmTCvXk_3Xj5Q-9CaCokdq9t7u5sVwbqTm9zFUgu3mCYWuIOIbWtXfRtdddyAOEAQpV8Owsuayw0vuWA5LV2zjmz97nLFOC9On9qppd3hm0L1JBUyutH65NtV6xtf68pGWcONIyyI2piwdTo2tx12Z0MvDcv2PgcuQzNP9XF6N9_ib2Rc8FKV5uLy39i8zajm7v1iZ3AQB-Vp0GzVaK3l4ONk-yY"
    },
    histoheal: {
        id: "histoheal",
        title: "Histoheal",
        category: "Surgeons",
        slogan: "Advanced Tissue Regeneration Matrix",
        badge: "Surgical Recovery Solutions",
        description: "State-of-the-art topical regenerative cream designed to soothe inflammation, accelerate post-operative skin barrier recovery, and repair complex epidermal tissue damage.",
        image: "https://lh3.googleusercontent.com/aida/ADBb0uigGB5WW0LIbX0xq14r4l-2FZ6ElkuJPiZMY2MwPD4ZVEhJDxbgJK0oASvJBdAfZJnK3m0DQ0mR_aQhAVbgp9XsObdxDcGTZUOBO9kzIa8e7NaZIsqWP4Bh6dKb5svlFrA9_EvIxTfU0O-qkUC0F42_ihbSM3eUdy_YQP5EUaypkGJjdbkrv_zU6I6Rac8-1bnJAERCpj44oBS0mIF725QXxxCrGcNJlmBU1vNWzYVjjA9fwsSN1_mUNg",
        statBio: "94%",
        statStage: "Approved",
        statRegulatory: "WHO-GMP Sourced",
        composition: [
            { name: "Proteolytic Enzyme Matrix", desc: "Gently digests damaged proteins on epidermal surfaces, preparing the field for repair.", role: "Epidermal Debridement" },
            { name: "Centella Asiatica Peptide", desc: "A powerful botanical signaling compound that speeds up fibroblast synthesis significantly.", role: "Fibroblast Triggers" },
            { name: "Ceramide NP Lipid base", desc: "Mimics natural skin lipids to lock in moisture and establish a protective sterile barrier.", role: "Barrier Fortification" }
        ],
        mechanismText: "Accelerated tissue recovery through cellular signaling and lipid barrier restoration.",
        mechanismSteps: [
            { num: 1, title: "Debris Clearance", desc: "Proteolytic enzymes sweep micro-wastes, clearing space for fresh epidermal development." },
            { num: 2, title: "Collagen Proliferation", desc: "Phyto-peptides trigger rapid cellular division, forming a new tissue web quickly." },
            { num: 3, title: "Lipid Matrix Lock", desc: "High-density ceramides seal the barrier, blocking atmospheric impurities and maintaining hydration." }
        ],
        mechanismImage: "https://lh3.googleusercontent.com/aida/ADBb0uiC1YhZCkkZC1tVQowYU99m7b4veg3PmTCvXk_3Xj5Q-9CaCokdq9t7u5sVwbqTm9zFUgu3mCYWuIOIbWtXfRtdddyAOEAQpV8Owsuayw0vuWA5LV2zjmz97nLFOC9On9qppd3hm0L1JBUyutH65NtV6xtf68pGWcONIyyI2piwdTo2tx12Z0MvDcv2PgcuQzNP9XF6N9_ib2Rc8FKV5uLy39i8zajm7v1iZ3AQB-Vp0GzVaK3l4ONk-yY"
    },
    "velytra-gel": {
        id: "velytra-gel",
        title: "Velytra-Gel",
        category: "Orthopedic",
        slogan: "Bio-Adaptive Pain Relief Matrix",
        badge: "Orthopedic Solutions",
        description: "Transdermal analgesic gel featuring a non-greasy rapid absorption matrix to eliminate localized inflammation, muscle soreness, and joint stiffness.",
        image: "https://lh3.googleusercontent.com/aida/ADBb0ugrLwCZOjykuanhsrDwlEX4ND2XGHPWOU1JHeidbEhaQSa_g9JBHViYXiwmrHCp4DeNF6Zk2TLGf9IXkMF0Cqis6_hcJpV5gg316dM96_QxpQpRM76pYXCeFrAeqx572DtZ2nJCRn-zb1-q7vu30Jng8_o-2X6JxwINNOyw4Q3pkB64hNXW0ZREkRJRTfu7Ize-Y2d6FqrpZhYW6yUgxTW-2r3AmeQB_7_oR9mWyW70DOqSilJurj5ATEM",
        statBio: "96%",
        statStage: "Phase III",
        statRegulatory: "FDA Track 2",
        composition: [
            { name: "Non-Steroidal Active Analgesic", desc: "Targets pain pathways directly, blocking inflammatory enzymes fast.", role: "Analgesic Action" },
            { name: "Transdermal Hydrogel Matrix", desc: "A cooling, non-greasy carrier that enhances tissue penetration depth.", role: "Deep Penetration" },
            { name: "Mentha Piperita coolant", desc: "Induces an immediate thermal reaction that desensitizes localized pain fibers.", role: "Thermal Comfort" }
        ],
        mechanismText: "Immediate localized comfort achieved through cooling thermal triggers and deep penetrative NSAID absorption.",
        mechanismSteps: [
            { num: 1, title: "Cooling Desensitization", desc: "Active cooling agents stimulate sensory nerve terminals, reducing immediate pain awareness." },
            { num: 2, title: "Deep Derm-Penetration", desc: "The aqueous hydrogel pushes primary analgesics through skin layers directly to muscle tissues." },
            { num: 3, title: "COX-Enzyme Blockage", desc: "NSAIDs shut down inflammatory pathways, alleviating local swelling and muscle tension." }
        ],
        mechanismImage: "https://lh3.googleusercontent.com/aida/ADBb0uiC1YhZCkkZC1tVQowYU99m7b4veg3PmTCvXk_3Xj5Q-9CaCokdq9t7u5sVwbqTm9zFUgu3mCYWuIOIbWtXfRtdddyAOEAQpV8Owsuayw0vuWA5LV2zjmz97nLFOC9On9qppd3hm0L1JBUyutH65NtV6xtf68pGWcONIyyI2piwdTo2tx12Z0MvDcv2PgcuQzNP9XF6N9_ib2Rc8FKV5uLy39i8zajm7v1iZ3AQB-Vp0GzVaK3l4ONk-yY"
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
                            <span class="font-mono text-[10px] text-navy-deep/40 dark:text-[#eff1f3]/40 font-bold uppercase tracking-wider mt-1">Clinical Phase</span>
                        </div>
                        <div class="w-px h-10 bg-[#c4c6cf]/20 dark:bg-white/5 hidden sm:block"></div>
                        <div class="flex flex-col">
                            <span class="font-display text-2xl md:text-3xl font-extrabold text-navy-deep dark:text-white">${data.statRegulatory}</span>
                            <span class="font-mono text-[10px] text-navy-deep/40 dark:text-[#eff1f3]/40 font-bold uppercase tracking-wider mt-1">Regulatory</span>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                        <button class="w-full sm:w-auto px-8 py-4 bg-navy-deep text-white rounded-xl font-bold font-display text-xs tracking-wider uppercase shadow-xl transition-all duration-300 hover:bg-[#1e3a5f] hover:translate-y-[-2px] hover:shadow-navy-deep/20 active:scale-95 flex items-center justify-center gap-2 dark:bg-teal-premium dark:hover:bg-teal-hover" id="request-clinical-data-btn">
                            Request Clinical Data
                            <span class="material-symbols-outlined text-sm">description</span>
                        </button>
                        <a href="https://wa.me/919515436426?text=Hello%20Zenesix,%20I%20am%20a%20healthcare%20professional%20interested%20in%20${data.title}." target="_blank" rel="noopener" class="w-full sm:w-auto px-8 py-4 border-2 border-teal-premium text-teal-premium rounded-xl font-bold font-display text-xs tracking-wider uppercase hover:bg-teal-premium/5 transition-all duration-300 flex items-center justify-center gap-2">
                            WhatsApp Support
                            <span class="material-symbols-outlined text-sm">chat</span>
                        </a>
                    </div>
                </div>

                <div class="lg:col-span-6 relative">
                    <div class="glass-panel p-4 md:p-6 rounded-[32px] md:rounded-[40px] shadow-2xl relative border border-white/50 bg-white/60">
                        <img src="${data.image}" alt="${data.title} Box Packaging" class="w-full h-auto rounded-[24px] md:rounded-[30px] shadow-lg transition-transform duration-700 hover:scale-[1.02]"/>
                    </div>
                </div>
            </div>

            <!-- Core Molecular Composition -->
            <div class="py-24 border-t border-[#c4c6cf]/20 dark:border-white/5">
                <div class="text-center mb-16 space-y-4">
                    <span class="font-mono text-xs font-bold uppercase tracking-wider text-teal-premium">Core Formulation Spec</span>
                    <h2 class="font-display text-3xl md:text-4xl font-extrabold text-navy-deep dark:text-white">Molecular Composition</h2>
                    <div class="w-16 h-1 bg-teal-premium mx-auto rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${data.composition.map((c, i) => `
                        <div class="glass-panel p-8 rounded-3xl flex flex-col justify-between gap-8 border-t-4 ${i === 1 ? 'border-t-navy-deep dark:border-t-teal-premium' : 'border-t-teal-premium'} glass-panel-hover shadow-sm">
                            <div class="space-y-6">
                                <div class="w-12 h-12 rounded-2xl ${i === 1 ? 'bg-navy-deep/5 text-navy-deep dark:bg-teal-premium/10 dark:text-teal-premium' : 'bg-teal-premium/10 text-teal-premium'} flex items-center justify-center shadow-inner">
                                    <span class="material-symbols-outlined text-2xl">${i === 1 ? 'shield_with_heart' : i === 0 ? 'text_analysis' : 'bolt'}</span>
                                </div>
                                <h3 class="font-display text-xl font-bold text-navy-deep dark:text-white">${c.name}</h3>
                                <p class="text-sm text-navy-deep/70 dark:text-[#eff1f3]/70 leading-relaxed">${c.desc}</p>
                            </div>
                            <span class="font-mono text-[9px] font-bold ${i === 1 ? 'text-navy-deep/50 dark:text-teal-premium' : 'text-teal-premium'} uppercase tracking-widest block border-t border-[#c4c6cf]/20 pt-4 dark:border-white/5">${c.role}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Scientific Mechanism of Action -->
            <div class="py-12 md:py-24 bg-navy-deep rounded-[32px] md:rounded-[40px] text-white p-6 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center shadow-xl dark:bg-[#001d31]/80">
                <div class="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-video shadow-2xl border border-white/10">
                    <img src="${data.mechanismImage}" alt="Microscopic axonal pathway synthesis render" class="w-full h-full object-cover brightness-90"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-8">
                        <div>
                            <h4 class="font-display text-lg md:text-xl font-bold text-white mb-2">Cellular Action</h4>
                            <p class="text-xs text-white/60 font-mono tracking-wider uppercase">High-precision diagnostic imaging</p>
                        </div>
                    </div>
                </div>
                
                <div class="space-y-8">
                    <div>
                        <span class="font-mono text-xs font-semibold text-[#78f7e9] uppercase tracking-widest block mb-4">Scientific Pathway</span>
                        <h2 class="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight">Mechanism of Action</h2>
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

            <!-- Prescriber Verification Enquiry Form -->
            <div class="py-12 md:py-24">
                <div class="glass-panel rounded-[32px] md:rounded-[40px] p-6 md:p-16 border border-teal-premium/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    <div class="lg:col-span-5 space-y-6">
                        <span class="font-mono text-xs font-semibold text-teal-premium uppercase tracking-widest block">Medical Professionals Portal</span>
                        <h2 class="font-display text-2xl md:text-3xl font-extrabold text-navy-deep dark:text-white leading-tight">Healthcare Professional Enquiry</h2>
                        <p class="text-sm md:text-base text-navy-deep/70 dark:text-[#eff1f3]/70 leading-relaxed">
                            Access peer-reviewed clinical studies, comparative trials, and standard dosage guidelines for <strong>${data.title}</strong>. Our product support desk is available to coordinate institutional requests.
                        </p>
                        <ul class="space-y-3.5 pt-2">
                            <li class="flex items-center gap-3.5">
                                <span class="material-symbols-outlined text-teal-premium text-[20px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                <span class="text-sm font-semibold text-navy-deep/80 dark:text-[#eff1f3]/80">Request Sample Formulation Kits</span>
                            </li>
                            <li class="flex items-center gap-3.5">
                                <span class="material-symbols-outlined text-teal-premium text-[20px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                <span class="text-sm font-semibold text-navy-deep/80 dark:text-[#eff1f3]/80">Schedule Virtual Clinical Consultation</span>
                            </li>
                            <li class="flex items-center gap-3.5">
                                <span class="material-symbols-outlined text-teal-premium text-[20px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                <span class="text-sm font-semibold text-navy-deep/80 dark:text-[#eff1f3]/80">Register for Institutional Pricing Desk</span>
                            </li>
                        </ul>
                    </div>

                    <form class="lg:col-span-7 space-y-6" id="prescriber-enquiry-form">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="font-mono text-[10px] font-bold text-navy-deep/60 dark:text-[#eff1f3]/60 uppercase tracking-widest ml-1">Full Name</label>
                                <input class="w-full h-12 px-4 rounded-xl glass-well focus:ring-0 outline-none transition-all placeholder:text-navy-deep/30 dark:placeholder:text-white/30 text-sm font-semibold" placeholder="Dr. Sarah Jenkins" type="text" required/>
                            </div>
                            <div class="space-y-2">
                                <label class="font-mono text-[10px] font-bold text-navy-deep/60 dark:text-[#eff1f3]/60 uppercase tracking-widest ml-1">Medical License ID</label>
                                <input class="w-full h-12 px-4 rounded-xl glass-well focus:ring-0 outline-none transition-all placeholder:text-navy-deep/30 dark:placeholder:text-white/30 text-sm font-semibold" placeholder="NPI-000000" type="text" required/>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="font-mono text-[10px] font-bold text-navy-deep/60 dark:text-[#eff1f3]/60 uppercase tracking-widest ml-1">Affiliated Institution</label>
                            <input class="w-full h-12 px-4 rounded-xl glass-well focus:ring-0 outline-none transition-all placeholder:text-navy-deep/30 dark:placeholder:text-white/30 text-sm font-semibold" placeholder="General Medical Clinic" type="text" required/>
                        </div>
                        <div class="space-y-2">
                            <label class="font-mono text-[10px] font-bold text-navy-deep/60 dark:text-[#eff1f3]/60 uppercase tracking-widest ml-1">Professional Email</label>
                            <input class="w-full h-12 px-4 rounded-xl glass-well focus:ring-0 outline-none transition-all placeholder:text-navy-deep/30 dark:placeholder:text-white/30 text-sm font-semibold" placeholder="s.jenkins@medical-clinic.org" type="email" required/>
                        </div>
                        <button class="w-full py-4 bg-teal-premium text-white rounded-xl font-bold font-display text-xs tracking-wider uppercase hover:bg-teal-hover transition-colors shadow-lg active:scale-[0.98]" type="submit">Submit Verification Request</button>
                        <p class="text-center text-navy-deep/45 dark:text-[#eff1f3]/45 font-mono text-[9px] uppercase tracking-widest mt-4">HIPAA compliant data processing secured by Zenesix Privacy Vault.</p>
                    </form>
                </div>
            </div>
        `;

        // Bind form submit event
        const prescriberForm = document.getElementById("prescriber-enquiry-form");
        if (prescriberForm) {
            prescriberForm.addEventListener("submit", (e) => this.handlePrescriberSubmit(e));
        }

        // Bind request clinical data button event
        const reqBtn = document.getElementById("request-clinical-data-btn");
        if (reqBtn) {
            reqBtn.addEventListener("click", () => {
                alert(`Your verification parameters are required to download the peer-reviewed clinical dossiers for ${data.title}. Please fill out the Healthcare Professional Enquiry form below.`);
                prescriberForm.scrollIntoView({ behavior: "smooth" });
            });
        }
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

