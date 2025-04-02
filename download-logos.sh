#!/bin/bash

# Create the directory if it doesn't exist
mkdir -p public/referanslar

# Download logos using curl (replace these URLs with actual logo URLs)
curl -o public/referanslar/arcelik.png "https://www.arcelik.com.tr/assets/images/arcelik-logo.png"
curl -o public/referanslar/bosch.png "https://www.bosch.com/assets/images/bosch-logo.png"
curl -o public/referanslar/siemens.png "https://www.siemens.com/assets/images/siemens-logo.png"
curl -o public/referanslar/eczacibasi.png "https://www.eczacibasi.com.tr/assets/images/eczacibasi-logo.png"
curl -o public/referanslar/tofas.png "https://www.tofas.com.tr/assets/images/tofas-logo.png"

# Make the script executable
chmod +x download-logos.sh 