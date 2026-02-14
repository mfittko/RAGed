export function chunkText(text: string, maxChars = 1800): string[] {
  const clean = text.replace(/\r\n/g, "\n").trim();
  if (clean.length <= maxChars) return [clean];

  const parts: string[] = [];
  const bufLines: string[] = [];
  let currentLength = 0;
  
  for (const line of clean.split("\n")) {
    // Calculate added length: newline separator (if not first line) + line length
    const added = (bufLines.length > 0 ? 1 : 0) + line.length;
    
    // Flush if adding this line would exceed limit
    if (currentLength + added > maxChars && bufLines.length > 0) {
      parts.push(bufLines.join("\n"));
      bufLines.length = 0;
      currentLength = 0;
    }
    
    bufLines.push(line);
    currentLength += added;
  }
  
  if (bufLines.length > 0) {
    parts.push(bufLines.join("\n"));
  }
  
  return parts;
}
