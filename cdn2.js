// custom-markup-parser.js

// Function to parse custom markup and convert it to HTML
function parseCustomMarkup(input) {
    // Custom parsing logic
    // You can define your own custom markup language and its conversion rules here
    var html = input;
    // Example: convert [b]Bold Text[/b] to <strong>Bold Text</strong>
    var html = input.replace(/\[bd\](.*?)\[\.bd\]/g, '<strong>$1</strong>');
    
    // Italic Text
    html = html.replace(/\[it\](.*?)\[\.it\]/g, '<em>$1</em>');

    // Underlined Text
    html = html.replace(/\[un\](.*?)\[\.un\]/g, '<u>$1</u>');

    // Images with size
    html = html.replace(/\[img\s+src="([^"]+)"\s+alt="([^"]+)"\s+width="([^"]+)"\s+height="([^"]+)"\]/g, '<img src="$1" alt="$2" width="$3" height="$4">');

    // Links with custom text
    html = html.replace(/\[link\s+url="([^"]+)"\](.*?)\[\.link\]/g, '<a href="$1">$2</a>');

    // Headings
    html = html.replace(/\[t([1-6])\](.*?)\[\.t\1\]/g, function(match, tag, content) {
        return '<h' + tag + '>' + content + '</h' + tag + '>';
    });

    // Paragraphs
    html = html.replace(/\[txt\](.*?)\[\.txt\]/g, '<p>$1</p>');

    // Lists
    html = html.replace(/\[unl\](.*?)\[\.unl\]/g, '<ul>$1</ul>');
    html = html.replace(/\[orl\](.*?)\[\.orl\]/g, '<ol>$1</ol>');
    html = html.replace(/\[lc\](.*?)\[\.lc\]/g, '<li>$1</li>');

    // Tables
    html = html.replace(/\[table\](.*?)\[\.table\]/g, '<table>$1</table>');
    html = html.replace(/\[row\](.*?)\[\.row\]/g, '<tr>$1</tr>');
    html = html.replace(/\[head\](.*?)\[\.head\]/g, '<th>$1</th>');
    html = html.replace(/\[data\](.*?)\[\.data\]/g, '<td>$1</td>');

    // Divisions
    html = html.replace(/\[dv\](.*?)\[\.div\]/g, '<dv>$1</div>');

    return html;
}

// Automatically parse custom markup on page load
document.addEventListener('DOMContentLoaded', function() {
    var customMarkupElements = document.querySelectorAll('[data-custom-markup]');
    customMarkupElements.forEach(function(element) {
        var customMarkup = element.getAttribute('data-custom-markup');
        var html = parseCustomMarkup(customMarkup);
        element.innerHTML = html;
    });
});
