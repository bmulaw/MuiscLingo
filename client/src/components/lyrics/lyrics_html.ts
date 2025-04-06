function clean_break_tags(html_lyrics: String) : String 
{
    return "break tags cleaned"
}

function clean_html_unicodes(html_lyrics: String) : String 
{
    return "lyrics";
}

export default function clean_html_lyrics_for_display(html_lyrics: String) : String
{
    const break_tags_cleanded: String = clean_break_tags(html_lyrics);
    const unicode_removed_lyrics: String = clean_html_unicodes(break_tags_cleanded);
    return unicode_removed_lyrics;
}