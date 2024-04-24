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
    html = html.replace(/\[dv\](.*?)\[\.dv\]/g, '<dv>$1</div>');

    html = html.replace(/\[filetype\](.*?)\[\.filetype\]/g, '<!DOCTYPE $1>');

    // Comments
    html = html.replace(/\[<\](.*?)\[\.>\]/g, '<!-- $1 -->');

    // HTML Head
    html = html.replace(/\[hd\](.*?)\[\.hd\]/g, '<head>$1</head>');

    // HTML Body
    html = html.replace(/\[by\](.*?)\[\.by\]/g, '<body>$1</body>');

    // Header
    html = html.replace(/\[header\](.*?)\[\.header\]/g, '<header>$1</header>');

    // Footer
    html = html.replace(/\[footer\](.*?)\[\.footer\]/g, '<footer>$1</footer>');

    // Main
    html = html.replace(/\[main\](.*?)\[\.main\]/g, '<main>$1</main>');

    // Summary
    html = html.replace(/\[sum\](.*?)\[\.sum\]/g, '<summary>$1</summary>');

    // Details
    html = html.replace(/\[detail\](.*?)\[\.detail\]/g, '<details>$1</details>');

    // Article
    html = html.replace(/\[art\](.*?)\[\.art\]/g, '<article>$1</article>');

    // Abbreviation
    html = html.replace(/\[abr\](.*?)\[\.abr\]/g, '<abbr>$1</abbr>');

    // Address
    html = html.replace(/\[add\](.*?)\[\.add\]/g, '<address>$1</address>');

    // Span
    html = html.replace(/\[span\](.*?)\[\.span\]/g, '<span>$1</span>');

    // Script
    html = html.replace(/\[scr\s+location="([^"]+)"\s*\](.*?)\[\.scr\]/g, '<script src="$1">$2</script>');


    // Noscript
    html = html.replace(/\[noscr\](.*?)\[\.noscr\]/g, '<noscript>$1</noscript>');

    // Navigation
    html = html.replace(/\[nav\](.*?)\[\.nav\]/g, '<nav>$1</nav>');

    // Button
    html = html.replace(/\[button\](.*?)\[\.button\]/g, '<button>$1</button>');
    
    return html;
}
