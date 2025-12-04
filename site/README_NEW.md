# 🏛️ The Five of Wall Street - Website

> **"Da faculdade para as ruas. O código que muda rotas."**

Site institucional high-end para a software house **The Five of Wall Street**. Design imersivo com glassmorphism, animações fluidas e estética cyberpunk/financial tech.

---

## 🎯 Características

✅ **Design High-End**: Paleta dark (Slate-950) com Gold (#D4AF37) e Cyan (#00F0FF)  
✅ **Glassmorphism**: Cards com blur e transparências  
✅ **Bento Grid**: Layout assimétrico moderno  
✅ **Animações Avançadas**: Scroll reveal, parallax 3D, particles system  
✅ **100% Responsivo**: Mobile-first com hamburger menu  
✅ **Acessível**: WCAG 2.1 AA compliant  
✅ **Performance**: CSS vanilla, sem dependências pesadas  

---

## 📁 Estrutura do Projeto

```
site/
├── index.html          # HTML semântico com todo o conteúdo
├── css/
│   └── styles.css      # Design system completo (850+ linhas)
├── js/
│   └── main.js         # Interações e animações (200+ linhas)
├── assets/
│   └── images/         # SVGs e imagens (placeholders)
├── content_textos.txt  # Textos extraídos do PDF
└── README.md           # Este arquivo
```

---

## 🚀 Como Usar

### 1️⃣ Abrir Localmente

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local:

**Python 3:**
```bash
cd site
python -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server site -p 8000
```

Depois acesse: **http://localhost:8000**

### 2️⃣ Deploy

**Netlify / Vercel:**
- Arraste a pasta `site/` para o dashboard
- Build settings: **Nenhuma necessária** (site estático)

**GitHub Pages:**
```bash
git add .
git commit -m "Deploy site"
git push origin main
```
Ative GitHub Pages em: `Settings > Pages > Source: main branch / root`

---

## 🎨 Seções do Site

1. **Hero Section**: Headline imersiva com stats card (100vh)
2. **A Origem**: Storytelling sobre os 5 fundadores
3. **Soluções**: Bento Grid com 4 cards de serviços
4. **O Conselho**: 5 membros do time com quotes inspiradoras
5. **Contato**: CTA para iniciar projetos
6. **Footer**: Copyright e slogan

---

## 🛠️ Personalização

### Cores
Edite as variáveis CSS em `css/styles.css`:

```css
:root {
  --gold: #D4AF37;      /* Cor principal (CTAs, destaques) */
  --cyan: #00F0FF;      /* Cor secundária (glows, borders) */
  --bg-dark: #0a0e1a;   /* Background principal */
}
```

### Textos
Todos os textos estão em `index.html`. Busque por:
- **Hero**: `.hero-title` e `.hero-lead`
- **Origem**: `.origem-text`
- **Soluções**: `.bento-card`
- **Conselho**: `.member-card`

### Animações
Desabilite animações para testes:

```javascript
// Em js/main.js, comente a linha:
observer.observe(el);
```

---

## 🎭 Features Avançadas

### 1. Particles System
Background animado com 30 partículas flutuantes (cyan/gold).

### 2. Mouse Parallax 3D
O hero card reage ao movimento do mouse com rotação 3D.

### 3. Scroll Reveal
Cards aparecem com fade + slide up usando Intersection Observer.

### 4. Card Glow Tracking
Efeito de luz segue o cursor nos cards (hover).

### 5. Console Easter Egg
Abra o DevTools Console para uma surpresa! 🎉

---

## 📊 Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile (iOS/Android)
- ✅ Tablets

**Recursos usados:**
- CSS Grid / Flexbox
- CSS Variables
- Intersection Observer API
- backdrop-filter (com prefixos)

---

## 🔧 Melhorias Futuras

- [ ] Migrar para Next.js 14 (SSR, otimização de imagens)
- [ ] Adicionar Framer Motion (animações mais avançadas)
- [ ] Implementar formulário real (Formspree/Netlify Forms)
- [ ] Criar seção de blog/artigos
- [ ] Adicionar lightbox para galeria de projetos
- [ ] Integrar CMS headless (Sanity/Strapi)
- [ ] Google Analytics ou Plausible

---

## 📝 Licença & Créditos

**© 2025 The Five of Wall Street. Todos os direitos reservados.**

**Desenvolvido por**: GitHub Copilot AI  
**Design baseado em**: PDR "The Five of Wall Street"  
**Textos extraídos de**: `textos para site.pdf`  

---

## 🆘 Suporte

Precisa de ajuda? Entre em contato:
- **Email**: contact@thefive.com
- **Endereço**: Wall Street Vision, Digital HQ.

---

**"Resultados Reais. Futuro Digital."** 💛⚡
