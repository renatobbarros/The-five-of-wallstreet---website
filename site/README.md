The Five of Wall Street — Versão web (esqueleto)

Este diretório contém um esqueleto de site estático criado a partir do PDF `pdr the five of wallstreet.pdf` que está na raiz do projeto.

Como usar (Windows PowerShell):

1) Extrair texto (requer poppler - pdftotext):
   pdftotext "..\pdr the five of wallstreet.pdf" "content.txt"

2) Extrair imagens (requer poppler - pdfimages):
   md .\assets\images; pdfimages -all "..\pdr the five of wallstreet.pdf" .\assets\images\image

3) Caso o PDF contenha imagens com texto (OCR), usar tesseract:
   tesseract .\assets\images\image-000.png .\output\page001 -l por

4) Abrir o site localmente: abra `site/index.html` no navegador ou use um servidor estático (ex.: `python -m http.server` a partir da pasta `site`).

Próximos passos sugeridos:
- Rodar os comandos acima para extrair conteúdo.
- Colar / organizar o texto em `index.html` e criar páginas adicionais conforme o PDF.
- Otimizar imagens (webp/variações 1x/2x) e revisar acessibilidade.

Se quiser, eu prossigo com a extração automática do PDF (tentando usar pdftotext/pdfimages) e a conversão de conteúdo para HTML — confirme se prefere site estático (recomendado) ou uma solução com backend (Express/Flask).
