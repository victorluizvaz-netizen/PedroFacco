# Guia de Imagens — Pedro Facco

Mapa completo de onde colocar cada fotografia no site.

**Total de imagens necessárias: 48**

---

## COMO SUBSTITUIR OS PLACEHOLDERS

Cada placeholder é um `<div>` com uma classe específica e um atributo `data-color`.
Para trocar por uma foto real, substitua o `<div>` por uma tag `<img>`:

```html
<!-- ANTES (placeholder) -->
<div class="hero-image-placeholder"></div>

<!-- DEPOIS (foto real) -->
<img src="images/foto-hero.jpg" alt="Pedro Facco" class="hero-image-placeholder">
```

Mantenha a mesma classe CSS para que as animações funcionem corretamente.

---

## PÁGINA 1: INDEX (Página Principal)

### 1. HERO — Foto Principal
- **Classe:** `hero-image-placeholder`
- **Arquivo sugerido:** `hero.jpg`
- **Formato:** Landscape, preenche toda a tela (100vw × 100vh)
- **O que colocar:** Foto profissional do Pedro Facco em primeiro plano, com decoração sofisticada ao fundo. Pode ser uma foto onde ele esteja parcialmente sobreposto à cenografia.
- **Dica:** A imagem terá um overlay escuro gradiente. Prefira fotos com boa iluminação no rosto.

### 2. SOBRE — Foto Institucional
- **Classe:** `about-image-placeholder`
- **Arquivo sugerido:** `sobre-pedro.jpg`
- **Formato:** Retrato (proporção 3:4)
- **O que colocar:** Fotografia editorial do Pedro em **preto e branco**. Pode ser uma foto dele trabalhando, observando um espaço, ou em pose editorial.
- **Dica:** Essa foto fica ao lado do texto institucional. A imagem ficará em P&B pelo CSS.

### 3. EVENTOS PREVIEW — 4 blocos (proporção 4:5)

| Posição | Classe | Arquivo sugerido | O que colocar |
|---------|--------|------------------|---------------|
| 15 Anos | `event-block-placeholder` | `prev-15anos.jpg` | Foto representativa de um projeto de 15 anos |
| Casamentos | `event-block-placeholder` | `prev-casamento.jpg` | Foto representativa de um casamento |
| Formaturas | `event-block-placeholder` | `prev-formatura.jpg` | Foto representativa de uma formatura |
| Festas Infantis | `event-block-placeholder` | `prev-festa-infantil.jpg` | Foto representativa de uma festa infantil |

- **Formato:** Retrato (proporção 4:5)
- **Dica:** Escolha as fotos mais impactantes de cada categoria. Elas ficam grandes na tela.

### 4. INSTAGRAM — 6 quadrados

| Posição | Classe | Arquivo sugerido |
|---------|--------|------------------|
| 1 | `instagram-item-placeholder` | `insta-01.jpg` |
| 2 | `instagram-item-placeholder` | `insta-02.jpg` |
| 3 | `instagram-item-placeholder` | `insta-03.jpg` |
| 4 | `instagram-item-placeholder` | `insta-04.jpg` |
| 5 | `instagram-item-placeholder` | `insta-05.jpg` |
| 6 | `instagram-item-placeholder` | `insta-06.jpg` |

- **Formato:** Quadrado (proporção 1:1)
- **Dica:** Fotos recentes do Instagram. Podem ser detalhes de decoração, flores, mesas, bastidores.

---

## PÁGINA 2: EVENTOS

### 5. HEADER DA PÁGINA — Background
- **Classe:** `page-header-bg-placeholder`
- **Arquivo sugerido:** `eventos-hero.jpg`
- **Formato:** Landscape, preenche toda a largura (min-height 60vh)
- **O que colocar:** Foto ampla de um evento/cenografia impactante. Serve como background do título "EVENTOS".

### 6. SEÇÃO 15 ANOS — 6 fotos

| Posição | Classe | Proporção | Arquivo sugerido | Descrição |
|---------|--------|-----------|------------------|-----------|
| Full-width #1 | `editorial-item-placeholder` | 16:9 | `15anos-01.jpg` | Foto ampla do ambiente/cenografia |
| Portrait | `editorial-item-placeholder` | 3:4 | `15anos-02.jpg` | Foto retrato de detalhe ou pessoa |
| Square #1 | `editorial-item-placeholder` | 1:1 | `15anos-03.jpg` | Detalhe: mesa, flores, iluminação |
| Square #2 | `editorial-item-placeholder` | 1:1 | `15anos-04.jpg` | Detalhe: decoração, elementos |
| Full-width #2 | `editorial-item-placeholder` | 16:9 | `15anos-05.jpg` | Foto ampla da festa |
| Portrait | `editorial-item-placeholder` | 3:4 | `15anos-06.jpg` | Foto retrato do evento |

### 7. SEÇÃO CASAMENTOS — 7 fotos

| Posição | Classe | Proporção | Arquivo sugerido | Descrição |
|---------|--------|-----------|------------------|-----------|
| Full-width #1 | `editorial-item-placeholder` | 16:9 | `casamento-01.jpg` | Foto ampla da cenografia |
| Portrait | `editorial-item-placeholder` | 3:4 | `casamento-02.jpg` | Retrato: noivos ou detalhe vertical |
| Landscape | `editorial-item-placeholder` | 4:3 | `casamento-03.jpg` | Mesa, ceremony ou decoração |
| Landscape | `editorial-item-placeholder` | 4:3 | `casamento-04.jpg` | Ambiente ou iluminação |
| Full-width #2 | `editorial-item-placeholder` | 16:9 | `casamento-05.jpg` | Foto ampla do evento |
| Square #1 | `editorial-item-placeholder` | 1:1 | `casamento-06.jpg` | Detalhe: flores, arranjo |
| Square #2 | `editorial-item-placeholder` | 1:1 | `casamento-07.jpg` | Detalhe: mesa, toalha, crystal |

### 8. SEÇÃO FORMATURAS — 5 fotos

| Posição | Classe | Proporção | Arquivo sugerido | Descrição |
|---------|--------|-----------|------------------|-----------|
| Full-width #1 | `editorial-item-placeholder` | 16:9 | `formatura-01.jpg` | Foto ampla da cenografia |
| Portrait | `editorial-item-placeholder` | 3:4 | `formatura-02.jpg` | Retrato ou elemento vertical |
| Square #1 | `editorial-item-placeholder` | 1:1 | `formatura-03.jpg` | Detalhe da decoração |
| Square #2 | `editorial-item-placeholder` | 1:1 | `formatura-04.jpg` | Detalhe: arquitetura, palco |
| Full-width #2 | `editorial-item-placeholder` | 16:9 | `formatura-05.jpg` | Foto ampla do evento |

### 9. SEÇÃO FESTAS INFANTIS — 5 fotos

| Posição | Classe | Proporção | Arquivo sugerido | Descrição |
|---------|--------|-----------|------------------|-----------|
| Full-width #1 | `editorial-item-placeholder` | 16:9 | `infantil-01.jpg` | Foto ampla da cenografia temática |
| Portrait | `editorial-item-placeholder` | 3:4 | `infantil-02.jpg` | Retrato ou elemento vertical |
| Landscape | `editorial-item-placeholder` | 4:3 | `infantil-03.jpg` | Ambiente decorado |
| Landscape | `editorial-item-placeholder` | 4:3 | `infantil-04.jpg` | Detalhe temático |
| Full-width #2 | `editorial-item-placeholder` | 16:9 | `infantil-05.jpg` | Foto ampla do evento |

---

## PÁGINA 3: GALERIA

### 10. GALERIA MASONRY — 12 fotos

A galeria usa layout de colunas (masonry). Cada foto tem uma altura diferente.

| Posição | Classe | Altura (padding-bottom) | Arquivo sugerido | Tipo de foto |
|---------|--------|------------------------|------------------|--------------|
| 1 | `gallery-masonry-item-placeholder` | 130% (retrato alto) | `galeria-01.jpg` | Retrato vertical |
| 2 | `gallery-masonry-item-placeholder` | 100% (quadrado) | `galeria-02.jpg` | Quadrado |
| 3 | `gallery-masonry-item-placeholder` | 160% (retrato muito alto) | `galeria-03.jpg` | Retrato alto |
| 4 | `gallery-masonry-item-placeholder` | 120% (retrato leve) | `galeria-04.jpg` | Quase quadrado |
| 5 | `gallery-masonry-item-placeholder` | 90% (landscape leve) | `galeria-05.jpg` | Quase quadrado |
| 6 | `gallery-masonry-item-placeholder` | 140% (retrato) | `galeria-06.jpg` | Retrato |
| 7 | `gallery-masonry-item-placeholder` | 110% (quase quadrado) | `galeria-07.jpg` | Quase quadrado |
| 8 | `gallery-masonry-item-placeholder` | 150% (retrato alto) | `galeria-08.jpg` | Retrato alto |
| 9 | `gallery-masonry-item-placeholder` | 100% (quadrado) | `galeria-09.jpg` | Quadrado |
| 10 | `gallery-masonry-item-placeholder` | 130% (retrato alto) | `galeria-10.jpg` | Retrato vertical |
| 11 | `gallery-masonry-item-placeholder` | 170% (retrato muito alto) | `galeria-11.jpg` | Retrato muito alto |
| 12 | `gallery-masonry-item-placeholder` | 105% (quase quadrado) | `galeria-12.jpg` | Quase quadrado |

**Dica para a galeria:** Para melhores resultados, use fotos com proporções reais diferentes. As fotos de proporção mais vertical ficarão mais altas no layout. O CSS se adapta automaticamente.

---

## PÁGINA 4: ORÇAMENTO

**Nenhuma imagem necessária.** Apenas formulário.

---

## RESUMO POR TIPO DE FOTO

| Tipo | Quantidade | Onde aparece |
|------|-----------|--------------|
| Foto profissional do Pedro (retrato/editorial) | 1-2 | Hero, Sobre |
| Cenografia de 15 anos | 6 | Previsão + seção 15 anos |
| Casamentos | 7 | Previsão + seção casamentos |
| Formaturas | 5 | Previsão + seção formaturas |
| Festas infantis | 5 | Previsão + seção infantis |
| Detalhes (flores, mesas, iluminação) | 14 | Instagram + Galeria |
| Background de evento | 2 | Header eventos + Hero |
| **TOTAL** | **48** | |

---

## DICAS GERAIS

1. **Formato:** JPG ou WebP, mínimo 1200px de largura para fotos grandes
2. **Qualidade:** As imagens são o protagonista. Use sempre a maior resolução possível
3. **Cores:** Não aplique filtro P&B. O site aplica P&B automaticamente nas fotos do Pedro (seção Sobre). As fotos de decoração permanecem coloridas
4. **Nomes de arquivo:** Use os nomes sugeridos acima para facilitar a identificação
5. **Pasta:** Coloque todas as imagens em `public/images/`
6. **Photoshop/Lightroom:** Não é necessário redimensionar. O CSS cuida do dimensionamento. Mas fotos muito pequenas (menos de 800px) podem parecer borradas

---

## PARA SUBSTITUIR

Abra cada arquivo HTML e substitua os `<div class="...-placeholder">` por `<img>`:

```html
<!-- Exemplo: Hero -->
<img src="images/hero.jpg" alt="Pedro Facco — Designer de Eventos" class="hero-image-placeholder">

<!-- Exemplo: Bloco de evento -->
<img src="images/prev-15anos.jpg" alt="15 Anos — Projeto Pedro Facco" class="event-block-placeholder">

<!-- Exemplo: Galeria -->
<img src="images/galeria-01.jpg" alt="Projeto Pedro Facco" class="gallery-masonry-item-placeholder">
```
