from docx import Document

def read_docx(file_path):
    # Open the document
    doc = Document(file_path)

    # Print each paragraph in the document
    for paragraph in doc.paragraphs:
        print(paragraph.text)

# Example usage
file_path = 'myfile.docx'
read_docx(file_path)
