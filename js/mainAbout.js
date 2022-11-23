/*
    Author(a): Kelly Daniella Marin
    Date of creation: 11 August/2022
    Last Modification: 08/september/2022 - 10:24 AM
 */

// All elements that I Can create of THREE JS
console.log(THREE);

// ¿VAR, LET, CONST?
// Var: Pueden declarar sin necesidad de inicializar | Global
// let: Pueden declarar sin necesidad de inicializar | Lugar
// Const: Declarar con valor
var scene3 = null,    // The composition of diferents elements
    camera3 = null,   // Let me to see
    renderer3 = null, // Let me represent with digital image
    controls3 = null;
    figuresGeo  = [];

var scene2 = null,    // The composition of diferents elements
    camera2 = null,   // Let me to see
    renderer2 = null, // Let me represent with digital image
    controls2 = null; // Can movements


// My principal elements : Scene, Camera, Render, Controls
var scene = null,    // The composition of diferents elements
    camera = null,   // Let me to see
    renderer = null, // Let me represent with digital image
    controls = null; // Can movements


function start() {
    initScene();
    animate();
    initScene2();
    animate2();
    initScene3();
    animate3();

}

function onWindowResize() {
    camera.aspect = 500 / 380;
    camera.updateProjectionMatrix();
    renderer.setSize((Width = 500), (Height = 380));
}

function initScene() {
    // Scene, Camera, Renderer
    // Create Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xD8FFDB);
    // Create Camera 3D
    camera = new THREE.PerspectiveCamera(20, // FOV (FIELD OF VIEW)
        500 / 380, //(ASPECT)
        0.1, // (NEAR)
        1000);  // (FAR)
    // To Render
    const canvas = document.querySelector('.webgl');
    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize((Width = 500), (Height = 380));
    document.body.appendChild(renderer.domElement);
    // Add elements
    scene.add(camera);
    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 20, 1);
    controls.update();
    
    window.addEventListener('resize', onWindowResize, false);

    // *************************** Lights ***************************
    const light = new THREE.AmbientLight( 0xffffff,1); // soft white light
    scene.add( light );

    const pointLight = new THREE.PointLight( 0xfff, 1, 100 );
    pointLight.position.set( 0, 30, 0);
    scene.add( pointLight );

    /*
    const sphereSize = 1;
    const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
    scene.add( pointLightHelper );
    */

    
    createFistModel("src/models/obj/nike/","11740_shoes_v1_L3.mtl","11740_shoes_v1_L3.obj");
    // **************************************************************
}


function createFistModel(generalPath,pathMtl,pathObj) {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(generalPath);
    mtlLoader.setPath(generalPath);
    mtlLoader.load(pathMtl, function (materials) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(generalPath);
        objLoader.load(pathObj, function (object) {

            modelLoad = object;
            figuresGeo.push(modelLoad);
            scene.add(object);
            object.scale.set(0.2,0.2,0.2);

            object.position.y = -1.4;
            object.position.x = 0;
            object.position.z = 1.2;
            object.rotation.x = 300;

        });

    });
}


function animate() {

    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    renderer.render(scene, camera);
}










function onWindowResize2() {
    camera2.aspect = 500 / 380;
    camera2.updateProjectionMatrix();
    renderer2.setSize((Width = 500), (Height = 380));
}

function initScene2() {
    // Scene, Camera, Renderer
    // Create Scene
    scene2 = new THREE.Scene();
    scene2.background = new THREE.Color(0xA3AB78);
    // Create Camera 3D
    camera2 = new THREE.PerspectiveCamera(10, // FOV (FIELD OF VIEW)
    500 / 380, //(ASPECT)
        0.1, // (NEAR)
        1000);  // (FAR)
    // To Render
    const canvas2 = document.querySelector('.webgl2');
    renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
    renderer2.setSize((Width = 500), (Height = 380));
    document.body.appendChild(renderer2.domElement);
    // Add elements
    scene2.add(camera2);
    // Controls
    controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);
    camera2.position.set(0, 20, 1);
    controls2.update();
    
    window.addEventListener('resize', onWindowResize2, false);

    // *************************** Lights ***************************
    const light2 = new THREE.AmbientLight( 0xffffff,1); // soft white light
    scene2.add( light2 );

    const pointLight2 = new THREE.PointLight( 0xfff, 1, 100 );
    pointLight2.position.set( 0, 30, 0);
    scene2.add( pointLight2 );

    /*
    const sphereSize2 = 1;
    const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize2 );
    scene2.add( pointLightHelper2 );*/
    

    createFistModel2("src/models/obj/puma/","11743_Soccer_Shoes_v1_l3.mtl","11743_Soccer_Shoes_v1_l3.obj");
    // **************************************************************
}

function createFistModel2(generalPath,pathMtl,pathObj) {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(generalPath);
    mtlLoader.setPath(generalPath);
    mtlLoader.load(pathMtl, function (materials) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(generalPath);
        objLoader.load(pathObj, function (object) {

            modelLoad = object;
            figuresGeo.push(modelLoad);
            scene2.add(object);
            object.scale.set(0.2,0.2,0.2);

            object.position.y = -0.5;
            object.position.x = -2;
            object.position.z = 1.1;
            object.rotation.x = 300;

        });

    });
}



function animate2() {
    requestAnimationFrame(animate2);

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls2.update();
    renderer2.render(scene2, camera2);
}










function onWindowResize3() {
    camera3.aspect = 500 / 380;
    camera3.updateProjectionMatrix();
    renderer3.setSize((Width = 500), (Height = 380));
}

function initScene3() {
    // Scene, Camera, Renderer
    // Create Scene
    scene3 = new THREE.Scene();
    scene3.background = new THREE.Color(0xD8FFDB);
    // Create Camera 3D
    camera3 = new THREE.PerspectiveCamera(23, // FOV (FIELD OF VIEW)
    500 / 380, //(ASPECT)
        0.1, // (NEAR)
        1000);  // (FAR)
    // To Render
    const canvas3 = document.querySelector('.webgl3');
    renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
    renderer3.setSize((Width = 500), (Height = 380));
    document.body.appendChild(renderer3.domElement);
    // Add elements
    scene3.add(camera3);
    // Controls
    controls3 = new THREE.OrbitControls(camera3, renderer3.domElement);
    camera3.position.set(0, 20, 1);
    controls3.update();
    
    window.addEventListener('resize', onWindowResize3, false);

    // *************************** Lights ***************************
    const light3 = new THREE.AmbientLight( 0xffffff,1); // soft white light
    scene3.add( light3 );

    const pointLight3 = new THREE.PointLight( 0xfff, 1, 100 );
    pointLight3.position.set( 0, 30, 0);
    scene3.add( pointLight3 );

    /*
    const sphereSize3 = 1;
    const pointLightHelper3 = new THREE.PointLightHelper( pointLight3, sphereSize3 );
    scene3.add( pointLightHelper3 );
    */

    createFistModel3("src/models/obj/louis/","11742_shoe_v1_L3.mtl","11742_shoe_v1_L3.obj");
    // **************************************************************
}

function createFistModel3(generalPath,pathMtl,pathObj) {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(generalPath);
    mtlLoader.setPath(generalPath);
    mtlLoader.load(pathMtl, function (materials) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(generalPath);
        objLoader.load(pathObj, function (object) {

            modelLoad = object;
            figuresGeo.push(modelLoad);
            scene3.add(object);
            object.scale.set(0.2,0.2,0.2);

            object.position.y = -1.5;
            object.position.x = -0;
            object.position.z = 0;
            object.rotation.x = 300;

        });

    });
}



function animate3() {
    requestAnimationFrame(animate3);

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls3.update();
    renderer3.render(scene3, camera3);
}