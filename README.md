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

I ran the following script outside of the scope of the _.git_ in order to avoid a commit with large files.  


```
c:\Users\ian.horn\OneDrive - Commonwealth of Kentucky-\map675-assignment04\data>mapshaper global-settlements.json -filter-fields Continent,Country,Name1,Latitude,Longitude -split Continent -o format=geojson

[o] Wrote global-settlements-Asia.json
[o] Wrote global-settlements-Americas-South America.json
[o] Wrote global-settlements-Americas-North America.json
[o] Wrote global-settlements-Oceania.json
[o] Wrote global-settlements-Europe.json
[o] Wrote global-settlements-Africa.json

```
then to filter the file even more

```
c:\Users\ian.horn\OneDrive - Commonwealth of Kentucky-\map675-assignment04\data>mapshaper global-settlements-Europe.json -filter-fields Country,Name1 -o format=geojson global-settlements-Europe-filtered.json
````