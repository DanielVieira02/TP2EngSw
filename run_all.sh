#!/bin/bash

LINE_SEPARATOR="==================================================================="

echo "$LINE_SEPARATOR"
echo "Building the project..."
echo "$LINE_SEPARATOR"
npm run build

echo "$LINE_SEPARATOR"
echo "Creating report directories..."
echo "$LINE_SEPARATOR"
echo ""
mkdir -p reports/cidades-1
mkdir -p reports/cidades-2
mkdir -p reports/cidades


echo "$LINE_SEPARATOR"
echo "Running the project for cidades-1.json..."
echo "$LINE_SEPARATOR"

npm run start --silent -- --format=html --source=data/cidades-1.json > reports/cidades-1/report.html
npm run start --silent -- --format=txt --source=data/cidades-1.json > reports/cidades-1/report.txt
npm run start --silent -- --format=json --source=data/cidades-1.json > reports/cidades-1/report.json
echo ""

echo "$LINE_SEPARATOR"
echo "Running the project for cidades-2.json..."
echo "$LINE_SEPARATOR"
npm run start --silent -- --format=html --source=data/cidades-2.json > reports/cidades-2/report.html
npm run start --silent -- --format=txt --source=data/cidades-2.json > reports/cidades-2/report.txt
npm run start --silent -- --format=json --source=data/cidades-2.json > reports/cidades-2/report.json
echo ""

echo "$LINE_SEPARATOR"
echo "Running the project for cidades.csv..."
echo "$LINE_SEPARATOR"
npm run start --silent -- --format=html --source=data/cidades.csv > reports/cidades/report.html
npm run start --silent -- --format=txt --source=data/cidades.csv > reports/cidades/report.txt
npm run start --silent -- --format=json --source=data/cidades.csv > reports/cidades/report.json
echo ""

echo "$LINE_SEPARATOR"
echo "All reports generated successfully, cleaning up..."
echo "$LINE_SEPARATOR"
npm run clean
echo ""