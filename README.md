# map675-assignment04

Collaborative portion of Module-02

- adding point data from [Sedac](http://sedac.ciesin.columbia.edu/data/set/grump-v1-settlement-points-rev01/data-download) (interesting source: [free gis data](https://gisgeography.com/best-free-gis-data-sources-raster-vector/)) [SEDAC](http://sedac.ciesin.columbia.edu/downloads/data/grump-v1/grump-v1-settlement-points-rev01/grump-v1-settlement-points-rev01-shp.zipgrump-v1-settlement-points-rev01-shp.zip)

`mapshaper global_settlement_points_v1.01.shp -info`

I ran the following script outside of the scope of the _.git_ in order to avoid a commit with large files.

`mapshaper global_settlement_points_v1.01.shp -filter-fields Continent,Country,Name1,Year -split Continent -o format=geojson`

```english
[o] Wrote global_settlement_points_v1-Asia.json
[o] Wrote global_settlement_points_v1-Americas-South America.json
[o] Wrote global_settlement_points_v1-Americas-North America.json
[o] Wrote global_settlement_points_v1-Oceania.json
[o] Wrote global_settlement_points_v1-Europe.json
[o] Wrote global_settlement_points_v1-Africa.json
```

I then removed _*Continent*_ from the .json
`$ mapshaper data/global_settlement_points_v1-Americas-South-America.json -filter-fields Year,Name1,Country -o format=geojson`

The next set of data I searched for was polygon data from the following [website](https://tapiquen-sig.jimdo.com/english-version/free-downloads/south-america/).
> "Shape downloaded from [http://tapiquen-sig.jimdo.com](http://tapiquen-sig.jimdo.com). Carlos Efraín Porto Tapiquén. Orogénesis Soluciones Geográficas. Porlamar, Venezuela, 2015."

```$ curl -LOk https://tapiquen-sig.jimdo.com/app/download/5497300559/South_America_Hydrography.rar?t=1484
592815
  0     0    0     0    0     0      0      0
100 11979  100 11979    0```

Because this was a _.rar_ file I used `npm install node-unrar`.

The next command I used to create a new directory and create an _unrar.js_ file.
`$ cd ../ && mkdir scripts && touch unrar.js`

Which I created in the wrong directory just dragged and dropped it into the _scripts_ folder.
