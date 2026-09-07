#!/bin/bash
# Convert WebP images to AVIF — only replace if AVIF is smaller
# Pipeline: WebP → PNG (via dwebp) → AVIF (via avifenc)
export PATH="/opt/homebrew/bin:$PATH"

CONVERTED=0
SKIPPED=0
SAVED_BYTES=0
FAILED=0

convert_file() {
    local webp_file="$1"
    local avif_file="${webp_file%.webp}.avif"
    local tmp_png="/tmp/avif_convert_$$.png"
    
    local webp_size
    webp_size=$(stat -f%z "$webp_file" 2>/dev/null)
    
    # Step 1: WebP → PNG
    if ! dwebp "$webp_file" -o "$tmp_png" 2>/dev/null; then
        echo "✗ $webp_file: dwebp failed"
        FAILED=$((FAILED + 1))
        rm -f "$tmp_png"
        return
    fi
    
    # Step 2: PNG → AVIF (quality 35 ≈ good visual match for photos)
    if ! avifenc "$tmp_png" "$avif_file" -q 35 --speed 4 -j all 2>/dev/null; then
        echo "✗ $webp_file: avifenc failed"
        FAILED=$((FAILED + 1))
        rm -f "$tmp_png" "$avif_file"
        return
    fi
    
    rm -f "$tmp_png"
    
    local avif_size
    avif_size=$(stat -f%z "$avif_file" 2>/dev/null)
    
    if [ "$avif_size" -lt "$webp_size" ]; then
        local saved=$((webp_size - avif_size))
        SAVED_BYTES=$((SAVED_BYTES + saved))
        CONVERTED=$((CONVERTED + 1))
        local pct=$((saved * 100 / webp_size))
        echo "✓ $webp_file: ${webp_size}B → ${avif_size}B (-${pct}%)"
    else
        rm "$avif_file"
        SKIPPED=$((SKIPPED + 1))
        echo "✗ $webp_file: AVIF not smaller (${avif_size}B vs ${webp_size}B) — kept WebP"
    fi
}

echo "=== Converting images/*.webp ==="
for f in images/*.webp; do
    [ -f "$f" ] && convert_file "$f"
done

echo ""
echo "=== Converting images/emoji/*.webp ==="
for f in images/emoji/*.webp; do
    [ -f "$f" ] && convert_file "$f"
done

echo ""
echo "=== Converting images/cert/**/*.webp ==="
find images/cert -name "*.webp" -type f | while read -r f; do
    convert_file "$f"
done

echo ""
echo "=== Converting root-level *.webp ==="
for f in *.webp; do
    [ -f "$f" ] && convert_file "$f"
done

echo ""
echo "==============================="
echo "Converted: $CONVERTED"
echo "Skipped (AVIF not smaller): $SKIPPED"
echo "Failed: $FAILED"
echo "Total saved: $SAVED_BYTES bytes ($((SAVED_BYTES / 1024)) KB)"
