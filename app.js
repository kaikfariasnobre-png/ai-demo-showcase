/**
 * Agency Showcase & Checkout configuration.
 * Replace placeholder payment links and WhatsApp number before publishing live.
 */
const CONFIG = {
  brandName: "Atlas Studio AI",
  // Digits only with country code (e.g. "5511999999999"). Empty opens WhatsApp picker safely.
  whatsappNumber: "554799677334",
  defaultLang: "pt-BR",
  defaultCurrency: "BRL",
  checkout: {
    BRL: {
      provider: "AbacatePay / Mercado Pago Pix",
      express: "#checkout-pix-express",
      pro: "#checkout-pix-pro",
      sprint: "#checkout-pix-sprint",
    },
    USD: {
      provider: "Stripe / Paddle",
      express: "#checkout-usd-express",
      pro: "#checkout-usd-pro",
      sprint: "#checkout-usd-sprint",
    },
  },
};

const I18N = {
  "pt-BR": {
    nav_demos: "Previews",
    nav_process: "Como Funciona",
    nav_pricing: "Planos",
    nav_faq: "FAQ",
    nav_cta: "Ver Planos",
    hero_badge: "R$ 0 adiantado • Veja seu site funcionando antes de pagar",
    hero_title: "Transformamos negócios locais em máquinas de agendamento no WhatsApp.",
    hero_subtitle:
      "Sem reuniões intermináveis nem pagamento antecipado. Auditamos sua presença atual, geramos um preview mobile-first personalizado com suas informações reais e você só paga se aprovar o resultado.",
    hero_cta_primary: "Explorar Previews ao Vivo",
    hero_cta_wa: "Pedir Meu Preview Grátis",
    proof_1: "✓ Entrega em 24h com código limpo e ultra-rápido",
    proof_2: "✓ Sem mensalidade obrigatória de hospedagem",
    proof_3: "✓ Pix / Cartão com emissão simplificada (CPF ou CNPJ)",
    audit_tag: "Auditoria Técnica Instantânea",
    audit_chip: "Pronto para Mobile",
    card_item1_t: "Funil Direto para WhatsApp",
    card_item1_d:
      "Botões estratégicos com mensagem pré-preenchida para converter visitantes em orçamento em 1 clique.",
    card_item2_t: "Carregamento Instantâneo & SSL",
    card_item2_d:
      "Arquitetura estática leve sem plugins lentos, 100% responsiva em telas 390px e segura com HTTPS.",
    card_item3_t: "Zero Risco na Contratação",
    card_item3_d: "Você testa o link real do seu preview no celular antes de investir R$ 0,01.",
    demos_kicker: "GALERIA INTERATIVA",
    demos_title: "Veja na prática como fica o seu novo site",
    demos_desc:
      "Alterne entre demonstrações geradas pelo nosso motor ou modelos interativos por nicho e teste a visualização mobile e desktop em tempo real.",
    view_desktop: "Desktop",
    view_mobile: "Mobile 390px",
    preview_open: "Abrir em Nova Aba",
    process_kicker: "FLUXO SEM FRICÇÃO",
    process_title: "Do diagnóstico ao site no ar em 3 passos",
    step1_t: "Auditoria & Diagnóstico Real",
    step1_d:
      "Analisamos sua ficha pública, SSL, layout mobile e presença de botões de agendamento rápido.",
    step2_t: "Preview Vivo Gratuito",
    step2_d:
      "Publicamos um link privado de demonstração com seus serviços e WhatsApp já conectados para você testar.",
    step3_t: "Aprovação, Pix/Card & Deploy",
    step3_d:
      "Aprovou o preview? Você paga via Pix ou cartão e conectamos ao seu domínio ou hospedagem gratuita $0/mês.",
    pricing_kicker: "INVESTIMENTO TRANSPARENTE",
    pricing_title: "Escolha o pacote ideal após aprovar seu preview",
    pricing_desc:
      "Sem taxas escondidas. Pagamento aceito via Pix (AbacatePay / Mercado Pago) no Brasil ou Cartão Internacional (Stripe / Paddle) em USD.",
    tier1_name: "Express WhatsApp",
    tier1_sub: "Página de alta conversão pronta em 24h",
    tier2_badge: "Mais Escolhido",
    tier2_name: "Pro Growth + Care",
    tier2_sub: "Site completo + atualizações mensais e suporte",
    tier3_name: "Custom AI Funnel",
    tier3_sub: "Estrutura multi-serviço e automação de leads",
    period_once: "pagamento único",
    t1_f1: "✓ Design mobile-first ultrarrápido",
    t1_f2: "✓ Copy persuasiva gerada para seu nicho",
    t1_f3: "✓ Botão flutuante e CTA direto no WhatsApp",
    t1_f4: "✓ Hospedagem estática $0/mês configurada",
    t2_f1: "✓ Tudo do plano Express WhatsApp",
    t2_f2: "✓ Seções extras: Serviços, FAQ e Mapa/Contato",
    t2_f3: "✓ Integração com nota real verificada do Google",
    t2_f4: "✓ Ajustes de texto/ofertas todo mês via WhatsApp",
    t3_f1: "✓ Múltiplas páginas ou vitrines por serviço",
    t3_f2: "✓ Roteiro de mensagem pré-qualificada por serviço",
    t3_f3: "✓ Configuração de domínio próprio e DNS/SSL",
    t3_f4: "✓ Prioridade total e entrega assistida",
    tier_cta: "Aprovar & Pagar Agora",
    payment_note:
      "Meios suportados sem CNPJ obrigatório: Pix Instantâneo (AbacatePay / Mercado Pago) e Cartão Global (Stripe / Paddle).",
    faq_title: "Perguntas Frequentes",
    faq1_q: 'Como funciona o modelo "R$ 0 adiantado"?',
    faq1_a:
      "Nós pesquisamos seu negócio, identificamos melhorias de conversão e montamos um preview online real antes de cobrar. Você só realiza o pagamento se gostar da versão pronta.",
    faq2_q: "Preciso pagar hospedagem mensal cara?",
    faq2_a:
      "Não. Entregamos o site em arquitetura estática otimizada que roda com SSL gratuito em infraestrutura global (Cloudflare Pages ou GitHub Pages) com custo mensal zero.",
    faq3_q: "Como é feito o pagamento e em quanto tempo vai ao ar?",
    faq3_a:
      "No Brasil aceitamos Pix instantâneo (AbacatePay / Mercado Pago); fora do Brasil, pagamento seguro em USD via Stripe/Paddle. A publicação final acontece em até 24 horas após aprovação.",
    footer_tag: "Engenharia de conversão mobile-first e automação local.",
    footer_cta: "Falar no WhatsApp",
    modal_rail_label: "Canal de Pagamento Selecionado:",
    modal_wa_btn: "Solicitar Chave Pix / Link no WhatsApp",
    modal_instructions:
      "Você só paga após testar e aprovar o preview personalizado do seu negócio. Clique abaixo para solicitar a chave Pix instantânea ou link de pagamento direto pelo WhatsApp.",
    wa_default_msg:
      "Olá! Quero solicitar um preview gratuito de site otimizado para WhatsApp para o meu negócio.",
    demo_badge_live: "Preview Gerado",
    demo_badge_template: "Modelo Demonstrativo",
  },
  en: {
    nav_demos: "Previews",
    nav_process: "How It Works",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_cta: "View Pricing",
    hero_badge: "$0 upfront • Test your live site before you pay a cent",
    hero_title: "We turn local businesses into high-converting WhatsApp booking machines.",
    hero_subtitle:
      "No endless meetings or upfront retainers. We audit your current web presence, build a mobile-first live preview using your real business details, and you only pay if you love it.",
    hero_cta_primary: "Explore Live Previews",
    hero_cta_wa: "Request Free Preview",
    proof_1: "✓ 24h delivery with clean, ultra-fast code",
    proof_2: "✓ Zero mandatory monthly hosting fees",
    proof_3: "✓ Instant Pix (BRL) or International Card (USD)",
    audit_tag: "Instant Technical Audit",
    audit_chip: "Mobile-Ready",
    card_item1_t: "Direct WhatsApp Conversion Funnel",
    card_item1_d:
      "Strategic CTAs with pre-filled booking messages to turn mobile visitors into leads in 1 tap.",
    card_item2_t: "Instant Load Speed & SSL",
    card_item2_d:
      "Lightweight static architecture with zero bloat, responsive at 390px mobile width, and HTTPS secured.",
    card_item3_t: "Zero-Risk Approval Model",
    card_item3_d: "Inspect your live preview link on your own phone before paying $0.01.",
    demos_kicker: "INTERACTIVE SHOWCASE",
    demos_title: "See how your upgraded web presence looks live",
    demos_desc:
      "Switch between live generated client demos or interactive niche blueprints and test Desktop vs 390px Mobile views directly below.",
    view_desktop: "Desktop",
    view_mobile: "Mobile 390px",
    preview_open: "Open in New Tab",
    process_kicker: "FRICTIONLESS WORKFLOW",
    process_title: "From audit to live conversion site in 3 steps",
    step1_t: "Real Audit & Gap Diagnosis",
    step1_d:
      "We verify your public profile, SSL status, mobile layout health, and direct booking links.",
    step2_t: "Free Live Preview Link",
    step2_d:
      "We deploy an interactive preview tailored to your niche and connected to your WhatsApp for review.",
    step3_t: "Approve, Pay & Launch",
    step3_d:
      "Love the preview? Complete checkout via Stripe/Paddle or Pix and we launch on your domain or $0/mo hosting.",
    pricing_kicker: "TRANSPARENT PRICING",
    pricing_title: "Pick the package that fits after approving your preview",
    pricing_desc:
      "No hidden retainers. Pay in USD via Stripe / Paddle or in BRL via instant Pix (AbacatePay / Mercado Pago).",
    tier1_name: "Express WhatsApp",
    tier1_sub: "High-converting single page ready in 24h",
    tier2_badge: "Most Popular",
    tier2_name: "Pro Growth + Care",
    tier2_sub: "Full conversion site + monthly updates & support",
    tier3_name: "Custom AI Funnel",
    tier3_sub: "Multi-service showcase and tailored lead routing",
    period_once: "one-time",
    t1_f1: "✓ Ultra-fast mobile-first architecture",
    t1_f2: "✓ Niche-tailored persuasive copywriting",
    t1_f3: "✓ Floating & inline 1-tap WhatsApp CTAs",
    t1_f4: "✓ $0/mo static hosting configured",
    t2_f1: "✓ Everything in Express WhatsApp",
    t2_f2: "✓ Extra sections: Services, FAQ & Location",
    t2_f3: "✓ Verified Google rating integration when available",
    t2_f4: "✓ Monthly copy & offer updates via WhatsApp",
    t3_f1: "✓ Multiple service pages or lead qualifiers",
    t3_f2: "✓ Pre-qualified WhatsApp message routing",
    t3_f3: "✓ Custom domain DNS & SSL setup",
    t3_f4: "✓ Priority turnaround and guided launch",
    tier_cta: "Approve & Checkout",
    payment_note:
      "Supported rails: Instant Pix (AbacatePay / Mercado Pago in BRL) and International Card (Stripe / Paddle in USD).",
    faq_title: "Frequently Asked Questions",
    faq1_q: "How does the $0 upfront preview actually work?",
    faq1_a:
      "We review your current online footprint, spot conversion gaps, and publish a working live preview first. You only pay if you decide to keep and launch it.",
    faq2_q: "Will I get stuck paying expensive monthly hosting?",
    faq2_a:
      "No. We build clean static pages that run on global edge networks (Cloudflare Pages or GitHub Pages) with free SSL and $0 monthly hosting cost.",
    faq3_q: "How do I pay and how fast do we go live?",
    faq3_a:
      "Pay via Stripe/Paddle in USD or instant Pix in BRL. Final launch on your domain or live URL happens within 24 hours of approval.",
    footer_tag: "Mobile-first conversion engineering & local lead automation.",
    footer_cta: "Chat on WhatsApp",
    modal_rail_label: "Selected Payment Rail:",
    modal_wa_btn: "Request Payment Link via WhatsApp",
    modal_instructions:
      "You only pay after testing and approving your custom live preview. Click below to request your direct card or payment link via WhatsApp.",
    wa_default_msg:
      "Hi! I would like to request a free mobile-first website preview for my business.",
    demo_badge_live: "Generated Preview",
    demo_badge_template: "Interactive Blueprint",
  },
};

function buildTemplateSrcDoc(opts) {
  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  return `<!DOCTYPE html>
<html lang="${esc(opts.lang)}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:#f8fafc;color:#0f172a;line-height:1.5}
  .top{background:${opts.accent};color:#fff;padding:12px 20px;display:flex;justify-content:space-between;align-items:center;font-weight:700;font-size:14px}
  .badge{background:rgba(255,255,255,.18);padding:4px 10px;border-radius:999px;font-size:11px;font-weight:600}
  .hero{padding:36px 20px;background:linear-gradient(160deg,#0f172a,#1e293b);color:#fff}
  .hero h1{margin:0 0 10px;font-size:24px;line-height:1.2}
  .hero p{margin:0 0 18px;color:#cbd5e1;font-size:14px}
  .cta{display:inline-block;background:${opts.accent};color:#fff;padding:12px 18px;border-radius:10px;font-weight:700;text-decoration:none;font-size:14px}
  .grid{padding:22px 20px;display:grid;gap:12px}
  .card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:14px}
  .card h3{margin:0 0 4px;font-size:15px}
  .card p{margin:0;color:#475569;font-size:13px}
  .note{padding:0 20px 22px;font-size:11px;color:#64748b}
</style>
</head>
<body>
  <div class="top">
    <span>${esc(opts.title)}</span>
    <span class="badge">${esc(opts.tag)}</span>
  </div>
  <div class="hero">
    <h1>${esc(opts.headline)}</h1>
    <p>${esc(opts.sub)}</p>
    <a class="cta" href="#agendar">${esc(opts.cta)}</a>
  </div>
  <div class="grid">
    ${opts.cards
      .map(
        (c) => `<div class="card"><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`
      )
      .join("")}
  </div>
  <div class="note">${esc(opts.disclaimer)}</div>
</body>
</html>`;
}

const STATIC_SHOWCASE_DEMOS = [
  {
    id: "blueprint-dental",
    isLive: false,
    niche: "Odontologia / Dental",
    title: "Modelo: Clínica Odontológica",
    titleEn: "Blueprint: Dental Clinic",
    desc: "Estrutura mobile-first com triagem por procedimento e agendamento direto.",
    descEn: "Mobile-first layout with procedure cards and 1-tap WhatsApp booking.",
    url: "blueprint://clinica-odontologica",
    srcdoc: buildTemplateSrcDoc({
      lang: "pt-BR",
      accent: "#0284c7",
      title: "Clínica Exemplo (Modelo)",
      tag: "Modelo Demonstrativo",
      headline: "Atendimento odontológico sem espera e agendamento direto no WhatsApp.",
      sub: "Substitua este modelo pelo nome, cidade, serviços e contato reais do seu consultório.",
      cta: "Agendar Avaliação no WhatsApp",
      cards: [
        { t: "Implantes e Prótese", d: "Explicação clara de etapas e dúvidas comuns." },
        { t: "Clareamento & Estética", d: "Fluxo rápido para solicitar horários disponíveis." },
        { t: "Urgência Odontológica", d: "Botão visível em destaque para retorno imediato." },
      ],
      disclaimer: "Modelo demonstrativo ilustrativo — dados reais são preenchidos no seu preview.",
    }),
  },
  {
    id: "blueprint-legal",
    isLive: false,
    niche: "Advocacia / Advisory",
    title: "Modelo: Escritório de Advocacia",
    titleEn: "Blueprint: Legal Advisory",
    desc: "Posicionamento sóbrio, áreas de atuação claras e triagem de consulta.",
    descEn: "High-trust layout with clear practice areas and instant consultation intake.",
    url: "blueprint://advocacia-consultoria",
    srcdoc: buildTemplateSrcDoc({
      lang: "pt-BR",
      accent: "#0f766e",
      title: "Consultoria Jurídica (Modelo)",
      tag: "Modelo Demonstrativo",
      headline: "Orientação jurídica objetiva com agendamento rápido e sigiloso.",
      sub: "Ideal para escritórios que precisam substituir links quebrados ou perfis sem site próprio.",
      cta: "Falar com Especialista",
      cards: [
        { t: "Direito Trabalhista & Cível", d: "Apresentação objetiva sem juridiquês." },
        { t: "Contratos Empresariais", d: "Atendimento ágil para empresas e autônomos." },
        { t: "Consulta Inicial Online", d: "Roteiro estruturado direto para WhatsApp." },
      ],
      disclaimer: "Modelo demonstrativo ilustrativo — dados reais são preenchidos no seu preview.",
    }),
  },
  {
    id: "blueprint-aesthetics",
    isLive: false,
    niche: "Estética / MedSpa",
    title: "Modelo: Estética & Bem-Estar",
    titleEn: "Blueprint: Aesthetics Studio",
    desc: "Vitrine de protocolos otimizada para tráfego vindo do Instagram e Maps.",
    descEn: "Treatment showcase built to convert Instagram & Maps traffic on mobile.",
    url: "blueprint://estetica-bem-estar",
    srcdoc: buildTemplateSrcDoc({
      lang: "en",
      accent: "#7c3aed",
      title: "Aesthetics Studio (Blueprint)",
      tag: "Interactive Blueprint",
      headline: "Book personalized skin & wellness treatments in under 30 seconds.",
      sub: "Built for mobile visitors arriving from Google Maps or Instagram bio links.",
      cta: "Book via WhatsApp",
      cards: [
        { t: "Facial Protocols", d: "Clear treatment breakdown with direct booking CTA." },
        { t: "Body Contouring", d: "Mobile-friendly schedule and instant quote button." },
        { t: "First-Visit Consultation", d: "Zero friction from bio link to confirmed slot." },
      ],
      disclaimer: "Illustrative blueprint — replaced with verified business details on live previews.",
    }),
  },
];

const state = {
  lang: CONFIG.defaultLang,
  currency: CONFIG.defaultCurrency,
  demos: [...STATIC_SHOWCASE_DEMOS],
  activeDemoId: STATIC_SHOWCASE_DEMOS[0].id,
  viewport: "desktop",
};

function buildWhatsAppUrl(message) {
  const cleanNum = String(CONFIG.whatsappNumber || "").replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return cleanNum
    ? `https://wa.me/${cleanNum}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}

function getDict() {
  return I18N[state.lang] || I18N["pt-BR"];
}

function applyTranslations() {
  const dict = getDict();
  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === state.lang);
  });

  const waUrl = buildWhatsAppUrl(dict.wa_default_msg);
  const heroWa = document.getElementById("hero-whatsapp-cta");
  const footerWa = document.getElementById("footer-whatsapp-cta");
  if (heroWa) heroWa.href = waUrl;
  if (footerWa) footerWa.href = waUrl;
}

function applyCurrency() {
  const isUsd = state.currency === "USD";
  document.querySelectorAll("[data-currency-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-currency-btn") === state.currency);
  });

  document.querySelectorAll(".price-value").forEach((el) => {
    const val = isUsd ? el.getAttribute("data-price-usd") : el.getAttribute("data-price-brl");
    if (val) el.textContent = val;
  });

  document.querySelectorAll(".price-period[data-period-brl]").forEach((el) => {
    const val = isUsd ? el.getAttribute("data-period-usd") : el.getAttribute("data-period-brl");
    if (val) el.textContent = val;
  });
}

function renderDemoList() {
  const listEl = document.getElementById("demo-list");
  if (!listEl) return;
  const dict = getDict();
  const isEn = state.lang === "en";

  listEl.innerHTML = "";
  state.demos.forEach((demo) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `demo-tab${demo.id === state.activeDemoId ? " active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", demo.id === state.activeDemoId ? "true" : "false");

    const meta = document.createElement("span");
    meta.className = "demo-tab-meta";
    const nicheSpan = document.createElement("span");
    nicheSpan.textContent = demo.niche || "Showcase";
    const badgeSpan = document.createElement("span");
    badgeSpan.textContent = demo.isLive ? dict.demo_badge_live : dict.demo_badge_template;
    meta.append(nicheSpan, badgeSpan);

    const title = document.createElement("span");
    title.className = "demo-tab-title";
    title.textContent = isEn && demo.titleEn ? demo.titleEn : demo.title;

    const desc = document.createElement("span");
    desc.className = "demo-tab-desc";
    desc.textContent = isEn && demo.descEn ? demo.descEn : demo.desc;

    btn.append(meta, title, desc);
    btn.addEventListener("click", () => {
      state.activeDemoId = demo.id;
      renderDemoList();
      renderActiveDemo();
    });
    listEl.appendChild(btn);
  });
}

function renderActiveDemo() {
  const iframe = document.getElementById("demo-iframe");
  const urlLabel = document.getElementById("preview-url-label");
  const openLink = document.getElementById("preview-open-link");
  const stage = document.getElementById("preview-stage");
  if (!iframe || !urlLabel || !openLink || !stage) return;

  stage.classList.toggle("mobile", state.viewport === "mobile");
  document.querySelectorAll("[data-viewport]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-viewport") === state.viewport);
  });

  const active = state.demos.find((d) => d.id === state.activeDemoId) || state.demos[0];
  if (!active) return;

  urlLabel.textContent = active.url || `demos/${active.id}/index.html`;
  if (active.isLive && active.url) {
    iframe.removeAttribute("srcdoc");
    iframe.src = active.url;
    openLink.href = active.url;
    openLink.style.display = "inline-flex";
  } else {
    iframe.removeAttribute("src");
    iframe.srcdoc = active.srcdoc || "";
    openLink.href = "#pricing";
    openLink.style.display = "none";
  }
}

async function loadDemosManifest() {
  if (window.location.protocol === "file:") return;
  try {
    const resp = await fetch("demos.json", { cache: "no-store" });
    if (!resp.ok) return;
    const payload = await resp.json();
    const items = Array.isArray(payload) ? payload : payload.demos;
    if (!Array.isArray(items) || items.length === 0) return;

    const liveItems = items
      .filter((d) => d && d.url)
      .map((d, idx) => ({
        id: d.slug || `live-${idx}`,
        isLive: true,
        niche: d.niche || "Local Business",
        title: d.name || d.slug || `Demo ${idx + 1}`,
        desc: d.city ? `${d.city} • ${d.lang || ""}` : "Live generated preview",
        url: d.url,
      }));

    if (liveItems.length > 0) {
      state.demos = [...liveItems, ...STATIC_SHOWCASE_DEMOS];
      state.activeDemoId = liveItems[0].id;
      renderDemoList();
      renderActiveDemo();
    }
  } catch (_err) {
    // Keep static showcase blueprints silently when demos.json is absent.
  }
}

function openCheckoutModal(tier) {
  const dict = getDict();
  const rail = CONFIG.checkout[state.currency] || CONFIG.checkout.BRL;
  const targetUrl = rail[tier] || "";

  if (/^https?:\/\//i.test(targetUrl)) {
    window.open(targetUrl, "_blank", "noopener,noreferrer");
    return;
  }

  const card = document.querySelector(`.price-card[data-tier="${tier}"]`);
  const tierTitle = card?.querySelector("h3")?.textContent || tier;
  const tierPrice = card?.querySelector(".price-value")?.textContent || "";

  const modal = document.getElementById("checkout-modal");
  const summaryEl = document.getElementById("modal-tier-summary");
  const providerEl = document.getElementById("modal-provider-name");
  const instrEl = document.getElementById("modal-instructions");
  const waBtn = document.getElementById("modal-wa-confirm");
  if (!modal || !summaryEl || !providerEl || !instrEl || !waBtn) return;

  summaryEl.textContent = `${tierTitle} — ${tierPrice} (${state.currency})`;
  providerEl.textContent = rail.provider;
  instrEl.textContent = dict.modal_instructions;

  const waMsg =
    state.lang === "en"
      ? `Hi! I want to proceed with the ${tierTitle} plan (${tierPrice} ${state.currency}) via ${rail.provider} after checking my preview.`
      : `Olá! Gostaria de prosseguir com o plano ${tierTitle} (${tierPrice} ${state.currency}) via ${rail.provider} após aprovar meu preview.`;
  waBtn.href = buildWhatsAppUrl(waMsg);

  modal.hidden = false;
}

function initEventHandlers() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang-btn");
      if (next && I18N[next]) {
        state.lang = next;
        if (next === "en" && state.currency === "BRL") {
          state.currency = "USD";
        } else if (next === "pt-BR" && state.currency === "USD") {
          state.currency = "BRL";
        }
        applyTranslations();
        applyCurrency();
        renderDemoList();
      }
    });
  });

  document.querySelectorAll("[data-currency-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-currency-btn");
      if (next === "BRL" || next === "USD") {
        state.currency = next;
        applyCurrency();
      }
    });
  });

  document.querySelectorAll("[data-viewport]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.viewport = btn.getAttribute("data-viewport") === "mobile" ? "mobile" : "desktop";
      renderActiveDemo();
    });
  });

  document.querySelectorAll(".checkout-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tier = btn.getAttribute("data-tier") || "express";
      openCheckoutModal(tier);
    });
  });

  const modal = document.getElementById("checkout-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.hidden = true;
    });
    modal.addEventListener("click", (ev) => {
      if (ev.target === modal) modal.hidden = true;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initEventHandlers();
  applyTranslations();
  applyCurrency();
  renderDemoList();
  renderActiveDemo();
  loadDemosManifest();
});
