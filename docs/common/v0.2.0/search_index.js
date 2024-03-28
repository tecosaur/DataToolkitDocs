var documenterSearchIndex = {"docs":
[{"location":"loaders/xlsx/#XLSX","page":"XLSX","title":"XLSX","text":"","category":"section"},{"location":"loaders/xlsx/#Description","page":"XLSX","title":"Description","text":"","category":"section"},{"location":"loaders/xlsx/","page":"XLSX","title":"XLSX","text":"The xlsx driver enables loading information from Microsoft Excel XML Spreadsheet (XLSX) files.","category":"page"},{"location":"loaders/xlsx/#Input/output","page":"XLSX","title":"Input/output","text":"","category":"section"},{"location":"loaders/xlsx/","page":"XLSX","title":"XLSX","text":"The xlsx driver expects data to be provided via a FilePath, and will provide information as a Matrix.","category":"page"},{"location":"loaders/xlsx/#Required-packages","page":"XLSX","title":"Required packages","text":"","category":"section"},{"location":"loaders/xlsx/","page":"XLSX","title":"XLSX","text":"XLSX","category":"page"},{"location":"loaders/xlsx/#Parameters","page":"XLSX","title":"Parameters","text":"","category":"section"},{"location":"loaders/xlsx/","page":"XLSX","title":"XLSX","text":"sheet :: the sheet to act on\nrange :: the sheet range that should be loaded","category":"page"},{"location":"loaders/xlsx/#Usage-example","page":"XLSX","title":"Usage example","text":"","category":"section"},{"location":"loaders/xlsx/","page":"XLSX","title":"XLSX","text":"[[pleaseno]]\ndriver = \"xlsx\"\nsheet = \"better_formats\"\nrange = \"A1:A999\"","category":"page"},{"location":"plugins/loadcache/#Loadcache","page":"Loadcache","title":"Loadcache","text":"","category":"section"},{"location":"plugins/loadcache/","page":"Loadcache","title":"Loadcache","text":"LOADCACHE_PLUGIN","category":"page"},{"location":"storage/web/#Web","page":"Web","title":"Web","text":"","category":"section"},{"location":"storage/web/#Description","page":"Web","title":"Description","text":"","category":"section"},{"location":"storage/web/","page":"Web","title":"Web","text":"The web storage driver allows the acquisition of data from the internet, in particular using URLs.","category":"page"},{"location":"storage/web/#Required-packages","page":"Web","title":"Required packages","text":"","category":"section"},{"location":"storage/web/","page":"Web","title":"Web","text":"Downloads (part of Julia's stdlib)","category":"page"},{"location":"storage/web/#Parameters","page":"Web","title":"Parameters","text":"","category":"section"},{"location":"storage/web/","page":"Web","title":"Web","text":"url :: Path to the online data.\nheaders :: HTTP headers that should be set.\ntimeout :: Maximum number of seconds to try to download for before abandoning.\ncache :: Whether caching should be performed, this can be set to a file path, or a boolean value. When set to true a file path will be generated based on the UUID of the data set.\ncachefolder :: Folder that the cache file path should be expanded relative to. When applicable, cachefolder itself is expanded relative to the data TOML file, otherwise the current working directory is used.\nchecksum :: The CRC32c checksum of the data. This also accepts a special value, \"auto\" in which case the first time the data is accessed the calculated checksum will be replace the \"auto\" value.","category":"page"},{"location":"storage/web/#Usage-examples","page":"Web","title":"Usage examples","text":"","category":"section"},{"location":"storage/web/","page":"Web","title":"Web","text":"Downloading the data on-demand each time it is accessed.","category":"page"},{"location":"storage/web/","page":"Web","title":"Web","text":"[[iris.storage]]\ndriver = \"web\"\nurl = \"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv\"","category":"page"},{"location":"storage/web/","page":"Web","title":"Web","text":"Adding a checksum to ensure that the data is unchanged.","category":"page"},{"location":"storage/web/","page":"Web","title":"Web","text":"[[iris.storage]]\ndriver = \"web\"\nchecksum = 4155407972\nurl = \"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv\"","category":"page"},{"location":"storage/web/","page":"Web","title":"Web","text":"Specifying a file path to cache the data at.","category":"page"},{"location":"storage/web/","page":"Web","title":"Web","text":"[[iris.storage]]\ndriver = \"web\"\ncache = \"downloads/iris.csv\"\nchecksum = 4155407972\nurl = \"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv\"","category":"page"},{"location":"storage/web/","page":"Web","title":"Web","text":"Specifying a cache folder, with the file name generated based on the dataset UUID.","category":"page"},{"location":"storage/web/","page":"Web","title":"Web","text":"[[iris.storage]]\ndriver = \"web\"\ncache = true\ncachefolder = \"downloads\"\nchecksum = 4155407972\nurl = \"https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv\"","category":"page"},{"location":"loaders/json/#JSON","page":"JSON","title":"JSON","text":"","category":"section"},{"location":"loaders/json/#Description","page":"JSON","title":"Description","text":"","category":"section"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"The json driver enables the parsing and serialisation of JSON data.","category":"page"},{"location":"loaders/json/#Input/output","page":"JSON","title":"Input/output","text":"","category":"section"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"The json driver expects data to be provided via IO.","category":"page"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"It will parse to a number of types depending on the input:","category":"page"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"JSON3.Object\nJSON3.Array\nString\nNumber\nBoolean\nNothing","category":"page"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"If you do not wish to impose any expectations on the parsed type, you can ask for the data of type Any.","category":"page"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"When writing, any type compatible with JSON3.write can be used directly, with any storage backend supporting IO.","category":"page"},{"location":"loaders/json/#Required-packages","page":"JSON","title":"Required packages","text":"","category":"section"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"JSON3","category":"page"},{"location":"loaders/json/#Parameters","page":"JSON","title":"Parameters","text":"","category":"section"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"pretty :: Whether to use JSON3.pretty when writing","category":"page"},{"location":"loaders/json/#Usage-examples","page":"JSON","title":"Usage examples","text":"","category":"section"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"[[sample.loader]]\ndriver = \"json\"","category":"page"},{"location":"plugins/memorise/#Memorise","page":"Memorise","title":"Memorise","text":"","category":"section"},{"location":"plugins/memorise/","page":"Memorise","title":"Memorise","text":"MEMORISE_PLUGIN","category":"page"},{"location":"storage/filesystem/#Filesystem","page":"Filesystem","title":"Filesystem","text":"","category":"section"},{"location":"storage/filesystem/#Description","page":"Filesystem","title":"Description","text":"","category":"section"},{"location":"storage/filesystem/","page":"Filesystem","title":"Filesystem","text":"The filesystem storage driver provides read and write access to local files.","category":"page"},{"location":"storage/filesystem/#Required-packages","page":"Filesystem","title":"Required packages","text":"","category":"section"},{"location":"storage/filesystem/","page":"Filesystem","title":"Filesystem","text":"None","category":"page"},{"location":"storage/filesystem/#Parameters","page":"Filesystem","title":"Parameters","text":"","category":"section"},{"location":"storage/filesystem/","page":"Filesystem","title":"Filesystem","text":"path :: The path to the file in question, relative to the Data.toml if applicable, otherwise relative to the current working directory.","category":"page"},{"location":"storage/filesystem/#Usage-examples","page":"Filesystem","title":"Usage examples","text":"","category":"section"},{"location":"storage/filesystem/","page":"Filesystem","title":"Filesystem","text":"[[iris.loader]]\ndriver = \"filesystem\"\npath = \"iris.csv\"","category":"page"},{"location":"storage/filesystem/","page":"Filesystem","title":"Filesystem","text":"[[iris.loader]]\ndriver = \"filesystem\"\npath = \"~/data/iris.csv\"","category":"page"},{"location":"storage/passthrough/#Passthrough","page":"Passthrough","title":"Passthrough","text":"","category":"section"},{"location":"storage/passthrough/#Description","page":"Passthrough","title":"Description","text":"","category":"section"},{"location":"storage/passthrough/","page":"Passthrough","title":"Passthrough","text":"The passthrough storage driver enables dataset redirection by offering the loaded result of another data set as a read-only storage transformer.","category":"page"},{"location":"storage/passthrough/","page":"Passthrough","title":"Passthrough","text":"Write capability may be added in future.","category":"page"},{"location":"storage/passthrough/#Required-packages","page":"Passthrough","title":"Required packages","text":"","category":"section"},{"location":"storage/passthrough/","page":"Passthrough","title":"Passthrough","text":"None","category":"page"},{"location":"storage/passthrough/#Parameters","page":"Passthrough","title":"Parameters","text":"","category":"section"},{"location":"storage/passthrough/","page":"Passthrough","title":"Passthrough","text":"source :: The identifier of the source dataset to be loaded.","category":"page"},{"location":"storage/passthrough/#Usage-examples","page":"Passthrough","title":"Usage examples","text":"","category":"section"},{"location":"storage/passthrough/","page":"Passthrough","title":"Passthrough","text":"TODO","category":"page"},{"location":"loaders/csv/#CSV","page":"CSV","title":"CSV","text":"","category":"section"},{"location":"loaders/csv/#Description","page":"CSV","title":"Description","text":"","category":"section"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"The csv driver enables the parsing and serialisation of CSV data and various tabular data formats.","category":"page"},{"location":"loaders/csv/#Input/output","page":"CSV","title":"Input/output","text":"","category":"section"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"The csv driver expects data to be provided via IO.","category":"page"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"By default this driver announces support for parsing to three data types:","category":"page"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"DataFrame\nMatrix\nCSV.File","category":"page"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"Other Tables compatible types are of course supported, and can be used directly (i.e. without having to use the CSV.File result) by specifying the type with the type transformer keyword.","category":"page"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"When writing, any type compatible with CSV.write can be used directly, to any storage backend supporting IO.","category":"page"},{"location":"loaders/csv/#Required-packages","page":"CSV","title":"Required packages","text":"","category":"section"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"CSV","category":"page"},{"location":"loaders/csv/#Parameters","page":"CSV","title":"Parameters","text":"","category":"section"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"args :: keyword arguments to be provided to CSV.File","category":"page"},{"location":"loaders/csv/#Usage-examples","page":"CSV","title":"Usage examples","text":"","category":"section"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"[[iris.loader]]\ndriver = \"csv\"","category":"page"},{"location":"plugins/log/#Log","page":"Log","title":"Log","text":"","category":"section"},{"location":"plugins/log/","page":"Log","title":"Log","text":"LOG_PLUGIN","category":"page"},{"location":"storage/null/#Null","page":"Null","title":"Null","text":"","category":"section"},{"location":"storage/null/#Description","page":"Null","title":"Description","text":"","category":"section"},{"location":"storage/null/","page":"Null","title":"Null","text":"The null storage driver is a special driver that is essentially just needed in special cases of the julia loader. It always returns Some(nothing).","category":"page"},{"location":"storage/null/#Required-packages","page":"Null","title":"Required packages","text":"","category":"section"},{"location":"storage/null/","page":"Null","title":"Null","text":"None","category":"page"},{"location":"storage/null/#Parameters","page":"Null","title":"Parameters","text":"","category":"section"},{"location":"storage/null/","page":"Null","title":"Null","text":"None","category":"page"},{"location":"storage/null/#Usage-examples","page":"Null","title":"Usage examples","text":"","category":"section"},{"location":"storage/null/","page":"Null","title":"Null","text":"TODO","category":"page"},{"location":"loaders/delim/#Delim","page":"Delim","title":"Delim","text":"","category":"section"},{"location":"loaders/delim/#Description","page":"Delim","title":"Description","text":"","category":"section"},{"location":"loaders/delim/","page":"Delim","title":"Delim","text":"The delim driver enables the parsing and serialisation of delimited files.","category":"page"},{"location":"loaders/delim/#Input/output","page":"Delim","title":"Input/output","text":"","category":"section"},{"location":"loaders/delim/","page":"Delim","title":"Delim","text":"The delim driver expects data to be provided via IO.","category":"page"},{"location":"loaders/delim/","page":"Delim","title":"Delim","text":"It presents the parsed information as a Matrix, and can write Matrix and Vector types to an IO-supporting storage backend.","category":"page"},{"location":"loaders/delim/#Required-packages","page":"Delim","title":"Required packages","text":"","category":"section"},{"location":"loaders/delim/","page":"Delim","title":"Delim","text":"DelimitedFiles (currently part of Julia's stdlib, but soon to be split off)","category":"page"},{"location":"loaders/delim/#Parameters","page":"Delim","title":"Parameters","text":"","category":"section"},{"location":"loaders/delim/","page":"Delim","title":"Delim","text":"type :: The element type of the matrix\ndelim :: The character used to separate entries\neol :: The character separating each line of input\nheader :: Whether the first row of data should be read as a header\nskipstart :: The number of initial lines of input to ignore\nskipblanks :: Whether to ignore blank lines\nquotes :: Whether to allow quoted strings to contain column and line delimiters","category":"page"},{"location":"loaders/delim/#Usage-examples","page":"Delim","title":"Usage examples","text":"","category":"section"},{"location":"loaders/delim/","page":"Delim","title":"Delim","text":"[[iris.loader]]\ndriver = \"delim\"","category":"page"},{"location":"storage/raw/#Passthrough","page":"Passthrough","title":"Passthrough","text":"","category":"section"},{"location":"storage/raw/#Description","page":"Passthrough","title":"Description","text":"","category":"section"},{"location":"storage/raw/","page":"Passthrough","title":"Passthrough","text":"The raw storage driver enables the reading and writing of values encoded directly in the data TOML file.","category":"page"},{"location":"storage/raw/","page":"Passthrough","title":"Passthrough","text":"The passthrough loader is often useful when using this storage driver.","category":"page"},{"location":"storage/raw/#Required-packages","page":"Passthrough","title":"Required packages","text":"","category":"section"},{"location":"storage/raw/","page":"Passthrough","title":"Passthrough","text":"None","category":"page"},{"location":"storage/raw/#Parameters","page":"Passthrough","title":"Parameters","text":"","category":"section"},{"location":"storage/raw/","page":"Passthrough","title":"Passthrough","text":"value :: The value in question","category":"page"},{"location":"storage/raw/#Usage-examples","page":"Passthrough","title":"Usage examples","text":"","category":"section"},{"location":"storage/raw/","page":"Passthrough","title":"Passthrough","text":"[[lifemeaning.storage]]\ndriver = \"raw\"\nvalue = 42","category":"page"},{"location":"storage/raw/","page":"Passthrough","title":"Passthrough","text":"[[parameters.storage]]\ndriver = \"raw\"\nvalue = { a = 3, b = \"*\", c = false }","category":"page"},{"location":"plugins/defaults/#Defaults","page":"Defaults","title":"Defaults","text":"","category":"section"},{"location":"plugins/defaults/","page":"Defaults","title":"Defaults","text":"DEFAULTS_PLUGIN","category":"page"},{"location":"loaders/zip/#Zip","page":"Zip","title":"Zip","text":"","category":"section"},{"location":"loaders/zip/#Description","page":"Zip","title":"Description","text":"","category":"section"},{"location":"loaders/zip/","page":"Zip","title":"Zip","text":"The zip driver enables the loading of the contens of zipped data.","category":"page"},{"location":"loaders/zip/#Input/output","page":"Zip","title":"Input/output","text":"","category":"section"},{"location":"loaders/zip/","page":"Zip","title":"Zip","text":"The zip driver expects data to be provided via IO or a FilePath.","category":"page"},{"location":"loaders/zip/","page":"Zip","title":"Zip","text":"It can load the contents to the following formats:","category":"page"},{"location":"loaders/zip/","page":"Zip","title":"Zip","text":"Dict{FilePath, IO},\nDict{String, IO},\nIO, and\nan unzipped FilePath.","category":"page"},{"location":"loaders/zip/#Required-packages","page":"Zip","title":"Required packages","text":"","category":"section"},{"location":"loaders/zip/","page":"Zip","title":"Zip","text":"ZipFile","category":"page"},{"location":"loaders/zip/#Parameters","page":"Zip","title":"Parameters","text":"","category":"section"},{"location":"loaders/zip/","page":"Zip","title":"Zip","text":"file :: the file in the zip whose contents should be extracted, when producing IO.\nextract :: the path that the zip should be extracted to, when producing an unzipped FilePath.\nrecursive :: when extracting to a FilePath, whether nested zips should be unzipped too.","category":"page"},{"location":"loaders/zip/#Usage-examples","page":"Zip","title":"Usage examples","text":"","category":"section"},{"location":"loaders/zip/","page":"Zip","title":"Zip","text":"[[dictionary.loader]]\ndriver = \"zip\"\nfile = \"dictionary.txt\"","category":"page"},{"location":"loaders/compression/#Compression","page":"Compression","title":"Compression","text":"","category":"section"},{"location":"loaders/compression/#Description","page":"Compression","title":"Description","text":"","category":"section"},{"location":"loaders/compression/","page":"Compression","title":"Compression","text":"There are a collection of drivers which enable transparent compression and decompression of data, specifically the following eponymous drivers:","category":"page"},{"location":"loaders/compression/","page":"Compression","title":"Compression","text":"gzip\nzlib\ndeflate\nbzip2\nxz\nzstd","category":"page"},{"location":"loaders/compression/#Input/output","page":"Compression","title":"Input/output","text":"","category":"section"},{"location":"loaders/compression/","page":"Compression","title":"Compression","text":"It is assumed that during reading decompression is the desired operation, compression desired when writing.","category":"page"},{"location":"loaders/compression/","page":"Compression","title":"Compression","text":"In both cases, IO → IO is the recommended pair of input/output formats, but IO or String to Vector{UInt8} or String are also supported.","category":"page"},{"location":"loaders/compression/#Required-packages","page":"Compression","title":"Required packages","text":"","category":"section"},{"location":"loaders/compression/","page":"Compression","title":"Compression","text":"CodecZlib, for the following drivers:\ngzip\nzlib\ndeflate\nCodecBzip2 for the bzip2 driver\nCodecXz for the xz driver\nCodecZstd for the zstd driver","category":"page"},{"location":"loaders/compression/#Parameters","page":"Compression","title":"Parameters","text":"","category":"section"},{"location":"loaders/compression/","page":"Compression","title":"Compression","text":"None","category":"page"},{"location":"loaders/compression/#Usage-examples","page":"Compression","title":"Usage examples","text":"","category":"section"},{"location":"loaders/compression/","page":"Compression","title":"Compression","text":"[[iris-raw.loader]]\ndriver = \"gzip\"","category":"page"},{"location":"loaders/iotofile/#IO-to-File","page":"IO to File","title":"IO to File","text":"","category":"section"},{"location":"loaders/iotofile/#Description","page":"IO to File","title":"Description","text":"","category":"section"},{"location":"loaders/iotofile/","page":"IO to File","title":"IO to File","text":"The io->file loader serves as a bridge between and backends that produce IO but not a file path, and any subsequent transformers that require a file.","category":"page"},{"location":"loaders/iotofile/#Input/output","page":"IO to File","title":"Input/output","text":"","category":"section"},{"location":"loaders/iotofile/","page":"IO to File","title":"IO to File","text":"The io->file driver accepts IO and produces a FilePath.","category":"page"},{"location":"loaders/iotofile/#Parameters","page":"IO to File","title":"Parameters","text":"","category":"section"},{"location":"loaders/iotofile/","page":"IO to File","title":"IO to File","text":"path :: A path to save the file to. If not set, a tempfile will be used.","category":"page"},{"location":"loaders/chain/#Chain","page":"Chain","title":"Chain","text":"","category":"section"},{"location":"loaders/chain/#Description","page":"Chain","title":"Description","text":"","category":"section"},{"location":"loaders/chain/","page":"Chain","title":"Chain","text":"The chain loader enables the chaining of multiple loading transformers.","category":"page"},{"location":"loaders/chain/#Input/output","page":"Chain","title":"Input/output","text":"","category":"section"},{"location":"loaders/chain/","page":"Chain","title":"Chain","text":"The chain loader can accept any form of input, and produce any form of output. Writing is not currently supported.","category":"page"},{"location":"loaders/chain/#Required-packages","page":"Chain","title":"Required packages","text":"","category":"section"},{"location":"loaders/chain/","page":"Chain","title":"Chain","text":"None","category":"page"},{"location":"loaders/chain/#Usage-examples","page":"Chain","title":"Usage examples","text":"","category":"section"},{"location":"loaders/chain/","page":"Chain","title":"Chain","text":"[[iris.loader]]\ndriver = \"chain\"\nloader = [\"gzip\", \"csv\"]","category":"page"},{"location":"loaders/chain/","page":"Chain","title":"Chain","text":"[[chained.loader]]\ndriver = \"chain\"\n\n    [[chained.loader.loaders]]\n    driver = \"gzip\"\n\n    [[chained.loader.loaders]]\n    driver = \"csv\"\n\n    [[chained.loader.loaders]]\n    driver = \"julia\"\n    input = \"DataFrame\"\n    path = \"scripts/custom_postprocessing.jl\"\n    type = \"DataFrame\"","category":"page"},{"location":"loaders/passthrough/#Passthrough","page":"Passthrough","title":"Passthrough","text":"","category":"section"},{"location":"loaders/passthrough/#Description","page":"Passthrough","title":"Description","text":"","category":"section"},{"location":"loaders/passthrough/","page":"Passthrough","title":"Passthrough","text":"The passthrough driver simply passes on data to/from the storage backend.","category":"page"},{"location":"loaders/passthrough/#Input/output","page":"Passthrough","title":"Input/output","text":"","category":"section"},{"location":"loaders/passthrough/","page":"Passthrough","title":"Passthrough","text":"Identical to that of the storage.","category":"page"},{"location":"loaders/passthrough/#Required-packages","page":"Passthrough","title":"Required packages","text":"","category":"section"},{"location":"loaders/passthrough/","page":"Passthrough","title":"Passthrough","text":"None","category":"page"},{"location":"loaders/passthrough/#Parameters","page":"Passthrough","title":"Parameters","text":"","category":"section"},{"location":"loaders/passthrough/","page":"Passthrough","title":"Passthrough","text":"None","category":"page"},{"location":"loaders/passthrough/#Usage-examples","page":"Passthrough","title":"Usage examples","text":"","category":"section"},{"location":"loaders/passthrough/","page":"Passthrough","title":"Passthrough","text":"[[magicvalue.loader]]\ndriver = \"passthrough\"","category":"page"},{"location":"loaders/julia/#Julia","page":"Julia","title":"Julia","text":"","category":"section"},{"location":"loaders/julia/#Description","page":"Julia","title":"Description","text":"","category":"section"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"The julia driver enables the parsing and serialisation of arbitrary data to arbitrary information formats and vice versa via custom Julia functions run within the scope of the parent module.","category":"page"},{"location":"loaders/julia/#Input/output","page":"Julia","title":"Input/output","text":"","category":"section"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"The julia driver either accepts no direct input, or accepts input from storage backends of the type specified by the input keyword. Thus, the provided functions must take one of the following forms:","category":"page"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"function (input; kwargs...)\n    # Direct input form.\nend","category":"page"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"function (kwargs...)\n    # No direct input form.\nend","category":"page"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"In both cases, additional information can be provided via the arguments keyword, which supplies additional keyword arguments to the Julia function invoked. It is worth remembering the special treatment of DataSet strings which are dynamically resolved (see the examples).","category":"page"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"Writer functions take two arguments, the destination (a handle to the storage backend, usually IO) and the information to be serialised.","category":"page"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"function (destination, info)\n    # Write `info` to `destination`, and return\n    # not-nothing if the operation succeeds.\nend","category":"page"},{"location":"loaders/julia/#Required-packages","page":"Julia","title":"Required packages","text":"","category":"section"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"None","category":"page"},{"location":"loaders/julia/#Parameters","page":"Julia","title":"Parameters","text":"","category":"section"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"input :: (loading only) The data type required for direct input.\npath :: A local file path, relative to pathroot if provided or the directory of the data TOML file.\npathroot :: The root path to expand path against, relative to the directory of the data TOML file.\nfunction :: The function as a string, inline in the data TOML file.\narguments :: Arguments to be provided to the called function.","category":"page"},{"location":"loaders/julia/#Usage-examples","page":"Julia","title":"Usage examples","text":"","category":"section"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"[[addone.loader]]\ndriver = \"julia\"\ninput = \"Number\"\nfunction = \"n -> n+1\"","category":"page"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"[[combined.loader]]\ndriver = \"julia\"\npath = \"scripts/mergedata.jl\"\n\n[combined.loader.arguments]\nfoo = \"📇DATASET<<foo::DataFrame>>\"\nbar = \"📇DATASET<<bar::DataFrame>>\"\nbaz = \"📇DATASET<<baz::DataFrame>>\"","category":"page"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"[[repeated.loader]]\ndriver = \"julia\"\ninput = \"Integer\"\nfunction = \"(n::Integer; data::DataFrame) -> repeat(data, n)\"\narguments = { data = \"📇DATASET<<iris::DataFrame>>\" }","category":"page"},{"location":"loaders/sqlite/#SQLite","page":"SQLite","title":"SQLite","text":"","category":"section"},{"location":"loaders/sqlite/#Description","page":"SQLite","title":"Description","text":"","category":"section"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"The sqlite driver enables the loading and saving data from/to an SQLite database file.","category":"page"},{"location":"loaders/sqlite/#Input/output","page":"SQLite","title":"Input/output","text":"","category":"section"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"The sqlite driver expects to be provided a path to an SQLite database file.","category":"page"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"By default this driver announces support for parsing to three data types:","category":"page"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"SQLite.DB\nDataFrame\nAny","category":"page"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"Any valid constructor that can be applied to the results of DBInterface.execute will work.","category":"page"},{"location":"loaders/sqlite/#Required-packages","page":"SQLite","title":"Required packages","text":"","category":"section"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"SQLite","category":"page"},{"location":"loaders/sqlite/#Parameters","page":"SQLite","title":"Parameters","text":"","category":"section"},{"location":"loaders/sqlite/#Loader-and-Writer","page":"SQLite","title":"Loader and Writer","text":"","category":"section"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"table :: the table to act on, data by default.","category":"page"},{"location":"loaders/sqlite/#Loader-only","page":"SQLite","title":"Loader only","text":"","category":"section"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"columns :: columns to select, * by default.\nquery :: an SQLite query to run. When provided this overrides the table and columns parameters.","category":"page"},{"location":"loaders/sqlite/#Writer-only","page":"SQLite","title":"Writer only","text":"","category":"section"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"ifnotexists :: see the documentation for SQLite.load!.\nanalyze :: see the documentation for SQLite.load!.","category":"page"},{"location":"loaders/sqlite/#Usage-examples","page":"SQLite","title":"Usage examples","text":"","category":"section"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"[[iris.loader]]\ndriver = \"sqlite\"\ncolumns = [\"sepal_length\", \"species\"]","category":"page"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"DataToolkitCommon takes the skeleton provided by DataToolkitBase and builds the basic functionality needed to make DataToolkit actually useful.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"To gain an understanding of how these two components fit together, it is recommended the DataToolkitBase docs be looked at first to understand the system, and then these docs for useful transformers and plugins to actually work with your data.","category":"page"}]
}
