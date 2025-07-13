import os
import shutil

def organizar_pasta(caminho_pasta):
    for arquivo in os.listdir(caminho_pasta):
        caminho_item = os.path.join(caminho_pasta, arquivo)

        if os.path.isfile(caminho_item):
            nome_arquivo, extensao = os.path.splitext(arquivo)
            extensao = extensao.lower()

            if not extensao:
                continue

            pasta_destino = ""
            if extensao in ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg']:
                pasta_destino = os.path.join(caminho_pasta, 'Imagens')
            elif extensao in ['.mp4', '.mkv', '.avi', '.mov', '.flv']:
                pasta_destino = os.path.join(caminho_pasta, 'Videos')
            elif extensao in ['.mp3', '.wav', '.flac', '.aac']:
                pasta_destino = os.path.join(caminho_pasta, 'Audio')
            elif extensao in ['.pdf', '.doc', '.docx', '.txt', '.xls', '.xlsx', '.ppt', '.pptx']:
                pasta_destino = os.path.join(caminho_pasta, 'Documentos')
            elif extensao in ['.zip', '.rar', '.7z', '.tar', '.gz']:
                pasta_destino = os.path.join(caminho_pasta, 'Compactados')
            elif extensao in ['.exe', '.msi', '.dmg', '.deb']:
                pasta_destino = os.path.join(caminho_pasta, 'Executaveis')
            else:
                pasta_destino = os.path.join(caminho_pasta, 'Outros')

            if not os.path.exists(pasta_destino):
                os.makedirs(pasta_destino)
                print(f"Pasta '{pasta_destino}' foi criada.")

            destino_final_arquivo = os.path.join(pasta_destino, arquivo)

            try:
                shutil.move(caminho_item, destino_final_arquivo)
                print(f"Arquivo '{arquivo}' movido para '{pasta_destino}'")
            except Exception as e:
                print(f"Erro ao mover '{arquivo}':'{e}'")

if __name__ == "__main__":
    #coloca o caminho para a pasta que quer organizar!!!
    pasta_para_organizar = r"C:\Users\MASTER\Downloads"
    print(f"Iniciando a organização da pasta: {pasta_para_organizar}")
    organizar_pasta(pasta_para_organizar)
    print("Organização concluida")
