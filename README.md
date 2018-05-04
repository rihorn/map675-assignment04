# map675-assignment04

Collaborative portion of Module-02

- adding poit data from [Sedac](http://sedac.ciesin.columbia.edu/data/set/grump-v1-settlement-points-rev01/data-download) (interesting source: [free gis data](https://gisgeography.com/best-free-gis-data-sources-raster-vector/)) [SEDAC](http://sedac.ciesin.columbia.edu/downloads/data/grump-v1/grump-v1-settlement-points-rev01/grump-v1-settlement-points-rev01-shp.zipgrump-v1-settlement-points-rev01-shp.zip)

-``` mapshaper global_settlement_points_v1.01.shp -info
[info] Detected DBF text encoding: win1252
Sample text containing non-ascii characters:
  San José
  Fray Mamerto Esquiú
  Instituto Nacional de Estadísticas y Censos (INDEC)
  Censo Nacional de Población, Hogares
  Villa El Fachinal - Parque Norte - Guiñazú Norte
  Córdoba
  Colón
  Entre Ríos
  Paraná```

`global_settlement_points_v1.01.shp  -split Continent -o format=geojson`

`mapshaper global_settlement_points_v1-Europe.json -filter-fields -o format=geojson ../data/europe-settlements.json`