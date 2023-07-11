from docx import Document

def read_and_edit_docx(input_path, output_path, replacements):
    # Open the existing document
    doc = Document(input_path)

    # Iterate over paragraphs in the document
    for paragraph in doc.paragraphs:
        # Iterate over runs within each paragraph
        for run in paragraph.runs:
            print(run.text)
            # Replace text in each run as per the provided replacements dictionary
            for old_text, new_text in replacements.items():
                if old_text in run.text:
                    run.text = run.text.replace(old_text, new_text)

    # Save the modified document
    doc.save(output_path)

# Example usage
input_file = 'output.docx'
output_file = 'output3.docx'
replacements = {
    'Old Text 1': 'New Text 1',
    'Old Text 2': 'New Text 2',
    'Old Text 3': 'New Text 3'
}

read_and_edit_docx(input_file, output_file, replacements)
