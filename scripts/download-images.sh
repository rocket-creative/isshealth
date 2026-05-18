#!/usr/bin/env bash
# Download all iss.health assets and convert to WebP.
# Requires: curl, cwebp (brew install webp)

set -euo pipefail

DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images"
mkdir -p "$DEST"

download() {
  local url="$1"
  local filename="$2"
  echo "→ $filename"
  curl -fsSL "$url" -o "$DEST/$filename"
}

# Logos & branding
download "https://iss.health/wp-content/uploads/2025/01/instituteforspinesurgery.com_.png" "iss-logo.png"
download "https://iss.health/wp-content/uploads/2025/01/cropped-instituteforspinesurgery.com_.png" "iss-logo-cropped.png"
download "https://iss.health/wp-content/uploads/2025/02/Endomedix2.png" "endomedix2.png"
download "https://iss.health/wp-content/uploads/2025/02/Capseus.png" "capseus.png"
download "https://iss.health/wp-content/uploads/2025/02/Oncallx.png" "oncallx.png"
download "https://iss.health/wp-content/uploads/2025/02/Neurobotix.png" "neurobotix.png"
download "https://iss.health/wp-content/uploads/2021/11/endomedix.png" "endomedix.png"

# Homepage photography
download "https://iss.health/wp-content/uploads/2025/01/header.jpg" "header.jpg"
download "https://iss.health/wp-content/uploads/2025/01/xray.jpg" "xray.jpg"
download "https://iss.health/wp-content/uploads/2025/01/stethescope.jpg" "stethoscope.jpg"
download "https://iss.health/wp-content/uploads/2025/01/care.jpg" "care.jpg"
download "https://iss.health/wp-content/uploads/2025/01/minimally-invasive-spine-surgery.jpg" "minimally-invasive-spine-surgery.jpg"
download "https://iss.health/wp-content/uploads/2025/01/spinal_fusion.jpg" "spinal_fusion.jpg"
download "https://iss.health/wp-content/uploads/2025/01/physical_therapy.jpg" "physical_therapy.jpg"
download "https://iss.health/wp-content/uploads/2025/01/pain_management.jpg" "pain_management.jpg"

# Inner pages
download "https://iss.health/wp-content/uploads/2025/02/mapbackground.jpg" "mapbackground.jpg"
download "https://iss.health/wp-content/uploads/2025/03/Dr.JohnAbrahams.jpg" "dr-john-abrahams.jpg"
download "https://iss.health/wp-content/uploads/2025/02/innovations.jpg" "innovations.jpg"
download "https://iss.health/wp-content/uploads/2025/02/neurosurgeon.png" "neurosurgeon.png"
download "https://iss.health/wp-content/uploads/2025/03/stepcount.jpg" "stepcount.jpg"
download "https://iss.health/wp-content/uploads/2023/09/Untitled-design-5.png" "untitled-design-5.png"
download "https://iss.health/wp-content/uploads/2025/02/grand-opening.jpeg" "grand-opening.jpeg"
download "https://iss.health/wp-content/uploads/2025/02/appointments.jpg" "appointments.jpg"

echo ""
echo "Converting to WebP..."
if command -v cwebp >/dev/null 2>&1; then
  cd "$DEST"
  for f in *.jpg *.jpeg *.png; do
    [[ -f "$f" ]] || continue
    out="${f%.*}.webp"
    cwebp -q 85 -quiet "$f" -o "$out" && echo "  ✓ $out"
  done
  echo "Done."
else
  echo "WARNING: cwebp not installed (brew install webp). Skipping WebP conversion."
fi
