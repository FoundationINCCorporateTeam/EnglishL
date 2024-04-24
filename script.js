function compile() {
    var inputText = document.getElementById('input').value;
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = convertToHTML(inputText);
}

function convertToHTML(input) {
    // Bold Text
    var html = input.replace(/\[bd\](.*?)\[\.bd\]/g, '<strong>$1</strong>');
    
    // Italic Text
    html = html.replace(/\[it\](.*?)\[\.it\]/g, '<em>$1</em>');

    // Underlined Text
    html = html.replace(/\[un\](.*?)\[\.un\]/g, '<u>$1</u>');

    // Images with size
    html = html.replace(/\[img\s+src="([^"]+)"\s+alt="([^"]+)"\s+width="([^"]+)"\s+height="([^"]+)"\]/g, '<img src="$1" alt="$2" width="$3" height="$4">');

    // Links with custom text
    html = html.replace(/\[link\s+url="([^"]+)"\s+text="([^"]+)"\]/g, '<a href="$1">$2</a>');

    return html;
}
