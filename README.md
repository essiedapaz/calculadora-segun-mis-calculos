# ⋆ Según mis Cálculos ⋆

Uma calculadora funcional feita do zero com HTML, CSS e JavaScript puro
sem framework, sem biblioteca, sem tutorial copiado.

🔗 **[Abrir a calculadora](https://essiedapaz.github.io/calculadora-segun-mis-calculos/)**

![captura da calculadora](preview.png)

---

## Sobre

Meu primeiro projeto de front-end. O nome veio de uma piada interna, e a 
estética grunge-sticker veio de eu descobrir, no meio do caminho, que CSS 
é onde meu olho e o código se encontram.

Os adesivos são arrastáveis. Pode mexer.

## O que tem aqui

- Estrutura em HTML semântico
- Layout em CSS Grid e Flexbox
- Lógica de cálculo em JavaScript, com tratamento de erro via `try/catch`
- Sistema de adesivos arrastáveis com eventos de mouse (`mousedown` / `mousemove` / `mouseup`)
- Fundo em camadas usando `background-blend-mode`

## O que eu aprendi

A parte difícil não foi o código.

Foi aprender a lidar com a frustração e continuar mesmo quando eu não sabia 
como fazer algo, ou quando o resultado não ficava como eu queria. Fechei o 
laptop insatisfeita mais de uma vez e voltei no dia seguinte.

Tecnicamente, os momentos que mais ensinaram:

- **Um `s` minúsculo.** `string()` em vez de `String()` fazia toda conta 
  retornar erro. Aprendi a ler o Console como ferramenta de diagnóstico, 
  não como tela de xingamento.
- **Chaves não são indentação.** Colei um bloco de código alinhado 
  corretamente, mas dentro do `forEach` errado. O JavaScript obedece as 
  chaves, não o alinhamento.
- **CSS não substitui, empilha.** Blocos duplicados não se cancelam a 
  última declaração vence, e as propriedades antigas sobrevivem.
- **Saber cortar.** Cheguei a ter 17 elementos decorativos. Tirar foi mais 
  difícil que colocar.

## Dívida técnica consciente

O cálculo usa `eval()`. Funciona porque a entrada só vem dos 16 botões, mas 
não seria aceitável com entrada livre do usuário. Trocar por lógica própria 
é o próximo exercício.

Os adesivos respondem a mouse, não a toque, falta suporte mobile.

## Créditos

Textura de fundo: [Texturelabs](https://texturelabs.org/)  
Adesivos: [Magnific] https://www.magnific.com/br

---

Feito por [Essie](https://github.com/essiedapaz) 🩷
