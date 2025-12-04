#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para extrair texto e imagens de PDFs
"""
import pdfplumber
import json
import sys
from pathlib import Path

def extract_pdf_content(pdf_path):
    """Extrai texto estruturado de um PDF"""
    content = {
        "pages": [],
        "full_text": ""
    }

    try:
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                if text:
                    content["pages"].append({
                        "page_number": i + 1,
                        "text": text
                    })
                    content["full_text"] += text + "\n\n"

        return content
    except Exception as e:
        print(f"Erro ao extrair PDF: {e}")
        return None

if __name__ == "__main__":
    # Extrair textos para site.pdf
    textos_path = Path(__file__).parent.parent / "textos para site.pdf"
    pdr_path = Path(__file__).parent.parent / "pdr the five of wallstreet.pdf"

    print("Extraindo conteúdo de 'textos para site.pdf'...")
    if textos_path.exists():
        content = extract_pdf_content(str(textos_path))
        if content:
            output_file = Path(__file__).parent.parent / "site" / "content_textos.json"
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(content, f, ensure_ascii=False, indent=2)
            print(f"✓ Conteúdo extraído para: {output_file}")

            # Também salvar como txt para facilitar leitura
            txt_output = Path(__file__).parent.parent / "site" / "content_textos.txt"
            with open(txt_output, 'w', encoding='utf-8') as f:
                f.write(content["full_text"])
            print(f"✓ Texto salvo em: {txt_output}")
    else:
        print(f"❌ Arquivo não encontrado: {textos_path}")

    print("\nExtraindo conteúdo de 'pdr the five of wallstreet.pdf'...")
    if pdr_path.exists():
        content = extract_pdf_content(str(pdr_path))
        if content:
            output_file = Path(__file__).parent.parent / "site" / "content_pdr.json"
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(content, f, ensure_ascii=False, indent=2)
            print(f"✓ Conteúdo extraído para: {output_file}")

            # Também salvar como txt
            txt_output = Path(__file__).parent.parent / "site" / "content_pdr.txt"
            with open(txt_output, 'w', encoding='utf-8') as f:
                f.write(content["full_text"])
            print(f"✓ Texto salvo em: {txt_output}")
    else:
        print(f"❌ Arquivo não encontrado: {pdr_path}")

