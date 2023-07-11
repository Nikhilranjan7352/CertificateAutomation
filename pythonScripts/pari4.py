from docx import Document

def replace_variable(document, variable, new_value):
    for paragraph in document.paragraphs:
        if variable in paragraph.text:
            inline = paragraph.runs
            for i in range(len(inline)):
                if variable in inline[i].text:
                    text = inline[i].text.replace(variable, new_value)
                    inline[i].text = text

def read_and_replace_word_file(file_path, variables, new_values, output_file_path):
    # Load the Word document
    doc = Document(file_path)

    # Replace variables with new values
    for variable, new_value in zip(variables, new_values):
        replace_variable(doc, variable, new_value)

    # Save the modified document as a new file
    doc.save(output_file_path)

# Path to the Word file
word_file = 'myfile.docx'

# Variables to replace and their new values
variables = ['{name}','{fname}' ,'{des}', '{doj}', '{currdate}', '{tenure}']
new_values = ['Pari Paratha', 'Pari','Ceo Manager', '2023-01-01', '2023-06-30', '15 years']

# Path to the output Word file
output_file = 'modified_file.docx'

# Read the Word file, replace variables, and save the modified document as a new file
read_and_replace_word_file(word_file, variables, new_values, output_file)
