Point Cloud Viewer Link:

https://beamrobotics.github.io/

Instructions for adding point clouds:

High level overview:
1) Convert .pcd file to .las (I use CloudCompare for this)
2) Run the PotreeConverter executable which generates .js files from the .las
3) Place the generated .js files inside the repo (details below)

### 1) Convert point cloud to .las
In CloudCompare you can import a .pcd file, select this file in the tree view (left hand side panel), click save, and choose the LAS extension.

### 2) Installing the PotreeConverter libs

* You need to install two repos: LAStools & PotreeConverter
* Replace "prog" with whatever root directory you clone the repos in.

##### 1) LAS tools
```
cd ~/prog
git clone https://github.com/m-schuetz/LAStools.git
cd LAStools/LASzip
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release ..
make -j8
```

##### 2) PotreeConverter
```
cd ~/prog
git clone https://github.com/potree/PotreeConverter.git
cd PotreeConverter
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=Release -DLASZIP_INCLUDE_DIRS=~/prog/LAStools/LASzip/dll -DLASZIP_LIBRARY=~/prog/LAStools/LASzip/build/src/liblaszip.so ..
make -j8
```

```
cd ~/prog/PotreeConverter/build/PotreeConverter
cp -R ../../PotreeConverter/resources/ ./
```

### 3) Running the PotreeConverter

```
cd ~/prog/PotreeConverter/build/PotreeConverter
./PotreeConverter ~/path_to_pointcloud/pointcloud.las -o ~/path_to_output_folder -p project_name
```

### 4) Copying the folders that you generate
1) Create a folder inside BEAMRobotics.github.io/potree/results/results_ig with a project name for your pointcloud (e.g., demo_01).
2) Inside the demo_01 folder you will do 3 things:
    - create a "cloud" folder & copy the contents from  ~/path_to_output_folder/pointclouds/project_name into the cloud folder (see existing results to confirm what is inside the "cloud" folder)
    - "demo_01.html": copy the project_name.html from ~/path_to_output_folder.
    If this does not work, you can copy the demo_01.html file and rename it to
    project_name.html
    - thumbnail: create a thumbnail manually (the text which overlays the thumbnail is automatically added)
3) Inside BEAMRobotics.github.io/content.js, add a line for your project_name (change the names as appropriate)
